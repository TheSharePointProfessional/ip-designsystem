import React from "react";
import Thumbnail from "../primitives/Thumbnail";
import Link from "../primitives/Link";
import styled from "styled-components";

function Persona({
  photo,
  title,
  subTitle,
  info,
  linkUrl,
  callToAction,
  orientation = "horizontal",
}: PersonaProps) {
  return (
    <StyledPersona orientation={orientation} className="persona">
      <Thumbnail src={photo} shape="circle" className="photo" />
      <div className="details">
        <div className="textWrapper">
          <div className="title">{title}</div>
          {subTitle && <div className="subtitle">{subTitle}</div>}
          {info && <div className="info">{info}</div>}
        </div>
        {linkUrl && callToAction && (
          <Link href={linkUrl} className="callToAction">
            {callToAction}
          </Link>
        )}
      </div>
    </StyledPersona>
  );
}
export default React.memo(Persona);

export interface PersonaProps {
  photo?: string;
  title: string;
  subTitle?: string;
  info?: string;
  linkUrl?: string;
  callToAction?: string;
  orientation?: "horizontal" | "vertical";
}

const StyledPersona = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.orientation === "horizontal" ? "row" : "column")};
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  .details {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }
  .textWrapper {
  }
  .title {
    color: ${(props) => props.theme.semanticColors.bodyText};
    font-weight: 600;
    font-size: 15px;
    line-height: normal;
  }
  .subtitle {
    color: ${(props) => props.theme.semanticColors.bodySubtext};
    font-size: 13px;
    line-height: normal;
  }
  .info {
    color: ${(props) => props.theme.semanticColors.bodySubtext};
    font-size: 12px;
    line-height: normal;
  }
  .callToAction {
    margin-top: 10px;
    color: #fff;
    background: ${(props) => props.theme.palette.themePrimary};
    padding: 8px 20px;
    text-decoration: none;
    border-radius: 20px;
    display: inline-block;
    font-size: 13px;
    border: none;
    &:hover,
    &:active,
    &:focus {
      color: #fff;
      background-color: ${(props) => props.theme.palette.themeSecondary};
      outline: none;
      cursor: pointer;
    }
  }
`;
