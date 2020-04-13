import React from "react";
import { create } from "react-test-renderer";

import { MemoryRouter } from 'react-router-dom';
import { LinkComponent } from "../../components";

describe("Link component", () => {
    test("Matches the snapshot", () => {
        const route = create(
            <MemoryRouter>
                <LinkComponent />
            </MemoryRouter>
        );
        expect(route.toJSON()).toMatchSnapshot();
    });
});
