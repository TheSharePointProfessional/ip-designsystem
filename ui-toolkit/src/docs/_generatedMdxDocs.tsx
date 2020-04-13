import React from "react";
import BigDateDocs, { metadata as BigDateMetadata } from "ui-toolkit/components/BigDate/BigDate.mdx"
import HomeDocs, { metadata as HomeMetadata } from "ui-toolkit/Home.mdx"
import PersonaDocs, { metadata as PersonaMetadata } from "ui-toolkit/components/Persona/Persona.mdx"
import TextDocs, { metadata as TextMetadata } from "ui-toolkit/components/primitives/Text.mdx"
import TitleDocs, { metadata as TitleMetadata } from "ui-toolkit/components/primitives/Title.mdx"

const docs = [
       {
        title: "BigDate",
        section: "components",
        sort: BigDateMetadata?.sort ?? 9999,
        parent: BigDateMetadata?.parent || "",
        render: () => <BigDateDocs />,
    },
   {
        title: "Home",
        section: "",
        sort: HomeMetadata?.sort ?? 9999,
        parent: HomeMetadata?.parent || "",
        render: () => <HomeDocs />,
    },
   {
        title: "Persona",
        section: "components",
        sort: PersonaMetadata?.sort ?? 9999,
        parent: PersonaMetadata?.parent || "",
        render: () => <PersonaDocs />,
    },
   {
        title: "Text",
        section: "components",
        sort: TextMetadata?.sort ?? 9999,
        parent: TextMetadata?.parent || "primitives",
        render: () => <TextDocs />,
    },
   {
        title: "Title",
        section: "components",
        sort: TitleMetadata?.sort ?? 9999,
        parent: TitleMetadata?.parent || "primitives",
        render: () => <TitleDocs />,
    },
];
export default docs;
