import errorReducer from '../../reducers/error';
import { GET_ERRORS } from '../../actions/types';

describe('Error Reducer', () => {
    it('should set the default state', () => {
        const initialState = {};
        const state = errorReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initialState);
    });
    it('should return a payload when GET_ERRORS is called', () => {
        const error = 'error';
        const action = { 
            type: GET_ERRORS,
            payload: error
        };
        const state = errorReducer({}, action);
        expect(state).toBe(error);
    });
});


