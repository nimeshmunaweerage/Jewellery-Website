import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

