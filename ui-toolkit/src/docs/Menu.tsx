import React from "react";
import docs from "./_generatedMdxDocs";

export default function Menu({ setActive }) {
  console.log("docs", docs);
  return (
    <div className="menu">
      <ul className="menu__list">
        {docs.sort(compareFiles).map((file) => (
          <li key={file.title}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActive(file.title);
              }}
            >
              {file.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const compareFiles = (a, b) => {
  if (a.sort === b.sort) {
    return a.title < b.title ? -1 : 1;
  }
  return a.sort < b.sort ? -1 : 1;
};
