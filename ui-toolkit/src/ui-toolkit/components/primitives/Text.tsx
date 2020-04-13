import React from "react";
import styled from "ui-toolkit/styled-components";
import { getThemeValue, getThemeColor } from "../PortalsThemeProvider/PortalsThemeProvider";

const CLASS_NAME = "info-ui-toolkit";

export interface TextProps {
  /** An optional class name to help with style overrides */
  className?: string;
  /** You can control what type of HTML it uses. Defaults to DIV. */
  as?: string;
  [key: string]: any;
  /** Any valid CSS color or theme param. */
  color?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  className = "",
  as = "div",
  color = "bodyText",
  ...additionalProps
}) => {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <StyledText {...additionalProps} as={as} className={cssClass} color={color}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.div`
  color: ${(props) => getThemeColor(props.color)};
  .ignore-variant & {
    color: ${(props) => getThemeColor(props.color, false)};
  }
`;
