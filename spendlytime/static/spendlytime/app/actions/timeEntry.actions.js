import { timeEntryConstants } from '../constants';
import { api } from '../api';

export const timeEntryActions = {
    startTimeEntry,
    stopTimeEntry
}

function startTimeEntry(data){
    return dispatch => {
        dispatch(request());

        api.post(`time_entries/`, { body: JSON.stringify(data) })
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            )
    }

    function request() { return { type: timeEntryConstants.START_ENTRY_REQUEST } };
    function success(data) { return { type: timeEntryConstants.START_ENTRY_SUCCESS, data: data } };
    function failure(error) { return { type: timeEntryConstants.START_ENTRY_FAILURE, error: error } };
}

function stopTimeEntry(id, data){
    return dispatch => {
        dispatch(request());

        api.put(`time_entries/${id}/`, { body: JSON.stringify(data) })
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            )
    }

    function request() { return { type: timeEntryConstants.STOP_ENTRY_REQUEST } };
    function success(data) { return { type: timeEntryConstants.STOP_ENTRY_SUCCESS, data: data} };
    function failure(error) { return { type: timeEntryConstants.STOP_ENTRY_FAILURE, error: error } };
}
