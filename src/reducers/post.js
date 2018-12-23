import {
    GET_POSTS,
    ADD_POST,
    GET_ERRORS,
    DELETE_POST,
    GET_POST

} from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
    }
}
