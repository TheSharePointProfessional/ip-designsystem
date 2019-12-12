import React, { useState, Suspense } from "react";
import { DisplayMode } from "@microsoft/sp-core-library";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import PortalsThemeProvider from "../../../components/PortalsThemeProvider/PortalsThemeProvider";

import styled from "styled-components";
import Nav from "./Nav";
// import ReactViewDemo from "./ReactViewDemo";
const ReactViewDemo = React.lazy(() => import("./ReactViewDemo"));
import components from "../docs/docs";
import usePersistedState from "../../../hooks/usePersistedState";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

function DesignSystem(props: DesignSystemProps) {
  console.log("THEME!!!", props.webpart.theme);
  let [activeComponent, setActiveComponent] = usePersistedState(
    "Card",
    "designsystem: activeComponent"
  );
  let component = components.find((c) => c.id === activeComponent) || components[0];
  return (
    <PortalsThemeProvider theme={props.webpart.theme}>
      <Container>
        <StyledContent>
          <Nav active={component.id} onChange={setActiveComponent} />
          <div key={component.id}>
            <StyledComponentTitle>{component.title}</StyledComponentTitle>
            <div>{component.description}</div>
            <h3>Examples</h3>
            <ul>
              {component.demos.map((demo) => (
                <li key={demo.slug}>
                  <a href={"#" + demo.slug}>{demo.title}</a>
                </li>
              ))}
            </ul>
            <Suspense fallback="Loading Preview Engine...">
              {component.demos.map((demo) => (
                <ReactViewDemo key={demo.slug} demo={demo} />
              ))}
            </Suspense>
          </div>
        </StyledContent>
      </Container>
    </PortalsThemeProvider>
  );
}
export default React.memo(DesignSystem);

export interface DesignSystemProps {
  webpart?: {
    title: string;
    displayMode?: DisplayMode;
    updateProperty: (key: string, value: string) => void;
    webUrl: string;
    theme: IReadonlyTheme;
  };
}

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1640px;
  pre {
    /* padding: 10px;
    background: #222;
    color: #eee; */
    /* border-radius: 5px; */
  }
  code {
    color: #bd7a27;
  }
  th {
    background: #eee;
  }
  th,
  td {
    text-align: left;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
  }
`;

const StyledComponentTitle = styled.div`
  font-size: 32px;
`;
