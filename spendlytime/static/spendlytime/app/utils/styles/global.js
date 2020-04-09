import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body{
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
    }
`;
