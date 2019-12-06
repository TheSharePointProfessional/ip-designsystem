import React from "react";
import styled from "styled-components";
import CardLink from "./CardLink";

const CLASS_NAME = "card-title";

export default function CardTitle({
  children,
  url = "",
  className = "",
  as = "h3"
}) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");

  return (
    <CardLink href={url} className={className}>
      <StyledTitle as={as} className={cssClass}>
        {children}
      </StyledTitle>
    </CardLink>
  );
}

const StyledTitle = styled.h3`
  /* font-weight: 200; */
  margin: 0;
  padding-bottom: 2px;
`;

const StyledDiv = styled.div`
  color: #f00;
  font-size: 30px;
`;
