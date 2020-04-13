import React from "react";
import { create } from "react-test-renderer";

import { MemoryRouter } from 'react-router-dom';
import { RouteComponent } from "../../components";

describe("Route component", () => {
    test("Matches the snapshot", () => {
        const route = create(
            <MemoryRouter>
                <RouteComponent />
            </MemoryRouter>
        );
        expect(route.toJSON()).toMatchSnapshot();
    });
});
