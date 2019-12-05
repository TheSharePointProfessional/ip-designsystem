
import * as React from "react";
import * as SPScript from "spscript";
import { DisplayMode } from "@microsoft/sp-core-library";
import WebPartTitle from "../../../components/webpart_title/WebPartTitle";
import {
  useSiteData,
  Loading,
  InvalidSitePlaceholder,
  validateListExists,
} from "../../../hooks/useSiteData";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

function DeleteMe(props: DeleteMeProps) {
  let { data, isLoading, validation } = useSiteData<Data>({
    dataKey: props.webpart.webUrl + props.webpart.title,
    getData: siteUrl => getListItemCount(siteUrl, "Site Pages"),
    siteUrl: props.webpart.webUrl,
    // Optional - if not passed it will validate the site exists
    validate: siteUrl => validateListExists(siteUrl, "Site Pages"),
  });

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (!validation.isValid)
      return <InvalidSitePlaceholder message="Sorry couldn't find that list on that site" />;
    return (
      <div>
        <h4>Site Pages Count</h4>
        <div>{data.count}</div>
      </div>
    );
  };

  return (
    <ThemeProvider theme={props.webpart.theme}>
      <Container>
        <WebPartTitle {...props.webpart} />
        {renderContent()}
      </Container>
    </ThemeProvider>
  );
}
export default React.memo(DeleteMe);

export interface DeleteMeProps {
    webpart: {
        title: string,
        displayMode: DisplayMode,
        updateProperty: (key:string, value:string) => void,
        webUrl: string,
        theme: IReadonlyTheme;
    },
}

const getListItemCount = async (siteUrl, listTitle): Promise<Data> => {
  let ctx = SPScript.createContext(siteUrl);
  let items = await ctx.lists(listTitle).getItems("$select=Id");
  return { count: items.length };
};

interface Data {
  count: number;
}