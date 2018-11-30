import uploadReducer from '../../reducers/upload';
import { DELETE_UPLOAD, UPLOADS_LOADING, GET_MEMBER_UPLOADS, ADD_UPLOAD } from '../../actions/types';
import uploads from '../fixtures/uploads';

describe('upload reducer', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            uploads: {},
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
            uploads: {},
            loading: true
        }
        const action = {
            type: UPLOADS_LOADING
        }
        const state = uploadReducer(undefined, action);
        expect(state).toEqual(loading);
    });
    it('should add an upload', () => {
        const upload = {
            filename: 'test filename',
            description: ' test description'
        }
        const action = {
            type: ADD_UPLOAD,
            upload
        }
        const state = uploadReducer(uploads, action);
        expect(state).toEqual([...uploads, upload])
    });
    it('should detele an upload by id', () => {
        const action = {
            type: DELETE_UPLOAD,
            id: uploads[0]._id
        }
        const state = uploadReducer(uploads, action);
        expect(state).toEqual([uploads[1], uploads[2]]);
    })
});



