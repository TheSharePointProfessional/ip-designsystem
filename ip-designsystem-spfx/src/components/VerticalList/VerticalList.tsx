import React from "react";
import styled from "styled-components";
import BackgroundImage from "../primitives/BackgroundImage";
import Title from "../primitives/Title";
import Tags from "../primitives/Tags";
import Info from "../primitives/Info";

let StyledDescription = styled.p`
  margin: 0 0;
  color: ${(props) => props.theme.semanticColors.bodyText};
`;

let StyledFooter = styled.div`
  display: flex;
  margin-top: auto !important;
  justify-content: space-between;
`;

let StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 1 80%;
`;

export default class VerticalList<T> extends React.PureComponent<VerticalListProps<T>, {}> {
  static Item = VerticalItem;
  static Title = Title;
  static Image = ItemThumbnail;
  static Tags = Tags;
  static Description = StyledDescription;
  static Info = Info;
  static Content = StyledContent;
  static Footer = StyledFooter;
}

export interface VerticalListProps<T> {
  items: T;
  renderItem: (item: T) => JSX.Element;
}

const CLASS_NAME = "vertical-item";
export function VerticalItem({ children, className = "", style = {} }) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <StyledVerticalItem className={cssClass} style={style}>
      {children}
    </StyledVerticalItem>
  );
}

export interface VerticalItemProps {
  title: string | JSX.Element;
  thumbnail: string | JSX.Element;
  url?: string;
  tags?: { label: string; url?: string }[];
  description: string | JSX.Element;
}

let StyledVerticalItem = styled.div`
  &:first-child {
    margin-top: -18px;
  }
  text-align: left;
  padding: 20px 0;
  display: flex;
  align-items: inherit;
  /* flex: 1 1 auto; */
  border-bottom: 1px solid ${(props) => props.theme.semanticColors.bodyDivider};
  > * {
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export function ItemThumbnail({
  children,
  circle = false,
  width = "100px",
  height = "100px",
  ...rest
}) {
  return (
    <StyledThumbnail shape={circle ? "circle" : ""} height={height} width={width} {...rest}>
      {children}
    </StyledThumbnail>
  );
}

let StyledThumbnail = styled(BackgroundImage)`
  /* flex: 1 1 ${(props) => props.width}; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.palette.white};
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : 0)};
  /* margin: 0 16px; */
`;
