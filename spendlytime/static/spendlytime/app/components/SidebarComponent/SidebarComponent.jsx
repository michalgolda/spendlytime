import React from 'react';
import * as S from './Sidebar.styles';

export default function SidebarComponent(){
    return(
        <S.Container>
            <S.LogoContainer>
                <S.Logo>
                    Spendlytime<S.LogoSmall>.com</S.LogoSmall>
                </S.Logo>
            </S.LogoContainer>
            <S.Nav>
                <S.NavWrapper>
                    <S.NavLink link="/timer/">Timer</S.NavLink>
                    <S.NavLink link="/profile/">Profil</S.NavLink>
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