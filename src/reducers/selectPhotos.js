import * as ActionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ActionTypes.LOAD_SELECT_PHOTO:
            return {
                ...state,
                [action.payload.type]: action.payload.photo
            };

        default:
            return state;
    }
}