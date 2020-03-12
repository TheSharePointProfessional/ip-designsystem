import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useFilmstrip from "./useFilmstrip";

const CLASS_NAME = "filmstrip";

const Filmstrip: React.FC<FilmstripProps> = function({
  width = 400,
  children,
  className = "",
  spacing = 25,
  ...rest
}) {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  let containerRef = useRef(null);
  let totalCount = React.Children.count(children);
  let { scrollPosition, paging, itemWidth, numItemsThatFit, parentWidth } = useFilmstrip(
    totalCount,
    containerRef,
    {
      itemMinWidth: width,
      autopageDelay: 5000,
      autopage: false,
      spacing,
    }
  );

  // let maxScroll = itemWidth * totalCount - itemWidth;

  // useEffect(() => {
  //   const handler = (e) => {
  //     let currentPage = Math.ceil(e.target.scrollLeft / itemWidth);
  //     console.log("CURRENT PAGE", e.target.scrollLeft, currentPage);
  //   };
  //   if (containerRef.current) {
  //     console.log("Adding scroll event");
  //     containerRef.current.addEventListener("scroll", handler);
  //   }
  //   () => containerRef.current.removeEventListener("scroll", handler);
  // }, [itemWidth]);

  return (
    <StyledPane className={cssClass} ref={containerRef}>
      <StyledItems itemWidth={itemWidth} className="filmstrip-items" spacing={spacing}>
        {children}
      </StyledItems>
      {!paging.isDisabled && (
        <StyledPagingButton onClick={paging.goBack} className="prev">
          Prev
        </StyledPagingButton>
      )}
      <StyledPagingButton onClick={paging.goForward} className="next">
        Next
      </StyledPagingButton>
    </StyledPane>
  );
};
export default Filmstrip;

export interface FilmstripProps {
  className?: string;
  [key: string]: any;
}

const StyledPagingButton = styled.button`
  position: absolute;
  bottom: 50%;
  &.next {
    right: 0px;
  }
  &.prev {
    left: 0px;
  }
`;

const StyledPane = styled.div`
  position: relative;
  width: 100%;
  margin-right: -${(props) => props.spacing}px;
  box-sizing: border-box;
`;
const StyledItems = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-right: -${(props) => props.spacing}px;
  padding-bottom: 16px;
  > * {
    box-sizing: border-box;

    flex: 0 0 ${(props) => Math.ceil(props.itemWidth)}px;
    margin-right: ${(props) => props.spacing}px;
    scroll-snap-align: start;
  }
`;
