import React, { Component } from "react";
import * as S from "./HomeView.styles";
import { HelloComponent } from "../../components";

export default class Home extends Component {
    render() {
        return (
            <S.Container>
                <HelloComponent text={"Hello, World!"} />
            </S.Container>
        );
    }
}
