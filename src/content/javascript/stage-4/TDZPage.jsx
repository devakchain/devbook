import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/TDZPage.scss";

function TDZPage() {
  const navigate = useNavigate();

  const code = `console.log(name); // ❌ ReferenceError - TDZ
let name = "דני";

function showAge() {
  console.log(age); // ❌ ReferenceError - TDZ
  const age = 30;
}

showAge();`;

  const result = `❌ ReferenceError: Cannot access 'name' before initialization`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          TDZ – ראשי תיבות של <strong>Temporal Dead Zone</strong> – הוא המצב שבו
          משתנה הוכרז באמצעות <code>let</code> או <code>const</code> אך עדיין לא
          אתחול בפועל, ולכן כל גישה אליו תוביל ל־ReferenceError.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">TDZ – אזור מת של זמן</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה TDZ?</h2>
            <p>
              TDZ מתרחש בכל פעם שמשתמשים ב־<code>let</code> או{" "}
              <code>const</code>. למרות שההצהרה "מועלת" (כחלק מ־Hoisting),
              המשתנה לא נגיש – מרגע יצירת ההקשר ועד שורת האתחול.
            </p>

            <ul>
              <li>
                נוצר בכל <strong>בלוק</strong> קוד (if, for, function...)
              </li>
              <li>מונע שימוש במשתנה לפני אתחולו</li>
              <li>
                נוגע רק ל־<code>let</code> ו־<code>const</code>, לא ל־
                <code>var</code>
              </li>
              <li>מיועד להגנה על משתנים מגישה מוקדמת בטעות</li>
            </ul>

            <h2>🔍 דוגמה פשוטה</h2>
            <p>
              שורת ה־<code>let name = "דני";</code> מתבצעת רק כשהקוד מגיע אליה –
              אבל ה־Scope שלה כבר התחיל, ולכן כל גישה מוקדמת = TDZ.
            </p>

            <h2>📊 השוואה בין let / const / var</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>מזהה</th>
                    <th>TDZ?</th>
                    <th>גישה מוקדמת</th>
                    <th>סוג שגיאה</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>var</td>
                    <td>לא</td>
                    <td>מותרת (undefined)</td>
                    <td>אין</td>
                  </tr>
                  <tr>
                    <td>let</td>
                    <td>כן</td>
                    <td>אסורה</td>
                    <td>ReferenceError</td>
                  </tr>
                  <tr>
                    <td>const</td>
                    <td>כן</td>
                    <td>אסורה</td>
                    <td>ReferenceError</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>גישה למשתנה עם let/const לפני שורת ההשמה</li>
              <li>הנחה ש־Hoisting = גישה מיידית (לא נכון עבור let/const)</li>
              <li>בלבול בין ReferenceError לבין undefined</li>
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
              <li>הכרז על משתנים בראש הבלוק תמיד</li>
              <li>הימנע מתלות במשתנים שהוגדרו מאוחר יותר בקוד</li>
              <li>השתמש ב־let/const רק כשברור שאתה מאותחל לפני שימוש</li>
              <li>דע ש־TDZ קיים גם בתוך for ו־if, לא רק בפונקציות</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TDZPage;
