import * as ActionTypes from './actionTypes';
import { asyncAction } from '../middleware/asyncMiddleware';
import UnsplashUtils from '../utils/unsplash';

/**
 *  Action Creators
 */

export const fetchPhotos = searchTerm => asyncAction(UnsplashUtils.fetchPhotos(searchTerm).then(loadPhotos));

export const loadPhotos = (photos) => {
    return {
        type: ActionTypes.LOAD_PHOTOS,
        payload: photos
    };
}

export const fetchSelectPhoto = (id, type) => asyncAction(UnsplashUtils.fetchSinglePhoto(id).then(photo => loadSelectPhoto(photo, type)));

export const loadSelectPhoto = (photo, type) => {
    return {
        type: ActionTypes.LOAD_SELECT_PHOTO,
        payload: {
            type,
            photo
        }
    };
}