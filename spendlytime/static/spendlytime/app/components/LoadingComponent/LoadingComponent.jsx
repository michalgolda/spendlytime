import React from 'react';
import * as S from './LoadingComponent.styles';

export default function LoadingComponent(){
    return(
        <S.Container>
            <S.Spinner>
                <S.React1 />
                <S.React2 />
                <S.React3 />
                <S.React4 />
            </S.Spinner>
        </S.Container>
    );
}