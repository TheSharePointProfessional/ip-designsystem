import React from "react";
import { ThemeProvider } from "styled-components";

export default function PortalsThemeProvider({ theme, children }) {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        global: (window as any).__themeState__.theme || {
          ...theme.semanticColors,
          ...theme.palette,
        },
      }}
    >
      {children}
    </ThemeProvider>
  );
}
