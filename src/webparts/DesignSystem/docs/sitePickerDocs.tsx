import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import SitePicker from "../../../components/SitePicker/SitePicker";
import { getCurrentWebUrl as getCurrentSiteUrl } from "../../../core/utils/sharepointUtils";

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
    <div style={{ width: "400px" }}>
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
      <h3>Props</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>siteUrl</strong>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>Required</td>
            <td>The absolute url of the site </td>
          </tr>
          <tr>
            <td>
              <strong>onChange</strong>
            </td>
            <td>
              <code>(newValue:string) =&gt; void</code>
            </td>
            <td>Required</td>
            <td>
              The function to call when the user changes the site. It will not fire for invalid
              sites.
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <code>string</code>
            </td>
            <td>Optional</td>
            <td>Input label. If you don&#39;t pass one, a label won&#39;t be rendered.</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  demos: [basicUsage],
};

export default documentation;
