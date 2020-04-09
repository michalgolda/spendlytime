import * as views from "./views";

export const routes = () => {
    return [
        {
            "path": "/",
            "component": views.HomeView,
            "exact": true
        },
        {
            "path": "/auth/login",
            "component": views.LoginView
        },
        {
            "path": "",
            "component": views.NotFoundView
        },
    ];
};
