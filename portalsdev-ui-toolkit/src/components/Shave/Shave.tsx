// import React from "react";

// function Shave({ children, el = "div", maxHeight = 100, enabled = true }) {
//   let Element = el as any;
//   let elemRef = React.useRef(null);
//   React.useEffect(() => {
//     if (enabled) {
//       shave(elemRef.current, maxHeight);
//     }
//   }, [children, maxHeight, enabled]);

//   return (
//     <Element key={enabled} ref={elemRef} data-enabled={enabled}>
//       {children}
//     </Element>
//   );
// }

import React from "react";
import shave from "shave";

import styled from "styled-components";

const CLASS_NAME = "shaved";

export interface ShaveProps {
  // props
  el?: string;
  maxHeight?: number;
  enabled?: boolean;
  className?: string;
  [key: string]: any;
}

const Shave: React.FC<ShaveProps> = ({
  el = "div",
  enabled = true,
  maxHeight = 100,
  children,
  className = "",
  ...additionalProps
}) => {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  let Element = el as any;
  let elemRef = React.useRef(null);
  React.useEffect(() => {
    if (enabled) {
      shave(elemRef.current, maxHeight);
    }
  }, [children, maxHeight, enabled]);

  return (
    <Element
      key={enabled}
      ref={elemRef}
      className={cssClass}
      {...additionalProps}
      data-enabled={enabled}
    >
      {children}
    </Element>
  );
};

export default Shave;
