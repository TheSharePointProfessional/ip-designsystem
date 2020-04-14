import React from "react";
import BigDateDocs, { metadata as BigDateMetadata } from "ui-toolkit/components/BigDate/BigDate.mdx"
import CardDocs, { metadata as CardMetadata } from "ui-toolkit/components/Card/Card.mdx"
import HomeDocs, { metadata as HomeMetadata } from "ui-toolkit/Home.mdx"
import PersonaDocs, { metadata as PersonaMetadata } from "ui-toolkit/components/Persona/Persona.mdx"
import TextDocs, { metadata as TextMetadata } from "ui-toolkit/components/primitives/Text.mdx"
import TitleDocs, { metadata as TitleMetadata } from "ui-toolkit/components/primitives/Title.mdx"
import UseAsyncDataDocs, { metadata as UseAsyncDataMetadata } from "ui-toolkit/hooks/useAsyncData.mdx"
import UseDebouncedEffectDocs, { metadata as UseDebouncedEffectMetadata } from "ui-toolkit/hooks/useDebouncedEffect.mdx"
import UseDebouncedValueDocs, { metadata as UseDebouncedValueMetadata } from "ui-toolkit/hooks/useDebouncedValue.mdx"

const docs = [
       {
        title: "BigDate",
        section: "components",
        sort: BigDateMetadata?.sort ?? 9999,
        parent: BigDateMetadata?.parent || "",
        render: () => <BigDateDocs />,
    },
   {
        title: "Card",
        section: "components",
        sort: CardMetadata?.sort ?? 9999,
        parent: CardMetadata?.parent || "",
        render: () => <CardDocs />,
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
   {
        title: "UseAsyncData",
        section: "hooks",
        sort: UseAsyncDataMetadata?.sort ?? 9999,
        parent: UseAsyncDataMetadata?.parent || "hooks",
        render: () => <UseAsyncDataDocs />,
    },
   {
        title: "UseDebouncedEffect",
        section: "hooks",
        sort: UseDebouncedEffectMetadata?.sort ?? 9999,
        parent: UseDebouncedEffectMetadata?.parent || "hooks",
        render: () => <UseDebouncedEffectDocs />,
    },
   {
        title: "UseDebouncedValue",
        section: "hooks",
        sort: UseDebouncedValueMetadata?.sort ?? 9999,
        parent: UseDebouncedValueMetadata?.parent || "hooks",
        render: () => <UseDebouncedValueDocs />,
    },
];
export default docs;
