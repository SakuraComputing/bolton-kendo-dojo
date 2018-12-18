import "react-dates/initialize";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {logoutUser, setCurrentUser} from './actions/authActions';
import { getClubProfile } from './actions/clubActions';

const store = getAppStore();

if(localStorage.jwtToken) {
    // Set the auth token header auth
    setAuthToken(localStorage.jwtToken);

    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        // Logout the user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = '/login';
    }
}

store.dispatch(getClubProfile());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
