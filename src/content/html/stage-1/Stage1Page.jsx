import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/html.scss";

const topics = [
  {
    id: 1,
    title: "<!DOCTYPE>",
    description: "הכרזת סוג המסמך – חובה בתחילת כל קובץ HTML.",
    path: "/html/stage-1/doctype",
  },
  {
    id: 2,
    title: "<html>, <head>, <body>",
    description: "השלד הבסיסי של כל עמוד HTML.",
    path: "/html/stage-1/html-head-body",
  },
  {
    id: 3,
    title: "<meta> + קידוד",
    description: "הגדרות חשובות בקוד האתר – כולל קידוד תווים.",
    path: "/html/stage-1/meta",
  },
  {
    id: 4,
    title: "שפה וכיוון (lang, dir)",
    description: "איך להגדיר את שפת הדף וכיוון הכתיבה (ימין/שמאל).",
    path: "/html/stage-1/lang-dir",
  },
];

function Stage1Page() {
  const navigate = useNavigate();

  return (
    <div className="html-page">
      <h1>פרק 1 – מבנה עמוד HTML</h1>
      <p className="page-subtitle">
        סדר נכון לבניית עמוד HTML: מהו דוק־טייפ, איך נראית שלד העמוד, קידוד
        ושפה.
      </p>

      <div className="stage-grid">
        {topics.map((topic) => (
          <div
            key={topic.path}
            className="stage-card"
            onClick={() => navigate(topic.path)}
          >
            <span className="step-number">שלב {topic.id}</span>
            <h2 className="stage-title">{topic.title}</h2>
            <p className="stage-description">{topic.description}</p>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← חזרה
      </button>
    </div>
  );
}

export default Stage1Page;
