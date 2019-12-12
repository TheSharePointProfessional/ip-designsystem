# Externalizing dependencies of project C:\code\skyline\ip\ip-designsystem\portalsdev-ui-toolkit

Date: 2019-12-11

## Findings

### Modify files

#### [config.json](config/config.json)

Replace the externals property (or add if not defined) with

```json
{
  "externals": {
    "@babel/preset-typescript": "https://unpkg.com/@babel/preset-typescript@^7.7.4/lib/index.js",
    "@pnp/spfx-controls-react": "https://unpkg.com/@pnp/spfx-controls-react@1.15.0/lib/index.js",
    "@pnp/spfx-property-controls": "https://unpkg.com/@pnp/spfx-property-controls@1.16.0/lib/index.js",
    "@uifabric/fluent-theme": "https://unpkg.com/@uifabric/fluent-theme@^0.16.9/lib/index.js",
    "date-fns": "https://unpkg.com/date-fns@^2.8.1/esm/index.js",
    "office-ui-fabric-react": "https://unpkg.com/office-ui-fabric-react@^6.182.0/lib/index.js",
    "react-syntax-highlighter": "https://unpkg.com/react-syntax-highlighter@^11.0.2/dist/esm/index.js",
    "react-view": "https://unpkg.com/react-view@^2.0.2/dist/es/index.js",
    "spscript": "https://unpkg.com/spscript@^4.2.0/lib/index.js"
  }
}
```
