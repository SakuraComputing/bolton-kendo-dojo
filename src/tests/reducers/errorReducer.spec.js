import errorReducer from '../../reducers/error';
import { GET_ERRORS } from '../../actions/types';

describe('Error Reducer', () => {
    it('should set the default state', () => {
        const initialState = {};
        const state = errorReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initialState);
    });
});


