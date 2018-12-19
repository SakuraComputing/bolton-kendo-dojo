import filtersReducer from '../../reducers/filter';
import { 
    SET_PHOTO_TEXT_FILTER, 
    SET_PHOTO_FILTER_TITLE, 
    SORT_PHOTO_BY_DATE,
    SET_START_DATE,
    SET_END_DATE 
} from '../../actions/types';
import moment from 'moment';

describe('filter reducer', () => {
    it('should set up the default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual({
            photoText: '',
            photoSortBy: 'date',
            photoTitle: '',
            startDate: moment().endOf('month'),
            endDate: moment().endOf('month')
        })
    });

    it('should set the text filter', () => {
        const state = filtersReducer(undefined, {
            type: SET_PHOTO_TEXT_FILTER,
            photoText: 'test'
        })
        expect(state.photoText)
    });
    it('should set the title filter', () => {
        const state = filtersReducer(undefined, {
            type: SET_PHOTO_FILTER_TITLE,
            photoTitle: 'test'
        })
        expect(state.photoTitle)
    });
    it('should set the photo sort by date', () => {
        const currentState = {
            photoText: '',
            photoSortBy: 'wibble'
        }
        const action = { type: SORT_PHOTO_BY_DATE }
        const state = filtersReducer(currentState, action);
        expect(state.photoSortBy).toBe('date')
    });
    describe('Date Filter', () => {
        it('should set the start date', () => {
            const state = filtersReducer( undefined, { type: SET_START_DATE, startDate: 1000});
            expect(state.startDate).toBe(1000);
        });
        it('should set the end date', () => {
            const state = filtersReducer( undefined, { type: SET_END_DATE, endDate: 2000});
            expect(state.endDate).toBe(2000);
        });
    });
});