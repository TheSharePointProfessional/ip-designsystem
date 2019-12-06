import React from "react";
import { ThemeProvider } from "styled-components";
import DesignSystem from "../../src/webparts/DesignSystem/components/DesignSystem";
import theme from "./mockTheme";
const webpart = {
  theme: theme as any,
  title: "Design System - Out of SPFx",
  updateProperty: (key, value) => console.log("UpdateProperty", key, value),
  webUrl: "",
};
function App({}) {
  return (
    <ThemeProvider theme={theme}>
      <DesignSystem webpart={webpart} />
    </ThemeProvider>
  );
}

export default App;
