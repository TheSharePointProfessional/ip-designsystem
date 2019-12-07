import React from "react";
import { ComponentDemo } from "../docs/docs";
import styled from "styled-components";
import { useView, Compiler, Editor, Error, ActionButtons } from "react-view";
import presetTypescript from "@babel/preset-typescript";

export default function ReactViewDemo({ demo }: ReactViewDemoProps) {
  const params = useView({
    initialCode: demo.code,
    scope: demo.scope,
  });
  return (
    <StyledContainer>
      <StyledDemoTitle id={demo.slug}>{demo.title}</StyledDemoTitle>
      <StyledDemoDescription>{demo.description}</StyledDemoDescription>
      <StyledCenteredStuff>
        <StyledCompiler>
          <Compiler {...params.compilerProps} presets={[presetTypescript]} />
        </StyledCompiler>
        <Error {...params.errorProps} />
        <Editor {...params.editorProps} language="tsx" />
        <StyledActionButtons>
          <ActionButtons {...params.actions} />
        </StyledActionButtons>
      </StyledCenteredStuff>
      <hr />
    </StyledContainer>
  );
}

export interface ReactViewDemoProps {
  demo: ComponentDemo;
}

const StyledContainer = styled.div`
  margin: 20px 0;
  code {
    color: #bd7a27;
  }
  button[data-testid="rv-copy-url"] {
    display: none;
  }
  hr {
    margin: 40px;
    border: none;
    border-top: 1px solid #ccc;
  }
`;
const StyledDemoTitle = styled.h2`
  margin-top: 50px;
`;

const StyledDemoDescription = styled.div``;

const StyledEditor = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const StyledActionButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCenteredStuff = styled.div`
  background: #f7f7f7;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 40px 0;
`;
const StyledCompiler = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 200px;
`;
