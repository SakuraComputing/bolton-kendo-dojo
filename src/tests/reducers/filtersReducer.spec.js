import filtersReducer from '../../reducers/filter';
import { SET_PHOTO_TEXT_FILTER, SORT_PHOTO_BY_DATE } from '../../actions/types';

describe('filter reducer', () => {
    it('should set up the default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual({
            photoText: '',
            photoSortBy: 'date'
        })
    });

    it('should set the text filter', () => {
        const state = filtersReducer(undefined, {
            type: SET_PHOTO_TEXT_FILTER,
            photoText: 'test'
        })
        expect(state.photoText)
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
});