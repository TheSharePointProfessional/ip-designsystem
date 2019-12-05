import React from "react";
import styled from "styled-components";
import CardLink from "./CardLink";

const CLASS_NAME = "card-tags";

export default function CardTags({
  children,
  className = "",
  tags = []
}: CardTagProps) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");

  return (
    <StyledTags className={cssClass}>
      {children
        ? children
        : tags.map(tag => <CardTag url={tag.url}>{tag.label}</CardTag>)}
    </StyledTags>
  );
}

export interface CardTag {
  label: string;
  url?: string;
}

export interface CardTagProps {
  className?: string;
  tags?: CardTag[];
  children?: any;
}
const TAG_CLASS_NAME = "card-tag";

export function CardTag({ url = "", className = "", children }) {
  let cssClass = [TAG_CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <StyledTag className={cssClass}>
      <CardLink href={url}>{children}</CardLink>
    </StyledTag>
  );
}
const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const StyledTag = styled.div`
  font-size: 12px;
  color: ${props => props.theme.palette.accent};
  margin-right: 15px;
  a {
    color: ${props => props.theme.palette.accent};
  }
`;
