import authReducer from '../../reducers/auth';

describe('auth reducer', () => {
    it('should set the default state', () => {
        const initialState = { isAuthenticated: false, user: {} }
        const state = authReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initialState);
    });
    it('should set the current user ', () => {
        const user = {
            name: 'Don'
        };
        const action = {
            type: 'SET_CURREMT_USER',
            user
        };
        const state = authReducer(user, action);
        expect(state).toEqual(user);
    });
});