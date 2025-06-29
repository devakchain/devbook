import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  { title: "ES Modules", path: "/javascript/stage-9/es-modules" },
  { title: "Named vs Default", path: "/javascript/stage-9/named-vs-default" },
  { title: "Dynamic Imports", path: "/javascript/stage-9/dynamic-imports" },
  { title: "Tree Shaking", path: "/javascript/stage-9/tree-shaking" },
  { title: "CommonJS", path: "/javascript/stage-9/commonjs" },
  { title: "XSS, CSRF, Injection", path: "/javascript/stage-9/web-attacks" },
  {
    title: "Object Pollution",
    path: "/javascript/stage-9/object-pollution",
  },
  {
    title: "Validation & Escaping",
    path: "/javascript/stage-9/input-validation",
  },
  {
    title: "Secure Defaults",
    path: "/javascript/stage-9/secure-defaults",
  },
  {
    title: "Secrets Management (.env)",
    path: "/javascript/stage-9/secrets-management",
  },
  { title: "CORS", path: "/javascript/stage-9/cors" },
];

function ModulesSecurityPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Understand how to structure JavaScript using modules, and how to secure
        your applications against common vulnerabilities.
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

export default ModulesSecurityPage;
