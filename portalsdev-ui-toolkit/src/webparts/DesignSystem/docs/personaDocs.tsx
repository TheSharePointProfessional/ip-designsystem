import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import Persona from "../../../components/Persona/Persona";
import Card from "../../../components/Card/Card";
import PropsTable from "./PropsTable";

let documentation: ComponentDocumentation = {
  title: "Persona",
  id: "Persona",
  description: (
    <>
      <p>Displays a user with a photo and title.</p>
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
      scope: { Persona },
      code: `<Persona 
    photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Will Spiering"
    subTitle="Software Engineer"
    info="Modern Workplace"
    callToAction="Learn More"
    linkUrl="google.com"
/>`,
    },
    {
      title: "Inside Card",
      slug: "inside-card",
      description: "",
      scope: { Persona, Card },
      code: `<Card>
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        info="Modern Workplace"
        callToAction="Learn More"
        linkUrl="google.com"
    />
</Card>`,
    },
    {
      title: "Item Orientation",
      slug: "item-orientation",
      description: "",
      scope: { Persona, Card },
      code: `()=> {
let [orientation, setOrientation] = React.useState("horizontal");

return (
    <>
    <div style={{width: "100%"}}>
        <input
        type="radio"
        id="horizontal"
        name="horizontal"
        value="horizontal"
        checked={orientation === "horizontal"}
        onChange={e => setOrientation(e.currentTarget.value)}
        />
        <label htmlFor="horizontal">Horizontal</label>
        <br />
        <input
        type="radio"
        id="vertical"
        name="vertical"
        value="vertical"
        checked={orientation === "vertical"}
        onChange={e => setOrientation(e.currentTarget.value)}
        />
        <label htmlFor="vertical">Vertical</label>
        <br />
    </div>
    <Card>
        <Persona
            orientation={orientation}
            photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Will Spiering"
            subTitle="Software Engineer"
            info="Modern Workplace"
            callToAction="Learn More"
            linkUrl="google.com"
        />
    </Card>
    </>
);
}
`,
    },
    {
      title: "No Info",
      slug: "no-info",
      description: "",
      scope: { Persona, Card },
      code: `<Card>
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        callToAction="Learn More"
        linkUrl="google.com"
    />
</Card>`,
    },
    {
      title: "No Subtitle",
      slug: "no-subtitle",
      description: "",
      scope: { Persona, Card },
      code: `<Card>
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        callToAction="Learn More"
        linkUrl="google.com"
    />
</Card>`,
    },
    {
      title: "No Call to Action",
      slug: "no-call-to-action",
      description: "",
      scope: { Persona, Card },
      code: `<Card>
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        linkUrl="google.com"
    />
</Card>`,
    },
  ],
};

export default documentation;
