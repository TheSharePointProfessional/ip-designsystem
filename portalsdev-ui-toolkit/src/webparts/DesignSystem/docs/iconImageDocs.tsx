import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import Link from "../../../components/primitives/Link";
import IconImage from "../../../components/IconImage/IconImage";
import PropsTable from "./PropsTable";
import styled from "styled-components";

let docs: ComponentDocumentation = {
  title: "Icon Image",
  id: "IconImage",
  description: (
    <>
      <p>
        A component for rendering either a Fabric icon or an image that crops to whatever size you
        specify. Also supports an optional <code>circle</code> prop for changing the shape to a
        circle(width and height have to be equal).
      </p>
      <p>
        If a Fabric icon name is provided to the icon property then it will render an icon, if an
        image url is provided then it will render the image instead.
      </p>
      <PropsTable
        props={[
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
        IconImage,
      },
      code: `
<div style={{ width: "100%",display: "flex",justifyContent: "space-around",textAlign: "center" }}>
  <div>
    <IconImage icon="vacation" />
    Fabric Icon
  </div>
  <div>
    <IconImage
      icon="https://images.vexels.com/media/users/3/135694/isolated/preview/ea8854b19670e0a1710f6684f969519b-colorful-code-web-icon-by-vexels.png"
      backgroundColor="#0000ff"
    />
    Transparent Image
  </div>
  <div>
    <IconImage icon="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" circle />
    Circle
  </div>
</div>
      `,
    },
    {
      title: "Using As A Link",
      description: "",
      slug: "icon-image-link",
      scope: {
        IconImage,
        Link,
      },
      code: `
<Link href="google.com">
  <IconImage icon="vacation" />
</Link>
      `,
    },
  ],
};

export default docs;
