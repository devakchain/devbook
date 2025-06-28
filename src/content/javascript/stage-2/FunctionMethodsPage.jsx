import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/FunctionMethodsPage.scss";

function FunctionMethodsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const methodCode = `function greet(name) {
  return "שלום, " + name;
}

console.log(greet.call(null, "דני"));     // שלום, דני
console.log(greet.apply(null, ["דינה"])); // שלום, דינה

const newGreet = greet.bind(null, "רות");
console.log(newGreet()); // שלום, רות`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          בג׳אווהסקריפט, כל פונקציה היא אובייקט – ולכן יש לה מתודות. המתודות
          <code> call</code>, <code>apply</code> ו־<code>bind</code> הן מהחשובות
          ביותר, ומאפשרות שליטה מתקדמת על ההקשר (<code>this</code>) ואופן ההפעלה
          של הפונקציה.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Function Methods</h1>

          <section className="explanation rtl">
            <h2>🧠 מה זה מתודות פונקציה?</h2>
            <p>
              כל פונקציה ב-JavaScript היא גם אובייקט, ולכן יש לה מתודות מובנות.
              שלוש המתודות החשובות ביותר הן:
            </p>

            <ul>
              <li>
                <strong>call()</strong> – מפעילה את הפונקציה עם this מותאם
              </li>
              <li>
                <strong>apply()</strong> – כמו call אך מקבלת פרמטרים כמערך
              </li>
              <li>
                <strong>bind()</strong> – מחזירה פונקציה חדשה עם this "קבוע"
              </li>
            </ul>

            <h2>🔬 השוואה בין שלושת המתודות</h2>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>מתודה</th>
                    <th>מה עושה</th>
                    <th>מתי נשתמש</th>
                    <th>הפעלה מיידית?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>call()</td>
                    <td>מפעילה את הפונקציה עם this מותאם</td>
                    <td>כשצריך להעביר פרמטרים רגילים ולהריץ עכשיו</td>
                    <td>✔️ כן</td>
                  </tr>
                  <tr>
                    <td>apply()</td>
                    <td>כמו call אבל הפרמטרים בתוך מערך</td>
                    <td>כשיש לנו מערך של ערכים</td>
                    <td>✔️ כן</td>
                  </tr>
                  <tr>
                    <td>bind()</td>
                    <td>מחזירה פונקציה חדשה עם this מותאם</td>
                    <td>כשצריך פונקציה לשימוש עתידי עם this מסוים</td>
                    <td>❌ לא</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>🎯 שימושים נפוצים</h2>
            <ul>
              <li>השאלת פונקציות בין אובייקטים (method borrowing)</li>
              <li>שמירה על הקשר נכון בפונקציות callback</li>
              <li>יצירת פונקציות עם this מוגדר מראש לאירועים</li>
              <li>עבודה עם פונקציות קונסטרקטור או מודולים</li>
            </ul>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>שכחת סוגריים ב-call/apply – עלול להחזיר undefined</li>
              <li>שימוש ב-bind כשצריך תוצאה מיידית – bind לא מריץ!</li>
              <li>בלבול בין סדר הפרמטרים לבין this</li>
            </ul>
          </section>

          <section className="code-demo">
            <h2>🧪 דוגמת קוד מלאה</h2>
            <CodeBlock code={methodCode} language="javascript" />
            <LiveOutput code={methodCode} />
          </section>

          <section className="note rtl">
            <h2>💡 טיפ מקצועי</h2>
            <ul>
              <li>
                בעת שימוש עם Event Listeners – השתמש ב-<code>bind</code> כדי
                לשמר this נכון
              </li>
              <li>
                <code>apply</code> שימושי כשיש לך מערך ערכים דינאמי, למשל עם
                Math.max
              </li>
              <li>
                לבדוק אם אפשר להשתמש ב־arrow function כדי להימנע מ־bind במקרים
                פשוטים
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FunctionMethodsPage;
