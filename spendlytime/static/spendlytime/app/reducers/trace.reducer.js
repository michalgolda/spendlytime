import { traceConstants } from '../constants';

const initialState = { loading: false, data: [] };
export default function traceReducer(state = initialState, action){
    switch(action.type){
        case traceConstants.FETCH_TRACES_REQUEST:
            return {
                loading: true
            }
        case traceConstants.FETCH_TRACES_SUCCESS:
            return {
                loading: true,
                data: [
                    ...state, {
                        ...action.data
                    }
                ]
            }
        case traceConstants.FETCH_TRACES_FAILURE:
            return {
                loading: false
            }
    }
}