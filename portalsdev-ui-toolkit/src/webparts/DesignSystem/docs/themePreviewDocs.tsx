import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import ThemePreview from "ui-toolkit/components/ThemePreview/ThemePreview";
import PropsTable from "./PropsTable";

let docs: ComponentDocumentation = {
  title: "Theme Preview",
  description: (
    <>
      <p>
        Automatically pulls in the current theme and displays all its values as color swatches.
        Provides a search box so you can quickly search by label or color value.
      </p>
    </>
  ),
  id: "ThemePreview",
  demos: [
    {
      title: "Basic Usage",
      slug: "basic-usage",
      description: "",
      scope: { ThemePreview },
      code: `<ThemePreview />`,
    },
  ],
};

export default docs;
