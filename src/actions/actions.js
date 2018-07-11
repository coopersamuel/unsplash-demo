import * as ActionTypes from './actionTypes';

/**
 *  Action Creators
 */

 export const fetchPhotos = (searchTerm) => {
     return {
         type: ActionTypes.FETCH_PHOTOS,
         payload: searchTerm
     };
 }