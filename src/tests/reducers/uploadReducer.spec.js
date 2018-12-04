import uploadReducer from '../../reducers/upload';
import { DELETE_UPLOAD, UPLOADS_LOADING, GET_MEMBER_UPLOADS, ADD_UPLOAD } from '../../actions/types';
import uploads from '../fixtures/uploads';

describe('upload reducer', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            uploads: [],
            loading: false
        }
    })

    it('should return a default state', () => {
        const action = uploadReducer( undefined, { type: '@@INIT' });
        expect(action).toEqual(initialState);
    });

    it('should return uploads', () => {
        const uploads = {
            filenamee: 'image',
            description: 'image details',
            loading: false,
            uploads: undefined
        }
        const action = {
            type: GET_MEMBER_UPLOADS,
            uploads
        }
        const state = uploadReducer(uploads, action);
        expect(state).toEqual(uploads);
    });
    it('should return uploads loading', () => {
        const loading = {
            uploads: [],
            loading: true
        }
        const action = {
            type: UPLOADS_LOADING
        }
        const state = uploadReducer(undefined, action);
        expect(state).toEqual(loading);
    });
    it('should add an upload', () => {
        const uploadObj = {
            uploads: [
                {
                    "_id": "5bfed7528032901512c0f933",
                    "date": "2018-11-28T17:58:42.652Z",
                    "filename": "image-1543168184113.png",
                    "description": "Kendo Photo Details",
                }
            ]
        } 
        const uploads = [{
            _id: '74t34tp483tg34fgf',
            date: '2018-11-28T17:58:42.652Z',
            filename: 'testfilename.jpg',
            description: 'test description'
        }]
        const action = {
            type: ADD_UPLOAD,
            uploads
        }
         
        const state = uploadReducer(uploadObj, action);
        expect(state).toEqual({ loading: false, uploads: [uploadObj.uploads[0], [...uploads]] })
    });
    it('should delete an upload by id', () => {
        const action = {
            type: DELETE_UPLOAD,
            id: uploads[0]._id
        }
        const uploadsObj = {
            uploads
        }
        const state = uploadReducer(uploadsObj, action);
        expect(state).toEqual({ 
            loading: false, 
            uploads: [uploads[1], uploads[2]]
        });
    })
});



