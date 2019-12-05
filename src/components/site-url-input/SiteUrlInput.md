# SiteUrlInput React Component

React component to create a text box that allows you to type in a SharePoint site url path ("/sites" relative).

Anytime the user changes the value, `SiteUrlInput` will trigger the `onChange` passing the new absolute site url and whether that url is valid.

## Example Usage 

*YourComponent.onSiteChange()*
``` typescript
onSiteChange = (url:string, isValid:boolean) => {
    if (isValid) {
        console.log("The Site is valid")
    } else {
        console.log("Invalid site")
    }
}
```

*YourComponent.render()*
``` jsx
<SiteUrlInput url={this.props.siteUrl} onChange={this.onSiteChange} />
```
## Props
| Name              | Type                      | Required  | Description |
|----               |----                       |----       |----         |
| **url**           | `string`                  | Required  | The absolute url of the site 
| **onChange**      | `(url, isValid) => void`  | Required  | The function to call when the user changes the site path
| label             | `string`                  | Optional  | Input label. If you don't pass one, a label won't be rendered.
