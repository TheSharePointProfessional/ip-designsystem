import React from "react";
import Prism from "prismjs";
import "./prism.light.css";
const Playground = React.lazy(() => import("./Playground"));

export default ({ children, className, live }) => {
  let code = children || "";
  if (code && code.trim) code = code.trim();
  if (live) {
    return <Playground code={code}></Playground>;
  }
  return <SyntaxHighlighter className={className} code={code} />;
};

export function SyntaxHighlighter({ code, className }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
    <pre className="line-numbers">
      <code className={className}>{code}</code>
    </pre>
  );
}
