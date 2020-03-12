import React from "react";
import { ComponentDocumentation } from "./docs";
import Filmstrip from "../../../components/Filmstrip/Filmstrip";
import Card from "../../../components/Card/Card";

let items = Array.from(new Array(10)).map((_, i) => ({
  title: "Item " + i,
  description: "This is the items's description",
}));

let documentation: ComponentDocumentation = {
  title: "Filmstrip",
  id: "Filmstrip",
  description: (
    <>
      <h1>Filmstrip</h1>
    </>
  ),
  demos: [
    {
      title: "Basic",
      description: "Description",
      slug: "basic",
      scope: { Filmstrip, items, Card },
      code: `
<Filmstrip>
{items.map(item => (
  <Card key={item.title}>
    <h1>{item.title}</h1>
    <p>{item.description}</p>
  </Card>
))}
</Filmstrip>
      `,
    },
  ],
};

export default documentation;
