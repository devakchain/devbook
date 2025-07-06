import React from "react";
import { useNavigate } from "react-router-dom";
import CopyButton from "../../../components/CopyButton";
import LivePreview from "../../../components/LiveOutput";
import "../../../styles/html/stage-1/html-stage-pages.scss";

function LangDirPage() {
  const navigate = useNavigate();

  const codeLangDir = `<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>מסמך ימין לשמאל</title>
  </head>
  <body>
    <h1>ברוך הבא</h1>
    <p>זוהי דוגמה לתצוגה מימין לשמאל</p>
  </body>
</html>`;

  const codeLTR = `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <title>Left to Right</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a left-to-right example</p>
  </body>
</html>`;

  return (
    <div className="page-content">
      <div className="html-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזרה
        </button>

        <h1 className="topic-title">lang + dir – שפה וכיוון קריאה</h1>

        <section className="topic-section">
          <h2>מה זה lang ו-dir?</h2>
          <p>
            תגית{" "}
            <code className="inline-code">
              &lt;html lang="..." dir="..."&gt;
            </code>{" "}
            מגדירה:
          </p>
          <ul>
            <li>
              <strong>lang</strong> – מזהה את שפת הדף עבור דפדפנים, מנועי חיפוש,
              מסייעים קוליים ועוד.
            </li>
            <li>
              <strong>dir</strong> – מגדיר את **כיוון הקריאה**: ימין לשמאל (RTL)
              או שמאל לימין (LTR).
            </li>
          </ul>
        </section>

        <section className="topic-section">
          <h2>🌍 דוגמה לדף בעברית – RTL</h2>
          <div className="code-preview">
            <pre>
              <code>{codeLangDir}</code>
            </pre>
            <CopyButton code={codeLangDir} />
          </div>
          <LivePreview html={codeLangDir} />
        </section>

        <section className="topic-section">
          <h2>🌐 דוגמה לדף באנגלית – LTR</h2>
          <div className="code-preview">
            <pre>
              <code>{codeLTR}</code>
            </pre>
            <CopyButton code={codeLTR} />
          </div>
          <LivePreview html={codeLTR} />
        </section>

        <section className="topic-section">
          <h2>🧠 למה זה חשוב?</h2>
          <ul>
            <li>📱 משפר תמיכה רספונסיבית במובייל</li>
            <li>🧑‍🦯 עוזר לקוראי מסך להבין איך לקרוא את הדף</li>
            <li>🔍 משפיע על תוצאות חיפוש ותרגום אוטומטי</li>
            <li>🎯 חובה בפרויקטים בשפות RTL (עברית, ערבית)</li>
          </ul>
        </section>

        <section className="topic-section">
          <h2>💡 טיפ למקצוענים</h2>
          <p>
            אם יש אלמנט אחד בלבד בדף שצריך כיוון הפוך (למשל ציטוט באנגלית בתוך
            דף עברי), השתמש ב־<code className="inline-code">dir="ltr"</code> רק
            על אותו אלמנט, לדוגמה:
          </p>
          <div className="code-preview small">
            <pre>
              <code>{`<blockquote dir="ltr">This is a quote in English.</blockquote>`}</code>
            </pre>
            <CopyButton
              code={`<blockquote dir="ltr">This is a quote in English.</blockquote>`}
            />
          </div>
          <p>✅ זה ישמור על נגישות, מבנה תקני ו־UX מושלם!</p>
        </section>
      </div>
    </div>
  );
}

export default LangDirPage;
