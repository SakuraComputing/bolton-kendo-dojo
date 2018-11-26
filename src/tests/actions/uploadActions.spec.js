import { getMemberUploads, setUploadsLoading } from '../../actions/uploadActions';
import { GET_MEMBER_UPLOADS, UPLOADS_LOADING, GET_ERRORS } from '../../actions/types';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';


describe('Member upload action objects', () => {

    let mockAxios;
    let store;

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

    beforeEach(() => {
        mockAxios = new MockAdapter(Axios)
        const mockStore = configureMockStore();
        store = mockStore({});
    });

    afterEach(() => {
        mockAxios.reset();
    });

    it('should get all member uploads', async () => {
        // Given 
        mockAxios.onGet('/api/uploads/all').reply(200, {
            test: 'Member Uploads'
        });
  
        // When
        getMemberUploads()(store.dispatch);
        await flushAllPromises();
  
        // Then
        expect(store.getActions()).toEqual([
            { type: UPLOADS_LOADING },
            { payload: { test: 'Member Uploads'} , type: GET_MEMBER_UPLOADS } 
        ])    
    });
    it('should try to get member uploads and throw an error', async () => {
        // Given
        mockAxios.onGet('/api/uploads/all').timeout();
        // When
        getMemberUploads()(store.dispatch);
        await flushAllPromises();
        // Then
        expect(store.getActions()).toEqual([
            { type: UPLOADS_LOADING },
            { payload: undefined,
              type: GET_ERRORS  
            }
        ])
    })
});

describe('Uploading images', () => {
    it('should set uploads to loading', () => {
        const action = setUploadsLoading();
        expect(action).toEqual({ type: UPLOADS_LOADING })  
    })
});
