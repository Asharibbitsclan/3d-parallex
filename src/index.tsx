import React from "react"
import ReactDOM from "react-dom/client"

import App from "./app/App"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import "./responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.Fragment>
        <App />
    </React.Fragment>
);
