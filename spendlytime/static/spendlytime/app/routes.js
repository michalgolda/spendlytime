import * as views from "./views";

export const routes = () => {
    return [
        {
            "path": "/",
            "component": views.HomeView,
            "exact": true
        },
        {
            "path": "",
            "component": views.NotFoundView
        }
    ];
};
