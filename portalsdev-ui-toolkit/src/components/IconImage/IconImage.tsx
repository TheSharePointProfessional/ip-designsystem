import React from "react";
import styled from "styled-components";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { getHexColor } from "../ColorPicker/ThemeColorPicker";
import BackgroundImage from "../primitives/BackgroundImage";

const CLASS_NAME = "icon-image";

const defaultProps: IconImageProps = {
  icon: "Photo2",
  width: 120,
  height: 120,
  backgroundColor: "themePrimary",
  iconColor: "#fff",
  circle: false,
  className: "",
};

export default function IconImage(props: IconImageProps) {
  let fullProps = { ...defaultProps, ...props };

  let cssClass = [CLASS_NAME, fullProps.className, fullProps.circle ? "circle" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <StyledContainer {...fullProps} className={cssClass}>
      {checkIsIconName(fullProps.icon) ? (
        <Icon iconName={fullProps.icon} />
      ) : (
        <BackgroundImage src={fullProps.icon} />
      )}
    </StyledContainer>
  );
}

const wordRegex = /^\w+$/;
const checkIsIconName = function(icon: string): boolean {
  if (!icon) return false;
  return wordRegex.test(icon);
};

const getIconFontSize = function(width, height) {
  let smallerDimension = width < height ? width : height;
  return smallerDimension * 0.5 + "px";
};

const StyledContainer = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${(props) => getHexColor(props.backgroundColor)};
  color: ${(props) => getHexColor(props.iconColor)};
  font-size: ${(props) => getIconFontSize(props.width, props.height)};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &.circle {
    border-radius: 50%;
  }
`;

export interface IconImageProps {
  icon: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  iconColor?: string;
  circle?: boolean;
  className?: string;
}
