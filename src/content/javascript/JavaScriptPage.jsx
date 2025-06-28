import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/javascript.scss";

const stages = [
  { title: "Stage 1", label: "Foundations", path: "/javascript/stage-1" },
  { title: "Stage 2", label: "Functions & Scope", path: "/javascript/stage-2" },
  { title: "Stage 3", label: "Data Structures", path: "/javascript/stage-3" },
  {
    title: "Stage 4",
    label: "JavaScript Internals",
    path: "/javascript/stage-4",
  },
  {
    title: "Stage 5",
    label: "Asynchronous JavaScript",
    path: "/javascript/stage-5",
  },
  {
    title: "Stage 6",
    label: "Object-Oriented Programming",
    path: "/javascript/stage-6",
  },
  {
    title: "Stage 7",
    label: "DOM Manipulation & Events",
    path: "/javascript/stage-7",
  },
  {
    title: "Stage 8",
    label: "Browser APIs & Storage",
    path: "/javascript/stage-8",
  },
  {
    title: "Stage 9",
    label: "Modules & Security",
    path: "/javascript/stage-9",
  },
  {
    title: "Stage 10",
    label: "Advanced Patterns & Architecture",
    path: "/javascript/stage-10",
  },
];

function JavaScriptPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle">
        Master each stage of JavaScript, step by step.
      </p>

      <div className="stage-grid">
        {stages.map((stage) => (
          <div
            key={stage.title}
            className="stage-card"
            onClick={() => navigate(stage.path)}
          >
            <h2 className="stage-title">{stage.title}</h2>
            <p className="stage-label">{stage.label}</p>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}

export default JavaScriptPage;
