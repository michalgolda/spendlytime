import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.black};
`;

export const Container = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding-bottom: 100px;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    height: 38px;
    text-align: center;
    padding-bottom: 30px;
`;

export const Form = styled.form`
    width: 300px;
    height: 250px;
`;

export const Group = styled.div`
    width: 100%;
    height: 35px;
    margin: 10px 10px 0px 0px;
`;

export const Input = styled.input`
    width: 280px;
    height: 35px;
    background: ${colors.grey};
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 100;
    border-radius: 50px;
    padding-left: 20px;

    &::-webkit-input-placeholder{
        color: ${colors.whiteGrey}
    }
`;

export const Text = styled.p`
    width: 300px;
    text-align: center;
    color: ${colors.whiteGrey};
    padding-top: 10px;
    font-size: .9rem;

    &:hover{
        cursor: pointer;
    }
`;

export const Submit = styled.button`
    width: 300px;
    height: 35px;
    color: #fff;
    margin-top: 15px;
    background: ${colors.green};
    border: none;
    outline: none;
    font-size: 1rem;
    border-radius: 50px;

    &:hover{
        cursor: pointer;
    }
`;