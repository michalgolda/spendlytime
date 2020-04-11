import React, { Component } from "react";
import { RouterComponent as Router, LoadingComponent as Loading } from "./components";

import { routes } from "./routes";
import { GlobalStyles } from './utils/styles';

export default class App extends Component{

    constructor(props){
        super(props);

        this.state = { loading: true };
    }

    componentDidMount(){
        this.setState({ loading: false })
    }

    render(){
        return (
            <>
                <GlobalStyles />
                {this.state.loading ? <Loading /> : <Router routes={routes()} />}
            </>
        )
    }
}