# unsplash moodboard

Unsplash Moodboard is a demo app using the Unsplash API and the Spotify Web Player SDK
To use the application you must have a Spotify premium account

**Note**
The Spotify Web Player does not support the Safari browser...

Before building unsplash moodboard in your own environment you'll need to attain an API key for both Unsplash and Spotify, set up a config file in your root directory that looks like this

```
// config.js

const unsplashApiKeys = {
    accessKey: // Your Unsplash access key here
    secretKey: // Your Unsplash secret key here
    redirectURI: // Your Unsplash redirect URI here
};

const spotifyApiKeys = {
    clientId: // Your spotify client ID here
    clientSecret: // Your spotify secret key here
    redirectURI: // Your spotify redirect URI here
};

export { unsplashApiKeys, spotifyApiKeys };
```

Then...

```
npm install
npm run dev
```
