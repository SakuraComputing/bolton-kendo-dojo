import { 
    SET_PHOTO_FILTER_TEXT, 
    SET_PHOTO_FILTER_TITLE, 
    SORT_PHOTO_BY_DATE, 
    SET_START_DATE,
    SET_END_DATE
} from '../actions/types';
import moment from 'moment';

const filterReducerDefaultState = {
    photoText: '',
    photoTitle: '',
    photoSortBy: 'date',
    startDate: moment().startOf('year'),
    endDate: moment().endOf('month')
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
        case SET_START_DATE:
            return {
                ...state,
                startDate: action.startDate
            }
        case SET_END_DATE:
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}