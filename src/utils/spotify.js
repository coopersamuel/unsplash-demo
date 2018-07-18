import { spotifyApiKeys } from '../../config';

const clientId = spotifyApiKeys.clientId;
const clientSecret = spotifyApiKeys.clientSecret;
const redirectUri = spotifyApiKeys.redirectURI; // Will need to change this later
let accessToken;
let player;
let playerState;

let SpotifyUtils = {
    initWebPlayer() {
        SpotifyUtils.authorize();

        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = accessToken;
            player = new Spotify.Player({
              name: 'Moodboard Player',
              getOAuthToken: cb => { cb(token); },
              volume: 0.5
            });
      
            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });
      
            // Playback status updates
            player.addListener('player_state_changed', state => { playerState = state; });
      
            // Ready
            player.addListener('ready', ({ device_id }) => {
              console.log('Ready with Device ID', device_id);
            });
      
            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
              console.log('Device ID has gone offline', device_id);
            });
      
            // Connect to the player!
            player.connect();
        };
    },

    authorize() {
        let url = window.location.href;
        let expirationTime;

        if (accessToken) {
            // If the user has already been authenticated, return the access token
            return accessToken;
        } else if (url.match(/access_token=([^&]*)/) && url.match(/expires_in=([^&]*)/)) {
            // Pull out the accessToken from the URL
            let match = url.match(/access_token=([^&]*)/);
            accessToken = match[1];
            // Pull out the expirationTime from the URL
            match = url.match(/expires_in=([^&]*)/);
            expirationTime = match[1];

            // Set the accessToken to empty string when time is up
            window.setTimeout(() => accessToken = '', expirationTime * 1000);
            // Remove the accessToken in the URL so that we don't try to grab it again
            window.history.pushState('Access Token', null, '/');
        } else {
            // Authenticate the user by redirecting to spotify
            window.location.assign(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=streaming%20user-read-birthdate%20user-read-email%20user-read-private&redirect_uri=${redirectUri}`);                            
        }
    },

    async getPlaylist(playlistId) {
        SpotifyUtils.authorize();

        try {
            let response = await fetch(`https://api.spotify.com/v1/users/spotify/playlists/${playlistId}/tracks`, {
                headers : {Authorization : `Bearer ${accessToken}`}
            });

            if (response.ok) {
                let jsonResponse = await response.json();

                if (jsonResponse.items) {
                    return jsonResponse.items.map(item => {
                        // return {
                        //     id: item.track.id,
                        //     title: item.track.name,
                        //     artist: item.track.artists[0].name,
                        //     album: item.track.album.name,
                        //     uri: item.track.uri
                        // };
                        return item.track.uri;
                    });
                } else {
                    return [];
                }
            }

            throw new Error('Request failed.');
        } catch (error) {
            console.log(error);
        }
    },

    play(spotifyUris) {
        SpotifyUtils.authorize();

        // Tell spotify to start playing on the Web Player
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${player._options.id}`, {
                method: 'PUT',
                body: JSON.stringify({ uris: spotifyUris }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
            },
        });
    },

    getPlayerState() {
        return playerState;
    },

    pause() {
        player.pause();
    },

    resume() {
        player.resume();
    },

    previousTrack() {
        player.previousTrack();
    },

    nextTrack() {
        player.nextTrack();
    }
}

export default SpotifyUtils;