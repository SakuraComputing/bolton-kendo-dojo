import isEmpty from '../../validation/is-empty';

describe('is-empty library', () => {

    it('should return true when undefined is passed in', () => {
        const value = undefined;
        const result = isEmpty(value);
        expect(result).toBe(true);
    });
    it('should return true when null is passed in', () => {
        const value = null;
        const result = isEmpty(value);
        expect(result).toBe(true);
    });
    it('should return true when an empty object is passed in', () => {
        const value = {};
        const result = isEmpty(value);
        expect(result).toBe(true);
    });
    it('should return true when an empty string is passed in', () => {
        const value = '';
        const result = isEmpty(value);
        expect(result).toBe(true);
    });
    it('should return false when an unempty string is passed in', () => {
        const value = 'test';
        const result = isEmpty(value);
        expect(result).toBe(false);
    });
    it('should return true when a full object is passed in', () => {
        const value = {test: 'test'};
        const result = isEmpty(value);
        expect(result).toBe(false);
    });
})