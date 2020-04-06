import React from "react";
import { GlobalStyles } from "./utils/styles/global";
import { RouterComponent as Router } from "./components";

import { routes } from "./routes";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Router routes={routes()} />
        </>
    );
}
