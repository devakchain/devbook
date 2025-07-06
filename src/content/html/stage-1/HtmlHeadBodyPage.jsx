import React from "react";
import { useNavigate } from "react-router-dom";
import CopyButton from "../../../components/CopyButton";
import LivePreview from "../../../components/LiveOutput";
import "../../../styles/html/stage-1/html-stage-pages.scss";

function HtmlHeadBodyPage() {
  const navigate = useNavigate();

  const code = `<!DOCTYPE html>
<html lang="he">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="color-scheme" content="light dark" />
    <meta name="description" content="מבנה בסיסי של HTML עם head ו-body" />
    <title>HTML Structure Example</title>
  </head>
  <body>
    <h1>ברוך הבא לעולם ה־HTML!</h1>
    <p>זהו הדף הראשון שלך עם מבנה תקני.</p>
  </body>
</html>`;

  return (
    <div className="page-content">
      <div className="html-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזרה
        </button>

        <h1 className="topic-title">
          &lt;html&gt;, &lt;head&gt;, &lt;body&gt; – הסבר ברמה הגבוהה ביותר
        </h1>

        <section className="topic-section">
          <h2>מה זה תגיות השלד?</h2>
          <p>כל עמוד HTML תקני מורכב מ־3 תגיות עיקריות שמרכיבות את השלד:</p>
          <ul>
            <li>
              <code className="inline-code">&lt;html&gt;</code> – עוטפת את כל
              הקוד שבדף ומציינת שזהו דף HTML. כוללת גם את מאפיין `lang` לציון
              השפה.
            </li>
            <li>
              <code className="inline-code">&lt;head&gt;</code> – חלק "נסתר"
              לדפדפן ולמנועי חיפוש, כולל:
              <ul>
                <li>
                  תגיות <code>&lt;meta&gt;</code> – מידע על הדף
                </li>
                <li>
                  <code>&lt;title&gt;</code> – שם הדף בכרטיסייה
                </li>
                <li>
                  <code>&lt;link&gt;</code> – חיבורים לקבצי CSS
                </li>
                <li>
                  <code>&lt;script&gt;</code> – סקריפטים
                </li>
              </ul>
            </li>
            <li>
              <code className="inline-code">&lt;body&gt;</code> – כל מה שנראה
              בפועל למשתמש: טקסט, תמונות, ווידאו, כפתורים ועוד.
            </li>
          </ul>
        </section>

        <section className="topic-section">
          <h2>מיקום נכון בקוד</h2>
          <p>
            תגיות אלה צריכות להופיע אך ורק בסדר הבא:
            <ol>
              <li>
                <code className="inline-code">&lt;!DOCTYPE html&gt;</code> –
                בראש
              </li>
              <li>
                <code className="inline-code">&lt;html&gt;</code> – עוטפת את כל
                הדף
              </li>
              <li>
                <code className="inline-code">&lt;head&gt;</code> – תחילה בתוך{" "}
                <code>&lt;html&gt;</code>
              </li>
              <li>
                <code className="inline-code">&lt;body&gt;</code> – אחרי{" "}
                <code>&lt;head&gt;</code>
              </li>
            </ol>
          </p>
        </section>

        <section className="topic-section">
          <h2>דוגמת קוד מלאה</h2>
          <div className="code-preview">
            <pre>
              <code>{code}</code>
            </pre>
            <CopyButton code={code} />
          </div>
        </section>

        <section className="topic-section">
          <h2>תצוגה חיה</h2>
          <LivePreview html={code} />
        </section>

        <section className="topic-section">
          <h2>💡 טיפ למקצוענים</h2>
          <p>
            הקפד לשים תמיד את תגית <code>&lt;meta charset="UTF-8"&gt;</code>{" "}
            בתחילת ה־<code>&lt;head&gt;</code>, ולשלב גם את{" "}
            <code>viewport</code> ו־<code>theme-color</code> לתצוגה מיטבית בנייד
            ובדפדפנים מודרניים.
          </p>
        </section>
      </div>
    </div>
  );
}

export default HtmlHeadBodyPage;
