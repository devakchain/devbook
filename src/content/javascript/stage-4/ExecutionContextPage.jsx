import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/ExecutionContextPage.scss";

function ExecutionContextPage() {
  const navigate = useNavigate();

  const code = `var name = "Sam";

function sayHello() {
  var greeting = "Hello";
  console.log(greeting + ", " + name);

  function nested() {
    var exclaim = "!";
    console.log(greeting + ", " + name + exclaim);
  }

  nested();
}

sayHello();`;

  const result = `Hello, Sam
Hello, Sam!`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Execution Context הוא המנוע שמפעיל כל קוד JavaScript. זהו מושג קריטי
          להבנת איך משתנים, פונקציות ו־this עובדים בזמן הריצה.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Execution Context – הקשר הרצה</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Execution Context?</h2>
            <p>
              בכל פעם שפונקציה נקראת (או הקוד הראשי מופעל), נוצר Execution
              Context – מעין קפסולה שמכילה את כל מה שצריך להריץ את הקוד:
            </p>
            <ul>
              <li>
                <strong>Variable Environment:</strong> איפה נשמרים המשתנים
                המקומיים
              </li>
              <li>
                <strong>Scope Chain:</strong> מאפשר גישה למשתנים מההקשר החיצוני
              </li>
              <li>
                <strong>this:</strong> קישור לאובייקט שקשור להקשר הריצה
              </li>
            </ul>

            <h2>🌀 שלבי יצירה</h2>
            <ol>
              <li>
                <strong>Creation Phase:</strong> ניתוח קוד, הגדרת משתנים
                (undefined), פונקציות מוכנות
              </li>
              <li>
                <strong>Execution Phase:</strong> הרצת הקוד שורה אחר שורה
              </li>
            </ol>

            <h2>📊 סוגי הקשרים</h2>
            <ul>
              <li>
                <strong>Global Execution Context:</strong> נוצר פעם אחת, לכל
                הקוד שאינו בתוך פונקציה
              </li>
              <li>
                <strong>Function Execution Context:</strong> נוצר בכל קריאה
                לפונקציה
              </li>
              <li>
                <strong>Eval Execution Context:</strong> (נדיר) לקוד שמריץ
                `eval()`
              </li>
            </ul>

            <h2>🧱 מחסנית ההקשרים (Call Stack)</h2>
            <p>
              כאשר פונקציה נקראת, ההקשר שלה נדחף ל־Call Stack. כאשר היא מסתיימת
              – היא נשלפת.
            </p>
            <ul>
              <li>סדר הקריאות קריטי – הקשר אחרון נכנס ראשון יוצא</li>
              <li>אם יש רקע אסינכרוני (setTimeout) – הוא ממתין בתור</li>
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
              <li>
                עקוב אחרי ה־Call Stack בדיבאגר של הדפדפן כדי לראות הקשרים חיים
              </li>
              <li>
                שים לב להבדלים בין var, let ו־const – הם נכנסים לסביבה בצורה
                שונה
              </li>
              <li>ב־Arrow Functions, הערך של this נשמר מההקשר החיצוני</li>
              <li>זיהוי נכון של הקשר חיוני להבנת שגיאות כמו ReferenceError</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ExecutionContextPage;
