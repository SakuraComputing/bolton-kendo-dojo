import axios from 'axios';
import { GET_POSTS, ADD_POST, GET_ERRORS } from './types';

export const getPosts = () => dispatch => {
    axios.get('/api/posts')
    .then(res => 
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_POSTS,
            payload: null
        })
    );
}

export const addPost = (newPost) => dispatch => {
    axios.post('/api/posts', newPost)
    .then(res => 
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    );
}