import { traceConstants } from "../constants";

const initialState = { loading: false, data: [] };
export default function traceReducer(state = initialState, action) {
    switch (action.type) {
        case traceConstants.FETCH_TRACES_REQUEST:
            return {
                loading: true,
            };
        case traceConstants.FETCH_TRACES_SUCCESS:
            return {
                loading: false,
                data: action.data,
            };
        case traceConstants.FETCH_TRACES_FAILURE:
            return {
                loading: false,
            };
        case traceConstants.ADD_TRACE_SUCCESS:
            return {
                loading: false,
                data: [
                    ...state.data,
                    {
                        ...action.data,
                    },
                ],
            };
        case traceConstants.DELETE_TRACE_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.filter((trace) => {
                    return trace.id != action.id;
                }),
            });
        default:
            return state;
    }
}
