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
  paneRef: React.MutableRefObject<Element>,
  opts = defaults
) {
  // Keep track of the 'filmstrip-items' ref which is used for scrolling
  let itemsRef = useRef(paneRef.current);
  useEffect(() => {
    itemsRef.current = paneRef.current.querySelector(".filmstrip-items") as any;
  }, [paneRef.current]);

  let { itemMinWidth, spacing, autopage, autopageDelay } = {
    ...defaults,
    ...opts,
  };
  // Figure out how many items fit based on the size of the Pane (topmost) element
  let [numItemsThatFit, itemWidth, parentWidth] = useHowManyFit(itemMinWidth, paneRef, {
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
    if (itemsRef.current) {
      console.log("Adding scroll event");
      itemsRef.current.addEventListener("scroll", handler);
    }
    () => itemsRef.current.removeEventListener("scroll", handler);
  }, [itemWidth, paging.currentPage]);

  useEffect(() => {
    console.log("Scrolling", itemsRef.current);
    if (itemsRef.current) {
      console.log("scrolling", scrollPosition);
      itemsRef.current.scrollTo(scrollPosition, 0);
    }
  }, [scrollPosition]);

  let isDisabled = totalCount <= numItemsThatFit;
  let isHovered = useHover(paneRef);
  // if they passed a small number, they probably meant seconds, so multiply by 1000
  autopageDelay = autopageDelay < 100 ? autopageDelay * 1000 : autopageDelay;

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
