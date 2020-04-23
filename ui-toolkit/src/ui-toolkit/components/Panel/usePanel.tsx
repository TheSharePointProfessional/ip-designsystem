import React, { useState, useCallback, useEffect } from "react";
import styled from "ui-toolkit/styled-components";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { PanelType } from "office-ui-fabric-react/lib/Panel";

export interface PanelOptions {
  startOpen?: boolean;
  size?: PanelSize;
}
let defaults: PanelOptions = {
  startOpen: false,
  size: "medium",
};

export function usePanel(opts: PanelOptions = {}) {
  let { startOpen, size } = { ...defaults, ...opts };
  let [isOpen, setIsOpen] = useState(startOpen);
  let openPanel = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  let closePanel = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => listenForPanelClose(closePanel));

  let panelProps = {
    isOpen,
    onDismiss: closePanel,
    isLightDismiss: true,
    type: getPanelType(size),
    customWidth: typeof size === "number" ? size + "px" : undefined,
    onRenderNavigation: () => (
      <StyledClose>
        <IconButton iconProps={{ iconName: "ChromeClose" }} onClick={closePanel} />
      </StyledClose>
    ),
  };

  return {
    openPanel,
    closePanel,
    panelProps,
  };
}

export type PanelSize = "small" | "medium" | "large" | number;

const getPanelType = (size) => {
  if (size === "small") {
    return PanelType.smallFixedFar;
  }
  if (size === "medium") {
    return PanelType.medium;
  }
  if (size === "large") {
    return PanelType.large;
  }
  if (typeof size !== "string") {
    return PanelType.custom;
  }
  return PanelType.medium;
};
const CLOSE_MSG_TYPE = "CLOSE_PANEL";

// The parent window should create a panel then wire up this function
// to listen for anyone inside the IFrame trying to close the panel;
export const listenForPanelClose = function (cb: () => void) {
  let handler = (event) => {
    try {
      let msg = JSON.parse(event.data);
      if (msg.type === CLOSE_MSG_TYPE) {
        cb();
      }
    } catch (err) {
      // Couldn't parse json
    }
  };
  window.addEventListener("message", handler, false);
  return () => {
    window.removeEventListener("message", handler);
  };
};

export const triggerPanelClose = function () {
  let msg = JSON.stringify({
    type: CLOSE_MSG_TYPE,
  });
  window.top.postMessage(msg, "*");
};

const StyledClose = styled.div`
  position: absolute;
  top: 5px;
  right: 23px;
  z-index: 10;
  background: #ffffffbf;
  border-radius: 50%;
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`;
