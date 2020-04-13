import React from "react";
import BigDateDocs, { metadata as BigDateMetadata } from "ui-toolkit/components/BigDate/BigDate.mdx"
import HomeDocs, { metadata as HomeMetadata } from "ui-toolkit/Home.mdx"
import TextDocs, { metadata as TextMetadata } from "ui-toolkit/components/primitives/Text.mdx"

const docs = [
       {
        title: "BigDate",
        sort: BigDateMetadata?.sort ?? 9999,
        parent: BigDateMetadata?.parent || "",
        render: () => <BigDateDocs />,
    },
   {
        title: "Home",
        sort: HomeMetadata?.sort ?? 9999,
        parent: HomeMetadata?.parent || "",
        render: () => <HomeDocs />,
    },
   {
        title: "Text",
        sort: TextMetadata?.sort ?? 9999,
        parent: TextMetadata?.parent || "",
        render: () => <TextDocs />,
    },
];
export default docs;
