import { 
    setPhotoTextFilter, 
    setPhotoFilterTitle, 
    setPhotoDateSortOrder,
    setStartDate,
    setEndDate
} from '../../actions/filterActions';
import { 
    SET_PHOTO_FILTER_TEXT, 
    SET_PHOTO_FILTER_TITLE, 
    SORT_PHOTO_BY_DATE,
    SET_START_DATE,
    SET_END_DATE
} from '../../actions/types';
import moment from 'moment';

describe('Filter Actions Object', () => {
    it('should set the photo text filter object', () => {
        const action = setPhotoTextFilter('test');
        expect(action).toEqual({
            type: SET_PHOTO_FILTER_TEXT,
            photoText: 'test'
        })
    });
    it('should set the photo text default to an empty string', () => {
        const action = setPhotoTextFilter('');
        expect(action).toEqual({
            type: SET_PHOTO_FILTER_TEXT,
            photoText: ''
        })        
    });
    it('should set the date sort order object', () => {
        const action = setPhotoDateSortOrder();
        expect(action).toEqual({
            type: SORT_PHOTO_BY_DATE,
        })
    });
    it('should set the photo title filter object', () => {
        const titleText = 'Title';
        const action = setPhotoFilterTitle(titleText);
        expect(action).toEqual({
            type: SET_PHOTO_FILTER_TITLE,
            photoTitle: titleText
        })
    });
    describe('Date Filters', () => {
        it('should set start date action object', () => {
            const result = setStartDate(moment(0));
            expect(result).toEqual({
                type: SET_START_DATE,
                startDate: moment(0)
            })
        });
        it('should set end date action object', () => {
            const result = setEndDate(moment(0));
            expect(result).toEqual({
                type: SET_END_DATE,
                startDate: moment(0)
            })
        });
    });
});