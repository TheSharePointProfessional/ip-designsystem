import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import styles from "./SiteUrlInput.module.scss";
import * as SPScript from "spscript";
import { debounce } from "../../core/utils/utils";

const getSitePath = (absoluteUrl: string) => {
  if (!absoluteUrl) return null;
  let siteUrlIndex = absoluteUrl.toLowerCase().search(/\/sites\/|\/teams\//i);
  if (siteUrlIndex < 0) return null;
  return absoluteUrl.substring(siteUrlIndex);
};

export default class SiteUrlInput extends React.PureComponent<SiteUrlInputProps, SiteUrlInputState> {
  state = {
    value: getSitePath(this.props.url) || "",
    isLoading: false,
    isValid: false,
  };

  // Try to make a REST API call to get Web info
  validateUrl = async function(url) {
    if (!url) return false;
    try {
      let ctx = SPScript.createContext(url);
      let data = await ctx.get("/web");
      return true;
    } catch (err) {
      return false;
    }
  };

  async componentDidMount() {
    this.onChange(this.state.value);
  }

  processUrl = value => {
    // remove the leading slash if it is there
    // if (value[value.length - 1] === "/") value = value.substr(0, value.length - 1);
    return getUrlPrefix() + value;
  };

  onChange = async value => {
    this.setState({ isLoading: true, value });
    let url = value ? this.processUrl(value) : "";

    let isValid = await this.validateUrl(url);
    this.setState({ isValid, isLoading: false });
    if (this.props.onChange) this.props.onChange(url, isValid);
  };

  onInput = value => {
    this.setState({ isValid: null, value: value });
    this.debouncedOnChange(value);
  };

  renderMessage = () => {
    if (this.state.isLoading) return "Loading...";
    if (this.state.isValid) return "Succesfully Connected";
    if (!this.state.isValid) return "Unable to connect to site";
  };

  debouncedOnChange = debounce(this.onChange, 700) as any;

  render() {
    let inputClass = [
      styles.inputContainer,
      this.state.isValid === null ? styles.loading : this.state.isValid ? styles.success : styles.error,
    ]
      .filter(c => c)
      .join(" ");

    return (
      <div>
        {this.props.label && <div className={styles.label}>{this.props.label}</div>}

        <div className={inputClass}>
          <TextField value={this.state.value} onChanged={this.onInput} placeholder="/sites/yoursite" />
          {this.state.value && <div className={styles.message}>{this.renderMessage()}</div>}
        </div>
      </div>
    );
  }
}

let getUrlPrefix = function() {
  return `https://${window.location.host}`;
};

export interface SiteUrlInputState {
  value: string;
  isLoading: boolean;
  isValid: boolean | null;
}

export interface SiteUrlInputProps {
  url?: string;
  onChange?: (url, isValid) => void;
  label?: string;
}
