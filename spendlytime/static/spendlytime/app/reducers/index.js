import { combineReducers } from 'redux';

import userReducer from './userReducer';
import traceReducer from './traceReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    trace: traceReducer
});