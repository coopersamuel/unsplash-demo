import * as ActionTypes from '../actions/actionTypes';
import UnsplashUtils from '../utils/unsplash';

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_PHOTOS:
            UnsplashUtils.fetchPhotos(action.payload);

        default:
            return state;
    }
}