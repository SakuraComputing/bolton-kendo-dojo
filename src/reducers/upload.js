import { GET_MEMBER_UPLOADS, UPLOADS_LOADING, ADD_UPLOAD, DELETE_UPLOAD } from '../actions/types';

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
        case ADD_UPLOAD:
            return [
                ...state,
                action.upload
            ]
        case DELETE_UPLOAD:
            return state.filter(({ _id }) => _id !== action.id);
        default:
            return state;
    }

}