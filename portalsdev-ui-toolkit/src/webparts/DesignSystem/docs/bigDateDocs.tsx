import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import BigDate from "../../../components/BigDate/BigDate";
import PropsTable from "./PropsTable";

let documentation: ComponentDocumentation = {
  title: "Big Date",
  id: "BigDate",
  description: (
    <>
      <p>
        Displays a date nice and big with white text and a text shadows. Looks good over images or
        background colors.
      </p>
      <PropsTable
        props={[
          {
            name: "date",
            isRequired: true,
            type: "Date",
            description: "The date to be display",
          },
          {
            name: "className",
            isRequired: false,
            type: "string",
            description: "If you want to tack on your own class name.",
          },
          {
            name: "style",
            isRequired: false,
            type: "Object",
            description: "A styles object you can pass in to add inline styles.",
          },
        ]}
      />
    </>
  ),
  demos: [
    {
      title: "Basic Usage",
      slug: "basic-usage",
      description: "",
      scope: { BigDate },
      code: `<div style={{ background:"#387c9c", borderRadius:"50%" }}>
  <BigDate date={new Date()} />
</div>`,
    },
    {
      title: "Styles override",
      slug: "styles-override",
      description: "Shows how you can pass a styles object to set inline styles",
      scope: { BigDate },
      code: `<BigDate 
  date={new Date()} 
  style={{ fontSize: "36px", color: "#387c9c", textShadow: "none" }} 
/>
`,
    },
  ],
};

export default documentation;
