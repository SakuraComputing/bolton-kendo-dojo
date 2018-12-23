import postReducer from '../../reducers/post';
import {
    GET_POSTS,
    ADD_POST,
    GET_ERRORS,
    DELETE_POST,
    GET_POST
} from '../../actions/types';
import posts from '../fixtures/posts';

describe('post reducer', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            posts: [],
            loading: false
        }
    })

    it('should return a default state', () => {
        
    });
    it('should return all posts', () => {
        const action = {
            type: GET_POSTS,
            posts: posts
        }
        const state = postReducer(undefined, action);
        const response = {
            posts,
            post: {},
            loading: false
        }
        expect(state).toEqual(response);
    });
    it('should add a new post', () => {
        const post = {
            "_id": {
                "$oid": "5af46770848ecb988668456b"
            },
            "text": "New Post",
            "name": "Terry Waits",
            "avatar": "//www.gravatar.com/avatar/119fe1a0184gertg316140ddd1ead1?s=200&r=pg&d=mm",
            "user": {
                "$oid": "5aeb7ec9e6f7c9508gfdgfdgdfg"
            },
        }
        const action = {
            type: ADD_POST,
            post            
        }
        const state = postReducer(posts, action)
        expect(state).toEqual([...posts, post])
    });
    it('should delete a post', () => {
        
    });
    it('should get a single post', () => {
        
    });
});