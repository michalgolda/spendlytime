import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as S from './Sidebar.styles';

export default function SidebarComponent(){
    return(
        <S.Container>
            <S.LogoContainer>
                <Link to="/">
                    Spendlytime<S.LogoSmall>.com</S.LogoSmall>
                </Link>
            </S.LogoContainer>
            <S.Nav>
                <S.NavWrapper>
                    <NavLink activeStyle={{color: "#00D856"}} to="/timer/">Timer</NavLink>
                    <NavLink activeStyle={{color: "#00D856"}} to="/profile/">Profil</NavLink>
                </S.NavWrapper>
            </S.Nav>
            <S.Footer>
                <S.AccountDetails>
                    <S.AccountWrapper>
                        <S.AccountAvatar />
                        <S.AccountEmail>michalgolda@vp.pl</S.AccountEmail>
                    </S.AccountWrapper>
                </S.AccountDetails>
                <S.FooterText>
                    Ⓒ 2020 SpendlyTime
                </S.FooterText>
            </S.Footer>
        </S.Container>
    );
}