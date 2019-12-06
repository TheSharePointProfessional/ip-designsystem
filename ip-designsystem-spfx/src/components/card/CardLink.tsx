import React from "react";
import styled from "styled-components";
import { parse as parseUrl } from "url";

const CLASS_NAME = "card-link";

export default function CardLink({
  href = "",
  children,
  target = "",
  className = ""
}) {
  if (!href) return children;
  let computedTarget = calculateLinkTarget(href, target);
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <StyledCardLink href={href} target={computedTarget} className={cssClass}>
      {children}
    </StyledCardLink>
  );
}

const StyledCardLink = styled.a`
  text-decoration: none;
  padding: 0;
  color: ${props => props.theme.semanticColors.bodyText};
  &:hover {
    color: ${props => props.theme.palette.themePrimary};
  }
`;

const calculateLinkTarget = function(url, target) {
  if (target || !url) return target;

  try {
    let currentHost = window.location.host;
    let targetUrl = parseUrl(url);
    return targetUrl.host &&
      targetUrl.host.toLowerCase() !== currentHost.toLowerCase()
      ? "_blank"
      : "_self";
  } catch (err) {
    return "_self";
  }
};
