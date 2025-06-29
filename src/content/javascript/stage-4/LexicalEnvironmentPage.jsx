import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/LexicalEnvironmentPage.scss";

function LexicalEnvironmentPage() {
  const navigate = useNavigate();

  const code = `function outer() {
  const outerVar = "🌍 אני במרחב החיצוני";

  function inner() {
    const innerVar = "🔒 אני בפנימי";
    console.log(outerVar); // גישה ללמעלה
    console.log(innerVar); // גישה לעצמי
  }

  inner();
  // console.log(innerVar); ❌ שגיאה – אין גישה פנימה
}

outer();`;

  const result = `🌍 אני במרחב החיצוני
🔒 אני בפנימי`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Lexical Environment הוא המרחב שבו JavaScript מחפשת משתנים בעת הרצה –
          לפי מיקום כתיבת הקוד (ולא מתי הוא נקרא).
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Lexical Environment </h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Lexical Environment?</h2>
            <p>
              זהו מבנה פנימי שבו נשמרים כל המשתנים שהוגדרו בהקשר נתון, יחד עם
              הפניה למרחב החיצוני (ה־Outer Environment Reference). הוא מבוסס על
              איך הקוד נכתב – לא על איך הוא מתבצע.
            </p>

            <ul>
              <li>נוצר בכל פעם שפונקציה מופעלת</li>
              <li>כולל את כל המשתנים והפונקציות שהוגדרו באותו הקשר</li>
              <li>כולל גישה להקשר החיצוני (Lexical Scope)</li>
              <li>משמש את המנוע ליצירת Execution Context</li>
            </ul>

            <h2>🧬 מבנה פנימי של כל Lexical Environment</h2>
            <ul>
              <li>
                <strong>Environment Record:</strong> שמירה של מזהים וערכים
                (let/const/var/func)
              </li>
              <li>
                <strong>Outer Environment:</strong> קישור לסביבה החיצונית שממנה
                ניתן "לטפס"
              </li>
            </ul>

            <h2>📦 Lexical vs Dynamic Scope</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>סוג Scope</th>
                    <th>החלטת משתנים</th>
                    <th>מתי נקבע?</th>
                    <th>דוגמה לשפות</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lexical Scope</td>
                    <td>לפי מיקום בקוד</td>
                    <td>בזמן כתיבה</td>
                    <td>JavaScript, C, Java</td>
                  </tr>
                  <tr>
                    <td>Dynamic Scope</td>
                    <td>לפי הקריאה בפועל</td>
                    <td>בזמן הרצה</td>
                    <td>Lisp, Bash</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>ציפייה לגשת למשתנים חיצוניים שלא נגישים מהקוד</li>
              <li>בלבול בין מתי משתנה נוצר לבין מתי הוא נגיש</li>
              <li>אי־הבנה של מה נכנס ל־Scope Chain</li>
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
                תמיד זכר שהגישה למשתנים נעשית לפי מיקום ההגדרה בקוד – לא לפי מתי
                הם נקראו
              </li>
              <li>שימוש ב־console.dir() יכול לעזור להבין את הסביבה</li>
              <li>הבנה של Lexical Environment היא בסיס ל־Closures</li>
              <li>בדיבאגר – חפש את Environment Records ואת ה־[[Scopes]]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LexicalEnvironmentPage;
