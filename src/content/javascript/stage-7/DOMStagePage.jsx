import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  {
    title: "DOM Selection",
    path: "/javascript/stage-7/dom-selection",
  },
  {
    title: "Create & Modify Elements",
    path: "/javascript/stage-7/create-modify-elements",
  },
  {
    title: "Event Listeners",
    path: "/javascript/stage-7/event-listeners",
  },
  {
    title: "Event Targets",
    path: "/javascript/stage-7/event-targets",
  },
  {
    title: "Event Delegation",
    path: "/javascript/stage-7/event-delegation",
  },
  {
    title: "Bubbling & Capturing",
    path: "/javascript/stage-7/bubbling-capturing",
  },
  {
    title: "Forms & FormData",
    path: "/javascript/stage-7/forms-formdata",
  },
  {
    title: "Accessibility (WAI-ARIA)",
    path: "/javascript/stage-7/accessibility",
  },
];

function DOMStagePage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Learn how to interact with the browser using DOM manipulation, event
        handling, and accessible forms.
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

export default DOMStagePage;
