import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import LinkTile from "ui-toolkit/components/LinkTile/LinkTile";
import PropsTable from "./PropsTable";
import styled from "styled-components";

let docs: ComponentDocumentation = {
  title: "Link Tile",
  id: "LinkTile",
  description: (
    <>
      <p>
        A component for rendering an Icon Image component as a link with a caption at the bottom of
        the tile.
      </p>
      <p>
        It extends the props of an Icon Image component and its child is what is rendered as the
        caption.
      </p>
      <PropsTable
        props={[
          {
            name: "href",
            isRequired: true,
            description: "destination url",
            type: "string",
          },
          {
            name: "children",
            isRequired: true,
            description:
              "The child element will be rendered as the caption and appear in the hover animation if showHoverOverlay prop is true.",
            type: "any",
          },
          {
            name: "showHoverOverlay",
            isRequired: false,
            description: "Enables slide up animation on hover if set to true",
            type: "boolean",
          },
          {
            name: "hoverColor",
            isRequired: false,
            description:
              'The color of the hover overlay. Pass in a value like "themePrimary" and get back the hex color code based on the current theme. If you pass a hex code, you get the same color back. You can also pass in rgba values with transparency.',
            type: "string",
          },
          {
            name: "icon",
            isRequired: true,
            description: "The Fabric icon name or the url to the image",
            type: "string",
          },
          {
            name: "width",
            isRequired: false,
            type: "number",
            description:
              "Width of container, if you don't specify a width, it will default to 120px.",
          },
          {
            name: "height",
            isRequired: false,
            type: "number",
            description:
              "Height of container, if you don't specify a height, it will default to 120px.",
          },
          {
            name: "backgroundColor",
            isRequired: false,
            type: "string",
            description:
              'Pass in a value like "themePrimary" and get back the hex color code based on the current theme. If you pass a hex code, you get the same color back. If using a transparent image for your icon prop, this will show through.',
          },
          {
            name: "iconColor",
            isRequired: false,
            type: "string",
            description:
              'Pass in a value like "themePrimary" and get back the hex color code based on the current theme. If you pass a hex code, you get the same color back.',
          },
          {
            name: "circle",
            isRequired: false,
            type: "boolean",
            description:
              "Adds a 50% border radius to the container. Icon will need an equal width and height set for a perfect circle.",
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
      title: "Basic Usage",
      description: "",
      slug: "basic-usage",
      scope: {
        LinkTile,
      },
      code: `
<LinkTile href="google.com" icon="vacation">Test</LinkTile>
      `,
    },
    {
      title: "Hover Overlay Disabled",
      description: "",
      slug: "overlay-disabled",
      scope: {
        LinkTile,
      },
      code: `
<LinkTile href="google.com" icon="vacation" showHoverOverlay={false}>Test</LinkTile>
      `,
    },
    {
      title: "Image with Transparent Overlay",
      description: "",
      slug: "background-transparent-overlay",
      scope: {
        LinkTile,
      },
      code: `
<LinkTile href="google.com" icon="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width={250} height={200} hoverColor={"rgba(0,0,0,.5)"}><h3>Alfa Romeo 4c</h3></LinkTile>
      `,
    },
  ],
};

export default docs;
