import React, { Component } from "react";
import * as S from "./LoginView.styles";
import { LogoComponent } from "../../components";

export default class LoginView extends Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeEmail(e){
        e.preventDefault();
        this.setState({ email: e.target.value });
    }

    handleChangePassword(e){
        e.preventDefault();
        this.setState({ password: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();

        console.log(this.state.email);
        console.log(this.state.password);
    }

    render() {
        return (
            <S.Wrapper>
                <S.Container>
                    <S.LogoWrapper>
                        <LogoComponent />
                    </S.LogoWrapper>
                    <S.Form onSubmit={this.handleSubmit}>
                        <S.Group>
                            <S.Input onChange={this.handleChangeEmail} type="text" placeholder="Email" required/>
                        </S.Group>
                        <S.Group>
                            <S.Input onChange={this.handleChangePassword} type="password" placeholder="Hasło" required/>
                        </S.Group>
                        <S.Submit>Zaloguj się</S.Submit>
                        <S.Text>Forgot password?</S.Text>
                        <S.Text>Create new account ? / Sign up</S.Text>
                    </S.Form>
                </S.Container>
            </S.Wrapper>
        );
    }
}
