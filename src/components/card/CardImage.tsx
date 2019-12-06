import React from "react";
import styled from "styled-components";
import CardLink from "./CardLink";

const CLASS_NAME = "card-image";
const DEFAULT_SIZE = 160;
export default function CardImage({
  children,
  url = "",
  src,
  className = "",
  size = DEFAULT_SIZE,
}) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  let inlineStyles = { backgroundImage: `url('${src}')` };
  return (
    <StyledImageContainer className={cssClass} size={size}>
      <CardLink href={url} className={className}>
        <div className="img" style={inlineStyles}>
          {children}
        </div>
      </CardLink>
    </StyledImageContainer>
  );
}

const StyledImageContainer = styled.div`
  /* font-weight: 200; */
  height: ${(props) => (props.size || DEFAULT_SIZE) + "px"};
  width: 100%;
  opacity: 1;
  /* margin: 0 0 10px 0 !important; */
  a .img:hover {
    opacity: 0.85;
  }
  div.img {
    background-size: cover;
    height: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
