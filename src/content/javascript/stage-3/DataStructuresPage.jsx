import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  { title: "Objects", path: "/javascript/stage-3/objects" },
  {
    title: "Object Utilities",
    path: "/javascript/stage-3/object-utilities",
  },
  {
    title: "Shallow vs Deep Copy",
    path: "/javascript/stage-3/shallow-deep-copy",
  },
  { title: "Arrays", path: "/javascript/stage-3/arrays" },
  {
    title: "Iteration Methods",
    path: "/javascript/stage-3/iteration-methods",
  },
  {
    title: "Mutation Methods",
    path: "/javascript/stage-3/mutation-methods",
  },
  {
    title: "Non-Mutating Methods",
    path: "/javascript/stage-3/non-mutating-methods",
  },
  { title: "Sets", path: "/javascript/stage-3/sets" },
  { title: "Maps", path: "/javascript/stage-3/maps" },
  {
    title: "Object Iteration",
    path: "/javascript/stage-3/object-iteration",
  },
  {
    title: "Array Iteration",
    path: "/javascript/stage-3/array-iteration",
  },
];

function DataStructuresPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Explore how JavaScript organizes, stores, and manipulates data using
        objects, arrays, sets, and maps.
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

export default DataStructuresPage;
