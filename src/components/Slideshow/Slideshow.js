import React from 'react';
import './slideshow.scss';
import SpotifyUtils from '../../utils/spotify';
import { MdPlayArrow, MdPause, MdFastForward, MdFastRewind } from 'react-icons/lib/md/';

class Slideshow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPhotoIndex: 0,
            paused: true,
            meta: {
                songName: '',
                artist: '',
                album: ''
            }
        };

        this.incrementSlideshow = this.incrementSlideshow.bind(this);
        this.updateTrackMeta = this.updateTrackMeta.bind(this);
    }

    componentDidMount() {
        // Set an interval to increment the slideshow every four seconds
        this.slideshowInterval = setInterval(() => this.incrementSlideshow(), 4000);
        // Update the track meta every half second
        this.trackUpdateInterval = setInterval(() => this.updateTrackMeta(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.slideshowInterval);
        clearTimeout(this.trackUpdateInterval);
    }

    componentDidUpdate(prevProps) {
        if (this.props.playlist !== prevProps.playlist) {
            // Once props.playlist is populated, begin the web playback
            SpotifyUtils.play(this.props.playlist);
            this.setState({ paused: false });
        }
    }

    updateTrackMeta() {
        let rawTrackMeta = SpotifyUtils.getPlayerState().track_window.current_track;
        let trackMeta = {
            songName: rawTrackMeta.name,
            artist: rawTrackMeta.artists[0].name,
            album: rawTrackMeta.album.name
        };
        
        // Update the state if necessary
        if (this.state.meta !== trackMeta) {
            this.setState({ meta: trackMeta });
        }
    }

    incrementSlideshow() {
        if (this.state.currentPhotoIndex < this.props.photos.length - 1) {
            this.setState(prevState => ({
                currentPhotoIndex: prevState.currentPhotoIndex + 1
            }));
        } else {
            // Reset to the beginning of the slideshow
            this.setState({
                currentPhotoIndex: 0
            });
        }
    }

    render() {
        let photo = this.props.photos[this.state.currentPhotoIndex];

        if (!photo) {
            return <div></div>;
        }

        return (
            <div className="slideshow-container">
                <div className="slideshow-photo" style={{ backgroundImage: `url(${photo.urls.regular})` }}>
                    <div className="row pt-4 justify-content-around playback-container">
                        <div className="col-4 align-self-center text-center app-title">Unsplash Moodboard</div>
                        <div className="col-4 align-self-center text-center">
                            <div className="meta-container">
                                <div className="title">{this.state.meta.songName}</div>
                                <div>
                                    <span>{this.state.meta.artist}</span>
                                    <span> | </span>
                                    <span>{this.state.meta.album}</span>
                                </div>
                            </div>
                            <div className="controls-container">
                                <span className="controls" onClick={() => {
                                    SpotifyUtils.previousTrack();
                                }}>
                                    <MdFastRewind />
                                </span>
                                {this.state.paused &&
                                    <span className="controls" onClick={() => {
                                        SpotifyUtils.resume();
                                        this.setState({ paused: false });
                                    }}>
                                        <MdPlayArrow />
                                    </span>
                                    ||
                                    <span className="controls" onClick={() => {
                                        SpotifyUtils.pause();
                                        this.setState({ paused: true });
                                    }}>
                                        <MdPause />
                                    </span>
                                }
                                <span className="controls" onClick={() => {
                                    SpotifyUtils.nextTrack();
                                }}>
                                    <MdFastForward />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slideshow;