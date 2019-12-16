import cardDocs from "./cardDocs";
import sitePickerDocs from "./sitePickerDocs";
import dateRangeTextDocs from "./dateRangeTextDocs";
import bigDateDocs from "./bigDateDocs";
import virtualizeGridDocs from "./virtualizedGridDocs";
import themeColorPickerDocs from "./themeColorPickerDocs";
import themeProviderDocs from "./portalsThemeProviderDocs";
import themePreviewDocs from "./themePreviewDocs";
import colorPickerDocs from "./colorPickerDocs";
import verticalListDocs from "./verticalListDocs";
import backgroundImageDocs from "./backgroundImageDocs";
import iconImageDocs from "./iconImageDocs";
import linkTileDocs from "./linkTileDocs";
import gridDocs from "./gridDocs";

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
  cardDocs,
  sitePickerDocs,
  dateRangeTextDocs,
  bigDateDocs,
  virtualizeGridDocs,
  themeColorPickerDocs,
  themeProviderDocs,
  themePreviewDocs,
  colorPickerDocs,
  verticalListDocs,
  backgroundImageDocs,
  iconImageDocs,
  linkTileDocs,
  gridDocs,
];

export default components.sort((a, b) => (a.title < b.title ? -1 : 1));
