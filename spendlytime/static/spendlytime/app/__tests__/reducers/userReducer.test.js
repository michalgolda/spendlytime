import React from "react";
import { userConstants } from "../../constants";
import userReducer from "../../reducers/userReducer";

describe("userReducer", () => {
    test("FETCH_USER_REQUEST action", () => {
        const state = { loading: false, data: null };
        const newState = userReducer(state, { type: userConstants.FETCH_USER_REQUEST });

        console.log(newState);
        expect(newState).toEqual({ loading: true });
    });

    test("FETCH_USER_SUCCESS action", () => {
        const state = { loading: true, data: null };
        const fakeUserData = { "id": 1, "email": "test@wp.pl" }
        const newState = userReducer(state, { type: userConstants.FETCH_USER_SUCCESS, data: fakeUserData });

        expect(newState).toEqual({ loading: false, data: fakeUserData })
    });

    test("FETCH_USER_FAILURE action", () => {
        const state = { loading: true, data: null };
        const newState = userReducer(state, { type: userConstants.FETCH_USER_FAILURE });

        expect(newState).toEqual({ loading: false });
    });
});
