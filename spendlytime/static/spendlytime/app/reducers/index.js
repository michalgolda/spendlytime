import { combineReducers } from 'redux';

import userReducer from './userReducer';
import traceReducer from './traceReducer';
import timeEntryReducer from './timeEntryReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    trace: traceReducer,
    timeEntry: timeEntryReducer
});