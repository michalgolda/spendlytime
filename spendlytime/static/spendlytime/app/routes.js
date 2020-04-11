import * as views from "./views";

export const routes = () => {
    return [
        {
            "path": "/traces",
            "component": views.TraceListView,
            "authRequired": true
        }
    ];
};
