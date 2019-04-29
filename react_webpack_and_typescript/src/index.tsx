import * as React from "react";
import * as ReactDOM from "react-dom";

import { GscHello } from "./components/hello/Hello";

ReactDOM.render(
    <GscHello gspCompiler="TypeScript" gspFramework="React" />,
    document.getElementById("example")
);
