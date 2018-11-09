import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';

describe('setAuthToken', () => {
    it('should set the token if not set already', () => {
        const token = 'Blah';
        setAuthToken(token);
        expect(axios.defaults.headers.common['Authorization']).toBe(token);
    });
    it('should delete the token if it has already been set', () => {
        axios.defaults.headers.common['Authorization'] = 'Blah'
        setAuthToken();
        expect(axios.defaults.headers.common['Authorization']).toBeUndefined();
    });
});