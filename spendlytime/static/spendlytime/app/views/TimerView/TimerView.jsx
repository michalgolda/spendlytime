import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import * as S from "./TimerView.styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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
                            <S.Submit>
                                <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faPlay}/>
                            </S.Submit>
                        </S.Form>
                    </S.Wrapper>
                </S.Container>
            </>
        );
    }
}
