import { 
    GET_POSTS

} from '../../actions/types';

import { getPosts 

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
});