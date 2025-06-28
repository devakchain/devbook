import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  { title: "Function Types", path: "/javascript/stage-2/function-types" },
  {
    title: "Default Parameters",
    path: "/javascript/stage-2/default-parameters",
  },
  { title: "Rest Parameters", path: "/javascript/stage-2/rest-parameters" },
  { title: "Arguments Object", path: "/javascript/stage-2/arguments-object" },
  { title: "The this Keyword", path: "/javascript/stage-2/this-keyword" },
  { title: "Function Hoisting", path: "/javascript/stage-2/function-hoisting" },
  {
    title: "Callback Functions",
    path: "/javascript/stage-2/callback-functions",
  },
  { title: "IIFE", path: "/javascript/stage-2/iife" },
  { title: "Closures", path: "/javascript/stage-2/closures" },
  { title: "Function Methods", path: "/javascript/stage-2/function-methods" },
  { title: "Lexical Scope", path: "/javascript/stage-2/lexical-scope" },
];

function FunctionsPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle">
        Dive deep into JavaScript functions and how they interact with memory,
        context, and scope.
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

export default FunctionsPage;
