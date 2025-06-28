import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/LexicalScope.scss";

function LexicalScopePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const basicCode = `function outer() {
  const x = 10;

  function inner() {
    console.log(x); // 👈 ניגש ל-x מסקופ חיצוני
  }

  inner();
}

outer();`;

  const closureCode = `function outer() {
  const msg = "שלום";

  return function inner() {
    console.log(msg);
  };
}

const fn = outer();
fn();`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Lexical Scope מתאר את הדרך שבה JavaScript קובעת אילו משתנים זמינים
          לפונקציה – לפי המיקום שבו הפונקציה נכתבה בקוד. זהו עקרון מפתח שמאפשר
          להבין למה פונקציה יכולה לגשת למשתנים חיצוניים, גם אם לא הועברו
          כפרמטרים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title rtl">📦 Lexical Scope – תחום לקסיקלי</h1>

          {/* הסבר כללי */}
          <section className="explanation rtl">
            <h2>🔍 מה זה Lexical Scope?</h2>
            <p>
              JavaScript משתמשת ב־<strong>Static Scoping</strong>, כלומר – כל
              פונקציה "רואה" את המשתנים מהסקופ שבו היא הוגדרה – ולא מאיפה היא
              הופעלה בפועל. כל פונקציה נוצרת עם הקשר קבוע לסביבה שלה בזמן
              ההגדרה.
            </p>
            <p>
              המשמעות היא שכל פונקציה מקבלת גישה למשתנים שהיו זמינים בזמן ההגדרה
              שלה, גם אם תקרא לה במיקום אחר בקוד.
            </p>
          </section>

          {/* דוגמה 1 */}
          <section className="code-demo">
            <h2 className="rtl">1. גישה למשתנה חיצוני</h2>
            <p className="rtl">
              הפונקציה `inner` מוגדרת בתוך `outer`, ולכן יש לה גישה למשתנה `x`.
            </p>
            <CodeBlock code={basicCode} language="javascript" />
            <LiveOutput result={`10`} />
          </section>

          {/* דוגמה 2 */}
          <section className="code-demo">
            <h2 className="rtl">2. פונקציה שזוכרת את הסקופ שלה (Closure)</h2>
            <p className="rtl">
              גם אחרי ש־`outer` הסתיימה, `inner` ממשיכה "לזכור" את המשתנה `msg`.
            </p>
            <CodeBlock code={closureCode} language="javascript" />
            <LiveOutput result={`שלום`} />
          </section>

          {/* טיפים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים</h2>
            <ul>
              <li>
                כל פונקציה ניגשת רק למה שהיה זמין **בעת ההגדרה שלה**, לא הריצה.
              </li>
              <li>
                Lexical Scope הוא הבסיס ל־<strong>Closures</strong>, שיאפשרו לך
                בניית מערכות מורכבות וחזקות.
              </li>
              <li>
                נסה לחשוב תמיד על **הסביבה שבה הפונקציה נוצרה** – זה יבהיר למה
                היא "רואה" משתנים מסוימים.
              </li>
              <li>
                ניתן להשתמש ב־Lexical Scope ליצירת <code>encapsulation</code> –
                הסתרת מידע פנימי מהעולם החיצון.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LexicalScopePage;
