import { combineReducers } from 'redux';
import photos from './photos';
import selectPhotos from './selectPhotos';

export default combineReducers({
    selectPhotos,
    photos
});