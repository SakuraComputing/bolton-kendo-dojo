import axios from 'axios';

export const registerUser=(userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: decoded
    }
};

