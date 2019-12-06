import React from "react";
import styled from "styled-components";

const CLASS_NAME = "card-description";
export default function CardDescription({
  children,
  className = "",
  as = "p"
}) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <StyledDescription as={as} className={cssClass}>
      {children}
    </StyledDescription>
  );
}

const StyledDescription = styled.p`
  /* font-weight: 200; */
  padding: 10px 0;
`;
