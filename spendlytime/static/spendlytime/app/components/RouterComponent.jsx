import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch } from "react-router-dom";
import { RouteComponent as Route } from '../components';

import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 300px);
    height: 100vh;
    float: left;
`;

function RouterComponent(props) {
    const { routes } = props;
    const routesItems = routes.map((route) => (
        <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact ? true : false}
            authRequired={route.authRequired ? true : false}
        />
    ));

    return (
        <BrowserRouter>
            {props.children}
            <Switch>
                <Container>
                    {routesItems}
                </Container>
            </Switch>
        </BrowserRouter>
    );
}

RouterComponent.propTypes = {
    routes: PropTypes.array.isRequired,
};

export default RouterComponent;
