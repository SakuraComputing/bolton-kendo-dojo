import selectorPhotos from '../../selectors/photos';
import uploads from '../fixtures/uploads';
import moment from 'moment';

describe('photo selector', () => {
    it('should filter photo by text value', () => {
        const filters = {
            photoText: 'Photo',
            photoTitle: '',
            photoSortyBy: 'date'
        }
        const result = selectorPhotos(uploads, filters);
        expect(result).toEqual({
            loading: false,
            uploads: [uploads[0]]
        });
    });
    it('should filter photo by title', () => {
        const filters = {
            photoText: '',
            photoTitle: 'Title3',
            photoSortyBy: 'date'
        }
        const result = selectorPhotos(uploads, filters);
        expect(result).toEqual({
            loading: false,
            uploads: [uploads[2]]
        });        
    });
    describe('date filters', () => {
        it('should filter by start date', () => {
            const filters = {
                photoText: '',
                photoTitle: '',
                photoSortyBy: 'date',
                startDate: moment(0),    
                endDate: undefined
            }
            const result = selectorPhotos(uploads, filters);
            expect(result).toEqual({
                loading: false,
                uploads: [uploads[0], uploads[2]]
            });
        });
        it('should filter by end date', () => {
            const filters = {
                photoText: '',
                photoTitle: '',
                photoSortyBy: 'date',
                startDate: undefined,    
                endDate: moment(0).add(2, 'years')
            }
            const result = selectorPhotos(uploads, filters);
            expect(result).toEqual({
                loading: false,
                uploads: [uploads[0], uploads[1]]
            });
        });
        it('should return uploads if uploads array is empty', () => {
            const filters = {
                photoText: 'Photo',
                photoTitle: '',
                photoSortyBy: 'date'
            }
            const result = selectorPhotos([], filters);
            expect(result).toEqual([]);
        });
    });
});