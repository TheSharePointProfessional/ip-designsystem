import React, { Suspense } from "react";
import styled from "styled-components";
import { Menu, docs } from "docs";
import useQueryString from "ui-toolkit/hooks/useQueryString";
import { MDXProvider } from "@mdx-js/react";
import PortalsThemeProvider from "ui-toolkit/components/PortalsThemeProvider/PortalsThemeProvider";
import CodeBlock from "docs/CodeBlock/CodeBlock";

const components = {
  pre: CodeBlock,
  code: CodeBlock,
  h2: ({ children }) => <h2 style={{ marginTop: "80px" }}>{children}</h2>,
};

function App({ theme }) {
  let [active, setActive] = useQueryString("active", "Home");
  let target = docs.find((d) => d.title === active);
  return (
    <PortalsThemeProvider theme={theme}>
      <StyledLayout className="app">
        <div className="header">
          <h1>PortalsDev UI Toolkit</h1>
        </div>
        <div className="side-menu">
          <Menu setActive={setActive} />
        </div>
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <MDXProvider components={components}>{target && target.render()}</MDXProvider>
          </Suspense>
        </div>
      </StyledLayout>
      <style>{`body { margin: 0; height: 100vh}`}</style>
    </PortalsThemeProvider>
  );
}

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  gap: 1px 1px;
  grid-template-areas: "header header" "side-menu content";

  .side-menu {
    grid-area: side-menu;
    border-right: 1px solid #eee;
    padding: 20px;
  }

  .content {
    grid-area: content;
    padding: 0 20px 50px;
    max-width: 1100px;
  }

  .header {
    grid-area: header;
    background: steelblue;
    color: whitesmoke;
    padding: 10px;
    h1 {
      margin: 0;
      display: inline-block;
      font-weight: 100;
    }
  }
  @media (max-width: 600px) {
    display: block;
  }
`;
export default App;
