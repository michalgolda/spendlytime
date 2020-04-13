import React from "react";
import { create } from "react-test-renderer";

import { Provide } from "../../utils/tests";
import { TraceItemComponent } from "../../components";

describe("Trace item component", () => {
    test("Matches the snapshot", () => {
        const traceitem = create(Provide(TraceItemComponent));
        expect(traceitem.toJSON()).toMatchSnapshot();
    });
});
