import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript.scss";

const topics = [
  { title: "Web APIs", path: "/javascript/stage-8/web-apis" },
  { title: "Storage", path: "/javascript/stage-8/storage" },
  { title: "Cookies", path: "/javascript/stage-8/cookies" },
  { title: "Clipboard API", path: "/javascript/stage-8/clipboard" },
  { title: "Geolocation API", path: "/javascript/stage-8/geolocation" },
  { title: "Notifications API", path: "/javascript/stage-8/notifications" },
  { title: "Permissions API", path: "/javascript/stage-8/permissions" },
];

function BrowserAPIsPage() {
  const navigate = useNavigate();

  return (
    <div className="js-page">
      <p className="page-subtitle margin">
        Learn how to use built-in browser APIs to interact with the user's
        environment and manage data.
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

export default BrowserAPIsPage;
