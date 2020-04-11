import * as views from "./views";

export const routes = () => {
    return [
        {
            "path": "/timer",
            "component": views.TimerView,
            "authRequired": true
        }
    ];
};
