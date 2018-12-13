import { setPhotoTextFilter, setPhotoDateSortOrder } from '../../actions/filterActions';
import { SET_PHOTO_FILTER_TEXT, SORT_PHOTO_BY_DATE } from '../../actions/types';

describe('Filter Actions Object', () => {
    it('should set the photo text filter object', () => {
        const action = setPhotoTextFilter('test');
        expect(action).toEqual({
            type: SET_PHOTO_FILTER_TEXT,
            photoText: 'test'
        })
    });
    it('should set the date sort order object', () => {
        const action = setPhotoDateSortOrder();
        expect(action).toEqual({
            type: SORT_PHOTO_BY_DATE,
        })
    });
});