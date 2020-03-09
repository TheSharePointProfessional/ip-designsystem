import React from "react";
import Thumbnail from "../primitives/Thumbnail";
import Link from "../primitives/Link";
import styled from "styled-components";
import { getSiteUrl } from "../../core/utils/sharepointUtils";
import Card from "../Card/Card";

function Persona({
  photo,
  title,
  subTitle,
  info,
  linkUrl,
  callToAction,
  orientation = "horizontal",
  photoSize,
}: PersonaProps) {
  let profilePicture = (photo) => {
    let siteUrl = getSiteUrl();
    return photo ? photo : `${siteUrl}/_layouts/15/userphoto.aspx?size=L`;
  };

  return (
    <StyledPersonaWrapper
      className="personaWrapper"
      orientation={orientation}
      callToAction={callToAction}
      photoSize={photoSize}
    >
      <Link href={callToAction ? "" : linkUrl} className="personaLink">
        <Card className="personaCard">
          <div className="persona">
            <Thumbnail
              src={profilePicture(photo)}
              shape="circle"
              className="photo"
              height={photoSize}
              width={photoSize}
            />
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
          </div>
        </Card>
      </Link>
    </StyledPersonaWrapper>
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
  photoSize?: string;
}

const StyledPersonaWrapper = styled.div`
  .personaLink {
    :hover > .personaCard {
      background: ${(props) => props.theme.palette.themeSecondary};
      .title,
      .subtitle,
      .info {
        color: ${(props) => props.theme.palette.white};
        text-decoration: none;
      }
    }
  }
  .personaCard {
    box-sizing: border-box;
    width: 100%;
  }
  .persona {
    display: flex;
    flex-direction: ${(props) => (props.orientation === "horizontal" ? "row" : "column")};
    justify-content: ${(props) =>
      props.orientation === "horizontal" ? "flex-start" : "space-around"};
    align-items: center;
    padding: 5px;
    .photo {
      margin-right: ${(props) => (props.orientation === "horizontal" ? "10px" : 0)};
    }
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
  }
`;
