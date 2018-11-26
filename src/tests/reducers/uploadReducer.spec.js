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
    
});



