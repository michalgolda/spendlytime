import React from 'react';
import { create } from 'react-test-renderer';

import { LoadingComponent } from '../../components';

describe("Loading component", () => {
    test("Matches the snapshot", () => {
        const loading = create(<LoadingComponent />);
        expect(loading.toJSON()).toMatchSnapshot();
    });
});