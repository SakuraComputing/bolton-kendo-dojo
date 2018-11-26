import { GET_MEMBER_UPLOADS, UPLOADS_LOADING } from '../actions/types';

const initialState = {
    uploads: {},
    loading: false
}
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_MEMBER_UPLOADS:
            return {
                ...state,
                uploads: action.payload,
                loading: false
            }
        case UPLOADS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}