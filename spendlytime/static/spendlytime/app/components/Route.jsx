import React from 'react';
import { Route as BaseRoute, Redirect } from 'react-router-dom';

export default function Route(props){
    const { authRequired } = props;


    const x = window.__initialData;

    switch(x){
        case x.isAuthenticated:
            return <BaseRoute {...props}/>;
        default:
            return <Redirect to="auth/login" />;
    }
}