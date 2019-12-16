import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import BackgroundImage from "../../../components/primitives/BackgroundImage";
import BigDate from "../../../components/BigDate/BigDate";
import PropsTable from "./PropsTable";

let docs: ComponentDocumentation = {
  title: "Image",
  id: "BackgroundImage",
  description: (
    <>
      <p>
        A component for rendering an image that fills and scales and crops to whatever size you
        specify. Also supports an optional <code>url</code> for wrapping the image in a link.
      </p>
      <p>
        Under the covers it uses a <code>div</code> and sets a <code>background-url</code> with a{" "}
        <code>background:cover</code>
      </p>
      <p>
        This is what powers the Thumbnail image and the <code>Card</code> and{" "}
        <code>VerticalList</code> components.
      </p>
      <PropsTable
        props={[
          {
            name: "src",
            isRequired: true,
            description: "The url to the image",
            type: "string",
          },
          {
            name: "style",
            isRequired: false,
            type: "Object",
            description:
              "A styles object you can use to add inline styles. Make sure to specify a width and height using the style object. If you don't specify a width and height, it will use 100% of parent.",
          },
          {
            name: "url",
            isRequired: false,
            type: "string",
            description: "If a url is provided, the image will be wrapped in an anchor tag.",
          },
          {
            name: "children",
            isRequired: false,
            type: "JSX.Element",
            description:
              "You can render abitrary JSX inside of the BackgroundImage and it will be overlayed and centered on the image.",
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
      description:
        "Make sure to specify a width and height using the style object. If you don't specify a width and height, it will use 100% of parent.",
      slug: "basic-usage",
      scope: {
        BackgroundImage,
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
      },
      code: `<div style={{ display: "flex", flexWrap: "wrap" }}>

    <BackgroundImage
        style={{ width: "200px", height: "200px" }}
        src={imageUrl}
    />

    <div style={{ width: "10px" }}></div>

    <BackgroundImage
        style={{ width: "550px", height: "200px" }}
        src={imageUrl}
    />

    <div style={{ width: "10px" }}></div>

    <div style={{ width: "100px", height: "200px" }}>
        <BackgroundImage src={imageUrl} />
    </div>
    
</div>`,
    },
    {
      title: "Interactive Demo",
      description: "Allows you to see what an image looks like at diffent sizes",
      scope: { BackgroundImage },
      slug: "interactive",
      code: `() => {
    let [width, setWidth] = React.useState(400);
    let [height, setHeight] = React.useState(200);
    let imageSrc =
        "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg";
    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <input
                    type="number"
                    value={width}
                    onChange={e => setWidth(e.currentTarget.value)}
                />
                X
                <input
                    type="number"
                    value={height}
                    onChange={e => setHeight(e.currentTarget.value)}
                />
            </div>
            <BackgroundImage
                style={{
                    width: width + "px",
                    height: height + "px"
                }}
                src={imageSrc}
                url={imageSrc}
            />
        </div>
    );
}`,
    },
    {
      title: "Custom Overlay",
      description: "You can pass JSX to be rendered over the image",
      slug: "custom-overlay",
      scope: { BackgroundImage, BigDate },
      code: `<BackgroundImage
    style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%"
    }}
    src="https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg"
>
    <BigDate date={new Date()} />
</BackgroundImage>
      `,
    },
  ],
};

export default docs;
