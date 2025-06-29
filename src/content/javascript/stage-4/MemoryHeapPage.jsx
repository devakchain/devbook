import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/MemoryHeapPage.scss";

function MemoryHeapPage() {
  const navigate = useNavigate();

  const code = `function createUser(name) {
  return {
    name,
    greet() {
      console.log(\`Hello, my name is \${this.name}\`);
    },
  };
}

const user1 = createUser("Alice");
const user2 = createUser("Bob");

user1.greet();
user2.greet();

// לאחר מכן ניתן "לשחרר" את האובייקטים מהזיכרון
// אם אין אליהם רפרנס נוסף.`;

  const result = `Hello, my name is Alice
Hello, my name is Bob`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          ה-Memory Heap הוא החלק בזיכרון בו נשמרים ערכים לא פרימיטיביים
          (אובייקטים, מערכים, פונקציות וכו'). ניהול נכון של ה-Heap חשוב לביצועים
          ולמניעת זליגת זיכרון (Memory Leaks).
        </p>

        <div className="topic-content">
          <h1 className="stage-title">
            Memory Heap – ניהול זיכרון בג'אווהסקריפט
          </h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Memory Heap?</h2>
            <p>
              Heap הוא אזור בזיכרון בו נשמרים נתונים דינאמיים – כמו אובייקטים
              ומערכים. הוא נפרד מה-Call Stack, והוא לא ליניארי – כלומר יש גישה
              ישירה לכל אובייקט.
            </p>
            <ul>
              <li>כל אובייקט שאתה יוצר מוקצה בזיכרון של ה-Heap</li>
              <li>שמות משתנים מהווים "רפרנס" (מצביע) לאותם ערכים בזיכרון</li>
              <li>ה-Garbage Collector מוחק ערכים שאין אליהם גישה</li>
            </ul>

            <h2>🔍 השוואה בין Stack ל-Heap</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>מאפיין</th>
                    <th>Call Stack</th>
                    <th>Memory Heap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>מטרה</td>
                    <td>ניהול פונקציות וקריאות</td>
                    <td>שמירת אובייקטים ומבנים דינמיים</td>
                  </tr>
                  <tr>
                    <td>מבנה</td>
                    <td>LIFO (סטאק)</td>
                    <td>לא לינארי, מבוסס רפרנסים</td>
                  </tr>
                  <tr>
                    <td>מהירות גישה</td>
                    <td>מהירה מאוד</td>
                    <td>איטית יותר</td>
                  </tr>
                  <tr>
                    <td>ניקוי</td>
                    <td>אוטומטי עם יציאה מהפונקציה</td>
                    <td>מחייב Garbage Collection</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>אחסון רפרנסים באובייקטים גלובליים (נזילה)</li>
              <li>יצירת Closure עם גישה לזיכרון שאינו נחוץ</li>
              <li>שכחת לנקות מאזינים או Timers</li>
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
              <li>שמור רק רפרנסים נדרשים בפונקציות או משתנים</li>
              <li>שחרר מאזינים עם removeEventListener בעת השמדה</li>
              <li>השתמש ב-WeakMap או WeakSet לאובייקטים זמניים</li>
              <li>בצע Profile דרך DevTools לזיהוי Memory Leaks</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MemoryHeapPage;
