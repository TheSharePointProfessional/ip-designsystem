import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import DateRangeText from "../../../components/DateRangeText/DateRangeText";
import PropsTable from "./PropsTable";
import { prism as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { getPortalsTheme } from "../../../components/PortalsThemeProvider/PortalsThemeProvider";
import styled from "styled-components";

const StyledColorSwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 210px;

  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  .color {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

let docs: ComponentDocumentation = {
  title: "Theme Provider",
  description: (
    <>
      <p>A wrapper that goes around your top level React component. </p>
      <SyntaxHighlighter language="xml" style={codeStyle}>
        {`<PortalsThemeProvider theme={props.webpart.theme}>
    <StyledContainer>
        <WebPartTitle {...props.webpart} />
        <div>Web part content</div>
    </StyledContainer>    
</PortalsThemeProvider>            `}
      </SyntaxHighlighter>

      <p>
        Anything wrapped with the <code>PortalsThemeProvider</code> can leverage theme colors via
        <code> styled-components</code>.
      </p>

      <SyntaxHighlighter language="scss" style={codeStyle}>
        {`margin-top: 5px;
&.success .message {
    color: \${(props) => props.theme.getValue("palette.teal", "#008080")};
}
&.error .message {
    font-size: 14px;
    color: \${(props) => props.theme.getValue("palette.redDark", "#8A0002")};
}`}
      </SyntaxHighlighter>
      <h3>Setup</h3>
      <p>
        Your SPFx web part should have code to initialize the theme object. Then you can pass the
        webpart's <code>this._theme</code> to the top level React component as a prop.
      </p>
      <SyntaxHighlighter language="typescript" style={codeStyle}>
        {`export default class YourWebPart extends BaseClientSideWebPart<WebPartProperties> {
    _themeProvider: ThemeProvider;
    _theme: IReadonlyTheme;

    async onInit() {
        // ...
        await this.initTheme();
        // ...
    }

    async initTheme() {
        // Consume the SPFx ThemeProvider service
        this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
        // If it exists, get the theme variant
        this._theme = this._themeProvider.tryGetTheme();
        // Register a handler to be notified if the theme variant changes
        this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);
    }

    // Subscribe to the theme change event so we can trigger a rerender with the new colors
    private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
        this._theme = args.theme;
        this.render();
    }

    // ...rest of web part class
}`}
      </SyntaxHighlighter>
    </>
  ),
  id: "PortalsThemeProvider",
  demos: [
    {
      title: "Get Portals Theme",
      description:
        "You can also get the full theme object with the named export 'getPortalsTheme'.",
      slug: "get-portals-theme",
      scope: { getPortalsTheme, StyledColorSwatch },
      code: `import { getPortalsTheme } from "../../components/PortalsThemeProvider/PortalsThemeProvider";

() => {
    // This function is the secret sauce
    let theme = getPortalsTheme();

    // Once we have the theme object we can do whatever we want with it.
    // For example, loop through all the colors and display them.
    return (
        <>
            <h2>Starts with 'theme'</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {Object.keys(theme.palette)
                    .filter(themeParam => themeParam.includes("theme"))
                    .map(themeParam => (
                        <StyledColorSwatch>
                            <div
                            className="color"
                                style={{ background: theme.getValue("palette." + themeParam) }}
                            />
                            <div>
                                <div>{theme.getValue("palette." + themeParam)}</div>
                                <div><b>{themeParam}</b></div>
                            </div>
                        </StyledColorSwatch>
                    ))
                }
            </div>
        </>
    );
}`,
    },
  ],
};

export default docs;
