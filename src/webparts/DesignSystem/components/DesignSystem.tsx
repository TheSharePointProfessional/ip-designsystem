import React, { useState } from "react";
import { DisplayMode } from "@microsoft/sp-core-library";
import WebPartTitle from "../../../components/webpart_title/WebPartTitle";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./Nav";
import ReactViewDemo from "./ReactViewDemo";

import components from "../docs/docs";
import usePersistedState from "../../../hooks/usePersistedState";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

function DesignSystem(props: DesignSystemProps) {
  let [activeComponent, setActiveComponent] = usePersistedState(
    "Card",
    "designsystem: activeComponent"
  );
  let component = components.find((c) => c.id === activeComponent) || components[0];
  return (
    <ThemeProvider theme={props.webpart.theme}>
      <Container>
        <StyledContent>
          <Nav active={component.id} onChange={setActiveComponent} />
          <div key={component.id}>
            <h1>{component.title}</h1>
            <p>{component.description}</p>
            <h3>Usage Examples</h3>
            <ul>
              {component.demos.map((demo) => (
                <li>
                  <a href={"#" + demo.slug}>{demo.title}</a>
                </li>
              ))}
            </ul>
            {component.demos.map((demo) => (
              <ReactViewDemo demo={demo} />
            ))}
          </div>
        </StyledContent>
      </Container>
    </ThemeProvider>
  );
}
export default React.memo(DesignSystem);

export interface DesignSystemProps {
  webpart: {
    title: string;
    displayMode: DisplayMode;
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
  max-width: 1600px;
  code {
    color: #bd7a27;
  }
  th,
  td {
    text-align: left;
    padding: 5px 10px;
  }
`;
