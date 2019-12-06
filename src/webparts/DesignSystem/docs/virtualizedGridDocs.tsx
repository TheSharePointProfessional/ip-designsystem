import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import VirtualizedGrid from "../../../components/VirtualizedGrid/VirtualizedGrid";
import Card from "../../../components/card/Card";
import PropsTable from "./PropsTable";

const images = [
  "https://thumbs-prod.si-cdn.com/EmpGS8PcTnjeik1JWjCHuDPPeyQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/cb/87/cb87fada-31dd-40eb-8d1d-e3b5d738d327/istock-120911394.jpg",
  "https://adventureisoutthere-exploreidaho.weebly.com/uploads/2/7/8/4/27843901/8719353_orig.jpg",
  "https://live.staticflickr.com/5826/30451145465_83cc33a27f_b.jpg",
  "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBxpA4RYwsIVGWSXbO3xMTbNTjNXV9_O3ODGUSPrk7_dt2_Yd&s",
];
let items = Array.from(new Array(1000)).map((_, i) => ({
  title: "Card " + i,
  image: images[i % images.length],
  description: "This is the card's description",
}));

let documentation: ComponentDocumentation = {
  title: "Virtualized Grid",
  id: "VirtualizedGrid",
  description: (
    <>
      <p>
        Sometimes you have a ton of items to potentially show, but you don't want to actually add
        them to the DOM until the user scrolls them into view.
      </p>
      <ul>
        <li>
          The parent container (the element wrapping the <code>VirtualizedGrid</code> should have an
          explicit width.
        </li>
        <li>
          The you probably also want to put a <code>width:100%</code> on whatever your Grid Item
          component is.
        </li>
      </ul>
      <PropsTable
        props={[
          {
            name: "items",
            type: "T[]",
            isRequired: true,
            description: "An array of items that you want to render. Can be items of any type",
          },
          {
            name: "renderItem",
            type:
              "(item: T, itemWidth: number, columnCount: number, gridWidth: number) => JSX.Element",
            isRequired: true,
            description:
              "A render function that receives one of your items (from the items array prop). It should return JSX. For advanced scenarios, you can also get at some additional sizing info.",
          },
          {
            name: "getKey",
            type: "(item: T) => string",
            isRequired: true,
            description:
              "A function that takes in one of your items and returns the value that should used as that item's key.",
          },
          {
            name: "rowsPerPage",
            type: "number",
            isRequired: false,
            description:
              "How many rows do you anticipate being viewable at once on a typical user's screen? This is used to calculate how many items should render to the DOM at once.",
          },
          {
            name: "size",
            type: "number",
            isRequired: false,
            description: "Whats the max width of your grid item?",
          },
          {
            name: "gridGap",
            type: "number",
            isRequired: false,
            description: "How much space should there be between grid items?",
          },
        ]}
      />
    </>
  ),
  demos: [
    {
      title: "Card Grid (1000 items)",
      description: (
        <>
          <p>Example showing 1000 cards, but so only a subset are actually on the DOM at once.</p>
        </>
      ),
      slug: "card-grid",
      scope: { Card, VirtualizedGrid, items, React },
      code: `
      () => {
        let [elemCount, setElemCount] = React.useState(0);
        React.useEffect(() => {
          setTimeout(() => {
            let count = document.querySelectorAll(".virtualized-card").length;
            console.log("Card Elem Count", count);
            setElemCount(count);
          }, 1000);
        })
        return (
          <div style={{ width: "100%"}}>
            <h4>Card Elements actually on DOM: {elemCount}</h4>      
            <VirtualizedGrid
              items={items.slice(0, 1000)}
              getKey={(item) => item.title}
              gridGap={20}
              size={400}
              renderItem={(item) => (
                <Card className='virtualized-card' styles={{ width: "100%" }}>
                  <Card.Image src={item.image} />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Description>{item.description}</Card.Description>
                </Card>
              )}
            />
          </div>
        )
      }
      `,
    },
  ],
};

export default documentation;
