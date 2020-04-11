import React from 'react';
import { Route as BaseRoute, Redirect } from 'react-router-dom';

export default function RouteComponent(props){
    const { authRequired } = props;

    if (authRequired) {
        if (window.__initialData){
            if(window.__initialData.isAuthenticated){
                return <BaseRoute {...props}/>;
            } else {
                return <Redirect to="auth/login" />;
            }
        } else {
            return <BaseRoute {...props}/>;
        }
    } else {
        return <BaseRoute {...props}/>;
    }
}