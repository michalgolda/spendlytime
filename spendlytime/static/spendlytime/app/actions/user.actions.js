import { userConstants } from '../constants';
import { api } from '../api';

export const userActions = {
    fetchUser
}

function fetchUser(){
    return dispatch => {
        dispatch(request());

        api.get("users/me/", {})
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure());
                }
            )
    }

    function request() { return { type: userConstants.FETCH_USER_REQUEST } };
    function success(data) { return { type: userConstants.FETCH_USER_SUCCESS, data: data } };
    function failure() { return { type: userConstants.FETCH_USER_FAILURE } };
}