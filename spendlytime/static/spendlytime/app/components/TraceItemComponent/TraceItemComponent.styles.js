import styled from 'styled-components';
import { colors } from '../../utils/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Trace = styled.div`
    width: 100%;
    height: 60px;
    background: ${colors.grey};
    border-radius: 50px;
`;

export const TraceUrl = styled.p`
    color: ${colors.green};
    font-size: 1.2rem;
    font-weight: 100;
    padding-top: 20px;
    padding-left: 20px;
    float: left;
`;

export const TraceTime = styled.p`
    color: ${colors.green};
    font-size: 1.2rem;
    font-weight: 100;
    padding-top: 20px;
    padding-right: 20px;
    float: right;
`;

export const Actions = styled.div`
    width: 100%;
    height: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ActionsBox = styled.div`
    width: 140px;
    height: 60px;
    margin: 0 auto;
`;

export const Action = styled.button`
    width: 60px;
    height: 60px;
    background: ${colors.grey};
    border-radius: 50px;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    outline: none;
    float: left;
    font-size: 1.2rem;

    &:hover{
        cursor: pointer;
    }
`;

export const DeleteActionIcon = styled(FontAwesomeIcon)`
    color: ${colors.red};
`;

export const PlayAndStopActionIcon = styled(FontAwesomeIcon)`
    color: ${colors.green};
`;