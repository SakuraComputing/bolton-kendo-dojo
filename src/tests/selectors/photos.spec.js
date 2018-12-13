import selectorPhotos from '../../selectors/photos';
import uploads from '../fixtures/uploads';

describe('photo selector', () => {
    it('should filter photo by text value', () => {
        const filters = {
            photoText: 'Photo',
            photoSortyBy: 'date'
        }
        const result = selectorPhotos(uploads, filters);
        expect(result).toEqual([uploads[0]]);
    });
});