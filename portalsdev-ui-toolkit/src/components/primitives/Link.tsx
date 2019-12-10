import React from "react";
import styled from "styled-components";
import { parse as parseUrl } from "url";

const CLASS_NAME = "custom-link";

export default function Link({
  href = "",
  children,
  target = "",
  className = "",
  styles = {},
  dataInterception = "off",
}) {
  if (!href) return children;
  let computedTarget = calculateLinkTarget(href, target);
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  let props = {
    href,
    target: computedTarget,
    className: cssClass,
    "data-interception": dataInterception,
    style: styles,
  };
  return <StyledLink {...props}>{children}</StyledLink>;
}

const StyledLink = styled.a`
  text-decoration: none;
  padding: 0;
  color: ${(props) => props.theme.semanticColors.bodyText};
  &:hover {
    color: ${(props) => props.theme.palette.themePrimary};
  }
`;

const calculateLinkTarget = function(url, target) {
  if (target || !url) return target;

  try {
    let currentHost = window.location.host;
    let targetUrl = parseUrl(url);
    return targetUrl.host && targetUrl.host.toLowerCase() !== currentHost.toLowerCase()
      ? "_blank"
      : "_self";
  } catch (err) {
    return "_self";
  }
};
