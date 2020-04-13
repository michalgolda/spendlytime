import React from "react";
import ReactDOM from 'react-dom';

import { TimerView } from "../../views";
import { Provide } from '../../utils/tests';

describe("Route component", () => {
    test("render without errors", () => {
        const rootEl = document.createElement("root");
        ReactDOM.render(Provide(TimerView), rootEl);
        ReactDOM.unmountComponentAtNode(rootEl);
    });
});
