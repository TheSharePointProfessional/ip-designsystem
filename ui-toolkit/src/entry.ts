import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import mockTheme from "docs/mockTheme";

ReactDOM.render(React.createElement(App, { theme: mockTheme }), document.getElementById("root"));
