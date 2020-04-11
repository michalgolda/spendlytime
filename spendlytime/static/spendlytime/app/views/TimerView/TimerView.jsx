import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import * as S from "./TimerView.styles";

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
                    </S.Wrapper>
                </S.Container>
            </>
        );
    }
}
