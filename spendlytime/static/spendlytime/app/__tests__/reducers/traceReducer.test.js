import React from "react";
import { traceConstants } from "../../constants";
import traceReducer from "../../reducers/traceReducer";

const fakeTracesData = [{"id": 1, "trace_url": "test", "trace_time": 0}];

describe("traceReducer", () => {
    test("FETCH_TRACES_REQUEST action", () => {
        const state = { loading: false, data: [] };
        const newState = traceReducer(state, { type: traceConstants.FETCH_TRACES_REQUEST });

        expect(newState).toEqual({ loading: true });
    });

    test("FETCH_TRACES_SUCCESS action", () => {
        const state = { loading: true, data: [] };
        const newState = traceReducer(state, { type: traceConstants.FETCH_TRACES_SUCCESS, data: fakeTracesData });

        expect(newState).toEqual({ loading: false, data: fakeTracesData })
    });

    test("FETCH_USER_FAILURE action", () => {
        const state = { loading: true, data: [] };
        const newState = traceReducer(state, { type: traceConstants.FETCH_TRACES_FAILURE });

        expect(newState).toEqual({ loading: false });
    });

    test("ADD_TRACE_SUCCESS action", () => {
        const state = { loading: false, data: fakeTracesData };
        const newTrace = { "id": 2, "trace_url": "test", "trace_time": 0 };
        const newState = traceReducer(state, { type: traceConstants.ADD_TRACE_SUCCESS, data: newTrace });

        fakeTracesData.push(newTrace);

        expect(newState).toEqual({ data: fakeTracesData, loading: false });
    });

    test("DELETE_TRACE_SUCCESS action", () => {
        const state = { loading: false, data: fakeTracesData };
        const newState = traceReducer(state, { type: traceConstants.DELETE_TRACE_SUCCESS, id: 2 });

        fakeTracesData.pop(1);

        expect(newState).toEqual({ loading: false, data: fakeTracesData });
    });
});
