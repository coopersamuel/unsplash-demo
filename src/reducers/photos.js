import * as ActionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.LOAD_PHOTOS:
            return action.payload;

        default:
            return state;
    }
}