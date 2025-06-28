import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/RestParametersPage.scss";

function RestParametersPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const restCode = `function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3));`;

  const restOutput = `6`;

  const mixedCode = `function logDetails(name, age, ...hobbies) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Hobbies:", hobbies);
}

logDetails("Dan", 30, "Reading", "Gaming", "Running");`;

  const mixedOutput = `Name: Dan
Age: 30
Hobbies: [ 'Reading', 'Gaming', 'Running' ]`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Rest Parameters מאפשרים לאסוף מספר בלתי מוגבל של ארגומנטים לתוך מערך
          אחד – שימושי במיוחד בפונקציות שלא יודעות כמה פרמטרים יקבלו.
        </p>

        <div className="topic-content">
          <h1 className="stage-title rtl">📦 Rest Parameters</h1>

          <section className="explanation rtl">
            <h2>🧠 מה זה Rest Parameters?</h2>
            <p>
              Rest מאפשר לאגד מספר בלתי מוגבל של ארגומנטים למערך יחיד, ע"י הוספת
              `...` לפני שם המשתנה בפרמטר.
            </p>

            <h2>📚 מתי משתמשים?</h2>
            <ul>
              <li>כאשר מספר הארגומנטים אינו ידוע מראש</li>
              <li>בעת יצירת פונקציות גנריות או כלי עזר (utility)</li>
              <li>כשרוצים לעבד את כל הארגומנטים כ־Array אמיתי</li>
            </ul>
          </section>

          <section className="code-demo">
            <h2 className="rtl">✅ דוגמה פשוטה: חיבור מספרים</h2>
            <CodeBlock code={restCode} language="javascript" />
            <LiveOutput result={restOutput} />
          </section>

          <section className="code-demo">
            <h2 className="rtl">🌀 Rest עם פרמטרים רגילים</h2>
            <CodeBlock code={mixedCode} language="javascript" />
            <LiveOutput result={mixedOutput} />
          </section>

          <section className="comparison rtl">
            <h2>📊 טבלת השוואה: Rest vs arguments</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>מאפיין</th>
                  <th>Rest</th>
                  <th>arguments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>סוג</td>
                  <td>Array אמיתי</td>
                  <td>דמוי Array</td>
                </tr>
                <tr>
                  <td>מודרני?</td>
                  <td>✅ כן</td>
                  <td>❌ לא – ישן</td>
                </tr>
                <tr>
                  <td>שימוש עם Arrow Functions</td>
                  <td>✅ אפשרי</td>
                  <td>❌ לא זמין</td>
                </tr>
                <tr>
                  <td>שימוש נפוץ</td>
                  <td>פונקציות עם מספר משתנה של פרמטרים</td>
                  <td>קיים בעיקר בקוד ישן</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="note rtl">
            <h2>💡 טיפים חשובים</h2>
            <ul>
              <li>השתמש ב־Rest רק בסוף רשימת הפרמטרים.</li>
              <li>Rest תמיד מחזיר Array – ניתן להשתמש ב־map, filter וכו'.</li>
              <li>
                אל תבלבל עם <code>arguments</code> – Rest עדיף במרבית המקרים.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RestParametersPage;
