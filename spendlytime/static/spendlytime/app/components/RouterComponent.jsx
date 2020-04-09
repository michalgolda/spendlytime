import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function RouterComponent(props) {
    const { routes } = props;
    const routesItems = routes.map((route) => (
        <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact ? true : false}
        />
    ));

    return (
        <BrowserRouter>
            <Switch>{routesItems}</Switch>
        </BrowserRouter>
    );
}

RouterComponent.propTypes = {
    routes: PropTypes.array.isRequired,
};

export default RouterComponent;
