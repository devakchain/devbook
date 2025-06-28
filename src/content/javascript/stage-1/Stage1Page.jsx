import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";
import "../../../styles/Stage1Page.scss";

const topics = [
  { title: "Variables", path: "/javascript/stage-1/variables" },
  { title: "Primitive Data Types", path: "/javascript/stage-1/data-types" },
  {
    title: "Type Conversion & Coercion",
    path: "/javascript/stage-1/type-conversion",
  },
  { title: "Operators", path: "/javascript/stage-1/operators" },
  { title: "Conditionals", path: "/javascript/stage-1/conditionals" },
  { title: "Loops", path: "/javascript/stage-1/loops" },
  { title: "Destructuring", path: "/javascript/stage-1/destructuring" },
  {
    title: "Assignment Patterns",
    path: "/javascript/stage-1/assignment-patterns",
  },
  { title: "Scope", path: "/javascript/stage-1/scope" },
];

function Stage1Page() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Explore the core building blocks of JavaScript in a logical learning
        order.
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

export default Stage1Page;
