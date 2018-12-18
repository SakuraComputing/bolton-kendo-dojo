import axios from 'axios';
import { ADD_UPLOAD, DELETE_UPLOAD, UPLOADS_LOADING, GET_ERRORS, GET_MEMBER_UPLOADS} from './types'


export const getMemberUploads = () => dispatch => {
    dispatch(setUploadsLoading());
    axios.get('/api/uploads/all')
    .then(res => 
        dispatch({
            type: GET_MEMBER_UPLOADS,
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

export const postMemberUploads = (data) => dispatch => {
    axios.post('/api/uploads', data, {
        // onUploadProgress: progressEvent => console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        onUploadProgress: progressEvent => console.log('Data being passed in', data)
    })
    .then(res => 
        dispatch({
        type: ADD_UPLOAD,
        uploads: res.data
    }))
    .catch(err => console.log(err));
}

export const deleteMemberUploads = (id) => dispatch => {
    axios.delete(`/api/uploads/${id}`, id)
    .then(res => dispatch({
        type: DELETE_UPLOAD,
        id
    }))
    .catch(err => console.log(err));
}

export const setUploadsLoading = () => {
    return {
        type: UPLOADS_LOADING
    }
}