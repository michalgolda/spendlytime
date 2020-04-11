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

    componentDidMount(){
        this.actions.fetchTraces();
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
                            <S.Form>
                                <S.Input placeholder="Adres strony internetowej" type="text" required/>
                                <S.Submit>+</S.Submit>
                            </S.Form>
                            <S.ListWrapper>
                                {this.props.trace.data &&
                                    this.props.trace.data.map((trace) => {
                                        <TraceItem url={trace.trace_url} time={trace.trace_time}/>
                                    })
                                }
                            </S.ListWrapper>
                        </S.Wrapper>
                    </S.Container>
                </>
            );
        }
    }
}
