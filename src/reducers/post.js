import {
    GET_POSTS,
    ADD_POST,
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
                posts: action.payload,
                loading: false
            }
        case ADD_POST:
            return [
                ...state,
                action.post
            ]
        case DELETE_POST:
            return state.filter(posts => posts._id !== action.id);
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
