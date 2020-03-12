import { useRef, useEffect, useState } from "react";
import useHowManyFit from "../../hooks/useHowManyFit";
import { usePaging, usePagedItems } from "../../hooks/usePaging";
import useHover from "../../hooks/useHover";
import useInterval from "../../hooks/useInterval";

export interface FilmstripOptions {
  itemMinWidth?: number;
  spacing?: number;
  autopage?: boolean;
  autopageDelay?: number;
}

const defaults: FilmstripOptions = {
  itemMinWidth: 300,
  spacing: 10,
  autopage: true,
  autopageDelay: 5000,
};

const useFilmstrip = function<T>(
  totalCount: number,
  containerRef: React.MutableRefObject<Element>,
  opts = defaults
) {
  let { itemMinWidth, spacing, autopage, autopageDelay } = {
    ...defaults,
    ...opts,
  };
  let [numItemsThatFit, itemWidth, parentWidth] = useHowManyFit(itemMinWidth, containerRef, {
    spacing,
  });

  if (totalCount < numItemsThatFit) {
    numItemsThatFit = totalCount;
  }
  let paging = usePaging(totalCount);

  // Track scroll position in State
  let [scrollPosition, setScrollPosition] = useState(0);

  // Set scroll position based on the current page
  useEffect(() => {
    // If we can't fill a full frame with items, cycle back to the beginning
    if (paging.currentPage + numItemsThatFit > totalCount + 1) {
      paging.goTo(1);
    } else {
      setScrollPosition((paging.currentPage - 1) * itemWidth);
    }
  }, [paging.currentPage, numItemsThatFit, totalCount]);

  useEffect(() => {
    const handler = (e) => {
      let currentPage = Math.ceil(e.target.scrollLeft / itemWidth);
      console.log("CURRENT PAGE", e.target.scrollLeft, currentPage, paging.currentPage);
      // if (paging.currentPage !== currentPage) {
      //   paging.goTo(currentPage);
      // }
    };
    if (containerRef.current) {
      console.log("Adding scroll event");
      containerRef.current.addEventListener("scroll", handler);
    }
    () => containerRef.current.removeEventListener("scroll", handler);
  }, [itemWidth, paging.currentPage]);

  useEffect(() => {
    if (containerRef.current) {
      console.log("scrolling", scrollPosition);
      containerRef.current.scrollTo(scrollPosition, 0);
    }
  }, [scrollPosition]);

  let isDisabled = totalCount <= numItemsThatFit;
  let isHovered = useHover(containerRef);
  // if they passed a small number, they probably meant seconds, so multiply by 1000
  autopageDelay = autopageDelay < 100 ? autopageDelay * 1000 : autopageDelay;

  console.log("Delay", autopageDelay, opts);
  // Pause on hover
  if (isHovered || !autopage || isDisabled) {
    autopageDelay = 0;
  }
  useInterval(paging.goForward, autopageDelay, [autopageDelay, paging.currentPage].join(""));

  return {
    scrollPosition,
    paging: { ...paging, isDisabled },
    itemWidth,
    numItemsThatFit,
    parentWidth,
  };
};

export default useFilmstrip;
