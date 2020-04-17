export default {
  "typescript": {
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
    "ColorPicker": {
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
              "kind": "signature",
              "name": "openPicker",
              "parameters": [],
              "returnType": "void",
              "type": "() => void"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
              "kind": "signature",
              "name": "render",
              "parameters": [],
              "returnType": "Element<>",
              "type": "() => Element<>"
            }
          ]
        },
        {
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
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
          "defaultValue": "getHexColor",
          "type": "getHexColor"
        }
      ],
      "accessors": []
    },
    "SiteChoiceGroup": {
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
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
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
              "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
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
      "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
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
    "Grid": {
      "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
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
    "getHexColor": {
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
      "flags": {
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
      "name": "getHexColor",
      "signatures": [
        {
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "kind": "signature",
          "name": "getHexColor",
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
              "name": "namespace",
              "defaultValue": "\"palette\"",
              "type": "\"palette\" | \"global\" | \"semanticColors\""
            }
          ],
          "returnType": "string",
          "type": "(color: string, namespace?: \"palette\" | \"global\" | \"semanticColors\") => string"
        }
      ]
    },
    "checkIsThemeColor": {
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
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
          "returnType": "",
          "type": "(totalPages: number, initialPage?: number) => "
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
    "useScrollSync": {
      "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useScrollSync.ts",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useScrollSync.ts",
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
    "useFilmstrip": {
      "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useFilmstrip.ts",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useFilmstrip.ts",
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
      "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
          "kind": "signature",
          "name": "Filmstrip",
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
      "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
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
      "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
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
    "SiteUrlInput": {
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\SiteUrlInput.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SiteUrlInput.tsx",
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
    "VerticalItemDescription": {
      "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalItemDescription.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalItemDescription.tsx",
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
      "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "returnType": "",
          "type": "(totalPages: number, delay?: number, defaultPage?: number) => "
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
              "name": "storage",
              "defaultValue": "window.localStorage",
              "type": "Storage"
            }
          ],
          "returnType": "any[]",
          "type": "(defaultValue: T, key: string, storage?: Storage) => any[]"
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
              "type": "any"
            }
          ],
          "returnType": "any[]",
          "type": "(key: any, initialValue: any) => any[]"
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
      "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
          "flags": {
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
          "name": "CSS",
          "type": "any"
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
    "GridProps": {
      "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
      "flags": {
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
        "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Grid\\Grid.tsx",
          "flags": {
            "isExported": true,
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
    "ColorPickerState": {
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ColorPicker.tsx",
          "flags": {
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
      "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\ColorPicker\\ThemeColorPicker.tsx",
          "flags": {
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
    "FilmstripOptions": {
      "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useFilmstrip.ts",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useFilmstrip.ts",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useFilmstrip.ts",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\useFilmstrip.ts",
          "flags": {
            "isExported": true,
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
      "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
      "flags": {
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
        "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\Filmstrip\\Filmstrip.tsx",
          "flags": {
            "isExported": true,
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
    "IconImageProps": {
      "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
    "PanelLinkProps": {
      "fileName": "src\\ui-toolkit\\components\\PanelLink\\PanelLink.tsx",
      "flags": {
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
      "name": "PanelLinkProps",
      "indexSignature": {
        "fileName": "src\\ui-toolkit\\components\\PanelLink\\PanelLink.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\PanelLink\\PanelLink.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\PanelLink\\PanelLink.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\PanelLink\\PanelLink.tsx",
          "flags": {
            "isExported": true,
            "isExternal": false,
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
          "fileName": "src\\ui-toolkit\\components\\PanelLink\\PanelLink.tsx",
          "flags": {
            "isExported": true,
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
          "type": "string"
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\IconImage\\IconImage.tsx",
          "flags": {
            "isExported": true,
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
    "SiteChoiceGroupProps": {
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\siteChoiceGroup.tsx",
          "flags": {
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
    "SiteUrlInputProps": {
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\SiteUrlInput.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SiteUrlInput.tsx",
          "flags": {
            "isExported": true,
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
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
          "type": "(newValue: any) => void"
        },
        {
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
        }
      ]
    },
    "SitePickerState": {
      "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\SitePicker\\SitePicker.tsx",
          "flags": {
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
    "VerticalItemDescriptionProps": {
      "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalItemDescription.tsx",
      "flags": {
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
        "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalItemDescription.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalItemDescription.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalItemDescription.tsx",
          "flags": {
            "isExported": true,
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
      "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
          "flags": {
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
      "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
      "flags": {
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
        "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
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
          "fileName": "src\\ui-toolkit\\components\\VerticalList\\VerticalList.tsx",
          "flags": {
            "isExported": true,
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
      "fileName": "src\\ui-toolkit\\components\\VirtualizedGrid\\VirtualizedGrid.tsx",
      "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
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
          "fileName": "src\\ui-toolkit\\components\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
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
          "fileName": "src\\ui-toolkit\\components\\VirtualizedGrid\\VirtualizedGrid.tsx",
          "flags": {
            "isExported": true,
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
    }
  }
}