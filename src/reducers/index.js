import { combineReducers } from 'redux';
import photos from './photos';
import selectPhotos from './selectPhotos';
import playlist from './playlist';

export default combineReducers({
    selectPhotos,
    photos,
    playlist
});