import { traceConstants } from '../constants';
import { api } from '../api';

export const traceActions = {
    fetchTraces,
    addTrace,
    deleteTrace
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

export function addTrace(data){
    return dispatch => {
        dispatch(request());

        api.post('traces/', { body: JSON.stringify(data) })
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure());
                }
            )
    }

    function request() { return { type: traceConstants.ADD_TRACE_REQUEST } };
    function success(data) { return { type: traceConstants.ADD_TRACE_SUCCESS, data: data } };
    function failure() { return { type: traceConstants.ADD_TRACE_ERROR } };
}

function deleteTrace(id){
    return dispatch => {
        dispatch(request());

        api.delete(`traces/${id}/`, {})
            .then(
                data => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure());
                }
            )
    }

    function request() { return { type: traceConstants.DELETE_TRACE_REQUEST } };
    function success(id) { return { type: traceConstants.DELETE_TRACE_SUCCESS, id: id } };
    function failure() { return { type: traceConstants.DELETE_TRACE_FAILURE } };
}