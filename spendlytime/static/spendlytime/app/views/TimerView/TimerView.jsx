import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import * as S from "./TimerView.styles";

import { TraceItemComponent as TraceItem } from '../../components';

export default class TimerView extends Component {
    render() {
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
                            <TraceItem url="https://google.com" time="00:00"/>
                        </S.ListWrapper>
                    </S.Wrapper>
                </S.Container>
            </>
        );
    }
}
