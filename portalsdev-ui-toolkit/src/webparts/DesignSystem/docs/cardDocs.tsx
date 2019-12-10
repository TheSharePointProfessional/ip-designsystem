import { ComponentDemo } from "./docs";
import Card from "../../../components/Card/Card";
import BigDate from "../../../components/BigDate/BigDate";
import React from "react";
import PropsTable from "./PropsTable";

let documentation = {
  title: "Card",
  id: "Card",
  description: (
    <>
      <p>
        The Card component is frequently used to display a list of items with imagery. Often it is
        shown in a grid.
      </p>
      <PropsTable
        props={[
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
  demos: [],
};

let fullUsage = {
  title: "Full Usage",
  slug: "full-usage",
  description: "Shows how to leverage all the available sub components",
  scope: { Card: Card },
  code: `<Card.Grid size={275}>

  <Card>
    <Card.Image
      size={200}
      url="https://www.google.com/search?q=zebra+canyon+escalante+utah"
      src="https://s27363.pcdn.co/wp-content/uploads/2017/09/Zebra-Slot-Canyon.jpg.optimal.jpg"
    ></Card.Image>
    <Card.Title url="https://www.google.com/search?q=zebra+canyon+escalante+utah">
      Clickable Card Title below Image
    </Card.Title>
    <Card.Tags
      tags={[
        { label: "ReadOnly Tag" },
        { label: "Clickable Tag", url: "#" }
      ]}
    />
    <Card.Description>
      This card shows how to use an Image, Title, Tags,
      Footer, and Info. In this exampe the card is below
      the image.
    </Card.Description>
    <Card.Footer>
      <Card.Info>Jan 2, 2018</Card.Info>
      <Card.Info>35 views</Card.Info>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Title>Card Title Above Image</Card.Title>
    <Card.Tags
      tags={[
        { label: "ReadOnly Tag" },
        { label: "Clickable Tag", url: "#" }
      ]}
    />
    <Card.Image
      url="https://www.google.com/search?q=zebra+canyon+escalante+utah"
      src="https://s27363.pcdn.co/wp-content/uploads/2017/09/Zebra-Slot-Canyon.jpg.optimal.jpg"
    ></Card.Image>

    <Card.Description>
      This card shows how to use an Image, Title, Tags,
      Footer, and Info. In this exampe the card is below
      the image.
    </Card.Description>
    <Card.Footer>
      <Card.Info>Jan 2, 2018</Card.Info>
      <Card.Info>35 views</Card.Info>
    </Card.Footer>
  </Card>

</Card.Grid>`,
};
let basicUsage = {
  title: "Basic Usage",
  slug: "basic-usage",
  description: "Basic usage of a card. You can just wrap your own markup in a Card component.",
  scope: { Card: Card },
  code: `<Card>
  <h1>I am a card</h1>
  <p>And I am the description of a card</p>        
</Card>`,
};

let cardTitle = {
  title: "Card Title",
  slug: "card-title",
  description: (
    <div>
      <p>
        Use the <code>Card.Title</code> component to render larger text.
      </p>

      <h4>Props</h4>
      <ul>
        <li>
          <code>url</code> - Optional, allows you make the title clickable
        </li>
        <li>
          <code>as</code> - Optional, allows you to Heading level (h1, h2, h3 etc...)
        </li>
        <li>
          <code>className</code> - Optional, allows you to add a custom class
        </li>
      </ul>
    </div>
  ),
  scope: { Card: Card },
  code: `<Card.Grid size={200}>

  <Card>
    <Card.Title>I am a card title</Card.Title>
  </Card>

  <Card>
    <Card.Title url="#">
      I am a clickable title
    </Card.Title>
    <p>
      The title will render wrapped in a hyperlink because
      it was passed a <code>url</code> prop.
    </p>
  </Card>

  <Card>
    <Card.Title url="https://skyline.visualstudio.com/">
      I am an external link
    </Card.Title>
    <p>External links will open in a new tab</p>
  </Card>

  <Card>
    <Card.Title as="h1" className="big-title">
      I am a big title
    </Card.Title>
    <Card.Description>
      You can specify the heading level with the <code>as</code> prop
    </Card.Description>
  </Card>

</Card.Grid>`,
};

let cardDescription: ComponentDemo = {
  title: "Card Description",
  slug: "card-description",
  scope: { Card: Card },
  description: (
    <div>
      <p>
        Use <code>Card.Description</code> to render paragraphs of text. It doesn't do much except
        give your <code>p</code> tag a little breathing room with padding.
      </p>

      <h4>Props</h4>
      <ul>
        <li>
          <code>as</code> - Optional, allows you to control the DOM element (div, p, span etc...)
        </li>
        <li>
          <code>className</code> - Optional, allows you to add a custom class
        </li>
      </ul>
    </div>
  ),
  code: `<Card>
  <Card.Title>I am a card title</Card.Title>
  <Card.Description>
  I am a card description.
  </Card.Description>
</Card>
  `,
};

let cardImageWithOverlay: ComponentDemo = {
  title: "Card with Image Overlay",
  description: "Shows a card with an image, but that image has a custom overlay",
  slug: "card-with-overay",
  scope: { Card, BigDate },
  code: `<Card>
  <Card.Image src="https://s27363.pcdn.co/wp-content/uploads/2017/09/Zebra-Slot-Canyon.jpg.optimal.jpg">
    <BigDate
      date={new Date()}
      styles={{ fontSize: "30px" }}
    />
  </Card.Image>
  <Card.Title>Card with Image Overlay</Card.Title>
  <Card.Description>
    I am a card with an image that has a custom overlay.
  </Card.Description>
</Card>`,
};

documentation.demos = [fullUsage, basicUsage, cardTitle, cardDescription, cardImageWithOverlay];

// Basic Usage
// Card Title
// Card Description
// Card Image
// Card Info
// Card Footer
// Card Tags
// Url

export default documentation;
