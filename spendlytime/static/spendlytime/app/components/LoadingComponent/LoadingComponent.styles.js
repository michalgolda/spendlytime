import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/styles';

export const Spinner = styled.div`
    margin: 150px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
`;

export const Rect = styled.div`
    background-color: ${colors.green};
    height: 100%;
    width: 6px;
    display: inline-block;
    margin-left: 1px;
    margin-right: 1px;

    animation: ${loadingAnimation} 1.2s infinite ease-in-out;
`;

export const React1 = styled.div`
    animation-delay: -1.1s;
`;

export const React2 = styled.div`
    animation-delay: -1.1s;
`;

export const React3 = styled.div`
    animation-delay: -1.0s;
`;

export const React4 = styled.div`
    animation-delay: -0.9s;
`;

export const loadingAnimation = keyframes`
    0%, 40%, 100%{
        transform: scaleY(0.4);
    }
    20%{
        transform: scaleY(1.0);
    }
`;