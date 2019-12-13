import React from "react";
import styled from "styled-components";

export default function FlexGrid({ gap = 20, children, blankCount = 10, flexSize = "", ...rest }) {
  return (
    <StyledFlexGrid gap={gap} flexSize={flexSize} {...rest}>
      {children}
      {Array.from(new Array(blankCount), () => (
        <div className="blank"></div>
      ))}
    </StyledFlexGrid>
  );
}

const StyledFlexGrid = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-right: -${(props) => props.gap}px;
  margin-top: -${(props) => props.gap}px;
  > * {
    flex: ${(props) => (props.flexSize ? `1 1 ${props.flexSize}` : "initial")};
    margin-top: ${(props) => props.gap}px;
    margin-right: ${(props) => props.gap}px;
  }
  > .blank {
    height: 0;
  }
`;
