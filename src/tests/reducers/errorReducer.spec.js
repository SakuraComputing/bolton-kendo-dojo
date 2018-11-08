import errorReducer from '../../reducers/auth';
import { GET_ERRORS } from '../../actions/types';

describe('Error Reducer', () => {
    it('should set the default state', () => {
        const initialState = {};
        const state = authReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initialState);
    });
});


