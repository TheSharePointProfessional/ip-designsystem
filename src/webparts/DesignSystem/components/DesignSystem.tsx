import React, { useState } from "react";
import { DisplayMode } from "@microsoft/sp-core-library";
import WebPartTitle from "../../../components/webpart_title/WebPartTitle";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./Nav";
import ReactViewDemo from "./ReactViewDemo";

import components from "../demos/demos";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

function DesignSystem(props: DesignSystemProps) {
  let [activeComponent, setActiveComponent] = useState("Card");
  let component = components.find(c => c.id === activeComponent);
  console.log(activeComponent, component);
  return (
    <ThemeProvider theme={props.webpart.theme}>
      <Container>
        <StyledContent>
          <Nav active={activeComponent} onChange={setActiveComponent} />
          <div>
            <h1>{component.title}</h1>
            <p>{component.description}</p>
            <ul>
              {component.demos.map(demo => (
                <li>
                  <a href={"#" + demo.slug}>{demo.title}</a>
                </li>
              ))}
            </ul>
            {component.demos.map(demo => (
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
`;
