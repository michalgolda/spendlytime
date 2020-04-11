import React from 'react';
import * as S from './TraceItemComponent.styles';

export default function TraceItemComponent(){
    return(
        <S.Trace>
            <S.TraceUrl>https://google.com</S.TraceUrl>
            <S.TraceTime>00:00</S.TraceTime>
        </S.Trace>
    );
}