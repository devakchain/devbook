import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  {
    title: "Constructor Functions",
    path: "/javascript/stage-6/constructor-functions",
  },
  {
    title: "Prototypes & Prototype Chain",
    path: "/javascript/stage-6/prototypes",
  },
  { title: "Classes", path: "/javascript/stage-6/classes" },
  {
    title: "Inheritance (Class & Prototype)",
    path: "/javascript/stage-6/inheritance",
  },
  {
    title: "Encapsulation: Private Fields",
    path: "/javascript/stage-6/private-fields",
  },
  { title: "Getters / Setters", path: "/javascript/stage-6/getters-setters" },
  {
    title: "Static Methods & Properties",
    path: "/javascript/stage-6/static-members",
  },
  {
    title: "new Keyword & Instantiation",
    path: "/javascript/stage-6/new-instantiation",
  },
];

function ObjectOrientedPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Learn how JavaScript implements object-oriented programming using
        constructors, classes, inheritance, encapsulation, and more.
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

export default ObjectOrientedPage;
