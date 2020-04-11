import React from 'react';
import * as S from './Sidebar.styles';

import { useUser } from '../../hooks';

export default function SidebarComponent(props){

    const user = useUser();

    return(
        <S.Container>
            <S.LogoContainer>
                <S.Logo>
                    Spendlytime<S.LogoSmall>.com</S.LogoSmall>
                </S.Logo>
            </S.LogoContainer>
            <S.Nav>
                <S.NavWrapper>
                    <S.NavLink>Timer</S.NavLink>
                    <S.NavLink>Profil</S.NavLink>
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