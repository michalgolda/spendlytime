import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { store } from './store';
import { Provider } from 'react-redux';

// The function is render any component in root element
const render = (Component) => {
    const rootEl = document.getElementById("root");

    try {
        ReactDOM.render(
            <Provider store={store}>
                <Component />
            </Provider>,
            rootEl
        );
    } catch (err) {
        console.error(err.message);
    }
};

// The globals variables after render application make all globals to available to window in browser
const globals = {
    SpendlytimeRenderApp: () => render(App),
};

// Make all globals objects in globals variable to avalilabe in window
Object.keys(globals).forEach((name) => (window[name] = globals[name]));

export default globals;
