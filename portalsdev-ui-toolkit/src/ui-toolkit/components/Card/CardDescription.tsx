import React from "react";
import styled from "ui-toolkit/styled-components";
import Shave from "../Shave/Shave";
import { getThemeValue } from "../PortalsThemeProvider/PortalsThemeProvider";

const CLASS_NAME = "card-description";
export default function CardDescription({ children, className = "", as = "p", shave = 0 }) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <Shave
      enabled={shave > 0}
      maxHeight={shave}
      // TODO: update this to allow any element
      el={as}
      className={cssClass}
      style={{ padding: "10px 0" }}
    >
      {children}
    </Shave>
  );
}

const StyledDescription = styled.p`
  /* font-weight: 200; */
  padding: 10px 0;
  color: ${(props) => getThemeValue("semanticColors.bodyText", "#333")};
  .ignore-variant & {
    color: ${(props) => getThemeValue("global.bodyText", "#333")};
  }
`;
