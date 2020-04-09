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
            "path": "/auth/register",
            "component": views.RegisterView
        },
        {
            "path": "",
            "component": views.NotFoundView
        },
    ];
};
