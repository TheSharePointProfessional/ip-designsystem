import React from "react";
import styled from "styled-components";
import CardLink from "./CardLink";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardTags, { CardTag } from "./CardTags";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";

const CLASS_NAME = "skyline-card";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.size || 300}px, 1fr)
  );
  gap: 10px;
`;
export default class Card extends React.PureComponent<CardProps, {}> {
  static Title = CardTitle;
  static Description = CardDescription;
  static Link = CardLink;
  static Tags = CardTags;
  static Tag = CardTag;
  static Info = CardInfo;
  static Image = CardImage;
  static Footer = CardFooter;
  static Grid = StyledGrid;
  render() {
    let { className = "", children, centered } = this.props;

    let cssClass = [CLASS_NAME, centered ? "centered" : "", className]
      .filter(Boolean)
      .join(" ");

    return <StyledCard className={cssClass}>{children}</StyledCard>;
  }
}

export interface CardProps {
  className?: string;
  centered?: boolean;
}

const StyledCard = styled.div`
  /* padding: 12px; */
  display: inline-flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  border: 1px solid ${props => props.theme.semanticColors.variantBorder};
  border-radius: 5px;
    overflow: hidden;
  &.centered {
    align-items: center;
    justify-content: center;
  }

  /* &:hover {
    border-color: ${props => props.theme.palette.themePrimary};
  } */
  > * {
      margin: 0 12px;
      &:first-child {
          margin-top: 12px;
          &.card-image {
              margin-top: 0;
          }
      }
      &:last-child {
        margin-bottom: 12px;
      }
  }
  > .card-image {
      margin: 12px 0;
  }
`;
