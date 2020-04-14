import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Container = styled.div`
    width: 300px;
    height: 100vh;
    background: ${colors.grey};
    float: left;
    position: fixed;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 20px 0px 0px 0px;

    a {
        color: ${colors.green};
        font-size: 1.8rem;
        text-decoration: none;
        font-weight: bold;
    }
`;

export const LogoSmall = styled.small`
    font-size: 1rem;
`;

export const Nav = styled.nav`
    width: calc(100% - 40px);
    padding: 0px 20px 0px 20px;
    text-align: center;
    display: flex;
    flex-direction: column
    justify-content: center
`;

export const NavWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 100px;
    a {
        width: 100%;
        height: auto;
        font-size: 1.3rem;
        font-weight: bold;
        text-decoration: none;
        color: ${colors.whiteGrey};
        display: inline-block;
        padding-top: 20px;
    }

    a:hover {
        color: ${colors.green};
    }
`;


export const Footer = styled.div`
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
`;

export const AccountDetails = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
`;

export const AccountWrapper = styled.div`
    width: 205px;
    height: 50px;
    margin: 0 auto;
`;

export const AccountAvatar = styled.div`
    width: 45px;
    height: 45px;
    float: left;
    background: white;
    border-radius: 50px;
`;

export const AccountEmail = styled.p`
    font-size: 1.1rem;
    color: #fff;
    float: left;
    padding-top: 15px;
    padding-left: 5px;
`;

export const FooterText = styled.p`
    color: ${colors.whiteGrey};
    text-align: center;
    padding-top: 10px;
`;