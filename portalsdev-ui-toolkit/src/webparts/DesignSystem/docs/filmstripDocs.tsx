import React from "react";
import { ComponentDocumentation } from "./docs";
import Filmstrip from "ui-toolkit/components/Filmstrip/Filmstrip";
import Card from "ui-toolkit/components/Card/Card";
import Grid from "ui-toolkit/components/Grid/Grid";
import PropsTable from "./PropsTable";

const images = [
  "https://thumbs-prod.si-cdn.com/EmpGS8PcTnjeik1JWjCHuDPPeyQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/cb/87/cb87fada-31dd-40eb-8d1d-e3b5d738d327/istock-120911394.jpg",
  "https://adventureisoutthere-exploreidaho.weebly.com/uploads/2/7/8/4/27843901/8719353_orig.jpg",
  "https://live.staticflickr.com/5826/30451145465_83cc33a27f_b.jpg",
  "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBxpA4RYwsIVGWSXbO3xMTbNTjNXV9_O3ODGUSPrk7_dt2_Yd&s",
];
let items = Array.from(new Array(10)).map((_, i) => ({
  title: "Item " + (i + 1),
  image: images[i % images.length],
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
  <Card className='virtualized-card' styles={{ width: "100%" }}>
    <Card.Image src={item.image} />
    <Card.Title>{item.title}</Card.Title>
    <Card.Description>{item.description}</Card.Description>
  </Card>
))}
</Filmstrip>
      `,
    },
    {
      title: "Layout Toggling",
      description: "This example shows how you could toggle between Grid and Filmstrip",
      slug: "item-mapping",
      scope: { Filmstrip, items, Card, Grid },
      code: `() => {
  let [layout, setLayout] = React.useState("filmstrip");
  let [size, setSize] = React.useState(300);
  let LayoutComponent = layout === "grid" ? Grid : Filmstrip;
  let layoutProps = {
    size: size + "px",
    width: size,
    autopage: 4000,
  }
  return (
    <>
    <div style={{width: "100%", marginBottom:"30px"}}>

    <label>
      Choose a Layout: 
      <select name='layout' value={layout} onChange={e => setLayout(e.currentTarget.value)}>
        <option>grid</option>
        <option>filmstrip</option>
      </select>
    </label>

    <label>
      Choose a size:
      <input type='number' value={size} onChange={e => setSize(e.target.value)}/>
    </label>
    </div>

    <LayoutComponent {...layoutProps}>
    {items.map(item => (
      <Card className='virtualized-card' styles={{ width: "100%" }}>
        <Card.Image src={item.image} />
        <Card.Title>{item.title}</Card.Title>
        <Card.Description>{item.description}</Card.Description>
      </Card>
    ))}
    </LayoutComponent>
    </>
  )
}`,
    },
  ],
};

export default documentation;
