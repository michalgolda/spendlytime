import { traceConstants } from '../constants';
import { api } from '../api';

export const traceActions = {
    fetchTraces
}

function fetchTraces(){
    return dispatch => {
        dispatch(request());

        api.get('traces/', {})
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure());
                }
            )
    }

    function request() { return { type: traceConstants.FETCH_TRACES_REQUEST } };
    function success(data) { return { type: traceConstants.FETCH_TRACES_SUCCESS, data: data } };
    function failure() { return { type: traceConstants.FETCH_TRACES_FAILURE } };
}