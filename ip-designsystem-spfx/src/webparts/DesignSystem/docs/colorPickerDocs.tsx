import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import ThemeColorPicker from "../../../components/ColorPicker/ThemeColorPicker";
import PropsTable from "./PropsTable";

let docs: ComponentDocumentation = {
  title: "Theme Color Picker",
  description: (
    <>
      <p>Lets you choose between Primary, Secondary, Tertiary, or a completely custom color.</p>
      <PropsTable
        props={[
          {
            name: "value",
            description: `A theme color ("primary", "secondary" or "tertiary") or a hex color ("#a4c200").`,
            isRequired: true,
            type: "string",
          },
          {
            name: "onChange",
            description: `The function to fire when the value changes.`,
            isRequired: true,
            type: "(value: string) => void",
          },
          {
            name: "label",
            description: "The label to show over the input. Defaults to empty.",
            isRequired: false,
            type: "string",
          },
          {
            name: "ThemeColorPicker.getHexColor()",
            description: `Pass in a value like "primary" and get back the hex color code based on the current theme. If you pass a hex code, you get the same color back.`,
            isRequired: false,
            type: "(color: ThemeColor | string) => string",
          },
        ]}
      />
    </>
  ),
  id: "ThemeColorPicker",
  demos: [
    {
      title: "Basic Usage",
      slug: "basic-usage",
      description: (
        <>
          <p>Shows how to setup the picker as well as turn it's value into a real color.</p>
        </>
      ),
      code: `() => {
  let [color, setColor] = React.useState("secondary");
  
  return (
    <div style={{ width: "300px" }}>
    
      <h1 style={{ color: ThemeColorPicker.getHexColor(color)}}>{color}</h1>
      
      <ThemeColorPicker
        value={color}
        onChange={setColor}
        label="Choose theme color"
      />
      
    </div>
  );
}`,
      scope: { ThemeColorPicker, React },
    },
  ],
};

export default docs;
