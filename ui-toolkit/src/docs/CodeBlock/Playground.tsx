import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as uiToolkit from "ui-toolkit";

const scope = {
  React,
  ...uiToolkit,
};

export default function Playground({ code }) {
  let [showCode, setShowCode] = React.useState(false);
  return (
    <LiveProvider code={code} scope={scope} theme={{ plain: {}, styles: [] }}>
      <StyledPreview />
      <StyledEditorContainer>
        {showCode && <StyledDivider />}
        {showCode && <StyledEditor className="styled-editor" />}

        <DefaultButton className="toggle-code" onClick={(e) => setShowCode(!showCode)}>
          {showCode ? "Hide Code" : "View Code"}
        </DefaultButton>
      </StyledEditorContainer>
      <StyledError />
    </LiveProvider>
  );
}

const StyledPreview = styled(LivePreview)`
  /* border: 1px solid #eee; */
  border-radius: 4px 4px 0 0;
  padding: 10px;
  min-height: 100px;
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const StyledEditorContainer = styled.div`
  position: relative;
  min-height: 40px;
  .toggle-code {
    position: absolute;
    top: 13px;
    right: 8px;
  }
`;
const StyledDivider = styled.div`
  width: 100%;
  background: steelblue;
  height: 5px;
`;
const StyledEditor = styled(LiveEditor)`
  background: #f7f7f7;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  min-height: 50px;

  textarea::selection {
    background: #ddd;
  }
`;

const StyledError = styled(LiveError)`
  border: 1px solid #e5cdcd;
  color: #9c2121;
  padding: 20px 10px;
  background: #fff9f9;
  border-radius: 4px;
`;
