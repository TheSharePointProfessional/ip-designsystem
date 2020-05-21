export default {
  "typescript": {
    "ColorPicker": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "ColorPicker",
      "extends": [
        "PureComponent<ColorPickerProps, ColorPickerState>"
      ],
      "methods": [
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUnmount",
          "inheritedFrom": "ComponentLifecycle.componentWillUnmount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in <code>componentDidMount</code>.</p>\n"
                ],
                "contentsRaw": "Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUnmount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<ColorPickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ColorPickerProps>, nextState: Readonly<ColorPickerState>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidCatch",
          "inheritedFrom": "ComponentLifecycle.componentDidCatch",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.</p>\n"
                ],
                "contentsRaw": "Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidCatch",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "error",
                  "type": "Error"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "errorInfo",
                  "type": "ErrorInfo"
                }
              ],
              "returnType": "void",
              "type": "(error: Error, errorInfo: ErrorInfo) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidMount",
          "inheritedFrom": "ComponentLifecycle.componentDidMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after a component is mounted. Setting state here will trigger re-rendering.</p>\n"
                ],
                "contentsRaw": "Called immediately after a component is mounted. Setting state here will trigger re-rendering.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidUpdate",
          "inheritedFrom": "NewLifecycle.componentDidUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after updating occurs. Not called for the initial render.</p>\n<p>The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.</p>\n"
                ],
                "contentsRaw": "Called immediately after updating occurs. Not called for the initial render.\n\nThe snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<ColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<ColorPickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "snapshot",
                  "type": "SS"
                }
              ],
              "returnType": "void",
              "type": "(prevProps: Readonly<ColorPickerProps>, prevState: Readonly<ColorPickerState>, snapshot?: SS) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ColorPickerProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ColorPickerProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<ColorPickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ColorPickerProps>, nextState: Readonly<ColorPickerState>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "getColor",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
              "kind": "signature",
              "name": "getColor",
              "parameters": [],
              "returnType": "string",
              "type": "() => string"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "getSnapshotBeforeUpdate",
          "inheritedFrom": "NewLifecycle.getSnapshotBeforeUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Runs before React applies the result of <code>render</code> to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before <code>render</code> causes changes to it.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.</p>\n"
                ],
                "contentsRaw": "Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.\n\nNote: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "getSnapshotBeforeUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<ColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<ColorPickerState>"
                }
              ],
              "returnType": "SS | null",
              "type": "(prevProps: Readonly<ColorPickerProps>, prevState: Readonly<ColorPickerState>) => SS | null"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "openPicker",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
              "kind": "signature",
              "name": "openPicker",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "Element<>",
              "type": "() => Element<>"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "renderPicker",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
              "kind": "signature",
              "name": "renderPicker",
              "parameters": [],
              "returnType": "Element<>",
              "type": "() => Element<>"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "shouldComponentUpdate",
          "inheritedFrom": "ComponentLifecycle.shouldComponentUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called to determine whether the change in props and state should trigger a re-render.</p>\n<p><code>Component</code> always returns true.\n<code>PureComponent</code> implements a shallow comparison on props and state and returns true if any\nprops or states have changed.</p>\n<p>If false is returned, <code>Component#render</code>, <code>componentWillUpdate</code>\nand <code>componentDidUpdate</code> will not be called.</p>\n"
                ],
                "contentsRaw": "Called to determine whether the change in props and state should trigger a re-render.\n\n`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "shouldComponentUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<ColorPickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "boolean",
              "type": "(nextProps: Readonly<ColorPickerProps>, nextState: Readonly<ColorPickerState>, nextContext: any) => boolean"
            }
          ]
        }
      ],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "elem",
          "type": "HTMLDivElement"
        }
      ],
      "accessors": []
    },
    "ThemeColorPicker": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "ThemeColorPicker",
      "extends": [
        "PureComponent<ThemeColorPickerProps, >"
      ],
      "methods": [
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ThemeColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ThemeColorPickerProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ThemeColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ThemeColorPickerProps>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidCatch",
          "inheritedFrom": "ComponentLifecycle.componentDidCatch",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.</p>\n"
                ],
                "contentsRaw": "Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidCatch",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "error",
                  "type": "Error"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "errorInfo",
                  "type": "ErrorInfo"
                }
              ],
              "returnType": "void",
              "type": "(error: Error, errorInfo: ErrorInfo) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidMount",
          "inheritedFrom": "ComponentLifecycle.componentDidMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after a component is mounted. Setting state here will trigger re-rendering.</p>\n"
                ],
                "contentsRaw": "Called immediately after a component is mounted. Setting state here will trigger re-rendering.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidUpdate",
          "inheritedFrom": "NewLifecycle.componentDidUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after updating occurs. Not called for the initial render.</p>\n<p>The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.</p>\n"
                ],
                "contentsRaw": "Called immediately after updating occurs. Not called for the initial render.\n\nThe snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<ThemeColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "snapshot",
                  "type": "SS"
                }
              ],
              "returnType": "void",
              "type": "(prevProps: Readonly<ThemeColorPickerProps>, prevState: Readonly<>, snapshot?: SS) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ThemeColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ThemeColorPickerProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUnmount",
          "inheritedFrom": "ComponentLifecycle.componentWillUnmount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in <code>componentDidMount</code>.</p>\n"
                ],
                "contentsRaw": "Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUnmount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ThemeColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<ThemeColorPickerProps>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "getSnapshotBeforeUpdate",
          "inheritedFrom": "NewLifecycle.getSnapshotBeforeUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Runs before React applies the result of <code>render</code> to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before <code>render</code> causes changes to it.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.</p>\n"
                ],
                "contentsRaw": "Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.\n\nNote: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "getSnapshotBeforeUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<ThemeColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                }
              ],
              "returnType": "SS | null",
              "type": "(prevProps: Readonly<ThemeColorPickerProps>, prevState: Readonly<>) => SS | null"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "onDropdownChange",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
              "kind": "signature",
              "name": "onDropdownChange",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "option",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(option: any) => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "onOtherColorChange",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
              "kind": "signature",
              "name": "onOtherColorChange",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "color",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(color: any) => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "Element<>",
              "type": "() => Element<>"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "shouldComponentUpdate",
          "inheritedFrom": "ComponentLifecycle.shouldComponentUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called to determine whether the change in props and state should trigger a re-render.</p>\n<p><code>Component</code> always returns true.\n<code>PureComponent</code> implements a shallow comparison on props and state and returns true if any\nprops or states have changed.</p>\n<p>If false is returned, <code>Component#render</code>, <code>componentWillUpdate</code>\nand <code>componentDidUpdate</code> will not be called.</p>\n"
                ],
                "contentsRaw": "Called to determine whether the change in props and state should trigger a re-render.\n\n`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "shouldComponentUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<ThemeColorPickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "boolean",
              "type": "(nextProps: Readonly<ThemeColorPickerProps>, nextState: Readonly<>, nextContext: any) => boolean"
            }
          ]
        }
      ],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "checkIsThemeColor",
          "defaultValue": "checkIsThemeColor",
          "type": "checkIsThemeColor"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "getHexColor",
          "defaultValue": "getThemeColor",
          "type": "getThemeColor"
        }
      ],
      "accessors": []
    },
    "SiteChoiceGroup": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "SiteChoiceGroup",
      "extends": [
        "PureComponent<SiteChoiceGroupProps, >"
      ],
      "methods": [
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SiteChoiceGroupProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SiteChoiceGroupProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SiteChoiceGroupProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SiteChoiceGroupProps>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidCatch",
          "inheritedFrom": "ComponentLifecycle.componentDidCatch",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.</p>\n"
                ],
                "contentsRaw": "Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidCatch",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "error",
                  "type": "Error"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "errorInfo",
                  "type": "ErrorInfo"
                }
              ],
              "returnType": "void",
              "type": "(error: Error, errorInfo: ErrorInfo) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidMount",
          "inheritedFrom": "ComponentLifecycle.componentDidMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after a component is mounted. Setting state here will trigger re-rendering.</p>\n"
                ],
                "contentsRaw": "Called immediately after a component is mounted. Setting state here will trigger re-rendering.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidUpdate",
          "inheritedFrom": "NewLifecycle.componentDidUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after updating occurs. Not called for the initial render.</p>\n<p>The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.</p>\n"
                ],
                "contentsRaw": "Called immediately after updating occurs. Not called for the initial render.\n\nThe snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<SiteChoiceGroupProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "snapshot",
                  "type": "SS"
                }
              ],
              "returnType": "void",
              "type": "(prevProps: Readonly<SiteChoiceGroupProps>, prevState: Readonly<>, snapshot?: SS) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SiteChoiceGroupProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SiteChoiceGroupProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUnmount",
          "inheritedFrom": "ComponentLifecycle.componentWillUnmount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in <code>componentDidMount</code>.</p>\n"
                ],
                "contentsRaw": "Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUnmount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SiteChoiceGroupProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SiteChoiceGroupProps>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "getSnapshotBeforeUpdate",
          "inheritedFrom": "NewLifecycle.getSnapshotBeforeUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Runs before React applies the result of <code>render</code> to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before <code>render</code> causes changes to it.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.</p>\n"
                ],
                "contentsRaw": "Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.\n\nNote: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "getSnapshotBeforeUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<SiteChoiceGroupProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                }
              ],
              "returnType": "SS | null",
              "type": "(prevProps: Readonly<SiteChoiceGroupProps>, prevState: Readonly<>) => SS | null"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "onChange",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
              "kind": "signature",
              "name": "onChange",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "event",
                  "type": "any"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "chosenOption",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(event: any, chosenOption: any) => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "Element<>",
              "type": "() => Element<>"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "shouldComponentUpdate",
          "inheritedFrom": "ComponentLifecycle.shouldComponentUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called to determine whether the change in props and state should trigger a re-render.</p>\n<p><code>Component</code> always returns true.\n<code>PureComponent</code> implements a shallow comparison on props and state and returns true if any\nprops or states have changed.</p>\n<p>If false is returned, <code>Component#render</code>, <code>componentWillUpdate</code>\nand <code>componentDidUpdate</code> will not be called.</p>\n"
                ],
                "contentsRaw": "Called to determine whether the change in props and state should trigger a re-render.\n\n`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "shouldComponentUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SiteChoiceGroupProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "boolean",
              "type": "(nextProps: Readonly<SiteChoiceGroupProps>, nextState: Readonly<>, nextContext: any) => boolean"
            }
          ]
        }
      ],
      "properties": [],
      "accessors": []
    },
    "SitePicker": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "SitePicker",
      "extends": [
        "Component<SitePickerProps, SitePickerState>"
      ],
      "methods": [
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUnmount",
          "inheritedFrom": "ComponentLifecycle.componentWillUnmount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in <code>componentDidMount</code>.</p>\n"
                ],
                "contentsRaw": "Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUnmount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SitePickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<SitePickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SitePickerProps>, nextState: Readonly<SitePickerState>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidCatch",
          "inheritedFrom": "ComponentLifecycle.componentDidCatch",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.</p>\n"
                ],
                "contentsRaw": "Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidCatch",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "error",
                  "type": "Error"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "errorInfo",
                  "type": "ErrorInfo"
                }
              ],
              "returnType": "void",
              "type": "(error: Error, errorInfo: ErrorInfo) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidMount",
          "inheritedFrom": "ComponentLifecycle.componentDidMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after a component is mounted. Setting state here will trigger re-rendering.</p>\n"
                ],
                "contentsRaw": "Called immediately after a component is mounted. Setting state here will trigger re-rendering.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidUpdate",
          "inheritedFrom": "NewLifecycle.componentDidUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after updating occurs. Not called for the initial render.</p>\n<p>The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.</p>\n"
                ],
                "contentsRaw": "Called immediately after updating occurs. Not called for the initial render.\n\nThe snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<SitePickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<SitePickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "snapshot",
                  "type": "SS"
                }
              ],
              "returnType": "void",
              "type": "(prevProps: Readonly<SitePickerProps>, prevState: Readonly<SitePickerState>, snapshot?: SS) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SitePickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SitePickerProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SitePickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SitePickerProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SitePickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<SitePickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<SitePickerProps>, nextState: Readonly<SitePickerState>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "forceUpdate",
          "inheritedFrom": "Component.forceUpdate",
          "signatures": [
            {
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "forceUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "callBack",
                  "type": "() => void"
                }
              ],
              "returnType": "void",
              "type": "(callBack?: () => void) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "getSnapshotBeforeUpdate",
          "inheritedFrom": "NewLifecycle.getSnapshotBeforeUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Runs before React applies the result of <code>render</code> to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before <code>render</code> causes changes to it.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.</p>\n"
                ],
                "contentsRaw": "Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.\n\nNote: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "getSnapshotBeforeUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<SitePickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<SitePickerState>"
                }
              ],
              "returnType": "SS | null",
              "type": "(prevProps: Readonly<SitePickerProps>, prevState: Readonly<SitePickerState>) => SS | null"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "onChange",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
              "kind": "signature",
              "name": "onChange",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "url",
                  "type": "string"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "isValid",
                  "type": "boolean"
                }
              ],
              "returnType": "void",
              "type": "(url: string, isValid: boolean) => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "onChoiceGroupChange",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
              "kind": "signature",
              "name": "onChoiceGroupChange",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "choiceKey",
                  "type": "SiteChoiceType"
                }
              ],
              "returnType": "void",
              "type": "(choiceKey: SiteChoiceType) => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "Element<>",
              "type": "() => Element<>"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "setState",
          "inheritedFrom": "Component.setState",
          "signatures": [
            {
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "setState",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "state",
                  "type": "(prevState: Readonly<SitePickerState>, props: Readonly<SitePickerProps>) => S |  | S | "
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "callback",
                  "type": "() => void"
                }
              ],
              "returnType": "void",
              "type": "(state: (prevState: Readonly<SitePickerState>, props: Readonly<SitePickerProps>) => S |  | S | , callback?: () => void) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "shouldComponentUpdate",
          "inheritedFrom": "ComponentLifecycle.shouldComponentUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called to determine whether the change in props and state should trigger a re-render.</p>\n<p><code>Component</code> always returns true.\n<code>PureComponent</code> implements a shallow comparison on props and state and returns true if any\nprops or states have changed.</p>\n<p>If false is returned, <code>Component#render</code>, <code>componentWillUpdate</code>\nand <code>componentDidUpdate</code> will not be called.</p>\n"
                ],
                "contentsRaw": "Called to determine whether the change in props and state should trigger a re-render.\n\n`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "shouldComponentUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<SitePickerProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<SitePickerState>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "boolean",
              "type": "(nextProps: Readonly<SitePickerProps>, nextState: Readonly<SitePickerState>, nextContext: any) => boolean"
            }
          ]
        }
      ],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>If set, <code>this.context</code> will be set at runtime to the current value of the given Context.</p>\n<p>Usage:</p>\n<pre><code class=\"language-ts\">type MyContext = number\nconst Ctx = React.createContext&lt;MyContext&gt;(0)\n\nclass Foo extends React.Component {\n  static contextType = Ctx\n  context!: React.ContextType&lt;typeof Ctx&gt;\n  render () {\n    return &lt;&gt;My context&#39;s value: {this.context}&lt;/&gt;;\n  }\n}</code></pre>\n",
              {
                "tag": "see",
                "value": "https://reactjs.org/docs/context.html#classcontexttype"
              }
            ],
            "contentsRaw": "If set, `this.context` will be set at runtime to the current value of the given Context.\n\nUsage:\n\n```ts\ntype MyContext = number\nconst Ctx = React.createContext<MyContext>(0)\n\nclass Foo extends React.Component {\n  static contextType = Ctx\n  context!: React.ContextType<typeof Ctx>\n  render () {\n    return <>My context's value: {this.context}</>;\n  }\n}\n```\n\n\n@see https://reactjs.org/docs/context.html#classcontexttype",
            "metadata": {}
          },
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "contextType",
          "inheritedFrom": "Component.contextType",
          "type": "Context<any>"
        },
        {
          "documentation": {
            "contents": [
              "<p>If using the new style context, re-declare this in your class to be the\n<code>React.ContextType</code> of your <code>static contextType</code>.</p>\n<pre><code class=\"language-ts\">static contextType = MyContext\ncontext!: React.ContextType&lt;typeof MyContext&gt;</code></pre>\n",
              {
                "tag": "see",
                "value": "https://reactjs.org/docs/legacy-context.html"
              }
            ],
            "contentsRaw": "If using the new style context, re-declare this in your class to be the\n`React.ContextType` of your `static contextType`.\n\n```ts\nstatic contextType = MyContext\ncontext!: React.ContextType<typeof MyContext>\n```\n\n\n@see https://reactjs.org/docs/legacy-context.html",
            "metadata": {}
          },
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isDeprecated": "if used without a type annotation, or without static contextType",
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "context",
          "inheritedFrom": "Component.context",
          "type": "any"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "props",
          "inheritedFrom": "Component.props",
          "type": "Readonly<SitePickerProps> & Readonly<>"
        },
        {
          "documentation": {
            "contents": [],
            "contentsRaw": "",
            "metadata": {}
          },
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isDeprecated": "https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs",
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "refs",
          "inheritedFrom": "Component.refs",
          "type": "{ [key: string]: ReactInstance }"
        }
      ],
      "accessors": [],
      "constructorType": {
        "documentation": {
          "contents": [
            {
              "tag": "see",
              "value": "https://reactjs.org/docs/legacy-context.html"
            }
          ],
          "contentsRaw": "@see https://reactjs.org/docs/legacy-context.html",
          "metadata": {}
        },
        "fileName": "node_modules\\@types\\react\\index.d.ts",
        "flags": {
          "isDeprecated": true,
          "isExported": true,
          "isExternal": false,
          "isOptional": false,
          "isPrivate": false,
          "isProtected": false,
          "isPublic": false,
          "isRest": false,
          "isStatic": false
        },
        "kind": "constructor",
        "name": "constructor",
        "inheritedFrom": "Component.__constructor",
        "signatures": [
          {
            "documentation": {
              "contents": [
                {
                  "tag": "see",
                  "value": "https://reactjs.org/docs/legacy-context.html"
                }
              ],
              "contentsRaw": "@see https://reactjs.org/docs/legacy-context.html",
              "metadata": {}
            },
            "fileName": "node_modules\\@types\\react\\index.d.ts",
            "kind": "signature",
            "name": "new SitePicker",
            "parameters": [
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "props",
                "type": "Readonly<SitePickerProps>"
              }
            ],
            "returnType": "SitePicker",
            "type": "(props: Readonly<SitePickerProps>) => SitePicker"
          },
          {
            "documentation": {
              "contents": [
                {
                  "tag": "see",
                  "value": "https://reactjs.org/docs/legacy-context.html"
                }
              ],
              "contentsRaw": "@see https://reactjs.org/docs/legacy-context.html",
              "metadata": {}
            },
            "fileName": "node_modules\\@types\\react\\index.d.ts",
            "kind": "signature",
            "name": "new SitePicker",
            "parameters": [
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "props",
                "type": "SitePickerProps"
              },
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": true,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "context",
                "type": "any"
              }
            ],
            "returnType": "SitePicker",
            "type": "(props: SitePickerProps, context?: any) => SitePicker"
          }
        ]
      }
    },
    "VerticalList": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "VerticalList",
      "extends": [
        "PureComponent<VerticalListProps<T>, >"
      ],
      "methods": [
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<VerticalListProps<T>>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<VerticalListProps<T>>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidCatch",
          "inheritedFrom": "ComponentLifecycle.componentDidCatch",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.</p>\n"
                ],
                "contentsRaw": "Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidCatch",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "error",
                  "type": "Error"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "errorInfo",
                  "type": "ErrorInfo"
                }
              ],
              "returnType": "void",
              "type": "(error: Error, errorInfo: ErrorInfo) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidMount",
          "inheritedFrom": "ComponentLifecycle.componentDidMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after a component is mounted. Setting state here will trigger re-rendering.</p>\n"
                ],
                "contentsRaw": "Called immediately after a component is mounted. Setting state here will trigger re-rendering.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidUpdate",
          "inheritedFrom": "NewLifecycle.componentDidUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after updating occurs. Not called for the initial render.</p>\n<p>The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.</p>\n"
                ],
                "contentsRaw": "Called immediately after updating occurs. Not called for the initial render.\n\nThe snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<VerticalListProps<T>>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "snapshot",
                  "type": "SS"
                }
              ],
              "returnType": "void",
              "type": "(prevProps: Readonly<VerticalListProps<T>>, prevState: Readonly<>, snapshot?: SS) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<VerticalListProps<T>>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<VerticalListProps<T>>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<VerticalListProps<T>>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<VerticalListProps<T>>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUnmount",
          "inheritedFrom": "ComponentLifecycle.componentWillUnmount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in <code>componentDidMount</code>.</p>\n"
                ],
                "contentsRaw": "Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUnmount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<VerticalListProps<T>>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<VerticalListProps<T>>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "getSnapshotBeforeUpdate",
          "inheritedFrom": "NewLifecycle.getSnapshotBeforeUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Runs before React applies the result of <code>render</code> to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before <code>render</code> causes changes to it.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.</p>\n"
                ],
                "contentsRaw": "Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.\n\nNote: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "getSnapshotBeforeUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<VerticalListProps<T>>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                }
              ],
              "returnType": "SS | null",
              "type": "(prevProps: Readonly<VerticalListProps<T>>, prevState: Readonly<>) => SS | null"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "shouldComponentUpdate",
          "inheritedFrom": "ComponentLifecycle.shouldComponentUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called to determine whether the change in props and state should trigger a re-render.</p>\n<p><code>Component</code> always returns true.\n<code>PureComponent</code> implements a shallow comparison on props and state and returns true if any\nprops or states have changed.</p>\n<p>If false is returned, <code>Component#render</code>, <code>componentWillUpdate</code>\nand <code>componentDidUpdate</code> will not be called.</p>\n"
                ],
                "contentsRaw": "Called to determine whether the change in props and state should trigger a re-render.\n\n`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "shouldComponentUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<VerticalListProps<T>>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "boolean",
              "type": "(nextProps: Readonly<VerticalListProps<T>>, nextState: Readonly<>, nextContext: any) => boolean"
            }
          ]
        }
      ],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Content",
          "defaultValue": "StyledContent",
          "type": "any"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Description",
          "defaultValue": "VerticalItemDescription",
          "type": "FunctionComponent<VerticalItemDescriptionProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Footer",
          "defaultValue": "StyledFooter",
          "type": "any"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Image",
          "defaultValue": "Thumbnail",
          "type": "FunctionComponent<ThumbnailProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Info",
          "defaultValue": "Info",
          "type": "FunctionComponent<InfoProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Item",
          "defaultValue": "VerticalItem",
          "type": "FunctionComponent<VerticalItemProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Tag",
          "defaultValue": "Tag",
          "type": "Tag"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Tags",
          "defaultValue": "Tags",
          "type": "Tags"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Title",
          "defaultValue": "Title",
          "type": "FunctionComponent<TitleProps>"
        }
      ],
      "accessors": []
    },
    "Card": {
      "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "Card",
      "extends": [
        "PureComponent<CardProps, >"
      ],
      "methods": [
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillMount",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<CardProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<CardProps>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidCatch",
          "inheritedFrom": "ComponentLifecycle.componentDidCatch",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.</p>\n"
                ],
                "contentsRaw": "Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidCatch",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "error",
                  "type": "Error"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "errorInfo",
                  "type": "ErrorInfo"
                }
              ],
              "returnType": "void",
              "type": "(error: Error, errorInfo: ErrorInfo) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidMount",
          "inheritedFrom": "ComponentLifecycle.componentDidMount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after a component is mounted. Setting state here will trigger re-rendering.</p>\n"
                ],
                "contentsRaw": "Called immediately after a component is mounted. Setting state here will trigger re-rendering.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidMount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentDidUpdate",
          "inheritedFrom": "NewLifecycle.componentDidUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately after updating occurs. Not called for the initial render.</p>\n<p>The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.</p>\n"
                ],
                "contentsRaw": "Called immediately after updating occurs. Not called for the initial render.\n\nThe snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentDidUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<CardProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": true,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "snapshot",
                  "type": "SS"
                }
              ],
              "returnType": "void",
              "type": "(prevProps: Readonly<CardProps>, prevState: Readonly<>, snapshot?: SS) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "UNSAFE_componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.UNSAFE_componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "UNSAFE_componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<CardProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<CardProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillReceiveProps",
          "inheritedFrom": "DeprecatedLifecycle.componentWillReceiveProps",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillReceiveProps",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<CardProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<CardProps>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUnmount",
          "inheritedFrom": "ComponentLifecycle.componentWillUnmount",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in <code>componentDidMount</code>.</p>\n"
                ],
                "contentsRaw": "Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as\ncancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUnmount",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "componentWillUpdate",
          "inheritedFrom": "DeprecatedLifecycle.componentWillUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"
                  },
                  {
                    "tag": "see",
                    "value": "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"
                  }
                ],
                "contentsRaw": "Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "componentWillUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<CardProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "void",
              "type": "(nextProps: Readonly<CardProps>, nextState: Readonly<>, nextContext: any) => void"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "getSnapshotBeforeUpdate",
          "inheritedFrom": "NewLifecycle.getSnapshotBeforeUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Runs before React applies the result of <code>render</code> to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before <code>render</code> causes changes to it.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.</p>\n"
                ],
                "contentsRaw": "Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.\n\nNote: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "getSnapshotBeforeUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevProps",
                  "type": "Readonly<CardProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "prevState",
                  "type": "Readonly<>"
                }
              ],
              "returnType": "SS | null",
              "type": "(prevProps: Readonly<CardProps>, prevState: Readonly<>) => SS | null"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "Element<>",
              "type": "() => Element<>"
            }
          ]
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "shouldComponentUpdate",
          "inheritedFrom": "ComponentLifecycle.shouldComponentUpdate",
          "signatures": [
            {
              "documentation": {
                "contents": [
                  "<p>Called to determine whether the change in props and state should trigger a re-render.</p>\n<p><code>Component</code> always returns true.\n<code>PureComponent</code> implements a shallow comparison on props and state and returns true if any\nprops or states have changed.</p>\n<p>If false is returned, <code>Component#render</code>, <code>componentWillUpdate</code>\nand <code>componentDidUpdate</code> will not be called.</p>\n"
                ],
                "contentsRaw": "Called to determine whether the change in props and state should trigger a re-render.\n\n`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.",
                "metadata": {}
              },
              "fileName": "node_modules\\@types\\react\\index.d.ts",
              "kind": "signature",
              "name": "shouldComponentUpdate",
              "parameters": [
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextProps",
                  "type": "Readonly<CardProps>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextState",
                  "type": "Readonly<>"
                },
                {
                  "flags": {
                    "isExported": true,
                    "isExternal": false,
                    "isOptional": false,
                    "isPrivate": false,
                    "isProtected": false,
                    "isPublic": false,
                    "isRest": false,
                    "isStatic": false
                  },
                  "kind": "parameter",
                  "name": "nextContext",
                  "type": "any"
                }
              ],
              "returnType": "boolean",
              "type": "(nextProps: Readonly<CardProps>, nextState: Readonly<>, nextContext: any) => boolean"
            }
          ]
        }
      ],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Description",
          "defaultValue": "CardDescription",
          "type": "CardDescription"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Footer",
          "defaultValue": "CardFooter",
          "type": "FunctionComponent<CardFooterProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Grid",
          "defaultValue": "Grid",
          "type": "FunctionComponent<GridProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Image",
          "defaultValue": "CardImage",
          "type": "CardImage"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Info",
          "defaultValue": "Info",
          "type": "FunctionComponent<InfoProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Link",
          "defaultValue": "Link",
          "type": "FunctionComponent<LinkProps>"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Tag",
          "defaultValue": "Tag",
          "type": "Tag"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Tags",
          "defaultValue": "Tags",
          "type": "Tags"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": true
          },
          "kind": "property",
          "name": "Title",
          "defaultValue": "Title",
          "type": "FunctionComponent<TitleProps>"
        }
      ],
      "accessors": []
    },
    "PropertyFieldSitePicker": {
      "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "PropertyFieldSitePicker",
      "implements": [
        "IPropertyPaneField<PropertyFieldSitePickerProperties>"
      ],
      "methods": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "any",
              "type": "() => any"
            }
          ]
        }
      ],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "properties",
          "type": "_PropertyFieldSitePickerProperties"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "targetProperty",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "type",
          "defaultValue": "PropertyPaneFieldType.Custom",
          "type": "PropertyPaneFieldType"
        }
      ],
      "accessors": [],
      "constructorType": {
        "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
        "flags": {
          "isExported": true,
          "isExternal": false,
          "isOptional": false,
          "isPrivate": false,
          "isProtected": false,
          "isPublic": false,
          "isRest": false,
          "isStatic": false
        },
        "kind": "constructor",
        "name": "constructor",
        "signatures": [
          {
            "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
            "kind": "signature",
            "name": "new PropertyFieldSitePicker",
            "parameters": [
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "targetProperty",
                "type": "string"
              },
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "properties",
                "type": "PropertyFieldSitePickerProperties"
              }
            ],
            "returnType": "PropertyFieldSitePicker",
            "type": "(targetProperty: string, properties: PropertyFieldSitePickerProperties) => PropertyFieldSitePicker"
          }
        ]
      }
    },
    "PropertyFieldBlank": {
      "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "PropertyFieldBlank",
      "implements": [
        "IPropertyPaneField<PropertyFieldBlankProperties>"
      ],
      "methods": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "any",
              "type": "() => any"
            }
          ]
        }
      ],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "properties",
          "type": "_BlankPropertyPaneFieldProperties"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "targetProperty",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "type",
          "defaultValue": "PropertyPaneFieldType.Custom",
          "type": "PropertyPaneFieldType"
        }
      ],
      "accessors": [],
      "constructorType": {
        "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
        "flags": {
          "isExported": true,
          "isExternal": false,
          "isOptional": false,
          "isPrivate": false,
          "isProtected": false,
          "isPublic": false,
          "isRest": false,
          "isStatic": false
        },
        "kind": "constructor",
        "name": "constructor",
        "signatures": [
          {
            "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
            "kind": "signature",
            "name": "new PropertyFieldBlank",
            "parameters": [
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "targetProperty",
                "type": "string"
              },
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "properties",
                "type": "PropertyFieldBlankProperties"
              }
            ],
            "returnType": "PropertyFieldBlank",
            "type": "(targetProperty: string, properties: PropertyFieldBlankProperties) => PropertyFieldBlank"
          }
        ]
      }
    },
    "PropertyFieldThemeColor": {
      "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "class",
      "name": "PropertyFieldThemeColor",
      "implements": [
        "IPropertyPaneField<PropertyFieldThemeColorProperties>"
      ],
      "methods": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "method",
          "name": "render",
          "signatures": [
            {
              "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "any",
              "type": "() => any"
            }
          ]
        }
      ],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "properties",
          "type": "_PropertyFieldThemeColorProperties"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "targetProperty",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": true,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "type",
          "defaultValue": "PropertyPaneFieldType.Custom",
          "type": "PropertyPaneFieldType"
        }
      ],
      "accessors": [],
      "constructorType": {
        "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
        "flags": {
          "isExported": true,
          "isExternal": false,
          "isOptional": false,
          "isPrivate": false,
          "isProtected": false,
          "isPublic": false,
          "isRest": false,
          "isStatic": false
        },
        "kind": "constructor",
        "name": "constructor",
        "signatures": [
          {
            "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
            "kind": "signature",
            "name": "new PropertyFieldThemeColor",
            "parameters": [
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "targetProperty",
                "type": "string"
              },
              {
                "flags": {
                  "isExported": true,
                  "isExternal": false,
                  "isOptional": false,
                  "isPrivate": false,
                  "isProtected": false,
                  "isPublic": false,
                  "isRest": false,
                  "isStatic": false
                },
                "kind": "parameter",
                "name": "properties",
                "type": "PropertyFieldThemeColorProperties"
              }
            ],
            "returnType": "PropertyFieldThemeColor",
            "type": "(targetProperty: string, properties: PropertyFieldThemeColorProperties) => PropertyFieldThemeColor"
          }
        ]
      }
    },
    "ThemeColor": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "enum",
      "name": "ThemeColor",
      "members": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "Primary",
          "defaultValue": "\"primary\""
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "Secondary",
          "defaultValue": "\"secondary\""
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "Tertiary",
          "defaultValue": "\"tertiary\""
        }
      ]
    },
    "SiteChoiceType": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "enum",
      "name": "SiteChoiceType",
      "members": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "Other",
          "defaultValue": "\"other\""
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "ThisSite",
          "defaultValue": "\"this-site\""
        }
      ]
    },
    "SiteValidationResult": {
      "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "enum",
      "name": "SiteValidationResult",
      "members": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "MissingDependencies",
          "defaultValue": "\"missing-dependencies\""
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "NoExists",
          "defaultValue": "\"no-exists\""
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "Other",
          "defaultValue": "\"other\""
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "enum member",
          "name": "Valid",
          "defaultValue": "\"valid\""
        }
      ]
    },
    "useComponentSize": {
      "fileName": "src\\ui-toolkit\\hooks\\useComponentSize.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useComponentSize",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useComponentSize.ts",
          "kind": "signature",
          "name": "useComponentSize",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "ref",
              "type": "any"
            }
          ],
          "returnType": "",
          "type": "(ref: any) => "
        }
      ]
    },
    "debounce": {
      "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "debounce",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
          "kind": "signature",
          "name": "debounce",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "func",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "wait",
              "type": "any"
            }
          ],
          "returnType": "(Anonymous function)",
          "type": "(func: any, wait: any) => (Anonymous function)"
        }
      ]
    },
    "hasLength": {
      "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "hasLength",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
          "kind": "signature",
          "name": "hasLength",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "obj",
              "type": "Object"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "path",
              "type": "string"
            }
          ],
          "returnType": "boolean",
          "type": "(obj: Object, path: string) => boolean"
        }
      ]
    },
    "getValue": {
      "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getValue",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
          "kind": "signature",
          "name": "getValue",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "obj",
              "type": "Object"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "path",
              "type": "string"
            }
          ],
          "returnType": "any",
          "type": "(obj: Object, path: string) => any"
        }
      ]
    },
    "getValues": {
      "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getValues",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
          "kind": "signature",
          "name": "getValues",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "obj",
              "type": "Object"
            }
          ],
          "returnType": "any[]",
          "type": "(obj: Object) => any[]"
        }
      ]
    },
    "PortalsThemeProvider": {
      "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "PortalsThemeProvider",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
          "kind": "signature",
          "name": "PortalsThemeProvider",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "getPortalsTheme": {
      "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getPortalsTheme",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
          "kind": "signature",
          "name": "getPortalsTheme",
          "parameters": [],
          "returnType": "any",
          "type": "() => any"
        }
      ]
    },
    "getThemeColor": {
      "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getThemeColor",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
          "kind": "signature",
          "name": "getThemeColor",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "color",
              "type": "string"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "obeyVariant",
              "defaultValue": "true",
              "type": "boolean"
            }
          ],
          "returnType": "any",
          "type": "(color: string, obeyVariant?: boolean) => any"
        }
      ]
    },
    "getThemeValue": {
      "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getThemeValue",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
          "kind": "signature",
          "name": "getThemeValue",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "path",
              "type": "string"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "fallback",
              "type": "string"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": true,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "theme",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(path: string, fallback: string, theme?: any) => any"
        }
      ]
    },
    "BigDate": {
      "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "BigDate",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
          "kind": "signature",
          "name": "BigDate",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "BigDateRange": {
      "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "BigDateRange",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
          "kind": "signature",
          "name": "BigDateRange",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "usePanel": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "usePanel",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "kind": "signature",
          "name": "usePanel",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "opts",
              "defaultValue": "{}",
              "type": "PanelOptions"
            }
          ],
          "returnType": "UsePanelResult",
          "type": "(opts?: PanelOptions) => UsePanelResult"
        }
      ]
    },
    "Panel": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Panel",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "kind": "signature",
          "name": "Panel",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "listenForPanelClose": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "listenForPanelClose",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "kind": "signature",
          "name": "listenForPanelClose",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "cb",
              "type": "() => void"
            }
          ],
          "returnType": "(Anonymous function)",
          "type": "(cb: () => void) => (Anonymous function)"
        }
      ]
    },
    "triggerPanelClose": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "triggerPanelClose",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "kind": "signature",
          "name": "triggerPanelClose",
          "parameters": [],
          "returnType": "void",
          "type": "() => void"
        }
      ]
    },
    "IFramePanel": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\IFramePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "IFramePanel",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\IFramePanel.tsx",
          "kind": "signature",
          "name": "IFramePanel",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "PanelLink": {
      "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
      "flags": {
        "isExported": true,
        "isExternal": true,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "PanelLink",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
          "kind": "signature",
          "name": "PanelLink",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Link": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Link",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
          "kind": "signature",
          "name": "Link",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "HyperLink": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "HyperLink",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
          "kind": "signature",
          "name": "HyperLink",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Text": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Text.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Text",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Text.tsx",
          "kind": "signature",
          "name": "Text",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Title": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Title",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
          "kind": "signature",
          "name": "Title",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Shave": {
      "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Shave",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
          "kind": "signature",
          "name": "Shave",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "useShave": {
      "fileName": "src\\ui-toolkit\\hooks\\useShave.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useShave",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useShave.ts",
          "kind": "signature",
          "name": "useShave",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "maxHeight",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(maxHeight: any) => any"
        }
      ]
    },
    "CardDescription": {
      "fileName": "src\\ui-toolkit\\components\\Card\\CardDescription.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "CardDescription",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\CardDescription.tsx",
          "kind": "signature",
          "name": "CardDescription",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Tags": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Tags",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
          "kind": "signature",
          "name": "Tags",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Tag": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Tag",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
          "kind": "signature",
          "name": "Tag",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Info": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Info.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Info",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Info.tsx",
          "kind": "signature",
          "name": "Info",
          "parameters": [
            {
              "flags": {
                "isExported": false,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "BackgroundImage": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\BackgroundImage.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "BackgroundImage",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\BackgroundImage.tsx",
          "kind": "signature",
          "name": "BackgroundImage",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "CardImage": {
      "fileName": "src\\ui-toolkit\\components\\Card\\CardImage.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "CardImage",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\CardImage.tsx",
          "kind": "signature",
          "name": "CardImage",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "CardFooter": {
      "fileName": "src\\ui-toolkit\\components\\Card\\CardFooter.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "CardFooter",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\CardFooter.tsx",
          "kind": "signature",
          "name": "CardFooter",
          "parameters": [
            {
              "flags": {
                "isExported": false,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "IconImage": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "IconImage",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "kind": "signature",
          "name": "IconImage",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "props",
              "type": "IconImageProps"
            }
          ],
          "returnType": "Element<>",
          "type": "(props: IconImageProps) => Element<>"
        }
      ]
    },
    "getIconFontSize": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getIconFontSize",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "kind": "signature",
          "name": "getIconFontSize",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "width",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "height",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "percentage",
              "defaultValue": "50",
              "type": "number"
            }
          ],
          "returnType": "string",
          "type": "(width: any, height: any, percentage?: number) => string"
        }
      ]
    },
    "checkIsThemeColor": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "checkIsThemeColor",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "kind": "signature",
          "name": "checkIsThemeColor",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "color",
              "type": "ThemeColor | string"
            }
          ],
          "returnType": "boolean",
          "type": "(color: ThemeColor | string) => boolean"
        }
      ]
    },
    "SiteUrlInput": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SiteUrlInput.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "SiteUrlInput",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SiteUrlInput.tsx",
          "kind": "signature",
          "name": "SiteUrlInput",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "props",
              "type": "SiteUrlInputProps"
            }
          ],
          "returnType": "Element<>",
          "type": "(props: SiteUrlInputProps) => Element<>"
        }
      ]
    },
    "checkIsSharePointLink": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "checkIsSharePointLink",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "checkIsSharePointLink",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "url",
              "type": "string"
            }
          ],
          "returnType": "boolean",
          "type": "(url: string) => boolean"
        }
      ]
    },
    "getProfilePhoto": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getProfilePhoto",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "getProfilePhoto",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "email",
              "type": "string"
            }
          ],
          "returnType": "string",
          "type": "(email: string) => string"
        }
      ]
    },
    "getDelveLink": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getDelveLink",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "getDelveLink",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "email",
              "type": "string"
            }
          ],
          "returnType": "string",
          "type": "(email: string) => string"
        }
      ]
    },
    "getCurrentWebUrl": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getCurrentWebUrl",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "getCurrentWebUrl",
          "parameters": [],
          "returnType": "string",
          "type": "() => string"
        }
      ]
    },
    "getCurrentSiteCollectionUrl": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getCurrentSiteCollectionUrl",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "getCurrentSiteCollectionUrl",
          "parameters": [],
          "returnType": "string",
          "type": "() => string"
        }
      ]
    },
    "getSiteUrl": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getSiteUrl",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "getSiteUrl",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": true,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "url",
              "type": "string"
            }
          ],
          "returnType": "string",
          "type": "(url?: string) => string"
        }
      ]
    },
    "getTenant": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getTenant",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "getTenant",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": true,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "url",
              "type": "string"
            }
          ],
          "returnType": "string",
          "type": "(url?: string) => string"
        }
      ]
    },
    "checkListExists": {
      "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "checkListExists",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\sharepointUtils.ts",
          "kind": "signature",
          "name": "checkListExists",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "siteUrl",
              "type": "string"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "listName",
              "type": "string"
            }
          ],
          "returnType": "Promise<boolean>",
          "type": "(siteUrl: string, listName: string) => Promise<boolean>"
        }
      ]
    },
    "Grid": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Grid",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
          "kind": "signature",
          "name": "Grid",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "useScrollSync": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useScrollSync.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useScrollSync",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useScrollSync.ts",
          "kind": "signature",
          "name": "useScrollSync",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "",
          "type": "(__namedParameters: ) => "
        }
      ]
    },
    "ensureProperty": {
      "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "ensureProperty",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\utils.ts",
          "kind": "signature",
          "name": "ensureProperty",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "obj",
              "type": "Object"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "path",
              "type": "string"
            }
          ],
          "returnType": "boolean",
          "type": "(obj: Object, path: string) => boolean"
        }
      ]
    },
    "useHowManyFit": {
      "fileName": "src\\ui-toolkit\\hooks\\useHowManyFit.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useHowManyFit",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useHowManyFit.ts",
          "kind": "signature",
          "name": "useHowManyFit",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "minWidth",
              "type": "number"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "parentRef",
              "type": "MutableRefObject<Element>"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "options",
              "defaultValue": "defaults",
              "type": "HowManyFitOptions"
            }
          ],
          "returnType": "[number, number, number]",
          "type": "(minWidth: number, parentRef: MutableRefObject<Element>, options?: HowManyFitOptions) => [number, number, number]"
        }
      ]
    },
    "usePaging": {
      "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "usePaging",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "kind": "signature",
          "name": "usePaging",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "totalPages",
              "type": "number"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "initialPage",
              "defaultValue": "1",
              "type": "number"
            }
          ],
          "returnType": "PagingContext",
          "type": "(totalPages: number, initialPage?: number) => PagingContext"
        }
      ]
    },
    "usePagedItems": {
      "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "usePagedItems",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "kind": "signature",
          "name": "usePagedItems",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "allItems",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "numItems",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "intialPage",
              "defaultValue": "1",
              "type": "number"
            }
          ],
          "returnType": "any[]",
          "type": "(allItems: any, numItems: any, intialPage?: number) => any[]"
        }
      ]
    },
    "useHover": {
      "fileName": "src\\ui-toolkit\\hooks\\useHover.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useHover",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useHover.ts",
          "kind": "signature",
          "name": "useHover",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "hoverRef",
              "type": "MutableRefObject<Element>"
            }
          ],
          "returnType": "boolean",
          "type": "(hoverRef: MutableRefObject<Element>) => boolean"
        }
      ]
    },
    "useFilmstrip": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useFilmstrip.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useFilmstrip",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useFilmstrip.ts",
          "kind": "signature",
          "name": "useFilmstrip",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "totalCount",
              "type": "number"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "paneRef",
              "type": "MutableRefObject<Element>"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "opts",
              "defaultValue": "defaults",
              "type": "FilmstripOptions"
            }
          ],
          "returnType": "",
          "type": "(totalCount: number, paneRef: MutableRefObject<Element>, opts?: FilmstripOptions) => "
        }
      ]
    },
    "Filmstrip": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Filmstrip",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
          "kind": "signature",
          "name": "Filmstrip",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "Thumbnail": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "Thumbnail",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
          "kind": "signature",
          "name": "Thumbnail",
          "parameters": [
            {
              "flags": {
                "isExported": false,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "VerticalItemDescription": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalItemDescription.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "VerticalItemDescription",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalItemDescription.tsx",
          "kind": "signature",
          "name": "VerticalItemDescription",
          "parameters": [
            {
              "flags": {
                "isExported": false,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "VerticalItem": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "VerticalItem",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "kind": "signature",
          "name": "VerticalItem",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "VirtualizedGrid": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "VirtualizedGrid",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "kind": "signature",
          "name": "VirtualizedGrid",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "getDateRangeType": {
      "fileName": "src\\ui-toolkit\\components\\DateRangeText\\DateRangeText.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getDateRangeType",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\DateRangeText\\DateRangeText.tsx",
          "kind": "signature",
          "name": "getDateRangeType",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "start",
              "type": "Date"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": true,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "end",
              "type": "Date"
            }
          ],
          "returnType": "DateRangeType",
          "type": "(start: Date, end?: Date) => DateRangeType"
        }
      ]
    },
    "DateRangeText": {
      "fileName": "src\\ui-toolkit\\components\\DateRangeText\\DateRangeText.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "DateRangeText",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\DateRangeText\\DateRangeText.tsx",
          "kind": "signature",
          "name": "DateRangeText",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "event",
              "type": "DateRangeTextProps"
            }
          ],
          "returnType": "Element<>",
          "type": "(event: DateRangeTextProps) => Element<>"
        }
      ]
    },
    "LinkTile": {
      "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "LinkTile",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
          "kind": "signature",
          "name": "LinkTile",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "props",
              "type": "LinkTileProps"
            }
          ],
          "returnType": "Element<>",
          "type": "(props: LinkTileProps) => Element<>"
        }
      ]
    },
    "ThemePreview": {
      "fileName": "src\\ui-toolkit\\components\\ThemePreview\\ThemePreview.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "ThemePreview",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\ThemePreview\\ThemePreview.tsx",
          "kind": "signature",
          "name": "ThemePreview",
          "parameters": [],
          "returnType": "Element<>",
          "type": "() => Element<>"
        }
      ]
    },
    "ColorPreview": {
      "fileName": "src\\ui-toolkit\\components\\ThemePreview\\ThemePreview.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "ColorPreview",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\ThemePreview\\ThemePreview.tsx",
          "kind": "signature",
          "name": "ColorPreview",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "__namedParameters",
              "type": ""
            }
          ],
          "returnType": "Element<>",
          "type": "(__namedParameters: ) => Element<>"
        }
      ]
    },
    "useDebouncedValue": {
      "fileName": "src\\ui-toolkit\\hooks\\useDebounce.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useDebouncedValue",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useDebounce.ts",
          "kind": "signature",
          "name": "useDebouncedValue",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "value",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "delay",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(value: any, delay: any) => any"
        }
      ]
    },
    "useDebouncedEffect": {
      "fileName": "src\\ui-toolkit\\hooks\\useDebounce.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useDebouncedEffect",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useDebounce.ts",
          "kind": "signature",
          "name": "useDebouncedEffect",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "effectFn",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "value",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "delay",
              "defaultValue": "250",
              "type": "number"
            }
          ],
          "returnType": "void",
          "type": "(effectFn: any, value: any, delay?: number) => void"
        }
      ]
    },
    "useAsyncData": {
      "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useAsyncData",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
          "kind": "signature",
          "name": "useAsyncData",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "asyncFn",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "args",
              "type": "any[]"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "initialValue",
              "type": "T"
            }
          ],
          "returnType": "",
          "type": "(asyncFn: any, args: any[], initialValue: T) => "
        }
      ]
    },
    "replace": {
      "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "replace",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
          "kind": "signature",
          "name": "replace",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "data",
              "type": "T"
            }
          ],
          "returnType": "void",
          "type": "(data: T) => void"
        }
      ]
    },
    "useInterval": {
      "fileName": "src\\ui-toolkit\\hooks\\useInterval.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useInterval",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useInterval.ts",
          "kind": "signature",
          "name": "useInterval",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "callback",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "delay",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": true,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "intervalKey",
              "type": "any"
            }
          ],
          "returnType": "void",
          "type": "(callback: any, delay: any, intervalKey?: any) => void"
        }
      ]
    },
    "useQueryString": {
      "fileName": "src\\ui-toolkit\\hooks\\useQueryString.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useQueryString",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useQueryString.ts",
          "kind": "signature",
          "name": "useQueryString",
          "parameters": [
            {
              "flags": {
                "isExported": false,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "key",
              "type": "any"
            },
            {
              "flags": {
                "isExported": false,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "initialValue",
              "type": "T"
            },
            {
              "flags": {
                "isExported": false,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "delay",
              "defaultValue": "0",
              "type": "number"
            }
          ],
          "returnType": "[T, function]",
          "type": "(key: any, initialValue: T, delay?: number) => [T, function]"
        }
      ]
    },
    "getQueryStringValue": {
      "fileName": "src\\ui-toolkit\\hooks\\useQueryString.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getQueryStringValue",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useQueryString.ts",
          "kind": "signature",
          "name": "getQueryStringValue",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "key",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "queryString",
              "defaultValue": "(window.location.search || \"\").substr(1)",
              "type": "string"
            }
          ],
          "returnType": "any",
          "type": "(key: any, queryString?: string) => any"
        }
      ]
    },
    "usePersistedState": {
      "fileName": "src\\ui-toolkit\\hooks\\usePersistedState.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "usePersistedState",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\usePersistedState.ts",
          "kind": "signature",
          "name": "usePersistedState",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "key",
              "type": "string"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "defaultValue",
              "type": "T"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "storage",
              "defaultValue": "window.localStorage",
              "type": "Storage"
            }
          ],
          "returnType": "(T | function)[]",
          "type": "(key: string, defaultValue: T, storage?: Storage) => (T | function)[]"
        }
      ]
    },
    "useAutoPaging": {
      "fileName": "src\\ui-toolkit\\hooks\\useAutoPaging.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useAutoPaging",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useAutoPaging.ts",
          "kind": "signature",
          "name": "useAutoPaging",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "totalPages",
              "type": "number"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "delay",
              "defaultValue": "5000",
              "type": "number"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "defaultPage",
              "defaultValue": "1",
              "type": "number"
            }
          ],
          "returnType": "AutoPagingContext",
          "type": "(totalPages: number, delay?: number, defaultPage?: number) => AutoPagingContext"
        }
      ]
    },
    "CardDemo": {
      "fileName": "src\\ui-toolkit\\components\\Card\\CardDemo.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "CardDemo",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\CardDemo.tsx",
          "kind": "signature",
          "name": "CardDemo",
          "parameters": [],
          "returnType": "Element<>",
          "type": "() => Element<>"
        }
      ]
    },
    "getCache": {
      "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getCache",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "kind": "signature",
          "name": "getCache",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "cacheOpts",
              "type": "CacheOptions | string"
            }
          ],
          "returnType": "any",
          "type": "(cacheOpts: CacheOptions | string) => any"
        }
      ]
    },
    "setCache": {
      "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "setCache",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "kind": "signature",
          "name": "setCache",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "cacheOpts",
              "type": "CacheOptions | string"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "payload",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(cacheOpts: CacheOptions | string, payload: any) => any"
        }
      ]
    },
    "cachify": {
      "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "cachify",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "kind": "signature",
          "name": "cachify",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "asyncFn",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "cacheConfig",
              "type": "CacheOptions"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "context",
              "defaultValue": "this",
              "type": "any"
            }
          ],
          "returnType": "(Anonymous function)",
          "type": "(asyncFn: any, cacheConfig: CacheOptions, context?: any) => (Anonymous function)"
        }
      ]
    },
    "getElements": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getElements",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "getElements",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "selector",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(selector: any) => any"
        }
      ]
    },
    "getClassList": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getClassList",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "getClassList",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(elem: any) => any"
        }
      ]
    },
    "hasClass": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "hasClass",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "hasClass",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "className",
              "type": "any"
            }
          ],
          "returnType": "boolean",
          "type": "(elem: any, className: any) => boolean"
        }
      ]
    },
    "addClass": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "addClass",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "addClass",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "className",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(elem: any, className: any) => any"
        }
      ]
    },
    "removeClass": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "removeClass",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "removeClass",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "className",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(elem: any, className: any) => any"
        }
      ]
    },
    "toggleClass": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "toggleClass",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "toggleClass",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "className",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(elem: any, className: any) => any"
        }
      ]
    },
    "addStyle": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "addStyle",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "addStyle",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "styles",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(elem: any, styles: any) => any"
        }
      ]
    },
    "removeStyle": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "removeStyle",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "removeStyle",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "styles",
              "type": "any"
            }
          ],
          "returnType": "any",
          "type": "(elem: any, styles: any) => any"
        }
      ]
    },
    "removeElement": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "removeElement",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "removeElement",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "any"
            }
          ],
          "returnType": "void",
          "type": "(elem: any) => void"
        }
      ]
    },
    "getClosest": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getClosest",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "getClosest",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "Element"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "selector",
              "type": "string"
            }
          ],
          "returnType": "Element",
          "type": "(elem: Element, selector: string) => Element"
        }
      ]
    },
    "getNextSiblings": {
      "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "getNextSiblings",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\domUtils.ts",
          "kind": "signature",
          "name": "getNextSiblings",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "elem",
              "type": "Element"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "selectorFilter",
              "type": "string"
            }
          ],
          "returnType": "any[]",
          "type": "(elem: Element, selectorFilter: string) => any[]"
        }
      ]
    },
    "useOnClickOutside": {
      "fileName": "src\\ui-toolkit\\hooks\\useOnClickOutside.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useOnClickOutside",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useOnClickOutside.ts",
          "kind": "signature",
          "name": "useOnClickOutside",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "ref",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "handler",
              "type": "any"
            }
          ],
          "returnType": "void",
          "type": "(ref: any, handler: any) => void"
        }
      ]
    },
    "useSiteData": {
      "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "useSiteData",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "kind": "signature",
          "name": "useSiteData",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "params",
              "type": "SiteDataParams<T>"
            }
          ],
          "returnType": "SiteDataState<T>",
          "type": "(params: SiteDataParams<T>) => SiteDataState<T>"
        }
      ]
    },
    "validateListExists": {
      "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "validateListExists",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "kind": "signature",
          "name": "validateListExists",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "siteUrl",
              "type": "any"
            },
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "listTitle",
              "type": "any"
            }
          ],
          "returnType": "Promise<boolean>",
          "type": "(siteUrl: any, listTitle: any) => Promise<boolean>"
        }
      ]
    },
    "validateSiteExists": {
      "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "method",
      "name": "validateSiteExists",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "kind": "signature",
          "name": "validateSiteExists",
          "parameters": [
            {
              "flags": {
                "isExported": true,
                "isExternal": false,
                "isOptional": false,
                "isPrivate": false,
                "isProtected": false,
                "isPublic": false,
                "isRest": false,
                "isStatic": false
              },
              "kind": "parameter",
              "name": "siteUrl",
              "type": "string"
            }
          ],
          "returnType": "Promise<boolean>",
          "type": "(siteUrl: string) => Promise<boolean>"
        }
      ]
    },
    "Window": {
      "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "Window",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "__themeState__",
          "type": "any"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "_portalsTheme",
          "type": "any"
        }
      ]
    },
    "PortalsThemeProviderProps": {
      "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PortalsThemeProviderProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\PortalsThemeProvider\\PortalsThemeProvider.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "theme",
          "type": "IReadonlyTheme"
        }
      ]
    },
    "BigDateProps": {
      "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "BigDateProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>An optional class name to help with style overrides</p>\n"
            ],
            "contentsRaw": "An optional class name to help with style overrides",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>The Date to display</p>\n"
            ],
            "contentsRaw": "The Date to display",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "date",
          "type": "Date"
        }
      ]
    },
    "BigDateRangeProps": {
      "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "BigDateRangeProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>An optional class name to help with style overrides</p>\n"
            ],
            "contentsRaw": "An optional class name to help with style overrides",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>The end date is optional, if not passed a BigDate component will render</p>\n"
            ],
            "contentsRaw": "The end date is optional, if not passed a BigDate component will render",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "end",
          "type": "Date"
        },
        {
          "documentation": {
            "contents": [
              "<p>The start date, the date that displays if there is no end date</p>\n"
            ],
            "contentsRaw": "The start date, the date that displays if there is no end date",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\BigDate\\BigDate.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "start",
          "type": "Date"
        }
      ]
    },
    "PanelOptions": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PanelOptions",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "close",
          "type": "() => void"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "controlledIsOpen",
          "type": "boolean"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "open",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>The size of the panel. &quot;small&quot;, &quot;medium&quot;, &quot;large&quot;, or a Number</p>\n"
            ],
            "contentsRaw": "The size of the panel. \"small\", \"medium\", \"large\", or a Number",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "size",
          "type": "PanelSize"
        },
        {
          "documentation": {
            "contents": [
              "<p>Defaults to false. Should the panel be open by default?</p>\n"
            ],
            "contentsRaw": "Defaults to false. Should the panel be open by default?",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "startOpen",
          "type": "boolean"
        }
      ]
    },
    "PanelProps": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\IFramePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PanelProps",
      "extends": [
        "IPanelProps"
      ],
      "methods": [],
      "properties": [
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onKeyPressCapture",
          "inheritedFrom": "DOMAttributes.onKeyPressCapture",
          "type": "KeyboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "about",
          "inheritedFrom": "HTMLAttributes.about",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Allow body scroll on content and overlay on touch devices. Changing after mounting has no effect.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "false"
              }
            ],
            "contentsRaw": "Allow body scroll on content and overlay on touch devices. Changing after mounting has no effect.\n\n@defaultvalue false",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "allowTouchBodyScroll",
          "inheritedFrom": "IPanelProps.allowTouchBodyScroll",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "autoCapitalize",
          "inheritedFrom": "HTMLAttributes.autoCapitalize",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "autoCorrect",
          "inheritedFrom": "HTMLAttributes.autoCorrect",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "autoSave",
          "inheritedFrom": "HTMLAttributes.autoSave",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "children",
          "inheritedFrom": "DOMAttributes.children",
          "type": "ReactNode"
        },
        {
          "documentation": {
            "contents": [
              "<p>Additional css class to apply to the Panel</p>\n",
              {
                "tag": "defaultvalue",
                "value": "undefined"
              }
            ],
            "contentsRaw": "Additional css class to apply to the Panel\n\n@defaultvalue undefined",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "inheritedFrom": "IPanelProps.className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Aria label on close button</p>\n"
            ],
            "contentsRaw": "Aria label on close button",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "closeButtonAriaLabel",
          "inheritedFrom": "IPanelProps.closeButtonAriaLabel",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "color",
          "inheritedFrom": "HTMLAttributes.color",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Deprecated property. Serves no function.</p>\n"
            ],
            "contentsRaw": "Deprecated property. Serves no function.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isDeprecated": "Serves no function.",
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "componentId",
          "inheritedFrom": "IPanelProps.componentId",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional callback to access the IPanel interface. Use this instead of ref for accessing\nthe public methods and properties of the component.</p>\n"
            ],
            "contentsRaw": "Optional callback to access the IPanel interface. Use this instead of ref for accessing\nthe public methods and properties of the component.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "componentRef",
          "inheritedFrom": "IPanelProps.componentRef",
          "type": "IRefObject<IPanel>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "contentEditable",
          "inheritedFrom": "HTMLAttributes.contentEditable",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "contextMenu",
          "inheritedFrom": "HTMLAttributes.contextMenu",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Custom panel width, used only when <code>type</code> is set to <code>PanelType.custom</code>.</p>\n"
            ],
            "contentsRaw": "Custom panel width, used only when `type` is set to `PanelType.custom`.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "customWidth",
          "inheritedFrom": "IPanelProps.customWidth",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "dangerouslySetInnerHTML",
          "inheritedFrom": "DOMAttributes.dangerouslySetInnerHTML",
          "type": ""
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "datatype",
          "inheritedFrom": "HTMLAttributes.datatype",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "defaultChecked",
          "inheritedFrom": "HTMLAttributes.defaultChecked",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "defaultValue",
          "inheritedFrom": "HTMLAttributes.defaultValue",
          "type": "string | string[]"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "dir",
          "inheritedFrom": "HTMLAttributes.dir",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "draggable",
          "inheritedFrom": "HTMLAttributes.draggable",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Sets the HTMLElement to focus on when exiting the FocusTrapZone.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "The element.target that triggered the Panel."
              }
            ],
            "contentsRaw": "Sets the HTMLElement to focus on when exiting the FocusTrapZone.\n\n@defaultvalue The element.target that triggered the Panel.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "elementToFocusOnDismiss",
          "inheritedFrom": "IPanelProps.elementToFocusOnDismiss",
          "type": "HTMLElement"
        },
        {
          "documentation": {
            "contents": [
              "<p>Indicates the selector for first focusable item.\nDeprecated, use <code>focusTrapZoneProps</code>.</p>\n"
            ],
            "contentsRaw": "Indicates the selector for first focusable item.\nDeprecated, use `focusTrapZoneProps`.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isDeprecated": "Use `focusTrapZoneProps`.",
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "firstFocusableSelector",
          "inheritedFrom": "IPanelProps.firstFocusableSelector",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional props to pass to the FocusTrapZone component to manage focus in the panel.</p>\n"
            ],
            "contentsRaw": "Optional props to pass to the FocusTrapZone component to manage focus in the panel.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "focusTrapZoneProps",
          "inheritedFrom": "IPanelProps.focusTrapZoneProps",
          "type": "IFocusTrapZoneProps"
        },
        {
          "documentation": {
            "contents": [
              "<p>Indicates whether Panel should force focus inside the focus trap zone.\nIf not explicitly specified, behavior aligns with FocusTrapZone&#39;s default behavior.\nDeprecated, use <code>focusTrapZoneProps</code>.</p>\n"
            ],
            "contentsRaw": "Indicates whether Panel should force focus inside the focus trap zone.\nIf not explicitly specified, behavior aligns with FocusTrapZone's default behavior.\nDeprecated, use `focusTrapZoneProps`.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isDeprecated": "Use `focusTrapZoneProps`.",
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "forceFocusInsideTrap",
          "inheritedFrom": "IPanelProps.forceFocusInsideTrap",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Has the close button visible.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "true"
              }
            ],
            "contentsRaw": "Has the close button visible.\n\n@defaultvalue true",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "hasCloseButton",
          "inheritedFrom": "IPanelProps.hasCloseButton",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional parameter to provider the class name for header text</p>\n"
            ],
            "contentsRaw": "Optional parameter to provider the class name for header text",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "headerClassName",
          "inheritedFrom": "IPanelProps.headerClassName",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Header text for the Panel.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "\"\""
              }
            ],
            "contentsRaw": "Header text for the Panel.\n\n@defaultvalue \"\"",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "headerText",
          "inheritedFrom": "IPanelProps.headerText",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>The props for header text container.</p>\n"
            ],
            "contentsRaw": "The props for header text container.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "headerTextProps",
          "inheritedFrom": "IPanelProps.headerTextProps",
          "type": "HTMLAttributes<HTMLDivElement>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "hidden",
          "inheritedFrom": "HTMLAttributes.hidden",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "id",
          "inheritedFrom": "HTMLAttributes.id",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Indicates if this Panel will ignore keeping track of HTMLElement that activated the Zone.\nDeprecated, use <code>focusTrapZoneProps</code>.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "false"
              }
            ],
            "contentsRaw": "Indicates if this Panel will ignore keeping track of HTMLElement that activated the Zone.\nDeprecated, use `focusTrapZoneProps`.\n\n@defaultvalue false",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isDeprecated": "Use `focusTrapZoneProps`.",
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "ignoreExternalFocusing",
          "inheritedFrom": "IPanelProps.ignoreExternalFocusing",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "inlist",
          "inheritedFrom": "HTMLAttributes.inlist",
          "type": "any"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "inputMode",
          "inheritedFrom": "HTMLAttributes.inputMode",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "is",
          "inheritedFrom": "HTMLAttributes.is",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Whether the panel uses a modal overlay or not</p>\n",
              {
                "tag": "defaultvalue",
                "value": "true"
              }
            ],
            "contentsRaw": "Whether the panel uses a modal overlay or not\n\n@defaultvalue true",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isBlocking",
          "inheritedFrom": "IPanelProps.isBlocking",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Determines if content should stretch to fill available space putting footer at the bottom of the page</p>\n",
              {
                "tag": "defaultvalue",
                "value": "false"
              }
            ],
            "contentsRaw": "Determines if content should stretch to fill available space putting footer at the bottom of the page\n\n@defaultvalue false",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isFooterAtBottom",
          "inheritedFrom": "IPanelProps.isFooterAtBottom",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Whether the panel is hidden on dismiss, instead of destroyed in the DOM.\nProtects the contents from being destroyed when the panel is dismissed.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "false"
              }
            ],
            "contentsRaw": "Whether the panel is hidden on dismiss, instead of destroyed in the DOM.\nProtects the contents from being destroyed when the panel is dismissed.\n\n@defaultvalue false",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isHiddenOnDismiss",
          "inheritedFrom": "IPanelProps.isHiddenOnDismiss",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Whether the panel can be light dismissed.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "false"
              }
            ],
            "contentsRaw": "Whether the panel can be light dismissed.\n\n@defaultvalue false",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isLightDismiss",
          "inheritedFrom": "IPanelProps.isLightDismiss",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Whether the panel is displayed.\nIf true, will cause panel to stay open even if dismissed.\nIf false, will cause panel to stay hidden.\nIf undefined, will allow the panel to control its own visility through open/dismiss methods.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "undefined"
              }
            ],
            "contentsRaw": "Whether the panel is displayed.\nIf true, will cause panel to stay open even if dismissed.\nIf false, will cause panel to stay hidden.\nIf undefined, will allow the panel to control its own visility through open/dismiss methods.\n\n@defaultvalue undefined",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isOpen",
          "inheritedFrom": "IPanelProps.isOpen",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "itemID",
          "inheritedFrom": "HTMLAttributes.itemID",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "itemProp",
          "inheritedFrom": "HTMLAttributes.itemProp",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "itemRef",
          "inheritedFrom": "HTMLAttributes.itemRef",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "itemScope",
          "inheritedFrom": "HTMLAttributes.itemScope",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "itemType",
          "inheritedFrom": "HTMLAttributes.itemType",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "lang",
          "inheritedFrom": "HTMLAttributes.lang",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional props to pass to the Layer component hosting the panel.</p>\n"
            ],
            "contentsRaw": "Optional props to pass to the Layer component hosting the panel.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "layerProps",
          "inheritedFrom": "IPanelProps.layerProps",
          "type": "ILayerProps"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAbort",
          "inheritedFrom": "DOMAttributes.onAbort",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAbortCapture",
          "inheritedFrom": "DOMAttributes.onAbortCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAnimationEnd",
          "inheritedFrom": "DOMAttributes.onAnimationEnd",
          "type": "AnimationEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAnimationEndCapture",
          "inheritedFrom": "DOMAttributes.onAnimationEndCapture",
          "type": "AnimationEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAnimationIteration",
          "inheritedFrom": "DOMAttributes.onAnimationIteration",
          "type": "AnimationEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAnimationIterationCapture",
          "inheritedFrom": "DOMAttributes.onAnimationIterationCapture",
          "type": "AnimationEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAnimationStart",
          "inheritedFrom": "DOMAttributes.onAnimationStart",
          "type": "AnimationEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onAnimationStartCapture",
          "inheritedFrom": "DOMAttributes.onAnimationStartCapture",
          "type": "AnimationEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onBeforeInput",
          "inheritedFrom": "DOMAttributes.onBeforeInput",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onBeforeInputCapture",
          "inheritedFrom": "DOMAttributes.onBeforeInputCapture",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onBlur",
          "inheritedFrom": "DOMAttributes.onBlur",
          "type": "FocusEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onBlurCapture",
          "inheritedFrom": "DOMAttributes.onBlurCapture",
          "type": "FocusEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCanPlay",
          "inheritedFrom": "DOMAttributes.onCanPlay",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCanPlayCapture",
          "inheritedFrom": "DOMAttributes.onCanPlayCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCanPlayThrough",
          "inheritedFrom": "DOMAttributes.onCanPlayThrough",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCanPlayThroughCapture",
          "inheritedFrom": "DOMAttributes.onCanPlayThroughCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onChange",
          "inheritedFrom": "DOMAttributes.onChange",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onChangeCapture",
          "inheritedFrom": "DOMAttributes.onChangeCapture",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onClick",
          "inheritedFrom": "DOMAttributes.onClick",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onClickCapture",
          "inheritedFrom": "DOMAttributes.onClickCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCompositionEnd",
          "inheritedFrom": "DOMAttributes.onCompositionEnd",
          "type": "CompositionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCompositionEndCapture",
          "inheritedFrom": "DOMAttributes.onCompositionEndCapture",
          "type": "CompositionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCompositionStart",
          "inheritedFrom": "DOMAttributes.onCompositionStart",
          "type": "CompositionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCompositionStartCapture",
          "inheritedFrom": "DOMAttributes.onCompositionStartCapture",
          "type": "CompositionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCompositionUpdate",
          "inheritedFrom": "DOMAttributes.onCompositionUpdate",
          "type": "CompositionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCompositionUpdateCapture",
          "inheritedFrom": "DOMAttributes.onCompositionUpdateCapture",
          "type": "CompositionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onContextMenu",
          "inheritedFrom": "DOMAttributes.onContextMenu",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onContextMenuCapture",
          "inheritedFrom": "DOMAttributes.onContextMenuCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCopy",
          "inheritedFrom": "DOMAttributes.onCopy",
          "type": "ClipboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCopyCapture",
          "inheritedFrom": "DOMAttributes.onCopyCapture",
          "type": "ClipboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCut",
          "inheritedFrom": "DOMAttributes.onCut",
          "type": "ClipboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onCutCapture",
          "inheritedFrom": "DOMAttributes.onCutCapture",
          "type": "ClipboardEventHandler<PanelBase>"
        },
        {
          "documentation": {
            "contents": [
              "<p>A callback function for when the panel is closed, before the animation completes.\nIf the panel should NOT be dismissed based on some keyboard event, then simply call ev.preventDefault() on it</p>\n"
            ],
            "contentsRaw": "A callback function for when the panel is closed, before the animation completes.\nIf the panel should NOT be dismissed based on some keyboard event, then simply call ev.preventDefault() on it",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDismiss",
          "inheritedFrom": "IPanelProps.onDismiss",
          "type": "(ev?: SyntheticEvent<HTMLElement>) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>A callback function which is called <strong>after</strong> the Panel is dismissed and the animation is complete.\n(If you need to update the Panel&#39;s <code>isOpen</code> prop in response to a dismiss event, use <code>onDismiss</code> instead.)</p>\n"
            ],
            "contentsRaw": "A callback function which is called **after** the Panel is dismissed and the animation is complete.\n(If you need to update the Panel's `isOpen` prop in response to a dismiss event, use `onDismiss` instead.)",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDismissed",
          "inheritedFrom": "IPanelProps.onDismissed",
          "type": "() => void"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDoubleClick",
          "inheritedFrom": "DOMAttributes.onDoubleClick",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDoubleClickCapture",
          "inheritedFrom": "DOMAttributes.onDoubleClickCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDrag",
          "inheritedFrom": "DOMAttributes.onDrag",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragCapture",
          "inheritedFrom": "DOMAttributes.onDragCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragEnd",
          "inheritedFrom": "DOMAttributes.onDragEnd",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragEndCapture",
          "inheritedFrom": "DOMAttributes.onDragEndCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragEnter",
          "inheritedFrom": "DOMAttributes.onDragEnter",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragEnterCapture",
          "inheritedFrom": "DOMAttributes.onDragEnterCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragExit",
          "inheritedFrom": "DOMAttributes.onDragExit",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragExitCapture",
          "inheritedFrom": "DOMAttributes.onDragExitCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragLeave",
          "inheritedFrom": "DOMAttributes.onDragLeave",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragLeaveCapture",
          "inheritedFrom": "DOMAttributes.onDragLeaveCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragOver",
          "inheritedFrom": "DOMAttributes.onDragOver",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragOverCapture",
          "inheritedFrom": "DOMAttributes.onDragOverCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragStart",
          "inheritedFrom": "DOMAttributes.onDragStart",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDragStartCapture",
          "inheritedFrom": "DOMAttributes.onDragStartCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDrop",
          "inheritedFrom": "DOMAttributes.onDrop",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDropCapture",
          "inheritedFrom": "DOMAttributes.onDropCapture",
          "type": "DragEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDurationChange",
          "inheritedFrom": "DOMAttributes.onDurationChange",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDurationChangeCapture",
          "inheritedFrom": "DOMAttributes.onDurationChangeCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onEmptied",
          "inheritedFrom": "DOMAttributes.onEmptied",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onEmptiedCapture",
          "inheritedFrom": "DOMAttributes.onEmptiedCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onEncrypted",
          "inheritedFrom": "DOMAttributes.onEncrypted",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onEncryptedCapture",
          "inheritedFrom": "DOMAttributes.onEncryptedCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onEnded",
          "inheritedFrom": "DOMAttributes.onEnded",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onEndedCapture",
          "inheritedFrom": "DOMAttributes.onEndedCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onError",
          "inheritedFrom": "DOMAttributes.onError",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onErrorCapture",
          "inheritedFrom": "DOMAttributes.onErrorCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onFocus",
          "inheritedFrom": "DOMAttributes.onFocus",
          "type": "FocusEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onFocusCapture",
          "inheritedFrom": "DOMAttributes.onFocusCapture",
          "type": "FocusEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onGotPointerCapture",
          "inheritedFrom": "DOMAttributes.onGotPointerCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onGotPointerCaptureCapture",
          "inheritedFrom": "DOMAttributes.onGotPointerCaptureCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onInput",
          "inheritedFrom": "DOMAttributes.onInput",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onInputCapture",
          "inheritedFrom": "DOMAttributes.onInputCapture",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onInvalid",
          "inheritedFrom": "DOMAttributes.onInvalid",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onInvalidCapture",
          "inheritedFrom": "DOMAttributes.onInvalidCapture",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onKeyDown",
          "inheritedFrom": "DOMAttributes.onKeyDown",
          "type": "KeyboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onKeyDownCapture",
          "inheritedFrom": "DOMAttributes.onKeyDownCapture",
          "type": "KeyboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onKeyPress",
          "inheritedFrom": "DOMAttributes.onKeyPress",
          "type": "KeyboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "accessKey",
          "inheritedFrom": "HTMLAttributes.accessKey",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onKeyUp",
          "inheritedFrom": "DOMAttributes.onKeyUp",
          "type": "KeyboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onKeyUpCapture",
          "inheritedFrom": "DOMAttributes.onKeyUpCapture",
          "type": "KeyboardEventHandler<PanelBase>"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional custom function to handle clicks outside the panel in lightdismiss mode</p>\n"
            ],
            "contentsRaw": "Optional custom function to handle clicks outside the panel in lightdismiss mode",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLightDismissClick",
          "inheritedFrom": "IPanelProps.onLightDismissClick",
          "type": "() => void"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoad",
          "inheritedFrom": "DOMAttributes.onLoad",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoadCapture",
          "inheritedFrom": "DOMAttributes.onLoadCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoadStart",
          "inheritedFrom": "DOMAttributes.onLoadStart",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoadStartCapture",
          "inheritedFrom": "DOMAttributes.onLoadStartCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoadedData",
          "inheritedFrom": "DOMAttributes.onLoadedData",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoadedDataCapture",
          "inheritedFrom": "DOMAttributes.onLoadedDataCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoadedMetadata",
          "inheritedFrom": "DOMAttributes.onLoadedMetadata",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLoadedMetadataCapture",
          "inheritedFrom": "DOMAttributes.onLoadedMetadataCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLostPointerCapture",
          "inheritedFrom": "DOMAttributes.onLostPointerCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onLostPointerCaptureCapture",
          "inheritedFrom": "DOMAttributes.onLostPointerCaptureCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseDown",
          "inheritedFrom": "DOMAttributes.onMouseDown",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseDownCapture",
          "inheritedFrom": "DOMAttributes.onMouseDownCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseEnter",
          "inheritedFrom": "DOMAttributes.onMouseEnter",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseLeave",
          "inheritedFrom": "DOMAttributes.onMouseLeave",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseMove",
          "inheritedFrom": "DOMAttributes.onMouseMove",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseMoveCapture",
          "inheritedFrom": "DOMAttributes.onMouseMoveCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseOut",
          "inheritedFrom": "DOMAttributes.onMouseOut",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseOutCapture",
          "inheritedFrom": "DOMAttributes.onMouseOutCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseOver",
          "inheritedFrom": "DOMAttributes.onMouseOver",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseOverCapture",
          "inheritedFrom": "DOMAttributes.onMouseOverCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseUp",
          "inheritedFrom": "DOMAttributes.onMouseUp",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onMouseUpCapture",
          "inheritedFrom": "DOMAttributes.onMouseUpCapture",
          "type": "MouseEventHandler<PanelBase>"
        },
        {
          "documentation": {
            "contents": [
              "<p>A callback function for when the Panel is opened, before the animation completes.</p>\n"
            ],
            "contentsRaw": "A callback function for when the Panel is opened, before the animation completes.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onOpen",
          "inheritedFrom": "IPanelProps.onOpen",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>A callback function for when the Panel is opened, after the animation completes.</p>\n"
            ],
            "contentsRaw": "A callback function for when the Panel is opened, after the animation completes.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onOpened",
          "inheritedFrom": "IPanelProps.onOpened",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional custom function to handle clicks outside this component</p>\n"
            ],
            "contentsRaw": "Optional custom function to handle clicks outside this component",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onOuterClick",
          "inheritedFrom": "IPanelProps.onOuterClick",
          "type": "() => void"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPaste",
          "inheritedFrom": "DOMAttributes.onPaste",
          "type": "ClipboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPasteCapture",
          "inheritedFrom": "DOMAttributes.onPasteCapture",
          "type": "ClipboardEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPause",
          "inheritedFrom": "DOMAttributes.onPause",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPauseCapture",
          "inheritedFrom": "DOMAttributes.onPauseCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPlay",
          "inheritedFrom": "DOMAttributes.onPlay",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPlayCapture",
          "inheritedFrom": "DOMAttributes.onPlayCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPlaying",
          "inheritedFrom": "DOMAttributes.onPlaying",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPlayingCapture",
          "inheritedFrom": "DOMAttributes.onPlayingCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerCancel",
          "inheritedFrom": "DOMAttributes.onPointerCancel",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerCancelCapture",
          "inheritedFrom": "DOMAttributes.onPointerCancelCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerDown",
          "inheritedFrom": "DOMAttributes.onPointerDown",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerDownCapture",
          "inheritedFrom": "DOMAttributes.onPointerDownCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerEnter",
          "inheritedFrom": "DOMAttributes.onPointerEnter",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerEnterCapture",
          "inheritedFrom": "DOMAttributes.onPointerEnterCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerLeave",
          "inheritedFrom": "DOMAttributes.onPointerLeave",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerLeaveCapture",
          "inheritedFrom": "DOMAttributes.onPointerLeaveCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerMove",
          "inheritedFrom": "DOMAttributes.onPointerMove",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerMoveCapture",
          "inheritedFrom": "DOMAttributes.onPointerMoveCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerOut",
          "inheritedFrom": "DOMAttributes.onPointerOut",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerOutCapture",
          "inheritedFrom": "DOMAttributes.onPointerOutCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerOver",
          "inheritedFrom": "DOMAttributes.onPointerOver",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerOverCapture",
          "inheritedFrom": "DOMAttributes.onPointerOverCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerUp",
          "inheritedFrom": "DOMAttributes.onPointerUp",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onPointerUpCapture",
          "inheritedFrom": "DOMAttributes.onPointerUpCapture",
          "type": "PointerEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onProgress",
          "inheritedFrom": "DOMAttributes.onProgress",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onProgressCapture",
          "inheritedFrom": "DOMAttributes.onProgressCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRateChange",
          "inheritedFrom": "DOMAttributes.onRateChange",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRateChangeCapture",
          "inheritedFrom": "DOMAttributes.onRateChangeCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional custom renderer for body region. Replaces any children passed into the component.</p>\n"
            ],
            "contentsRaw": "Optional custom renderer for body region. Replaces any children passed into the component.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRenderBody",
          "inheritedFrom": "IPanelProps.onRenderBody",
          "type": "IRenderFunction<IPanelProps>"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional custom renderer for footer region. Replaces sticky footer.</p>\n"
            ],
            "contentsRaw": "Optional custom renderer for footer region. Replaces sticky footer.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRenderFooter",
          "inheritedFrom": "IPanelProps.onRenderFooter",
          "type": "IRenderFunction<IPanelProps>"
        },
        {
          "documentation": {
            "contents": [
              "<p>Custom renderer for content in the sticky footer</p>\n"
            ],
            "contentsRaw": "Custom renderer for content in the sticky footer",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRenderFooterContent",
          "inheritedFrom": "IPanelProps.onRenderFooterContent",
          "type": "IRenderFunction<IPanelProps>"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional custom renderer for header region. Replaces current title</p>\n"
            ],
            "contentsRaw": "Optional custom renderer for header region. Replaces current title",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRenderHeader",
          "inheritedFrom": "IPanelProps.onRenderHeader",
          "type": "IPanelHeaderRenderer"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional custom renderer navigation region. Replaces the region that contains the close button.</p>\n"
            ],
            "contentsRaw": "Optional custom renderer navigation region. Replaces the region that contains the close button.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRenderNavigation",
          "inheritedFrom": "IPanelProps.onRenderNavigation",
          "type": "IRenderFunction<IPanelProps>"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional custom renderer for content in the navigation region. Replaces current close button.</p>\n"
            ],
            "contentsRaw": "Optional custom renderer for content in the navigation region. Replaces current close button.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRenderNavigationContent",
          "inheritedFrom": "IPanelProps.onRenderNavigationContent",
          "type": "IRenderFunction<IPanelProps>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onReset",
          "inheritedFrom": "DOMAttributes.onReset",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onResetCapture",
          "inheritedFrom": "DOMAttributes.onResetCapture",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onScroll",
          "inheritedFrom": "DOMAttributes.onScroll",
          "type": "UIEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onScrollCapture",
          "inheritedFrom": "DOMAttributes.onScrollCapture",
          "type": "UIEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSeeked",
          "inheritedFrom": "DOMAttributes.onSeeked",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSeekedCapture",
          "inheritedFrom": "DOMAttributes.onSeekedCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSeeking",
          "inheritedFrom": "DOMAttributes.onSeeking",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSeekingCapture",
          "inheritedFrom": "DOMAttributes.onSeekingCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSelect",
          "inheritedFrom": "DOMAttributes.onSelect",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSelectCapture",
          "inheritedFrom": "DOMAttributes.onSelectCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onStalled",
          "inheritedFrom": "DOMAttributes.onStalled",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onStalledCapture",
          "inheritedFrom": "DOMAttributes.onStalledCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSubmit",
          "inheritedFrom": "DOMAttributes.onSubmit",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSubmitCapture",
          "inheritedFrom": "DOMAttributes.onSubmitCapture",
          "type": "FormEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSuspend",
          "inheritedFrom": "DOMAttributes.onSuspend",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onSuspendCapture",
          "inheritedFrom": "DOMAttributes.onSuspendCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTimeUpdate",
          "inheritedFrom": "DOMAttributes.onTimeUpdate",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTimeUpdateCapture",
          "inheritedFrom": "DOMAttributes.onTimeUpdateCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchCancel",
          "inheritedFrom": "DOMAttributes.onTouchCancel",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchCancelCapture",
          "inheritedFrom": "DOMAttributes.onTouchCancelCapture",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchEnd",
          "inheritedFrom": "DOMAttributes.onTouchEnd",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchEndCapture",
          "inheritedFrom": "DOMAttributes.onTouchEndCapture",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchMove",
          "inheritedFrom": "DOMAttributes.onTouchMove",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchMoveCapture",
          "inheritedFrom": "DOMAttributes.onTouchMoveCapture",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchStart",
          "inheritedFrom": "DOMAttributes.onTouchStart",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTouchStartCapture",
          "inheritedFrom": "DOMAttributes.onTouchStartCapture",
          "type": "TouchEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTransitionEnd",
          "inheritedFrom": "DOMAttributes.onTransitionEnd",
          "type": "TransitionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onTransitionEndCapture",
          "inheritedFrom": "DOMAttributes.onTransitionEndCapture",
          "type": "TransitionEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onVolumeChange",
          "inheritedFrom": "DOMAttributes.onVolumeChange",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onVolumeChangeCapture",
          "inheritedFrom": "DOMAttributes.onVolumeChangeCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onWaiting",
          "inheritedFrom": "DOMAttributes.onWaiting",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onWaitingCapture",
          "inheritedFrom": "DOMAttributes.onWaitingCapture",
          "type": "ReactEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onWheel",
          "inheritedFrom": "DOMAttributes.onWheel",
          "type": "WheelEventHandler<PanelBase>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onWheelCapture",
          "inheritedFrom": "DOMAttributes.onWheelCapture",
          "type": "WheelEventHandler<PanelBase>"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional props to pass to the Overlay component that the panel uses.</p>\n"
            ],
            "contentsRaw": "Optional props to pass to the Overlay component that the panel uses.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "overlayProps",
          "inheritedFrom": "IPanelProps.overlayProps",
          "type": "IOverlayProps"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "placeholder",
          "inheritedFrom": "HTMLAttributes.placeholder",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "prefix",
          "inheritedFrom": "HTMLAttributes.prefix",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "property",
          "inheritedFrom": "HTMLAttributes.property",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "radioGroup",
          "inheritedFrom": "HTMLAttributes.radioGroup",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "resource",
          "inheritedFrom": "HTMLAttributes.resource",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "results",
          "inheritedFrom": "HTMLAttributes.results",
          "type": "number"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "role",
          "inheritedFrom": "HTMLAttributes.role",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "security",
          "inheritedFrom": "HTMLAttributes.security",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "slot",
          "inheritedFrom": "HTMLAttributes.slot",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "spellCheck",
          "inheritedFrom": "HTMLAttributes.spellCheck",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "style",
          "inheritedFrom": "HTMLAttributes.style",
          "type": "CSSProperties"
        },
        {
          "documentation": {
            "contents": [
              "<p>Call to provide customized styling that will layer on top of the variant rules.</p>\n"
            ],
            "contentsRaw": "Call to provide customized styling that will layer on top of the variant rules.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "styles",
          "inheritedFrom": "IPanelProps.styles",
          "type": "IStyleFunctionOrObject<IPanelStyleProps, IPanelStyles>"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "suppressContentEditableWarning",
          "inheritedFrom": "HTMLAttributes.suppressContentEditableWarning",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "suppressHydrationWarning",
          "inheritedFrom": "HTMLAttributes.suppressHydrationWarning",
          "type": "boolean"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "tabIndex",
          "inheritedFrom": "HTMLAttributes.tabIndex",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>Theme provided by High-Order Component.</p>\n"
            ],
            "contentsRaw": "Theme provided by High-Order Component.",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "theme",
          "inheritedFrom": "IPanelProps.theme",
          "type": "ITheme"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "title",
          "inheritedFrom": "HTMLAttributes.title",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Type of the panel.</p>\n",
              {
                "tag": "defaultvalue",
                "value": "PanelType.smallFixedFar"
              }
            ],
            "contentsRaw": "Type of the panel.\n\n@defaultvalue PanelType.smallFixedFar",
            "metadata": {}
          },
          "fileName": "node_modules\\office-ui-fabric-react\\lib\\components\\Panel\\Panel.types.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "type",
          "inheritedFrom": "IPanelProps.type",
          "type": "PanelType"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "typeof",
          "inheritedFrom": "HTMLAttributes.typeof",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "unselectable",
          "inheritedFrom": "HTMLAttributes.unselectable",
          "type": "\"on\" | \"off\""
        },
        {
          "fileName": "src\\ui-toolkit\\components\\Panel\\IFramePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "url",
          "type": "string"
        },
        {
          "fileName": "node_modules\\@types\\react\\index.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "vocab",
          "inheritedFrom": "HTMLAttributes.vocab",
          "type": "string"
        }
      ]
    },
    "UsePanelResult": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "UsePanelResult",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>The hook returns the UI Fabric Panel component as a nicety so you don&#39;t have to mess with importing it</p>\n"
            ],
            "contentsRaw": "The hook returns the UI Fabric Panel component as a nicety so you don't have to mess with importing it",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "Panel",
          "type": "any"
        },
        {
          "documentation": {
            "contents": [
              "<p>A function you can call to close the panel</p>\n"
            ],
            "contentsRaw": "A function you can call to close the panel",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "closePanel",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Whether the panel is currently open</p>\n"
            ],
            "contentsRaw": "Whether the panel is currently open",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isOpen",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>A function you can call to open the panel</p>\n"
            ],
            "contentsRaw": "A function you can call to open the panel",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "openPanel",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>The props you should spread onto the Panel component</p>\n"
            ],
            "contentsRaw": "The props you should spread onto the Panel component",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "panelProps",
          "type": "IPanelProps"
        }
      ]
    },
    "PanelLinkProps": {
      "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
      "flags": {
        "isExported": true,
        "isExternal": true,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PanelLinkProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
          "flags": {
            "isExported": true,
            "isExternal": true,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "children",
          "type": "any"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
          "flags": {
            "isExported": true,
            "isExternal": true,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "href",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
          "flags": {
            "isExported": true,
            "isExternal": true,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "panelSize",
          "type": "\"small\" | \"medium\" | \"large\" | number"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\panel\\PanelLink.tsx",
          "flags": {
            "isExported": true,
            "isExternal": true,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "title",
          "type": "string"
        }
      ]
    },
    "LinkProps": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "LinkProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "href",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Link.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "target",
          "type": "string"
        }
      ]
    },
    "TextProps": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Text.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "TextProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\primitives\\Text.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>The type of HTML Element. Defaults to div.</p>\n"
            ],
            "contentsRaw": "The type of HTML Element. Defaults to div.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\Text.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "as",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional class name to use for styling.</p>\n"
            ],
            "contentsRaw": "Optional class name to use for styling.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\Text.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Allows CSS color values or theme parameters.</p>\n"
            ],
            "contentsRaw": "Allows CSS color values or theme parameters.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\Text.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "color",
          "type": "string"
        }
      ]
    },
    "TitleProps": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "TitleProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>The type of HTML Element. Defaults to h3.</p>\n"
            ],
            "contentsRaw": "The type of HTML Element. Defaults to h3.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "as",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional class name to use for styling.</p>\n"
            ],
            "contentsRaw": "Optional class name to use for styling.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Allows CSS color values or theme parameters.</p>\n"
            ],
            "contentsRaw": "Allows CSS color values or theme parameters.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "color",
          "type": "any"
        },
        {
          "documentation": {
            "contents": [
              "<p>If provided, the Title will be rendered as a link.</p>\n"
            ],
            "contentsRaw": "If provided, the Title will be rendered as a link.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\Title.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "url",
          "type": "string"
        }
      ]
    },
    "ShaveProps": {
      "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "ShaveProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Class name for CSS overrides</p>\n"
            ],
            "contentsRaw": "Class name for CSS overrides",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Default is div. The type of element to use</p>\n"
            ],
            "contentsRaw": "Default is div. The type of element to use",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "el",
          "type": "any"
        },
        {
          "documentation": {
            "contents": [
              "<p>Default is true. Allows you to toggle the shave on and off</p>\n"
            ],
            "contentsRaw": "Default is true. Allows you to toggle the shave on and off",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "enabled",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>The max height of the element. The component will fit as many lines of text as it can.</p>\n"
            ],
            "contentsRaw": "The max height of the element. The component will fit as many lines of text as it can.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Shave\\Shave.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "maxHeight",
          "type": "number"
        }
      ]
    },
    "TagProps": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "TagProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "children",
          "type": "any"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Tags.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "tags",
          "type": "object[]"
        }
      ]
    },
    "InfoProps": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Info.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "InfoProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\primitives\\Info.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Info.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "as",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Info.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        }
      ]
    },
    "CardFooterProps": {
      "fileName": "src\\ui-toolkit\\components\\Card\\CardFooter.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "CardFooterProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\Card\\CardFooter.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\Card\\CardFooter.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        }
      ]
    },
    "IconImageProps": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "IconImageProps",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Supports CSS color or a theme param</p>\n"
            ],
            "contentsRaw": "Supports CSS color or a theme param",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "backgroundColor",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Render as a circle</p>\n"
            ],
            "contentsRaw": "Render as a circle",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "circle",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Class name to help with CSS overrides</p>\n"
            ],
            "contentsRaw": "Class name to help with CSS overrides",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Height in pixels</p>\n"
            ],
            "contentsRaw": "Height in pixels",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "height",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>A Fabric Icon name or an image url</p>\n"
            ],
            "contentsRaw": "A Fabric Icon name or an image url",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "icon",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Supports CSS color or a theme param</p>\n"
            ],
            "contentsRaw": "Supports CSS color or a theme param",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "iconColor",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Width in pixels</p>\n"
            ],
            "contentsRaw": "Width in pixels",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "width",
          "type": "number"
        }
      ]
    },
    "ColorPickerState": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "ColorPickerState",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "pickerVisible",
          "type": "boolean"
        }
      ]
    },
    "ColorPickerProps": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "ColorPickerProps",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>CSS class you can use for styling overrides</p>\n"
            ],
            "contentsRaw": "CSS class you can use for styling overrides",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Control whether the input is disabled.</p>\n"
            ],
            "contentsRaw": "Control whether the input is disabled.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "disabled",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Defaults to none. Label for the input</p>\n"
            ],
            "contentsRaw": "Defaults to none. Label for the input",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>The function to call when the color changes</p>\n"
            ],
            "contentsRaw": "The function to call when the color changes",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onChange",
          "type": "(newColor: string) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Any valid CSS color (hex, rgb, etc...)</p>\n"
            ],
            "contentsRaw": "Any valid CSS color (hex, rgb, etc...)",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "type": "string"
        }
      ]
    },
    "ThemeColorPickerProps": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "ThemeColorPickerProps",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Control whether the input is disabled.</p>\n"
            ],
            "contentsRaw": "Control whether the input is disabled.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "disabled",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Add any extra pre-defined choices to the colors dropdown. Expects an array of { key, text }.</p>\n"
            ],
            "contentsRaw": "Add any extra pre-defined choices to the colors dropdown. Expects an array of { key, text }.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "extraOptions",
          "type": "object[]"
        },
        {
          "documentation": {
            "contents": [
              "<p>Defaults to none. Label for the input</p>\n"
            ],
            "contentsRaw": "Defaults to none. Label for the input",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>The function to call when the color changes</p>\n"
            ],
            "contentsRaw": "The function to call when the color changes",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onChange",
          "type": "(value: string) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Any valid CSS color (hex, rgb, etc...) or a valid Theme Slot (themePrimary, bodySubtext, etc...)</p>\n"
            ],
            "contentsRaw": "Any valid CSS color (hex, rgb, etc...) or a valid Theme Slot (themePrimary, bodySubtext, etc...)",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "type": "string"
        }
      ]
    },
    "SiteChoiceGroupProps": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "SiteChoiceGroupProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onChange",
          "type": "(choiceKey: any) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "type": "SiteChoiceType"
        }
      ]
    },
    "SiteUrlInputProps": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SiteUrlInput.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "SiteUrlInputProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "disabled",
          "type": "boolean"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onChange",
          "type": "(url: any, isValid: any) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "url",
          "type": "string"
        }
      ]
    },
    "SitePickerProps": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "SitePickerProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onChange",
          "type": "(siteUrl: any) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>The site url value (Reac)</p>\n"
            ],
            "contentsRaw": "The site url value (Reac)",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "type": "string"
        }
      ]
    },
    "SitePickerState": {
      "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "SitePickerState",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "siteChoice",
          "type": "SiteChoiceType"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\inputs\\SitePicker\\SitePicker.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "urlIsValid",
          "type": "boolean"
        }
      ]
    },
    "GridProps": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "GridProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "gap",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "mode",
          "type": "\"best\" | \"grid\" | \"flex\""
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "shouldFlex",
          "type": "boolean"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "size",
          "type": "string"
        }
      ]
    },
    "HowManyFitOptions": {
      "fileName": "src\\ui-toolkit\\hooks\\useHowManyFit.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "HowManyFitOptions",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useHowManyFit.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "maxItems",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useHowManyFit.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "spacing",
          "type": "number"
        }
      ]
    },
    "PagingContext": {
      "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PagingContext",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>The current page in state</p>\n"
            ],
            "contentsRaw": "The current page in state",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "currentPage",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>Go backwards one page. If you go below page 1, you will be sent to the last page.</p>\n"
            ],
            "contentsRaw": "Go backwards one page. If you go below page 1, you will be sent to the last page.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "goBack",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Go forwards one page. If you exceed the max page, it will go back to the first page.</p>\n"
            ],
            "contentsRaw": "Go forwards one page. If you exceed the max page, it will go back to the first page.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "goForward",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Jump to a specific page number</p>\n"
            ],
            "contentsRaw": "Jump to a specific page number",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "goTo",
          "type": "(page: number) => void"
        }
      ]
    },
    "FilmstripOptions": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useFilmstrip.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "FilmstripOptions",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useFilmstrip.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "autopage",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useFilmstrip.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "itemMinWidth",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\useFilmstrip.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "spacing",
          "type": "number"
        }
      ]
    },
    "FilmstripProps": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "FilmstripProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Default is 0. Passing a value (milliseconds) greater than 0 enables auto paging.</p>\n"
            ],
            "contentsRaw": "Default is 0. Passing a value (milliseconds) greater than 0 enables auto paging.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "autopage",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>Class name to help with CSS overrides.</p>\n"
            ],
            "contentsRaw": "Class name to help with CSS overrides.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Default is 10. Space between items. Pass a number but it is eventually converted to <code>px</code></p>\n"
            ],
            "contentsRaw": "Default is 10. Space between items. Pass a number but it is eventually converted to `px`",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "spacing",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>Default is 400. It will try to fit as many items in the parent container as it can without being smaller than the specified width.</p>\n"
            ],
            "contentsRaw": "Default is 400. It will try to fit as many items in the parent container as it can without being smaller than the specified width.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\layouts\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "width",
          "type": "number"
        }
      ]
    },
    "ThumbnailProps": {
      "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "ThumbnailProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "height",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "shape",
          "type": "\"circle\" | \"rectangle\" | \"square\""
        },
        {
          "fileName": "src\\ui-toolkit\\components\\primitives\\Thumbnail.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "width",
          "type": "string"
        }
      ]
    },
    "VerticalItemDescriptionProps": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalItemDescription.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "VerticalItemDescriptionProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalItemDescription.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalItemDescription.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalItemDescription.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "shave",
          "type": "number"
        }
      ]
    },
    "VerticalListProps": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "VerticalListProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "items",
          "type": "T"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "renderItem",
          "type": "(item: T) => Element"
        }
      ]
    },
    "VerticalItemProps": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "VerticalItemProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        }
      ]
    },
    "VirtualizedGridProps": {
      "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "VirtualizedGridProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "getKey",
          "type": "(item: T) => string | number"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "gridGap",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "items",
          "type": "T[]"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "renderItem",
          "type": "(item: T, itemWidth: number, columnCount: number, gridWidth: number) => Element"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "rowsPerPage",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\layouts\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "size",
          "type": "number"
        }
      ]
    },
    "PersonaProps": {
      "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PersonaProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Control what is used as the Wrapper element. Defaults to DIV.</p>\n"
            ],
            "contentsRaw": "Control what is used as the Wrapper element. Defaults to DIV.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "as",
          "type": "any"
        },
        {
          "documentation": {
            "contents": [
              "<p>This will render a button with the provided text below the title if and only if a linkUrl is provided.</p>\n"
            ],
            "contentsRaw": "This will render a button with the provided text below the title if and only if a linkUrl is provided.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "callToAction",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>If you want to tack on your own class name.</p>\n"
            ],
            "contentsRaw": "If you want to tack on your own class name.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>This is tertiary text, slightly smaller in size than subTitle.</p>\n"
            ],
            "contentsRaw": "This is tertiary text, slightly smaller in size than subTitle.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "info",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>If provided this will wrap the persona in a link that will open the linkUrl provided in a new tab. If there is also a call to action provided, a button will render in the Persona instead of the whole Persona being clickable.</p>\n"
            ],
            "contentsRaw": "If provided this will wrap the persona in a link that will open the linkUrl provided in a new tab. If there is also a call to action provided, a button will render in the Persona instead of the whole Persona being clickable.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "linkUrl",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Defaults to horizontal, this changes the items orientation to render the details below the photo, &#39;vertical&#39; or beside it.</p>\n"
            ],
            "contentsRaw": "Defaults to horizontal, this changes the items orientation to render the details below the photo, 'vertical' or beside it.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "orientation",
          "type": "\"horizontal\" | \"vertical\""
        },
        {
          "documentation": {
            "contents": [
              "<p>Renders a circle image</p>\n"
            ],
            "contentsRaw": "Renders a circle image",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "photo",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Defaults to 100px, this sets the height and width of the photo to be the same height to maintain the correct aspect ratio</p>\n"
            ],
            "contentsRaw": "Defaults to 100px, this sets the height and width of the photo to be the same height to maintain the correct aspect ratio",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "photoSize",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>This is secondary text, slightly lighter in focus and size than title.</p>\n"
            ],
            "contentsRaw": "This is secondary text, slightly lighter in focus and size than title.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "subTitle",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>This is the primary text, usually used for a users name.</p>\n"
            ],
            "contentsRaw": "This is the primary text, usually used for a users name.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Persona\\Persona.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "title",
          "type": "string"
        }
      ]
    },
    "DateRangeTextProps": {
      "fileName": "src\\ui-toolkit\\components\\DateRangeText\\DateRangeText.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "DateRangeTextProps",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\components\\DateRangeText\\DateRangeText.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "end",
          "type": "Date"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\DateRangeText\\DateRangeText.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "start",
          "type": "Date"
        }
      ]
    },
    "LinkTileProps": {
      "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "LinkTileProps",
      "extends": [
        "IconImageProps"
      ],
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
        "kind": "signature",
        "name": "__index",
        "parameters": [
          {
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isProtected": false,
              "isPublic": false,
              "isRest": false,
              "isStatic": false
            },
            "kind": "parameter",
            "name": "key",
            "type": "string"
          }
        ],
        "returnType": "any",
        "type": "{ [key: string]: any }"
      },
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>CSS Color or Theme Param</p>\n"
            ],
            "contentsRaw": "CSS Color or Theme Param",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "hoverColor",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Supports CSS color or a theme param</p>\n"
            ],
            "contentsRaw": "Supports CSS color or a theme param",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "backgroundColor",
          "inheritedFrom": "IconImageProps.backgroundColor",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Render as a circle</p>\n"
            ],
            "contentsRaw": "Render as a circle",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "circle",
          "inheritedFrom": "IconImageProps.circle",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Class name to help with CSS overrides</p>\n"
            ],
            "contentsRaw": "Class name to help with CSS overrides",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "inheritedFrom": "IconImageProps.className",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Height in pixels</p>\n"
            ],
            "contentsRaw": "Height in pixels",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "height",
          "inheritedFrom": "IconImageProps.height",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>The child element will be rendered as the caption and appear in the hover animation if showHoverOverlay prop is true.</p>\n"
            ],
            "contentsRaw": "The child element will be rendered as the caption and appear in the hover animation if showHoverOverlay prop is true.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "children",
          "type": "any"
        },
        {
          "documentation": {
            "contents": [
              "<p>Url to the link</p>\n"
            ],
            "contentsRaw": "Url to the link",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "href",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>A Fabric Icon name or an image url</p>\n"
            ],
            "contentsRaw": "A Fabric Icon name or an image url",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "icon",
          "inheritedFrom": "IconImageProps.icon",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Supports CSS color or a theme param</p>\n"
            ],
            "contentsRaw": "Supports CSS color or a theme param",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "iconColor",
          "inheritedFrom": "IconImageProps.iconColor",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Enables slide up animation on hover if set to true</p>\n"
            ],
            "contentsRaw": "Enables slide up animation on hover if set to true",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\LinkTile\\LinkTile.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "showHoverOverlay",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>Width in pixels</p>\n"
            ],
            "contentsRaw": "Width in pixels",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\primitives\\IconImage.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "width",
          "inheritedFrom": "IconImageProps.width",
          "type": "number"
        }
      ]
    },
    "UseDebounceParams": {
      "fileName": "src\\ui-toolkit\\hooks\\useDebounce.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "UseDebounceParams",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Milliseconds, how long to wait before actually updating</p>\n"
            ],
            "contentsRaw": "Milliseconds, how long to wait before actually updating",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useDebounce.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "delay",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>Whatever value you want to track</p>\n"
            ],
            "contentsRaw": "Whatever value you want to track",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useDebounce.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "type": "any"
        }
      ]
    },
    "AsyncDataState": {
      "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "AsyncDataState",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Whatever your asncFn returns, assuming it succeeds</p>\n"
            ],
            "contentsRaw": "Whatever your asncFn returns, assuming it succeeds",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "data",
          "type": "T"
        },
        {
          "documentation": {
            "contents": [
              "<p>The error message if the asyncFn errors</p>\n"
            ],
            "contentsRaw": "The error message if the asyncFn errors",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "error",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>Indicates whether the asyncFn is done yet</p>\n"
            ],
            "contentsRaw": "Indicates whether the asyncFn is done yet",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useAsyncData.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isLoading",
          "type": "boolean"
        }
      ]
    },
    "AutoPagingContext": {
      "fileName": "src\\ui-toolkit\\hooks\\useAutoPaging.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "AutoPagingContext",
      "extends": [
        "PagingContext"
      ],
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>The current page in state</p>\n"
            ],
            "contentsRaw": "The current page in state",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "currentPage",
          "inheritedFrom": "PagingContext.currentPage",
          "type": "number"
        },
        {
          "documentation": {
            "contents": [
              "<p>Go backwards one page. If you go below page 1, you will be sent to the last page.</p>\n"
            ],
            "contentsRaw": "Go backwards one page. If you go below page 1, you will be sent to the last page.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "goBack",
          "inheritedFrom": "PagingContext.goBack",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Go forwards one page. If you exceed the max page, it will go back to the first page.</p>\n"
            ],
            "contentsRaw": "Go forwards one page. If you exceed the max page, it will go back to the first page.",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "goForward",
          "inheritedFrom": "PagingContext.goForward",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Jump to a specific page number</p>\n"
            ],
            "contentsRaw": "Jump to a specific page number",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\usePaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "goTo",
          "inheritedFrom": "PagingContext.goTo",
          "type": "(page: number) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Events to spread onto the element that should pause when hovered</p>\n"
            ],
            "contentsRaw": "Events to spread onto the element that should pause when hovered",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useAutoPaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "pauseEvents",
          "type": ""
        },
        {
          "documentation": {
            "contents": [
              "<p>Begin auto paging</p>\n"
            ],
            "contentsRaw": "Begin auto paging",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useAutoPaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "startPaging",
          "type": "() => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>Pause auto paging</p>\n"
            ],
            "contentsRaw": "Pause auto paging",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\hooks\\useAutoPaging.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "stopPaging",
          "type": "() => void"
        }
      ]
    },
    "CardProps": {
      "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "CardProps",
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Center align (horizonatally) the card&#39;s content</p>\n"
            ],
            "contentsRaw": "Center align (horizonatally) the card's content",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "centered",
          "type": "boolean"
        },
        {
          "documentation": {
            "contents": [
              "<p>What to render inside the card</p>\n"
            ],
            "contentsRaw": "What to render inside the card",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "children",
          "type": "ReactNode"
        },
        {
          "documentation": {
            "contents": [
              "<p>Optional class name used for style overrides</p>\n"
            ],
            "contentsRaw": "Optional class name used for style overrides",
            "metadata": {}
          },
          "fileName": "src\\ui-toolkit\\components\\Card\\Card.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "className",
          "type": "string"
        }
      ]
    },
    "CacheOptions": {
      "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "CacheOptions",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "cacheBustKey",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "duration",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "getCacheKey",
          "type": "(...providedParams: any[]) => string"
        },
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "key",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\core\\utils\\cache.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "location",
          "type": "Storage"
        }
      ]
    },
    "SiteDataParams": {
      "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "SiteDataParams",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "dataKey",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "debounceDelay",
          "type": "number"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "getData",
          "type": "(siteUrl: string) => Promise<T>"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "siteUrl",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "validate",
          "type": "(siteUrl: any) => Promise<boolean>"
        }
      ]
    },
    "SiteDataValidation": {
      "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "SiteDataValidation",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isValid",
          "type": "boolean"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "result",
          "type": "SiteValidationResult"
        }
      ]
    },
    "SiteDataState": {
      "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "SiteDataState",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "data",
          "type": "T"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "error",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "isLoading",
          "type": "boolean"
        },
        {
          "fileName": "src\\ui-toolkit\\hooks\\useSiteData.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "validation",
          "type": "SiteDataValidation"
        }
      ]
    },
    "PropertyFieldSitePickerProperties": {
      "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PropertyFieldSitePickerProperties",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onUpdate",
          "type": "(targetProp: string, newValue: any) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "type": "any"
        }
      ]
    },
    "_PropertyFieldSitePickerProperties": {
      "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "_PropertyFieldSitePickerProperties",
      "extends": [
        "PropertyFieldSitePickerProperties",
        "IPropertyPaneCustomFieldProps"
      ],
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Instance specific context. This context is passed back to the web part in the\nonRender and onDispose APIs. The web part can use this context to manage state\ninformation.</p>\n"
            ],
            "contentsRaw": "Instance specific context. This context is passed back to the web part in the\nonRender and onDispose APIs. The web part can use this context to manage state\ninformation.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "context",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.context",
          "type": "any"
        },
        {
          "documentation": {
            "contents": [
              "<p>An UNIQUE key indicates the identity of this contorl.</p>\n<p>The PropertyPane uses ReactJS to render its components. ReactJS uses keys to identify a component and if it should\nbe re-rendered or not. This is a performance feature in ReactJS. Please read the following link to understand how\nto pick the value of the key.</p>\n<p>For more information, see the {@link <a href=\"https://facebook.github.io/react/docs/lists-and-keys.html#keys\">https://facebook.github.io/react/docs/lists-and-keys.html#keys</a>\n| React documentation}.</p>\n"
            ],
            "contentsRaw": "An UNIQUE key indicates the identity of this contorl.\n\nThe PropertyPane uses ReactJS to render its components. ReactJS uses keys to identify a component and if it should\nbe re-rendered or not. This is a performance feature in ReactJS. Please read the following link to understand how\nto pick the value of the key.\n\nFor more information, see the {@link https://facebook.github.io/react/docs/lists-and-keys.html#keys\n| React documentation}.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "key",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.key",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "inheritedFrom": "PropertyFieldSitePickerProperties.label",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>This API is called when the component is unmounted from the host element.</p>\n",
              {
                "tag": "param",
                "value": "DOM element on which the custom control is mounted."
              },
              {
                "tag": "param",
                "value": "Instance specific context. This context was passed in the constructor."
              }
            ],
            "contentsRaw": "This API is called when the component is unmounted from the host element.\n\n@param DOM element on which the custom control is mounted.\n@param Instance specific context. This context was passed in the constructor.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDispose",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.onDispose",
          "type": "(domElement: HTMLElement, context?: any) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>This API will be called once the custom field is mounted on the host element.</p>\n",
              {
                "tag": "param",
                "value": "DOM element on which the custom control needs to be mounted."
              },
              {
                "tag": "param",
                "value": "Instance specific context. This context was passed in the constructor."
              },
              {
                "tag": "param",
                "value": "Callback called when a field changes within the custom field."
              },
              "<p> This will allow the property pane to be aware of the change and act accordingly.</p>\n",
              {
                "tag": "param",
                "value": "associated target property from the properties bag."
              },
              "<p>   if not provided then a custom value which is unique at the custom field level is assigned,\n   which will be in the form of <code>__CustomField_&lt;key provided when the custom field is created&gt;</code>.</p>\n",
              {
                "tag": "param",
                "value": "new value of the property."
              },
              "<p>   newValue is ignored if targetProperty is not specified.</p>\n"
            ],
            "contentsRaw": "This API will be called once the custom field is mounted on the host element.\n\n@param DOM element on which the custom control needs to be mounted.\n@param Instance specific context. This context was passed in the constructor.\n@param Callback called when a field changes within the custom field.\n This will allow the property pane to be aware of the change and act accordingly.\n@param associated target property from the properties bag.\n   if not provided then a custom value which is unique at the custom field level is assigned,\n   which will be in the form of `__CustomField_<key provided when the custom field is created>`.\n@param new value of the property.\n   newValue is ignored if targetProperty is not specified.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRender",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.onRender",
          "type": "(domElement: HTMLElement, context?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onUpdate",
          "inheritedFrom": "PropertyFieldSitePickerProperties.onUpdate",
          "type": "(targetProp: string, newValue: any) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\propertyfield_sitepicker\\PropertyFieldSitePicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "inheritedFrom": "PropertyFieldSitePickerProperties.value",
          "type": "any"
        }
      ]
    },
    "PropertyFieldBlankProperties": {
      "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PropertyFieldBlankProperties",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "render",
          "type": "() => ReactElement<any>"
        }
      ]
    },
    "_BlankPropertyPaneFieldProperties": {
      "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "_BlankPropertyPaneFieldProperties",
      "extends": [
        "PropertyFieldBlankProperties",
        "IPropertyPaneCustomFieldProps"
      ],
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Instance specific context. This context is passed back to the web part in the\nonRender and onDispose APIs. The web part can use this context to manage state\ninformation.</p>\n"
            ],
            "contentsRaw": "Instance specific context. This context is passed back to the web part in the\nonRender and onDispose APIs. The web part can use this context to manage state\ninformation.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "context",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.context",
          "type": "any"
        },
        {
          "documentation": {
            "contents": [
              "<p>An UNIQUE key indicates the identity of this contorl.</p>\n<p>The PropertyPane uses ReactJS to render its components. ReactJS uses keys to identify a component and if it should\nbe re-rendered or not. This is a performance feature in ReactJS. Please read the following link to understand how\nto pick the value of the key.</p>\n<p>For more information, see the {@link <a href=\"https://facebook.github.io/react/docs/lists-and-keys.html#keys\">https://facebook.github.io/react/docs/lists-and-keys.html#keys</a>\n| React documentation}.</p>\n"
            ],
            "contentsRaw": "An UNIQUE key indicates the identity of this contorl.\n\nThe PropertyPane uses ReactJS to render its components. ReactJS uses keys to identify a component and if it should\nbe re-rendered or not. This is a performance feature in ReactJS. Please read the following link to understand how\nto pick the value of the key.\n\nFor more information, see the {@link https://facebook.github.io/react/docs/lists-and-keys.html#keys\n| React documentation}.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "key",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.key",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>This API is called when the component is unmounted from the host element.</p>\n",
              {
                "tag": "param",
                "value": "DOM element on which the custom control is mounted."
              },
              {
                "tag": "param",
                "value": "Instance specific context. This context was passed in the constructor."
              }
            ],
            "contentsRaw": "This API is called when the component is unmounted from the host element.\n\n@param DOM element on which the custom control is mounted.\n@param Instance specific context. This context was passed in the constructor.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDispose",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.onDispose",
          "type": "(domElement: HTMLElement, context?: any) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>This API will be called once the custom field is mounted on the host element.</p>\n",
              {
                "tag": "param",
                "value": "DOM element on which the custom control needs to be mounted."
              },
              {
                "tag": "param",
                "value": "Instance specific context. This context was passed in the constructor."
              },
              {
                "tag": "param",
                "value": "Callback called when a field changes within the custom field."
              },
              "<p> This will allow the property pane to be aware of the change and act accordingly.</p>\n",
              {
                "tag": "param",
                "value": "associated target property from the properties bag."
              },
              "<p>   if not provided then a custom value which is unique at the custom field level is assigned,\n   which will be in the form of <code>__CustomField_&lt;key provided when the custom field is created&gt;</code>.</p>\n",
              {
                "tag": "param",
                "value": "new value of the property."
              },
              "<p>   newValue is ignored if targetProperty is not specified.</p>\n"
            ],
            "contentsRaw": "This API will be called once the custom field is mounted on the host element.\n\n@param DOM element on which the custom control needs to be mounted.\n@param Instance specific context. This context was passed in the constructor.\n@param Callback called when a field changes within the custom field.\n This will allow the property pane to be aware of the change and act accordingly.\n@param associated target property from the properties bag.\n   if not provided then a custom value which is unique at the custom field level is assigned,\n   which will be in the form of `__CustomField_<key provided when the custom field is created>`.\n@param new value of the property.\n   newValue is ignored if targetProperty is not specified.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRender",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.onRender",
          "type": "(domElement: HTMLElement, context?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldBlank\\PropertyFieldBlank.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "render",
          "inheritedFrom": "PropertyFieldBlankProperties.render",
          "type": "() => ReactElement<any>"
        }
      ]
    },
    "PropertyFieldThemeColorProperties": {
      "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "PropertyFieldThemeColorProperties",
      "methods": [],
      "properties": [
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "disabled",
          "type": "boolean"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "extraOptions",
          "type": "object[]"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onUpdate",
          "type": "(targetProp: string, newValue: any) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "type": "string"
        }
      ]
    },
    "_PropertyFieldThemeColorProperties": {
      "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "interface",
      "name": "_PropertyFieldThemeColorProperties",
      "extends": [
        "PropertyFieldThemeColorProperties",
        "IPropertyPaneCustomFieldProps"
      ],
      "methods": [],
      "properties": [
        {
          "documentation": {
            "contents": [
              "<p>Instance specific context. This context is passed back to the web part in the\nonRender and onDispose APIs. The web part can use this context to manage state\ninformation.</p>\n"
            ],
            "contentsRaw": "Instance specific context. This context is passed back to the web part in the\nonRender and onDispose APIs. The web part can use this context to manage state\ninformation.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "context",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.context",
          "type": "any"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "disabled",
          "inheritedFrom": "PropertyFieldThemeColorProperties.disabled",
          "type": "boolean"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "extraOptions",
          "inheritedFrom": "PropertyFieldThemeColorProperties.extraOptions",
          "type": "object[]"
        },
        {
          "documentation": {
            "contents": [
              "<p>An UNIQUE key indicates the identity of this contorl.</p>\n<p>The PropertyPane uses ReactJS to render its components. ReactJS uses keys to identify a component and if it should\nbe re-rendered or not. This is a performance feature in ReactJS. Please read the following link to understand how\nto pick the value of the key.</p>\n<p>For more information, see the {@link <a href=\"https://facebook.github.io/react/docs/lists-and-keys.html#keys\">https://facebook.github.io/react/docs/lists-and-keys.html#keys</a>\n| React documentation}.</p>\n"
            ],
            "contentsRaw": "An UNIQUE key indicates the identity of this contorl.\n\nThe PropertyPane uses ReactJS to render its components. ReactJS uses keys to identify a component and if it should\nbe re-rendered or not. This is a performance feature in ReactJS. Please read the following link to understand how\nto pick the value of the key.\n\nFor more information, see the {@link https://facebook.github.io/react/docs/lists-and-keys.html#keys\n| React documentation}.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "key",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.key",
          "type": "string"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "label",
          "inheritedFrom": "PropertyFieldThemeColorProperties.label",
          "type": "string"
        },
        {
          "documentation": {
            "contents": [
              "<p>This API is called when the component is unmounted from the host element.</p>\n",
              {
                "tag": "param",
                "value": "DOM element on which the custom control is mounted."
              },
              {
                "tag": "param",
                "value": "Instance specific context. This context was passed in the constructor."
              }
            ],
            "contentsRaw": "This API is called when the component is unmounted from the host element.\n\n@param DOM element on which the custom control is mounted.\n@param Instance specific context. This context was passed in the constructor.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": true,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onDispose",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.onDispose",
          "type": "(domElement: HTMLElement, context?: any) => void"
        },
        {
          "documentation": {
            "contents": [
              "<p>This API will be called once the custom field is mounted on the host element.</p>\n",
              {
                "tag": "param",
                "value": "DOM element on which the custom control needs to be mounted."
              },
              {
                "tag": "param",
                "value": "Instance specific context. This context was passed in the constructor."
              },
              {
                "tag": "param",
                "value": "Callback called when a field changes within the custom field."
              },
              "<p> This will allow the property pane to be aware of the change and act accordingly.</p>\n",
              {
                "tag": "param",
                "value": "associated target property from the properties bag."
              },
              "<p>   if not provided then a custom value which is unique at the custom field level is assigned,\n   which will be in the form of <code>__CustomField_&lt;key provided when the custom field is created&gt;</code>.</p>\n",
              {
                "tag": "param",
                "value": "new value of the property."
              },
              "<p>   newValue is ignored if targetProperty is not specified.</p>\n"
            ],
            "contentsRaw": "This API will be called once the custom field is mounted on the host element.\n\n@param DOM element on which the custom control needs to be mounted.\n@param Instance specific context. This context was passed in the constructor.\n@param Callback called when a field changes within the custom field.\n This will allow the property pane to be aware of the change and act accordingly.\n@param associated target property from the properties bag.\n   if not provided then a custom value which is unique at the custom field level is assigned,\n   which will be in the form of `__CustomField_<key provided when the custom field is created>`.\n@param new value of the property.\n   newValue is ignored if targetProperty is not specified.",
            "metadata": {}
          },
          "fileName": "node_modules\\@microsoft\\sp-property-pane\\dist\\index-internal.d.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onRender",
          "inheritedFrom": "IPropertyPaneCustomFieldProps.onRender",
          "type": "(domElement: HTMLElement, context?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "onUpdate",
          "inheritedFrom": "PropertyFieldThemeColorProperties.onUpdate",
          "type": "(targetProp: string, newValue: any) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\propertyfields\\PropertyFieldThemeColorPicker\\PropertyFieldThemeColorPicker.ts",
          "flags": {
            "isExported": true,
            "isExternal": false,
            "isOptional": false,
            "isPrivate": false,
            "isProtected": false,
            "isPublic": false,
            "isRest": false,
            "isStatic": false
          },
          "kind": "property",
          "name": "value",
          "inheritedFrom": "PropertyFieldThemeColorProperties.value",
          "type": "string"
        }
      ]
    },
    "PanelSize": {
      "fileName": "src\\ui-toolkit\\components\\Panel\\usePanel.tsx",
      "flags": {
        "isExported": true,
        "isExternal": false,
        "isOptional": false,
        "isPrivate": false,
        "isProtected": false,
        "isPublic": false,
        "isRest": false,
        "isStatic": false
      },
      "kind": "type alias",
      "name": "PanelSize",
      "type": "\"small\" | \"medium\" | \"large\" | number"
    }
  }
}