import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useFilmstrip from "./useFilmstrip";

const CLASS_NAME = "filmstrip";

const Filmstrip: React.FC<FilmstripProps> = function({
  width = 400,
  children,
  className = "",
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
    <div style={{ position: "relative" }}>
      <StyleFilmstrip ref={containerRef} className={cssClass} itemWidth={itemWidth}>
        {children}
      </StyleFilmstrip>
      {!paging.isDisabled && (
        <StyledPagingButton onClick={paging.goBack} className="prev">
          Prev
        </StyledPagingButton>
      )}
      <StyledPagingButton onClick={paging.goForward} className="next">
        Next
      </StyledPagingButton>
    </div>
  );
};
export default Filmstrip;

export interface FilmstripProps {
  className?: string;
  [key: string]: any;
}

const StyledPagingButton = styled.button`
  position: absolute;
  top: 50%;
  &.next {
    right: 0px;
  }
  &.prev {
    left: 0px;
  }
`;
const StyleFilmstrip = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-right: -10px;
  > * {
    flex: 0 0 ${(props) => props.itemWidth}px;
    margin-right: 10px;
    scroll-snap-align: start;
  }
`;
