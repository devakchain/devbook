import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  {
    title: "Timers: setTimeout, setInterval",
    path: "/javascript/stage-5/timers",
  },
  { title: "Callback Hell", path: "/javascript/stage-5/callback-hell" },
  { title: "Promises – Basics", path: "/javascript/stage-5/promises" },
  {
    title: "Promise States: pending, fulfilled, rejected",
    path: "/javascript/stage-5/promise-states",
  },
  {
    title: "Promise Methods: then / catch / finally",
    path: "/javascript/stage-5/promise-methods",
  },
  {
    title: "Promise Combinators",
    path: "/javascript/stage-5/promise-combinators",
  },
  {
    title: "Async/Await + Error Handling",
    path: "/javascript/stage-5/async-await",
  },
  {
    title: "Fetch API",
    path: "/javascript/stage-5/fetch-api",
  },
  {
    title: "Working with JSON",
    path: "/javascript/stage-5/json",
  },
  {
    title: "AbortController",
    path: "/javascript/stage-5/abort-controller",
  },
  {
    title: "Microtasks vs Macrotasks",
    path: "/javascript/stage-5/task-queues",
  },
];

function AsyncJavaScriptPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Learn how JavaScript handles asynchronous operations: timers, promises,
        async/await, and browser APIs like Fetch and AbortController.
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

export default AsyncJavaScriptPage;
