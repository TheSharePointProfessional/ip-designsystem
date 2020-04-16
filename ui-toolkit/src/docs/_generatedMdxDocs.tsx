import React from "react";
import BackgroundImageDocs, { metadata as BackgroundImageMetadata } from "ui-toolkit/components/primitives/BackgroundImage.mdx"
import BigDateDocs, { metadata as BigDateMetadata } from "ui-toolkit/components/BigDate/BigDate.mdx"
import CardDocs, { metadata as CardMetadata } from "ui-toolkit/components/Card/Card.mdx"
import ColorPickerDocs, { metadata as ColorPickerMetadata } from "ui-toolkit/components/ColorPicker/ColorPicker.mdx"
import DateRangeTextDocs, { metadata as DateRangeTextMetadata } from "ui-toolkit/components/DateRangeText/DateRangeText.mdx"
import FilmstripDocs, { metadata as FilmstripMetadata } from "ui-toolkit/components/Filmstrip/Filmstrip.mdx"
import GridDocs, { metadata as GridMetadata } from "ui-toolkit/components/Grid/Grid.mdx"
import HomeDocs, { metadata as HomeMetadata } from "ui-toolkit/Home.mdx"
import IconImageDocs, { metadata as IconImageMetadata } from "ui-toolkit/components/IconImage/IconImage.mdx"
import PersonaDocs, { metadata as PersonaMetadata } from "ui-toolkit/components/Persona/Persona.mdx"
import TextDocs, { metadata as TextMetadata } from "ui-toolkit/components/primitives/Text.mdx"
import ThemeColorPickerDocs, { metadata as ThemeColorPickerMetadata } from "ui-toolkit/components/ColorPicker/ThemeColorPicker.mdx"
import TitleDocs, { metadata as TitleMetadata } from "ui-toolkit/components/primitives/Title.mdx"
import UseAsyncDataDocs, { metadata as UseAsyncDataMetadata } from "ui-toolkit/hooks/useAsyncData.mdx"
import UseDebouncedEffectDocs, { metadata as UseDebouncedEffectMetadata } from "ui-toolkit/hooks/useDebouncedEffect.mdx"
import UseDebouncedValueDocs, { metadata as UseDebouncedValueMetadata } from "ui-toolkit/hooks/useDebouncedValue.mdx"

const docs = [
       {
        title: "BackgroundImage",
        section: "components",
        sort: BackgroundImageMetadata?.sort ?? 9999,
        parent: BackgroundImageMetadata?.parent || "primitives",
        render: () => <BackgroundImageDocs />,
    },
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
        title: "ColorPicker",
        section: "components",
        sort: ColorPickerMetadata?.sort ?? 9999,
        parent: ColorPickerMetadata?.parent || "",
        render: () => <ColorPickerDocs />,
    },
   {
        title: "DateRangeText",
        section: "components",
        sort: DateRangeTextMetadata?.sort ?? 9999,
        parent: DateRangeTextMetadata?.parent || "",
        render: () => <DateRangeTextDocs />,
    },
   {
        title: "Filmstrip",
        section: "components",
        sort: FilmstripMetadata?.sort ?? 9999,
        parent: FilmstripMetadata?.parent || "",
        render: () => <FilmstripDocs />,
    },
   {
        title: "Grid",
        section: "components",
        sort: GridMetadata?.sort ?? 9999,
        parent: GridMetadata?.parent || "",
        render: () => <GridDocs />,
    },
   {
        title: "Home",
        section: "",
        sort: HomeMetadata?.sort ?? 9999,
        parent: HomeMetadata?.parent || "",
        render: () => <HomeDocs />,
    },
   {
        title: "IconImage",
        section: "components",
        sort: IconImageMetadata?.sort ?? 9999,
        parent: IconImageMetadata?.parent || "",
        render: () => <IconImageDocs />,
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
        title: "ThemeColorPicker",
        section: "components",
        sort: ThemeColorPickerMetadata?.sort ?? 9999,
        parent: ThemeColorPickerMetadata?.parent || "ColorPicker",
        render: () => <ThemeColorPickerDocs />,
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
