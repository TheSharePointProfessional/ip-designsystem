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
            name: "styles",
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
  ],
};

export default documentation;
