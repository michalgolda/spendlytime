import React from "react";
import { RouterComponent as Router } from "./components";

import { routes } from "./routes";

import "./main.sass";

export default function App() {
    return (
        <>
            <Router routes={routes()} />
        </>
    );
}
