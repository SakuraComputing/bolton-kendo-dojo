import { GET_ERRORS } from '../actions/types';

const inititalState = {};

export default (state = inititalState, action) => {
    switch(action.type) {
        case GET_ERRORS:
            console.log('Is this getting fired', action);
            return action.payload;
        default: 
            return state;
    }
}