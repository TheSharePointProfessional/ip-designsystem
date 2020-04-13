import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";

import App from "../../App";
import { WebPartProperties, getPropertyPane } from "./DesignSystemProperties";
import { ThemeProvider, IReadonlyTheme, ThemeChangedEventArgs } from "@microsoft/sp-component-base";

export default class DesignSystemWebPart extends BaseClientSideWebPart<WebPartProperties> {
  _themeProvider: ThemeProvider;
  _theme: IReadonlyTheme;

  async onInit() {
    window.__portalsDev = {
      siteUrl: this.context.pageContext.site.absoluteUrl,
      webUrl: this.context.pageContext.web.absoluteUrl,
    };
    await this.initTheme();
    return super.onInit();
  }

  async initTheme() {
    // Consume the new ThemeProvider service
    this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
    // If it exists, get the theme variant
    this._theme = this._themeProvider.tryGetTheme();
    // Register a handler to be notified if the theme variant changes
    this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);
  }

  private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
    this._theme = args.theme;
    this.render();
  }

  public render(): void {
    let props = {
      theme: this._theme,
    };
    var element = React.createElement(App, props);
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  protected handleUpdate(property, value) {
    this.properties[property] = value;
    this.render();
    this.context.propertyPane.refresh();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return getPropertyPane(this.properties, this.context, this.handleUpdate.bind(this));
  }
}
