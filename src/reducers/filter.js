import { SET_PHOTO_FILTER_TEXT, SET_PHOTO_FILTER_TITLE, SORT_PHOTO_BY_DATE } from '../actions/types';

const filterReducerDefaultState = {
    photoText: '',
    photoTitle: '',
    photoSortBy: 'date'
};
export default (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case SET_PHOTO_FILTER_TEXT:
            return {
                ...state,
                photoText: action.photoText
            }
        case SET_PHOTO_FILTER_TITLE:
            return {
                ...state,
                photoTitle: action.photoTitle
            }
        case SORT_PHOTO_BY_DATE:
            return {
                ...state,
                photoSortBy: 'date'
            }
        default:
            return state;
    }
}