import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/styles';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: ${colors.black};
`;

export const Spinner = styled.div`
    margin: 0 auto;
    width: 100px;
    height: 60px;
    font-size: 10px;
    padding-top: 250px;
`;

export const loadingAnimation = keyframes`
    0%, 40%, 100%{
        transform: scaleY(0.4);
    }
    20%{
        transform: scaleY(1.0);
    }
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

export const React1 = styled(Rect)`
    animation-delay: -1.1s;
`;

export const React2 = styled(Rect)`
    animation-delay: -1.1s;
`;

export const React3 = styled(Rect)`
    animation-delay: -1.0s;
`;

export const React4 = styled(Rect)`
    animation-delay: -0.9s;
`;
