import { SET_PHOTO_FILTER_TEXT, SORT_PHOTO_BY_DATE } from '../actions/types';

const filterReducerDefaultState = {
    photoText: '',
    photoSortBy: 'date'
};
export default (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case SET_PHOTO_FILTER_TEXT:
            return {
                ...state,
                photoText: action.photoText
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