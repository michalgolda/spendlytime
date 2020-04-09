import React, { Component } from 'react';
import * as S from './RegisterView.styles';
import { LogoComponent } from '../../components';

export default class RegisterView extends Component{
    render(){
        return(
            <S.Wrapper>
                <S.Container>
                    <S.LogoWrapper>
                        <LogoComponent />
                    </S.LogoWrapper>
                    <S.Form>
                        <S.Group>
                            <S.Input type="text" placeholder="Email" required/>
                        </S.Group>
                        <S.Group>
                            <S.Input type="password" placeholder="Hasło" required/>
                        </S.Group>
                        <S.Group>
                            <S.Input type="password" placeholder="Hasło" required/>
                        </S.Group>
                        <S.Submit>Zarejestruj się</S.Submit>
                        <S.Text>You have an account ? Sign in</S.Text>
                    </S.Form>
                </S.Container>
            </S.Wrapper>
        );
    }
}