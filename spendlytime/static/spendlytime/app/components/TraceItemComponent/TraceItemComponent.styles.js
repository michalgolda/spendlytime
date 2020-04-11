import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Trace = styled.div`
    width: 100%;
    height: 60px;
    background: ${colors.grey};
    border-radius: 50px;
`;

export const TraceUrl = styled.p`
    color: ${colors.green};
    font-size: 1.5rem;
    font-weight: 100;
    padding-top: 15px;
    padding-left: 15px;
    float: left;
`;

export const TraceTime = styled.p`
    color: ${colors.green};
    font-size: 1.5rem;
    font-weight: 100;
    padding-top: 17px;
    padding-right: 15px;
    float: right;
`;