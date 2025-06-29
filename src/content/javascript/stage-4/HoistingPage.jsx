import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/HoistingPage.scss";

function HoistingPage() {
  const navigate = useNavigate();

  const code = `console.log(message); // undefined (var)
var message = "שלום מהעבר";

// console.log(name); // ❌ ReferenceError (let)
let name = "דוד";

sayHello(); // ✅ Works
function sayHello() {
  console.log("פונקציה הועלתה!");
}`;

  const result = `undefined
פונקציה הועלתה!`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Hoisting הוא תהליך פנימי שבו JavaScript "מרימה" הצהרות משתנים
          ופונקציות לתחילת ההקשר שלהן – עוד לפני שהקוד עצמו רץ.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Hoisting – הרמה פנימית</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Hoisting?</h2>
            <p>
              כשקוד JavaScript מנותח, מנוע השפה "מרים" את כל הצהרות ה־
              <code>var</code> וה־<code>function</code> לראש ה־Scope, אך לא את
              ערכי ההשמה. ב־<code>let</code> ו־<code>const</code> – ההצהרה
              מתבצעת אך לא ניתנת לגישה (Temporal Dead Zone).
            </p>

            <h2>📦 מה מועלה ומה לא?</h2>
            <ul>
              <li>
                <strong>✅ var:</strong> מוצהר כ־undefined
              </li>
              <li>
                <strong>✅ function declarations:</strong> מועלות במלואן
              </li>
              <li>
                <strong>❌ let / const:</strong> לא ניתנים לשימוש לפני שורה
                בפועל
              </li>
              <li>
                <strong>❌ function expressions / arrow functions:</strong>{" "}
                מתנהגות כמו משתנים
              </li>
            </ul>

            <h2>📊 טבלת השוואה</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>סוג</th>
                    <th>מועלה?</th>
                    <th>גישה לפני שורה?</th>
                    <th>שגיאה?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>var</td>
                    <td>כן</td>
                    <td>כן (undefined)</td>
                    <td>לא</td>
                  </tr>
                  <tr>
                    <td>let / const</td>
                    <td>כן (TDZ)</td>
                    <td>לא</td>
                    <td>ReferenceError</td>
                  </tr>
                  <tr>
                    <td>function declaration</td>
                    <td>כן</td>
                    <td>כן</td>
                    <td>לא</td>
                  </tr>
                  <tr>
                    <td>function expression</td>
                    <td>כמו var</td>
                    <td>לא</td>
                    <td>TypeError או undefined</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>ציפייה שערכים יועלו – רק הצהרות מועלות, לא השמות</li>
              <li>שימוש ב־let/const לפני השורה = ReferenceError</li>
              <li>
                בלבול בין הצהרת פונקציה (declaration) לבין ביטוי פונקציה
                (expression)
              </li>
            </ul>
          </section>

          {/* דוגמת קוד */}
          <section className="code-demo">
            <h2>🧪 דוגמת קוד מלאה</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          {/* טיפים מתקדמים */}
          <section className="note rtl">
            <h2>💡 טיפים מקצועיים</h2>
            <ul>
              <li>תמיד הגדר משתנים בראש הבלוק כדי למנוע בלבול</li>
              <li>השתמש ב־let/const בלבד – למנוע טעויות Hoisting</li>
              <li>הפרד בין function declaration ל־expression</li>
              <li>הימנע מקריאות לפונקציה לפני הגדרתה אם היא expression</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HoistingPage;
