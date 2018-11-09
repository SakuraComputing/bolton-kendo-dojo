import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../../reducers/auth';
import errorReducer from '../../reducers/error';
import thunk from 'redux-thunk';
import { setCurrentUser } from '../../actions/authActions';

describe('Store', () => {
    it('should handle adding users', () => {
        const store = createStore(
            combineReducers({
                auth: authReducer,
                errors: errorReducer
            }),
            compose(applyMiddleware(thunk))
        );
        const user = {
            email: 'test@gmail.com',
            password: 'ufhiruf'
        }
        // act
        const action = setCurrentUser(user);
        store.dispatch(action);

        // assert
        const actual = store.getState().auth;
        const expected = {
            isAuthenticated: true,
            user: {
                email: 'test@gmail.com',
                password: 'ufhiruf'
            }
        }
        expect(actual).toEqual(expected);
    });
});