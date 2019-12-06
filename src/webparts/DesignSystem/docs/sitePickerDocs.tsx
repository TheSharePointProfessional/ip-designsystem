import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import SitePicker from "../../../components/SitePicker/SitePicker";
import { getCurrentWebUrl as getCurrentSiteUrl } from "../../../core/utils/sharepointUtils";
import PropsTable from "./PropsTable";

let basicUsage: ComponentDemo = {
  title: "Basic Usage",
  slug: "basic-usage",
  description: "The code below shows how to use the component",
  code: `() => {
  let [siteUrl, setSiteUrl] = React.useState(() =>
    getCurrentSiteUrl()
  );

  const onSiteChange = (url: string) => {
    setSiteUrl(url);
  };

  return (
    <div style={{ width: "400px", padding:"10px", border: "1px solid #ccc" }}>
      <h4>{siteUrl}</h4>
      <SitePicker url={siteUrl} onChange={onSiteChange} />
    </div>
  );
}`,
  scope: {
    React: React,
    SitePicker,
    getCurrentSiteUrl,
  },
};
let documentation: ComponentDocumentation = {
  title: "Site Picker",
  id: "SitePicker",
  description: (
    <>
      <p>
        React component to create a text box that allows you to type in a SharePoint site url path
        ("/sites" relative).
      </p>
      <p>
        Anytime the user changes the value, <code>SiteUrlInput</code> will trigger the{" "}
        <code>onChange</code> passing the new absolute site url and whether that url is valid.
      </p>
      <PropsTable
        props={[
          {
            name: "siteUrl",
            type: "string",
            isRequired: true,
            description: "The absolute url of the site",
          },
          {
            name: "onChange",
            type: "(newValue:string) => void",
            isRequired: true,
            description:
              "The function to call when the user changes the site. It will not fire for invalid sites.",
          },
          {
            name: "label",
            type: "string",
            isRequired: false,
            description: "Input label. If you don't pass one, a label won't be rendered.",
          },
        ]}
      />
    </>
  ),
  demos: [basicUsage],
};

export default documentation;
