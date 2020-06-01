import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as uiToolkit from "ui-toolkit";

const images = [
  "https://thumbs-prod.si-cdn.com/EmpGS8PcTnjeik1JWjCHuDPPeyQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/cb/87/cb87fada-31dd-40eb-8d1d-e3b5d738d327/istock-120911394.jpg",
  "https://adventureisoutthere-exploreidaho.weebly.com/uploads/2/7/8/4/27843901/8719353_orig.jpg",
  "https://live.staticflickr.com/5826/30451145465_83cc33a27f_b.jpg",
  "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBxpA4RYwsIVGWSXbO3xMTbNTjNXV9_O3ODGUSPrk7_dt2_Yd&s",
];

const items = Array.from(new Array(50)).map((_, i) => ({
  title: "Item " + (i + 1),
  image: images[i % images.length],
  description: "This is the items's description",
}));

const scope = {
  React,
  ...uiToolkit,
  images,
  items,
};

export default function Playground({ code, bordered = false }) {
  let [showCode, setShowCode] = React.useState(false);
  return (
    <LiveProvider code={code} scope={scope} theme={{ plain: {}, styles: [] }}>
      <StyledPreview className={bordered ? "bordered" : ""} />
      <StyledEditorContainer>
        {showCode && <StyledDivider />}
        {showCode && <StyledEditor className="styled-editor" />}

        <DefaultButton className="toggle-code" onClick={(e) => setShowCode(!showCode)}>
          {showCode ? "Hide Code" : "View Code"}
        </DefaultButton>
      </StyledEditorContainer>
      <StyledError />
    </LiveProvider>
  );
}

const StyledPreview = styled(LivePreview)`
  &.bordered {
    border: 1px solid #eee;
    border-radius: 4px 4px 0 0;
    padding: 10px;
  }
  min-height: 100px;
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const StyledEditorContainer = styled.div`
  position: relative;
  min-height: 40px;
  .toggle-code {
    position: absolute;
    top: 13px;
    right: 8px;
  }
`;
const StyledDivider = styled.div`
  width: 100%;
  background: steelblue;
  height: 5px;
`;
const StyledEditor = styled(LiveEditor)`
  background: #f7f7f7;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  min-height: 50px;

  textarea::selection {
    background: #ddd;
  }
`;

const StyledError = styled(LiveError)`
  border: 1px solid #e5cdcd;
  color: #9c2121;
  padding: 20px 10px;
  background: #fff9f9;
  border-radius: 4px;
`;
