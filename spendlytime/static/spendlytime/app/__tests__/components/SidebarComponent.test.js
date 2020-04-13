import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { SidebarComponent } from '../../components';

describe("Sidebar component", () => {
    test("Matches the snapshot", () => {
        const sidebar = create(
            <MemoryRouter>
                <SidebarComponent />
            </MemoryRouter>
        );
        expect(sidebar.toJSON()).toMatchSnapshot();
    });
});