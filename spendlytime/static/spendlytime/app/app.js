import React, { Component } from "react";
import { RouterComponent as Router } from "./components";
import { connect } from 'react-redux';
import { userActions } from './actions';
import { bindActionCreators } from 'redux';

import { routes } from "./routes";
import { GlobalStyles } from './utils/styles';

@connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        actions: bindActionCreators(userActions, dispatch)
    })
)
export default class App extends Component{

    componentDidMount(){
        this.props.actions.fetchUser();
    }

    render(){
        return (
            <>
                <GlobalStyles />
                <Router routes={routes()} />
            </>
        )
    }
}