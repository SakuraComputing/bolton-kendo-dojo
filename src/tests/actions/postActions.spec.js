import { 
    GET_POSTS,
    ADD_POST

} from '../../actions/types';

import { getPosts,
         addPost 

} from '../../actions/postActions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';


describe('Post reducer', () => {

    let store, mockAxios;

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

    beforeEach(() => {
        mockAxios = new MockAdapter(axios)
        const mockStore = configureMockStore();
        store = mockStore({});
    });

    afterEach(() => {
        mockAxios.reset();
    });

    it('should set up the get posts objects', async () => {
        // Given 
        mockAxios.onGet('/api/posts').reply(200, {
            data: 'Member Posts'
        });
    
        // When
        getPosts()(store.dispatch);
        await flushAllPromises();

        // Then
        expect(store.getActions()).toEqual([
            { type: GET_POSTS, payload: { data: 'Member Posts'}  } 
        ])    
        
    });    
    it('should set up the action object for the add posts object', async () => {
        // Given 
        mockAxios.onPost('/api/posts').reply(200, {
            text: 'New Post'
        });
    
        // When
        addPost()(store.dispatch);
        await flushAllPromises();

        // Then
        expect(store.getActions()).toEqual([
            { type: ADD_POST, payload: { text: 'New Post'}  } 
        ])    
        
    });
});