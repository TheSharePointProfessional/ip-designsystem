// Find all mdx files recursively
const path = require("path");
const fs = require("fs");
const fm = require("front-matter");
const util = require("util");
const glob = util.promisify(require("glob"));

let doWork = async () => {
  let filepaths = await glob("**/*.mdx");
  console.log(filepaths);
  let files = filepaths.map(processFile).sort(compareFiles);
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

  return {
    title: parsedFile.name,
    parent: "",
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
        sort: ${file.title}Metadata?.sort ?? 9999,
        parent: ${file.title}Metadata?.parent || "",
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
