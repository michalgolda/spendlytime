import * as views from "./views";

export const routes = () => {
    return [
        {
            "path": "/traces",
            "component": views.TimerView,
            "authRequired": true
        }
    ];
};
