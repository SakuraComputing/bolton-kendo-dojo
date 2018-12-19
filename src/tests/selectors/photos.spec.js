import selectorPhotos from '../../selectors/photos';
import uploads from '../fixtures/uploads';

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
});