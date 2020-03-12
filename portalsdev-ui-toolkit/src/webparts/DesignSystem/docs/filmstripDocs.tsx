import React from "react";
import { ComponentDocumentation } from "./docs";
import Filmstrip from "../../../components/Filmstrip/Filmstrip";
import Card from "../../../components/Card/Card";
import PropsTable from "./PropsTable";

let items = Array.from(new Array(10)).map((_, i) => ({
  title: "Item " + (i + 1),
  description: "This is the items's description",
}));

let documentation: ComponentDocumentation = {
  title: "Filmstrip",
  id: "Filmstrip",
  description: (
    <>
      <p>
        Displays arbitrary <code>children</code> components in a row.
      </p>
      <ul>
        <li>
          Uniformally sizes your items to fit the parent container (based on your target width)
        </li>
        <li>
          Handles paging with Prev and Next buttons. The buttons only appear if you can't fit all
          the items into one frame.
        </li>
        <li>Handles autopaging after a specified interval(defaults to 5 seconds)</li>
        <li>Built in touch support so you can swipe left or right</li>
      </ul>
      <PropsTable
        props={[
          {
            name: "width",
            isRequired: false,
            type: "number",
            description: "The minimum width for each of your filmstrip items. Defaults to 400",
          },
          {
            name: "spacing",
            isRequired: false,
            type: "number",
            description: "The whitespace between each filmstrip item. Defaults to 10",
          },
          {
            name: "autopage",
            isRequired: false,
            type: "number",
            description:
              "The autopage interval. Defaults to 0 (disabled). If you pass a value greater than 0 autopaging is enabled.",
          },
        ]}
      />
    </>
  ),
  demos: [
    {
      title: "Basic",
      description:
        "The Filmstrip component just expects an array of Children components. It shouldn't matter what you render for each child.",
      slug: "basic",
      scope: { Filmstrip, Card },
      code: `
    <Filmstrip>
      <Card centered>One</Card>
      <Card centered>Two</Card>
      <Card centered>Three</Card>
      <Card centered>Four</Card>
      <Card centered>Five</Card>
      <Card centered>Six</Card>
      <Card centered>Seven</Card>
      <Card centered>Eight</Card>
    </Filmstrip>     
`,
    },
    {
      title: "Item Mapping",
      description:
        "Typically you'll probably map through an array of items and render each item however you want.",
      slug: "item-mapping",
      scope: { Filmstrip, items, Card },
      code: `
<Filmstrip autopage={2000}>
{items.map(item => (
  <Card key={item.title}>
    <Card.Title>{item.title}</Card.Title>
    <Card.Description>{item.description}</Card.Description>
  </Card>
))}
</Filmstrip>
      `,
    },
  ],
};

export default documentation;
