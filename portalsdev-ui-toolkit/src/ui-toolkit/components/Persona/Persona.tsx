import React from "react";
import Thumbnail from "../primitives/Thumbnail";
import Link from "../primitives/Link";
import styled from "ui-toolkit/styled-components";
import { getSiteUrl } from "../../core/utils/sharepointUtils";
import Title from "../primitives/Title";
import Text from "../primitives/Text";
import { getThemeColor } from "../PortalsThemeProvider/PortalsThemeProvider";

function Persona({
  photo,
  title,
  subTitle,
  info,
  linkUrl,
  callToAction,
  orientation = "horizontal",
  photoSize,
  as = "div",
  ...rest
}: PersonaProps) {
  let profilePicture = (photo) => {
    let siteUrl = getSiteUrl();
    return photo ? photo : `${siteUrl}/_layouts/15/userphoto.aspx?size=L`;
  };

  return (
    <StyledPersonaWrapper as={as} {...rest}>
      <Link href={callToAction ? "" : linkUrl} className="personaLink">
        <StyledPersona className={"persona " + orientation}>
          <Thumbnail
            src={profilePicture(photo)}
            shape="circle"
            className="photo"
            height={photoSize}
            width={photoSize}
          />
          <div className={"details"}>
            <div className="textWrapper">
              <Title className="title">{title}</Title>
              {subTitle && (
                <Text color={"bodySubtext"} className="subtitle">
                  {subTitle}
                </Text>
              )}
              {info && <Text className="info">{info}</Text>}
            </div>
            {linkUrl && callToAction && (
              <Link href={linkUrl} className="callToAction">
                {callToAction}
              </Link>
            )}
          </div>
        </StyledPersona>
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
  as?: any;
  [key: string]: any;
}

const StyledPersonaWrapper = styled.div`
  &:not(.card-ui-toolkit) {
    .personaLink {
      > .persona {
        border-radius: 5px;
        padding: 10px;
      }
      &:hover > .persona {
        background: ${(props) => props.theme.palette.themeSecondary};
        .title,
        .subtitle,
        .info {
          color: ${(props) => props.theme.palette.white};
          text-decoration: none;
        }
      }
    }
  }
`;

const StyledPersona = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  padding: 5px;

  &.vertical {
    flex-direction: column;
    justify-content: space-around;
    .details {
      text-align: center;
      align-items: center;
    }
  }
  &.horizontal {
    .photo {
      margin-right: 10px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    align-items: flex-start;
  }
  .title {
    font-weight: 600;
  }
  .callToAction {
    margin-top: 10px;
    color: ${(props) => getThemeColor("white")};
    background: ${(props) => getThemeColor("themePrimary")};
    padding: 8px 20px;
    text-decoration: none;
    border-radius: 20px;
    display: inline-block;
    font-size: 13px;
    border: none;
    &:hover,
    &:active,
    &:focus {
      color: ${(props) => getThemeColor("white")};
      background: ${(props) => getThemeColor("themeSecondary")};
      outline: none;
      cursor: pointer;
    }
    .ignore-variant & {
      color: ${(props) => getThemeColor("white", false)};
      background: ${(props) => getThemeColor("themePrimary", false)};
    }
    .ignore-variant &:hover {
      color: ${(props) => getThemeColor("white", false)};
      background: ${(props) => getThemeColor("themeSecondary", false)};
    }
  }
`;
