import React from "react";
import styled from "styled-components";

const CLASS_NAME = "primitive-info";
export default function Info({ children, className = "", as = "div" }) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <StyledInfo as={as} className={cssClass}>
      {children}
    </StyledInfo>
  );
}

const StyledInfo = styled.div`
  color: ${(props) => props.theme.semanticColors.bodySubtext};
  display: inline-block;
  font-size: 12px;
`;
