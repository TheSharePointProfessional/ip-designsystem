import * as React from "react";
import { DisplayMode } from "@microsoft/sp-core-library";
import { WebPartTitle as PnPWebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
export default class WebPartTitle extends React.Component<WebPartTitleProps, {}> {
	render() {
		let { title, displayMode, updateProperty } = this.props;
		if (this.props.displayMode === DisplayMode.Read && !this.props.title) return null;

		return (
			<PnPWebPartTitle
				displayMode={displayMode}
				title={title}
				updateProperty={val => updateProperty("title", val)}
			/>
		);
	}
}

export interface WebPartTitleProps {
	title?: string;
	displayMode: DisplayMode;
	updateProperty: (key: string, value: string) => void;
}
