import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter, Router } from 'react-router-dom';

import { RouterComponent } from "../../components";

describe("Router component", () => {
    test("Matches the snapshot", () => {
        const router = create(
            <MemoryRouter>
                <RouterComponent routes={[{"path": "/", "component": null}]} />
            </MemoryRouter>
        );
        expect(router.toJSON()).toMatchSnapshot();
    });
});
