// Find all mdx files recursively
const path = require("path");
const fs = require("fs");
const util = require("util");
const glob = util.promisify(require("glob"));

let doWork = async () => {
  let filepaths = await glob("src/ui-toolkit/**/*.mdx");
  console.log(filepaths);
  let files = filepaths.map(processFile).sort(compareFiles);
  console.log("doWork -> files", files);
  let fileContents = renderFileTemplate(files);
  //   console.log("doWork -> fileContents", fileContents);
  try {
    fs.writeFileSync("src/docs/_generatedMdxDocs.tsx", fileContents);
  } catch (err) {
    console.error(err);
  }
};

let processFile = (filepath) => {
  let parsedFile = path.parse(filepath);
  let parsedParent = path.parse(parsedFile.dir);
  // console.log("processFile -> parsedFile", parsedFile);
  // console.log("processFile -> parent", parent);

  let menuPath = parsedFile.dir.replace("src/ui-toolkit", "").substr(1);
  let section = "";
  let parsedMenuPath = path.parse(menuPath);

  console.log("processFile -> parsedMenuPath", parsedMenuPath);
  if (filepath.startsWith("src/ui-toolkit/components")) {
    section = "components";
  }
  if (filepath.startsWith("src/ui-toolkit/hooks")) {
    section = "hooks";
  }
  if (filepath.startsWith("src/ui-toolkit/core")) {
    section = "core";
  }

  let parent = section && parsedParent.name !== parsedFile.name ? parsedParent.name : "";
  return {
    title: capitalize(parsedFile.name),
    section,
    parent,
    filepath: filepath.replace("src/", ""),
  };
};

const compareFiles = (a, b) => {
  if (a.sort === b.sort) {
    return a.title < b.title ? -1 : 1;
  }
  return a.sort < b.sort ? -1 : 1;
};

const writeImports = (files) => {
  return files
    .map(
      (file) =>
        `import ${file.title}Docs, { metadata as ${file.title}Metadata } from "${file.filepath}"`
    )
    .join("\n");
};

const writeDocEntries = (files) => {
  return files
    .map(
      (file) => `   {
        title: "${file.title}",
        section: "${file.section}",
        sort: ${file.title}Metadata?.sort ?? 9999,
        parent: ${file.title}Metadata?.parent || "${file.parent}",
        render: () => <${file.title}Docs />,
    },`
    )
    .join("\n");
};

const renderFileTemplate = (files) => {
  return `import React from "react";
${writeImports(files)}

const docs = [
    ${writeDocEntries(files)}
];
export default docs;
`;
};
doWork();

const capitalize = (str) => {
  if (!str) return "";
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};
