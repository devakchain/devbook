import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-2/CallbackFunctionsPage.scss";

function CallbackFunctionsPage() {
  const navigate = useNavigate();

  const code = `function fetchData(callback) {
  setTimeout(() => {
    console.log("🔄 Fetching data...");
    callback("✅ Data received!");
  }, 1000);
}

function processData(data) {
  console.log("📦 Processing:", data);
}

fetchData(processData);`;

  const result = `🔄 Fetching data...
📦 Processing: ✅ Data received!`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Callback Functions הן אבני בניין מרכזיות בתכנות אסינכרוני
          ב-JavaScript. הן מאפשרות לבצע פעולה רק לאחר שפעולה אחרת הסתיימה –
          קריטי במיוחד בקריאות לשרת, אירועים, וטיימרים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Callback Functions – פונקציות חזרה</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Callback?</h2>
            <p>
              Callback היא פונקציה שמועברת כארגומנט לפונקציה אחרת – והיא נקראת
              בשלב מאוחר יותר (לרוב לאחר פעולה אסינכרונית).
            </p>
            <ul>
              <li>הן חלק מהותי מתכנות מבוסס אירועים (Event-driven)</li>
              <li>שימוש נפוץ בטיימרים, event listeners, AJAX, fetch ועוד</li>
              <li>מבוא חשוב לפני הבנת Promises ו־async/await</li>
            </ul>

            <h2>📊 טבלת השוואה – רגילה מול Callback</h2>
            <table>
              <thead>
                <tr>
                  <th>סוג</th>
                  <th>מתי מתבצעת?</th>
                  <th>שליטה בזמן הריצה</th>
                  <th>שימושים נפוצים</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>פונקציה רגילה</td>
                  <td>מיידית בזמן הקריאה</td>
                  <td>אין שליטה</td>
                  <td>חישובים, פעולות לוגיות</td>
                </tr>
                <tr>
                  <td>Callback</td>
                  <td>רק כשנדרש (מאוחר יותר)</td>
                  <td>שליטה גמישה</td>
                  <td>טעינת נתונים, תגובה לאירועים</td>
                </tr>
              </tbody>
            </table>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>שכחת לספק את הפונקציה כארגומנט</li>
              <li>
                קריאה מיידית במקום העברה (שימוש ב-`callback()` במקום `callback`)
              </li>
              <li>Callback Hell – קינון עמוק מדי של פונקציות</li>
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
              <li>העבר פונקציות אנונימיות אם אין צורך בשימוש חוזר</li>
              <li>
                אם התוצאה תלויה במשהו אסינכרוני – תמיד שקול Promises או
                async/await
              </li>
              <li>השתמש בשמות משמעותיים ל־callback (כמו onSuccess, onError)</li>
              <li>ניתן להעביר יותר מ־callback אחד (onSuccess, onFail)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CallbackFunctionsPage;
