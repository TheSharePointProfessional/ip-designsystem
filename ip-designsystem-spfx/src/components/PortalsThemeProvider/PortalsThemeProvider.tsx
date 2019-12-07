import React from "react";
import { ThemeProvider } from "styled-components";
import { getValue } from "../../core/utils/utils";

declare global {
  interface Window {
    _portalsTheme: any;
  }
}
let _theme = {};
export default function PortalsThemeProvider({ theme, children }) {
  _theme = {
    ...theme,
    global: (window as any).__themeState__.theme || {
      ...theme.semanticColors,
      ...theme.palette,
    },
    getValue: function(path: string, fallback = "#f00") {
      return getValue(this, path) || fallback;
    },
  };
  return <ThemeProvider theme={_theme}>{children}</ThemeProvider>;
}

export function getPortalsTheme() {
  return _theme;
}

export function getThemeValue(path: string, fallback: string) {
  console.log("TCL: getThemeValue -> path", path, _theme);

  return getValue(_theme, path) || fallback;
}
