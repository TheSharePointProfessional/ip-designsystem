import React from "react";

export default function PropsTable({ props }: { props: ComponentProp[] }) {
  return (
    <div>
      <h3>Props</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required?</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td>
                <strong>{prop.name}</strong>
              </td>
              <td>
                <code>{prop.type}</code>
              </td>
              <td>{prop.isRequired ? "Required" : "Optional"}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface ComponentProp {
  name: string;
  type: string;
  isRequired?: boolean;
  description?: string;
}
