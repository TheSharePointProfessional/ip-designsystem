import React from "react";
import styled from "styled-components";
import Link from "./Link";

const CLASS_NAME = "primitive-title";

export default function Title({ children, url = "", className = "", as = "h3" }) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");

  return (
    <Link href={url} className={className}>
      <StyledTitle as={as} className={cssClass}>
        {children}
      </StyledTitle>
    </Link>
  );
}

const StyledTitle = styled.h3`
  margin: 0;
  padding-bottom: 2px;
`;
