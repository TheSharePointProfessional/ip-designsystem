import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import ColorPicker from "../../../components/ColorPicker/ColorPicker";
import PropsTable from "./PropsTable";
import styled from "styled-components";

export const StyledColorSwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;

  padding: 10px;
  text-align: center;
  .hex {
    font-family: monospace;
  }
  .color {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

let docs: ComponentDocumentation = {
  title: "Color Picker",
  description: (
    <>
      <p>
        Lets you choose a custom color with direct text entry or by popping open an advanced color
        picker.
      </p>
      <PropsTable
        props={[
          {
            name: "value",
            description: `A valid CSS color (hex, rgba etc...)`,
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
            name: "className",
            isRequired: false,
            type: "string",
            description: "If you want to tack on your own class name.",
          },
        ]}
      />
    </>
  ),
  id: "ColorPicker",
  demos: [
    {
      title: "Basic Usage",
      slug: "basic-usage",
      description: (
        <>
          <p></p>
        </>
      ),
      code: `() => {
  let [color, setColor] = React.useState("#008080");
  
  return (
    <div style={{ width: "300px" }}>
    
      <h1 style={{ color }}>{color}</h1>
      
      <ColorPicker
        value={color}
        onChange={(newColor) => setColor(newColor)}
        label="Choose a color"
      />
      
    </div>
  );
}`,
      scope: { ColorPicker, React },
    },
  ],
};

export default docs;
