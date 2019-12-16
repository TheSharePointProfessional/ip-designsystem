import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import BackgroundImage from "../../../components/primitives/BackgroundImage";
import Grid from "../../../components/Grid/Grid";
import PropsTable from "./PropsTable";

let docs: ComponentDocumentation = {
  title: "Grid",
  id: "Grid",
  description: (
    <>
      <p>
        A component for rendering a grid of items. It checks browser support and uses{" "}
        <code>CSS Grid</code> if possible, otherwise it falls back to <code>flexbox</code> which is
        compatible with IE11.
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
            name: "size",
            isRequired: false,
            description:
              "The size of each column. Defaults to 200px. If 'shouldFlex' is false, the column will be exactly this width. If 'shouldFlex' is true then the column will be as close this width as possible while filling the entire parent width.",
            type: "string",
          },
          {
            name: "shouldFlex",
            isRequired: false,
            description:
              "Should the columns flex (by width) to fill the entire parent container? Defaults to 'true'",
            type: "boolean",
          },
          {
            name: "mode",
            isRequired: false,
            description:
              "Defaults to 'best'. 'best' or 'grid' or 'flex'. Allows you to control whether to use CSS Grid or Flexbox.",
            type: "string",
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
        BackgroundImage,
        Grid,
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
      },
      code: `<Grid size={"300px"}>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
</Grid>
      `,
    },
    {
      title: "No Flex",
      description:
        "Respect the size prop and don't stretch the column width to fill the available parent width.",
      slug: "basic-usage",
      scope: {
        BackgroundImage,
        Grid,
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
      },
      code: `<Grid size={"300px"} shouldFlex={false}>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
      <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
  </Grid>
        `,
    },
    {
      title: "Force Flexbox Mode",
      description: "You can pass a mode of 'flex' to force it to use Flexbox instead of CSS Grid",
      slug: "flexbox-mode",
      scope: {
        BackgroundImage,
        Grid,
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
      },
      code: `<Grid mode="flex" size={"200px"} gap={1}>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
    <BackgroundImage style={{ height: "150px" }} src={imageUrl}/>
</Grid>`,
    },
    {
      title: "Interactive Demo",
      description: "",
      slug: "interactive-demo",
      scope: {
        BackgroundImage,
        Grid,
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
      },
      code: `() => {
  let [width, setWidth] = React.useState(300);
  let [height, setHeight] = React.useState(150);
  let [shouldFlex, setShouldFlex] = React.useState(true);
  let [imageUrl, setImageUrl] = React.useState(
    "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg"
  );
  return (
    <>
      <form>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="imageUrl">Image</label>
          <textarea
            rows={5}
            style={{ width: "320px" }}
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={e =>
              setImageUrl(e.currentTarget.value)
            }
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="width">Width</label>
          <input
            type="number"
            name="width"
            value={width}
            onChange={e =>
              setWidth(e.currentTarget.value)
            }
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={e =>
              setHeight(e.currentTarget.value)
            }
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="height">Should Flex?</label>
          <input
            type="checkbox"
            name="shouldFlex"
            checked={shouldFlex}
            onClick={() => setShouldFlex(!shouldFlex)}
          />
        </div>
      </form>
      <Grid size={width + "px"} shouldFlex={shouldFlex}>
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
        <BackgroundImage
          style={{ height: height + "px" }}
          src={imageUrl}
        />
      </Grid>
    </>
  );
}`,
    },
  ],
};

export default docs;
