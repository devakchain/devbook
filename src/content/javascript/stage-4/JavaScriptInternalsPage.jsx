import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  { title: "Execution Context", path: "/javascript/stage-4/execution-context" },
  {
    title: "Lexical Environment",
    path: "/javascript/stage-4/lexical-environment",
  },
  { title: "Scope Chain", path: "/javascript/stage-4/scope-chain" },
  { title: "Hoisting", path: "/javascript/stage-4/hoisting" },
  { title: "Temporal Dead Zone (TDZ)", path: "/javascript/stage-4/tdz" },
  { title: "Call Stack", path: "/javascript/stage-4/call-stack" },
  { title: "Memory Heap", path: "/javascript/stage-4/memory-heap" },
  {
    title: "Garbage Collection",
    path: "/javascript/stage-4/garbage-collection",
  },
  {
    title: "JavaScript Engine Overview",
    path: "/javascript/stage-4/js-engine",
  },
];

function JavaScriptInternalsPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Dive deep into the internal workings of JavaScript – from the engine,
        memory model, and execution context, to hoisting, TDZ, scope chain, and
        more.
      </p>

      <div className="stage-grid">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="stage-card"
            onClick={() => navigate(topic.path)}
          >
            <h2 className="stage-title">{topic.title}</h2>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}

export default JavaScriptInternalsPage;
