import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homepage.scss";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";

const topics = [
  { name: "JavaScript", path: "/javascript", icon: <FaCode /> },
  { name: "HTML", path: "/html", icon: <FaHtml5 /> },
  { name: "CSS", path: "/css", icon: <FaCss3Alt /> },
  { name: "React", path: "/react", icon: <FaReact /> },
  { name: "Node.js", path: "/node", icon: <FaNodeJs /> },
  { name: "MongoDB", path: "/mongodb", icon: <FaDatabase /> },
  { name: "Git & GitHub", path: "/git", icon: <FaGithub /> },
  { name: "עוד...", path: "/more", icon: <BiPlusCircle /> },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <p className="homepage-intro">בחר נושא והתחל ללמוד ברמה הגבוהה ביותר</p>

      <main className="topics-gallery">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="topic-card"
            onClick={() => navigate(topic.path)}
          >
            <div className="icon">{topic.icon}</div>
            <h2>{topic.name}</h2>
          </div>
        ))}
      </main>
    </div>
  );
}

export default HomePage;
