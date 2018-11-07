import authReducer from '../../reducers/auth';
import { SET_CURRENT_USER } from '../../actions/types';


describe('auth reducer', () => {
    it('should set the default state', () => {
        const initialState = { isAuthenticated: false, user: {} }
        const state = authReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initialState);
    });
    it('should set the current user and return the state', () => {
        const existingState = { 
            isAuthenticated: false,
            user: {},
            errors: {}
        };
        const action = {
            type: SET_CURRENT_USER,
            payload: {
                id: '121', 
                name: 'Terry Waite', 
                avatar: 'test',
            }
        };
        const expectedState = {
            errors: {},
            isAuthenticated: true,
            user: { 
                id: '121', 
                name: 'Terry Waite', 
                avatar: 'test',
            }
        }
        
        const state = authReducer( existingState, action);
        expect(state).toEqual(expectedState);
    });
});