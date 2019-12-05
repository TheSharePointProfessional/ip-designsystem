import { ComponentDemo } from "./docs";
import Card from "../../../components/card/Card";
import React from "react";

let documentation = {
  title: "Card",
  id: "Card",
  description:
    "The Card component is frequently used to display a list of items with imagery. Often it is shown in a grid.",
  demos: [],
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

documentation.demos = [basicUsage, cardTitle, cardDescription];

// Basic Usage
// Card Title
// Card Description
// Card Image
// Card Info
// Card Footer
// Card Tags
// Url

export default documentation;
