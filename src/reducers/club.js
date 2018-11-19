import { GET_CLUB_PROFILE, PROFILE_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    club: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CLUB_PROFILE: 
            return {
                ...state,
                club: action.payload,
                loading: false
            }
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }

}