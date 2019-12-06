import React from "react";
import { ThemeProvider } from "styled-components";
import DesignSystem from "../../ip-designsystem-spfx/src/webparts/DesignSystem/components/DesignSystem";

const theme = {};
function App({}) {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">Hello there</div>
      <DesignSystem />
    </ThemeProvider>
  );
}

export default App;
