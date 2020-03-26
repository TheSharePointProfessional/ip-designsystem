import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import PanelLink from "ui-toolkit/components/PanelLink/PanelLink";
import Card from "ui-toolkit/components/Card/Card";
import PropsTable from "./PropsTable";
import styled from "ui-toolkit/styled-components";

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
            name: "title",
            isRequired: false,
            description: "The title will render in the panel header area.",
            type: "string",
          },
          {
            name: "panelSize",
            isRequired: false,
            description:
              "Allows setting the size of the panel. You have options of 'small', 'medium', 'large', or a number value. The default is 'medium'. If you use a number that will be the width of the panel in pixels, and if the screen size is equal to or less than this value it behaves as a fluid full width panel.",
            type: "string | number",
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
      code: `
<div>
  <PanelLink
    href="https://en.wikipedia.org/wiki/React_(web_framework)"
    title="React Wiki"
  >
    Click Me
  </PanelLink>
  <br/>
  <PanelLink
    href="https://en.wikipedia.org/wiki/React_(web_framework)"
    title="React Wiki"
  >
    <button>Click Me</button>
  </PanelLink>
</div>
`,
    },
    {
      title: "With a Card component",
      description: "",
      slug: "with-card",
      scope: {
        PanelLink,
        Card,
      },
      code: `<PanelLink href="https://en.wikipedia.org/wiki/React_(web_framework)" title="React Wiki" ><Card>
  <h1>I am a card</h1>
  <p>And I am the description of a card</p>        
</Card></PanelLink>`,
    },
  ],
};

export default docs;
