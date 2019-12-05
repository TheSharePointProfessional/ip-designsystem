import * as React from "react";
import styles from "./SitePicker.module.scss";
import SiteChoiceGroup, { SiteChoiceType } from "./siteChoiceGroup";
import SiteUrlInput from "../../components/site-url-input/SiteUrlInput";
import { getCurrentWebUrl as getCurrentSiteUrl } from "../../core/utils/sharepointUtils";

const checkIsThisSite = function(siteUrl, currentSiteUrl) {
  return !siteUrl || siteUrl.toLowerCase() === currentSiteUrl.toLowerCase();
};

export default class SitePicker extends React.Component<SitePickerProps, SitePickerState> {
  state = {
    siteChoice: checkIsThisSite(this.props.siteUrl, getCurrentSiteUrl())
      ? SiteChoiceType.ThisSite
      : SiteChoiceType.Other,
    urlIsValid: false,
  };
  onChange = (url: string, isValid: boolean) => {
    let siteUrl = null;
    if (isValid) {
      siteUrl = url;
    }
    if (this.props.onChange) this.props.onChange(siteUrl);
  };
  onChoiceGroupChange = (choiceKey: SiteChoiceType) => {
    let siteUrl = null;
    if (choiceKey === SiteChoiceType.ThisSite) {
      siteUrl = getCurrentSiteUrl();
    }
    this.props.onChange(siteUrl);
    setTimeout(() => this.setState({ siteChoice: choiceKey }), 100);
  };
  render() {
    console.log(this.props.siteUrl);
    return (
      <div className={styles.sitePicker}>
        <SiteChoiceGroup
          label={this.props.label}
          value={this.state.siteChoice}
          onChange={this.onChoiceGroupChange}
        />
        {this.state.siteChoice !== SiteChoiceType.ThisSite && (
          <SiteUrlInput url={this.props.siteUrl} onChange={this.onChange} />
        )}
      </div>
    );
  }
}

export interface SitePickerProps {
  //props
  siteUrl: string;
  onChange: (newValue) => void;
  label: string;
}

export interface SitePickerState {
  siteChoice: SiteChoiceType;
  urlIsValid: boolean;
}
