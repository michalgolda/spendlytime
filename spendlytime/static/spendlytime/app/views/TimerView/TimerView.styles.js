import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${colors.black};
`;

export const Wrapper = styled.div`
    width: calc(100% - 20px);
    height: calc(100vh - 20px);
    padding: 10px;
`;

export const Form = styled.form`
    width: 100%;
    height: 60px;
`;

export const Input = styled.input`
    width: calc(100% - 85px);
    height: 60px;
    background: ${colors.grey};
    border: none;
    outline: none;
    border-radius: 50px;
    font-size: 1.2rem;
    color: ${colors.green};
    padding-left: 15px;
    font-weight: 100;
    float: left;
`;

export const Submit = styled.button`
    width: 60px;
    height: 60px;
    background: ${colors.green};
    color: #fff;
    border: none;
    border-radius: 50px;
    outline: none;
    float: left;
    margin-left: 10px;
    font-size: 3rem;

    &:hover{
        cursor: pointer;
    }
`;

export const ListWrapper = styled.div`
    width: calc(100% - 10px);
    height: calc(100% - 120px);
    padding-right: 10px;
    margin-top: 50px;
`;