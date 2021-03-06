import { getMemberUploads, postMemberUploads, deleteMemberUploads, setUploadsLoading } from '../../actions/uploadActions';
import { GET_MEMBER_UPLOADS, UPLOADS_LOADING, GET_ERRORS, ADD_UPLOAD, DELETE_UPLOAD } from '../../actions/types';
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
    });
    it('should upload a new file', async () => {
        // Given
        mockAxios.onPost('/api/uploads').reply(200, {
            status: true
        });
        const upload = { filename: 'testfile',
                         description: 'test description'
        }
        // When 
        postMemberUploads(upload)(store.dispatch);
        await flushAllPromises();
        //Then
        expect(store.getActions()).toEqual([
            { uploads: { status: true }, type: ADD_UPLOAD } 
        ]);
    });
    it('should delete an exisitng file', async () => {
        const id = "87rg32rg87f827823"
        mockAxios.onDelete(`/api/uploads/${id}`).reply(200, {
            status: true
        });
        deleteMemberUploads(id)(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { id: id, type: DELETE_UPLOAD }
        ]);
    });
});

describe('Uploading images', () => {
    it('should set uploads to loading', () => {
        const action = setUploadsLoading();
        expect(action).toEqual({ type: UPLOADS_LOADING })  
    })
});
