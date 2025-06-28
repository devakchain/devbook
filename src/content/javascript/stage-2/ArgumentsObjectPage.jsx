import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/ArgumentsObject.scss";

function ArgumentsObjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const code = `// שימוש ב־arguments בפונקציה רגילה
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumAll(2, 4, 6)); // 12
console.log(sumAll(1, 2, 3, 4, 5)); // 15
`;

  const result = `12
15`;

  const arrowErrorCode = `// ❌ שימוש ב-arguments בתוך Arrow Function
const test = () => {
  console.log(arguments);
};

test(1, 2, 3); // ReferenceError: arguments is not defined`;

  const strictMismatchCode = `"use strict";

function demo(a, b, c) {
  a = 100;
  console.log(arguments[0]); // לא יהיה מסונכרן (עדיין יראה את הערך המקורי)
}

demo(1, 2, 3);`;

  const strictMismatchResult = `1`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          arguments הוא אובייקט מובנה שקיים רק בפונקציות רגילות (declared
          functions), ומכיל את כל הארגומנטים שנשלחו לפונקציה בפועל – גם אם לא
          הוגדרו כפרמטרים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title rtl">🧠 arguments – כל מה שצריך לדעת</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🔍 מה זה arguments?</h2>
            <p>
              arguments הוא אובייקט דמוי מערך (array-like) שכולל את כל הערכים
              שנשלחו לפונקציה. הוא נגיש בפונקציות רגילות בלבד (לא בפונקציות חץ)
              ואינו כולל את כל מתודות המערכים.
            </p>

            <h2>📌 תכונות עיקריות:</h2>
            <ul>
              <li>לא זמין בתוך arrow functions</li>
              <li>לא מסונכר עם פרמטרים תחת strict mode</li>
              <li>לא ניתן למפות אותו ישירות (map, filter וכו')</li>
              <li>מאפשר גישה לכל הארגומנטים גם אם לא הוגדרו בפרמטרים</li>
              <li>
                ניתן להמיר אותו למערך: <code>[...arguments]</code>
              </li>
            </ul>
          </section>

          {/* קוד רגיל */}
          <section className="code-demo">
            <h2 className="rtl">🧪 דוגמת שימוש בפועל</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          {/* השוואה מול rest */}
          <section className="comparison rtl">
            <h2>📊 השוואה בין arguments ל־...rest</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>תכונה</th>
                    <th>arguments</th>
                    <th>...rest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>מבנה</td>
                    <td>דמוי מערך (Array-like)</td>
                    <td>מערך אמיתי (Array)</td>
                  </tr>
                  <tr>
                    <td>זמינות בפונקציות חץ</td>
                    <td>❌ לא נתמך</td>
                    <td>✅ נתמך</td>
                  </tr>
                  <tr>
                    <td>זמינות ב־strict mode</td>
                    <td>✅ אך לא מסונכר עם הפרמטרים</td>
                    <td>✅ תמיד תקין ומעודכן</td>
                  </tr>
                  <tr>
                    <td>ניתן למפות עם map / filter</td>
                    <td>❌ לא</td>
                    <td>✅ כן</td>
                  </tr>
                  <tr>
                    <td>קריאות קוד</td>
                    <td>פחות קריא</td>
                    <td>הרבה יותר מודרני וקריא</td>
                  </tr>
                  <tr>
                    <td>שימוש מודרני מומלץ</td>
                    <td>❌ לא</td>
                    <td>✅ כן</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* שגיאה בפונקציית חץ */}
          <section className="code-demo">
            <h2 className="rtl">❌ שימוש לא חוקי – Arrow Function</h2>
            <CodeBlock code={arrowErrorCode} language="javascript" />
            <LiveOutput result={`ReferenceError: arguments is not defined`} />
          </section>

          {/* Strict mode mismatch */}
          <section className="code-demo">
            <h2 className="rtl">
              🚨 Strict Mode – אי התאמה בין פרמטרים ל־arguments
            </h2>
            <CodeBlock code={strictMismatchCode} language="javascript" />
            <LiveOutput result={strictMismatchResult} />
          </section>

          {/* טיפים מתקדמים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים:</h2>
            <ul>
              <li>
                שימוש ב־<code>arguments</code> מתאים רק לקוד ישן או ספריות ישנות
              </li>
              <li>
                לקוד מודרני – תמיד השתמש ב־<code>...rest</code> המודרני
              </li>
              <li>
                היזהר מבלבול בין ערכי הפרמטרים לבין <code>arguments[i]</code>{" "}
                ב־strict mode
              </li>
              <li>
                כדי למנוע באגים – העדף לקרוא לפונקציות עם פרמטרים מוגדרים ולא
                לסמוך על arguments
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ArgumentsObjectPage;
