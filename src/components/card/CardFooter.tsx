import React from "react";
import styled from "styled-components";

const CLASS_NAME = "card-footer";
export default function CardFooter({ children, className = "" }) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return <StyledFooter className={cssClass}>{children}</StyledFooter>;
}
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto !important;
`;
