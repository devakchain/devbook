import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/JavaScriptEnginePage.scss";

function JavaScriptEnginePage() {
  const navigate = useNavigate();

  const code = `function calculate(a, b) {
  return a + b;
}

const result = calculate(10, 5);
console.log("Result:", result);`;

  const result = `Result: 15`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          מנוע ה-JavaScript הוא הליבה של שפת JavaScript, שאחראית על הידור, הרצה,
          אופטימיזציה וניהול זיכרון. הבנה עמוקה של פעולת המנוע חשובה להבנת
          הביצועים והתנהגות הקוד.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">JavaScript Engine – מנוע ג'אווהסקריפט</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה מנוע JavaScript?</h2>
            <p>
              מנוע JS (כמו V8 של Chrome או SpiderMonkey של Firefox) הוא תוכנה
              שמפרשת ומבצעת את קוד ה-JavaScript. הוא כולל מספר רכיבים:
            </p>
            <ul>
              <li>
                <strong>Parser:</strong> ממיר קוד לטוקנים ואז ל-AST
              </li>
              <li>
                <strong>Interpreter:</strong> ממיר AST לקוד ביניים (Bytecode)
              </li>
              <li>
                <strong>Compiler:</strong> מבצע JIT (Just-In-Time) לקוד מהיר
              </li>
              <li>
                <strong>Memory Manager:</strong> מנהל את ה-Heap, Stack וה-GC
              </li>
            </ul>

            <h2>⚙️ תהליך ביצוע קוד</h2>
            <ol>
              <li>
                קוד נטען ע"י <strong>Parser</strong> → נבנה AST
              </li>
              <li>
                ה-AST עובר ל-<strong>Interpreter</strong> שיוצר Bytecode
              </li>
              <li>
                ה-<strong>JIT Compiler</strong> מאיץ קטעי קוד רפטטיביים
              </li>
              <li>הקוד רץ – Stack, Call Stack, זיכרון מוקצה</li>
              <li>Garbage Collector מנקה אובייקטים ללא רפרנס</li>
            </ol>

            <h2>🚀 אופטימיזציה ב־V8</h2>
            <ul>
              <li>Inline Caching – שמירת סוג טיפוס</li>
              <li>Hidden Classes – שיפור גישה למאפיינים</li>
              <li>Adaptive Optimization – התאמה חכמה לקוד בפועל</li>
            </ul>

            <h2>📌 נקודות קריטיות</h2>
            <ul>
              <li>
                JavaScript היא שפה <strong>Single Threaded</strong> – משתמשת
                ב־Call Stack
              </li>
              <li>
                מנוע JS רץ בתוך ה־Browser או Node.js – אבל{" "}
                <strong>לא זהה</strong> לכל סביבה
              </li>
              <li>
                קריאות ל־Web APIs (כמו setTimeout) עוברות ל־Browser ולא למנוע
                עצמו
              </li>
            </ul>

            <h2>📊 השוואה בין מנועים</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>מנוע</th>
                    <th>דפדפן/פלטפורמה</th>
                    <th>יתרונות</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>V8</td>
                    <td>Chrome, Node.js</td>
                    <td>מהירות גבוהה, JIT אגרסיבי</td>
                  </tr>
                  <tr>
                    <td>SpiderMonkey</td>
                    <td>Firefox</td>
                    <td>תמיכה מוקדמת ב־ES6, מבנה פתוח</td>
                  </tr>
                  <tr>
                    <td>JavaScriptCore</td>
                    <td>Safari</td>
                    <td>אינטגרציה עם WebKit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* דוגמת קוד */}
          <section className="code-demo">
            <h2>🧪 דוגמת קוד מלאה</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          {/* טיפים מתקדמים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים</h2>
            <ul>
              <li>הימנע משימוש ב־eval – משבש אופטימיזציה</li>
              <li>שמור על טיפוס קבוע לאובייקטים – מסייע ל־JIT</li>
              <li>אל תבצע גישה דינמית למאפיינים לעיתים קרובות</li>
              <li>עקוב אחרי ביצועים ב־DevTools Performance</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default JavaScriptEnginePage;
