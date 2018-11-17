import axios from 'axios';
import { GET_CLUB_PROFILE, GET_ERRORS } from './types';

export const getClubProfile = () => dispatch => {
    axios.get('/api/club')
    .then(res => 
        dispatch({
            type: GET_CLUB_PROFILE,
            payload: res.data
        })
    )
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
}
