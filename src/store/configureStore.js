import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import errorReducer from '../reducers/error';
import clubReducer from '../reducers/club';
import uploadReducer from '../reducers/upload';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            errors: errorReducer,
            club: clubReducer,
            uploads: uploadReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}



