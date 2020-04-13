import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

import { Provide } from '../utils/tests';

test("renders without crashing", () => {
    const rootEl = document.createElement("root");
    ReactDOM.render(Provide(App), rootEl);
    ReactDOM.unmountComponentAtNode(rootEl);
});