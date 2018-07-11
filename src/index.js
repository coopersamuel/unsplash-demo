import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import SpotifyUtils from './utils/spotify';
import PhotoContainer from './components/PhotoContainer/PhotoContainer';
import rootReducer from './reducers';
import './styles.scss';

const App = () => {
    let store = createStore(rootReducer, composeWithDevTools());
    SpotifyUtils.initWebPlayer();

    return (
        <Provider store={store}>
            <div>
                <button onClick={() => {
                    SpotifyUtils.authorize();
                }}>Authorize</button>
                <button onClick={() => {
                    SpotifyUtils.play(["spotify:track:5qNNanYonpCwahfJGuFVRQ", "spotify:track:5ozIJrlaCAf3g8MMyot483"]);
                }}>Play</button>
                <button onClick={() => {
                    console.log(SpotifyUtils.getPlaylist('37i9dQZF1DWYzpSJHStHHx'));
                }}>Playlist</button>
                <PhotoContainer />
            </div>
        </Provider>
    );
}

render(<App />, document.getElementById("root"));