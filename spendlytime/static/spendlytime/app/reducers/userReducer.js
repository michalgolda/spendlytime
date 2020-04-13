import { userConstants } from '../constants';

const initialState = {loading: false, data: null};

export default function userReducer(state = initialState, action){
    switch(action.type){
        case userConstants.FETCH_USER_REQUEST:
            return {
                loading: true
            }
        case userConstants.FETCH_USER_SUCCESS:
            return {
                loading: false,
                data: action.data
            }
        case userConstants.FETCH_USER_FAILURE:
            return {
                loading: false
            }
        default:
            return state;
    }
}