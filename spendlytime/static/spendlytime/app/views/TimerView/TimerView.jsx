import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { traceActions } from '../../actions';
import * as S from "./TimerView.styles";

import { LoadingComponent as Loading } from '../../components';
import { TraceItemComponent as TraceItem } from '../../components';


@connect(
    state => ({
        trace: state.trace
    }),
    dispatch => ({
        actions: bindActionCreators(traceActions, dispatch)
    })
)
export default class TimerView extends Component {

    constructor(props){
        super(props);

        this.state = { url: "" };

        this.handleAddTrace = this.handleAddTrace.bind(this);
        this.handleChangeTraceUrlInput = this.handleChangeTraceUrlInput.bind(this);
    }

    componentDidMount(){
        this.props.actions.fetchTraces();
    }

    handleAddTrace(e){
        e.preventDefault();

        this.props.actions.addTrace({
            "trace_url": this.state.url,
            "trace_time": "0:0"
        })
    }

    handleChangeTraceUrlInput(e){
        e.preventDefault();

        this.setState({ url: e.target.value });
    }

    render() {
        if(this.props.trace.loading){
            return <Loading />;
        } else {
            return(
                <>
                    <Helmet>
                        <title>Spendlytime - Timer</title>
                    </Helmet>
                    <S.Container>
                        <S.Wrapper>
                            <S.Form onSubmit={this.handleAddTrace}>
                                <S.Input onChange={this.handleChangeTraceUrlInput} placeholder="Adres strony internetowej" type="text" required/>
                                <S.Submit>+</S.Submit>
                            </S.Form>
                            <S.ListWrapper>
                                {this.props.trace.data &&
                                    this.props.trace.data.map((trace) =>
                                        <TraceItem
                                            key={trace.id}
                                            url={trace.trace_url}
                                            time={trace.trace_time}
                                            id={trace.id}
                                        />
                                    )
                                }
                            </S.ListWrapper>
                        </S.Wrapper>
                    </S.Container>
                </>
            );
        }
    }
}
