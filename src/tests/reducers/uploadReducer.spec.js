import uploadReducer from '../../reducers/upload';
import { UPLOADS_LOADING, GET_MEMBER_UPLOADS } from '../../actions/types';

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
    })
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
    })
});



