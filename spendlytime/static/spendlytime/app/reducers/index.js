import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import traceReducer from './trace.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    trace: traceReducer
});