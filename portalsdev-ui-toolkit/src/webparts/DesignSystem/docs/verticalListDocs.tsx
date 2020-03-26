import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import ThemeColorPicker from "ui-toolkit/components/ColorPicker/ThemeColorPicker";
import PropsTable from "./PropsTable";
import styled from "ui-toolkit/styled-components";
import VerticalList from "ui-toolkit/components/VerticalList/VerticalList";
import BigDate from "ui-toolkit/components/BigDate/BigDate";

const images = [
  "https://thumbs-prod.si-cdn.com/EmpGS8PcTnjeik1JWjCHuDPPeyQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/cb/87/cb87fada-31dd-40eb-8d1d-e3b5d738d327/istock-120911394.jpg",
  "https://adventureisoutthere-exploreidaho.weebly.com/uploads/2/7/8/4/27843901/8719353_orig.jpg",
  "https://live.staticflickr.com/5826/30451145465_83cc33a27f_b.jpg",
  "https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBxpA4RYwsIVGWSXbO3xMTbNTjNXV9_O3ODGUSPrk7_dt2_Yd&s",
];
let items = Array.from(new Array(1000)).map((_, i) => ({
  title: "Item " + i,
  image: images[i % images.length],
  description: "This is the items's description",
}));

let docs: ComponentDocumentation = {
  title: "Vertical List",
  description: "",
  id: "VerticalList",
  demos: [
    {
      title: "Vertical List",
      scope: { VerticalList, items, BigDate },
      description: "",
      slug: "vertical-list",
      code: `<div style={{ width: "100%" }}>
  {items.slice(0, 3).map(item => (
    <VerticalList.Item key={item.title}>
      <VerticalList.Image
        src={item.image}
        url="#"
        height="120px"
        width="230px"
      >
        <BigDate date={new Date()} />
      </VerticalList.Image>
      <VerticalList.Content>
        <VerticalList.Tags
          tags={[
            { label: "Category A", url: "#" },
            { label: "Category B", url: "#" }
          ]}
        />
        <VerticalList.Title url={item.image}>
          {item.title}
        </VerticalList.Title>
        <VerticalList.Description>
          {item.description}
        </VerticalList.Description>
        <VerticalList.Footer>
          <VerticalList.Info>
            May 26, 2019
          </VerticalList.Info>
          <VerticalList.Info>48 Views</VerticalList.Info>
        </VerticalList.Footer>
      </VerticalList.Content>
    </VerticalList.Item>
  ))}
</div>`,
    },
  ],
};

export default docs;
