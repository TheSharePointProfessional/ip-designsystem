import cardDemos from "./cardDemos";

export interface ComponentDemo {
  title: string;
  slug: string;
  description: string | JSX.Element;
  code: string;
  scope: any;
}

export interface ComponentDocumentation {
  title: string;
  id: string;
  description: string | JSX.Element;
  demos: ComponentDemo[];
}

let components: ComponentDocumentation[] = [
  {
    title: "Card",
    id: "Card",
    description:
      "The Card component is frequently used to display a list of items with imagery. Often it is shown in a grid.",
    demos: cardDemos
  },
  {
    title: "Link Tiles",
    id: "LinkTiles",
    description: "This is the Link Tiles description",
    demos: []
  },
  {
    title: "Site Picker",
    id: "SitePicker",
    description:
      "Give you options of 'This site' or 'Other'.  If you choose 'Other', it allows you to enter a site url and automatically validates the url for you.",
    demos: []
  },
  {
    title: "Big Date",
    id: "BigDate",
    description: "Renders a big date. Looks nice over the top of images",
    demos: []
  },
  {
    title: "Icon Image",
    id: "IconImage",
    description:
      "React component to that allows you to pass in either a image url or a single word for a Fabric icon",
    demos: []
  }
];

export default components.sort((a, b) => (a.title < b.title ? -1 : 1));
