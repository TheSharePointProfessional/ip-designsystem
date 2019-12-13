import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import BackgroundImage from "../../../components/primitives/BackgroundImage";
import FlexGrid from "../../../components/primitives/FlexGrid";
import BigDate from "../../../components/BigDate/BigDate";
import PropsTable from "./PropsTable";
import styled from "styled-components";

let docs: ComponentDocumentation = {
  title: "Grid - Flex",
  id: "FlexGrid",
  description: (
    <>
      <p>
        A component for rendering a grid of items but using <code>flexbox</code> which is compatible
        with IE11.
      </p>
      <p>
        Becuase it's Flexbox (and not CSS Grid), you'll need to make sure each grid item is styled
        with a consistent height.
      </p>
      <PropsTable
        props={[
          {
            name: "gap",
            isRequired: false,
            description: "The space between each grid item. Defaults to 20px.",
            type: "number",
          },
          {
            name: "flexSize",
            isRequired: false,
            description:
              "If you want the grid items to dynamically size (flex) to fill the parent container width, pass a flexSize. Otherwise it is assumed you have an explicit width on each child grid item.",
            type: "number",
          },
          {
            name: "className",
            isRequired: false,
            type: "string",
            description: "If you want to tack on your own class name.",
          },
        ]}
      />
    </>
  ),
  demos: [
    {
      title: "Explicit Width",
      description: "You can specify a width right on the child grid items and it will respect that",
      slug: "explicit-width",
      scope: {
        BackgroundImage,
        FlexGrid,
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
      },
      code: `<FlexGrid>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px", width: "200px" }} src={imageUrl}/>
</FlexGrid>
      `,
    },
    {
      title: "Flex Width",
      description: "You can specify a flexSize and it will stretch to fill the contiainer.",
      slug: "flex-width",
      scope: {
        BackgroundImage,
        FlexGrid,
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
      },
      code: `<FlexGrid flexSize={"300px"} gap={1}>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
</FlexGrid>`,
    },
  ],
};

export default docs;
