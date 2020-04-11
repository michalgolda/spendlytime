import React from "react";
import { RouterComponent as Router } from "./components";

import { routes } from "./routes";
import { GlobalStyles } from './utils/styles';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Router routes={routes()} />
        </>
    );
}
