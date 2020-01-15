import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import PanelLink from "../../../components/PanelLink/PanelLink";
import PropsTable from "./PropsTable";
import styled from "styled-components";

let docs: ComponentDocumentation = {
  title: "Panel Link",
  id: "PanelLink",
  description: (
    <>
      <p>A component for rendering a panel containing an iframe inside the content area</p>
      <p>It extends the Fabric UI panel component.</p>
      <PropsTable
        props={[
          {
            name: "href",
            isRequired: true,
            description: "Url to be rendered inside the panel",
            type: "string",
          },
          {
            name: "children",
            isRequired: true,
            description:
              "The child element will be rendered as the link text and in the panel header.",
            type: "any",
          },
          {
            name: "size",
            isRequired: false,
            description:
              "Allows setting the size of the panel. You have options of 'small', 'medium', or 'large' with the default being 'medium'.",
            type: "string",
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
        PanelLink,
      },
      code: `<PanelLink href="https://en.wikipedia.org/wiki/React_(web_framework)" >React Wiki</PanelLink>`,
    },
  ],
};

export default docs;
