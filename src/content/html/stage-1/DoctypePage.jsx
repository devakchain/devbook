import React from "react";
import { useNavigate } from "react-router-dom";
import CopyButton from "../../../components/CopyButton";
import LivePreview from "../../../components/LiveOutput";
import "../../../styles/html/stage-1/html-stage-pages.scss";

function DoctypePage() {
  const navigate = useNavigate();

  const code = `<!DOCTYPE html>
<html lang="he">
  <head>
    <meta charset="UTF-8" />
    <title>מסמך תקני</title>
  </head>
  <body>
    <h1>שלום עולם!</h1>
  </body>
</html>`;

  return (
    <div className="page-content">
      <div className="html-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזרה
        </button>

        <h1 className="topic-title">&lt;!DOCTYPE&gt; – הכרזת סוג מסמך</h1>

        <section className="topic-section">
          <h2>מה זה &lt;!DOCTYPE&gt;?</h2>
          <p>
            מדובר בשורת הכרזה שנמצאת בראש כל מסמך HTML תקני. היא **לא** תגית
            HTML, אלא הנחיה לדפדפן לצורך תצוגת הדף על פי תקן מסוים. כיום רוב
            האתרים משתמשים ב־HTML5, ולכן ההכרזה היא פשוטה:
          </p>
          <div className="code-preview small">
            <pre>
              <code>{`<!DOCTYPE html>`}</code>
            </pre>
            <CopyButton code={`<!DOCTYPE html>`} />
          </div>
        </section>

        <section className="topic-section">
          <h2>למה זה חשוב?</h2>
          <ul>
            <li>
              ⚙️ מגדיר לדפדפן לעבוד ב־<strong>Standards Mode</strong> (ולא במצב
              תאימות ישן)
            </li>
            <li>🧼 מונע בעיות תצוגה לא צפויות</li>
            <li>✅ חובה בכל עמוד HTML תקני</li>
          </ul>
        </section>

        <section className="topic-section">
          <h2>📄 דוגמת קוד מלאה</h2>
          <div className="code-preview">
            <pre>
              <code>{code}</code>
            </pre>
            <CopyButton code={code} />
          </div>
        </section>

        <section className="topic-section">
          <h2>🔎 תצוגה חיה</h2>
          <LivePreview html={code} />
        </section>

        <section className="topic-section">
          <h2>💡 טיפ למקצוענים</h2>
          <p>
            אל תשכח להשתמש ב־
            <code className="inline-code">&lt;!DOCTYPE html&gt;</code> גם כשאתה
            מייבא דפים ל־React או למסמכים ב־Vite – זה קריטי ב־SEO, בתצוגה
            רספונסיבית ובקונסיסטנטיות בין דפדפנים.
          </p>
        </section>
      </div>
    </div>
  );
}

export default DoctypePage;
