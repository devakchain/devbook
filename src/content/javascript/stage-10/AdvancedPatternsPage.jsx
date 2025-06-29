import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  { title: "Module Pattern", path: "/javascript/stage-10/module-pattern" },
  {
    title: "Revealing Module Pattern",
    path: "/javascript/stage-10/revealing-module-pattern",
  },
  {
    title: "Factory Functions",
    path: "/javascript/stage-10/factory-functions",
  },
  {
    title: "Singleton Pattern",
    path: "/javascript/stage-10/singleton-pattern",
  },
  { title: "Observer Pattern", path: "/javascript/stage-10/observer-pattern" },

  {
    title: "Currying & Partial Application",
    path: "/javascript/stage-10/currying",
  },
  { title: "Memoization & Caching", path: "/javascript/stage-10/memoization" },
  {
    title: "Functional Composition",
    path: "/javascript/stage-10/functional-composition",
  },
  {
    title: "Tail Call Optimization",
    path: "/javascript/stage-10/tail-call-optimization",
  },

  {
    title: "Separation of Concerns",
    path: "/javascript/stage-10/separation-of-concerns",
  },
  {
    title: "Dependency Injection",
    path: "/javascript/stage-10/dependency-injection",
  },
  { title: "Clean Code & SRP", path: "/javascript/stage-10/clean-code-srp" },
  { title: "Proxy & Reflect APIs", path: "/javascript/stage-10/proxy-reflect" },
  {
    title: "Custom Iterators & Generators",
    path: "/javascript/stage-10/custom-iterators-generators",
  },
];

function AdvancedPatternsPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Deep dive into design patterns, advanced functional concepts, and
        architectural best practices in JavaScript.
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

export default AdvancedPatternsPage;
