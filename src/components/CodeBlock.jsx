import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import "../styles/codeblock.scss";

function CodeBlock({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const highlighted = hljs.highlight(code, { language }).value;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="code-block">
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? <FaCheck /> : <FaCopy />} {copied ? "Copied" : "Copy"}
      </button>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlighted }}></code>
      </pre>
    </div>
  );
}

export default CodeBlock;
