import { GET_CLUB_PROFILE } from '../actions/types';

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
        default:
            return state
    }

}