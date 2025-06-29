import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/ScopeChainPage.scss";

function ScopeChainPage() {
  const navigate = useNavigate();

  const code = `const globalVar = "🌐 גלובלי";

function outer() {
  const outerVar = "🌍 חיצוני";

  function inner() {
    const innerVar = "🔒 פנימי";
    console.log(globalVar); // גישה לגלובלי
    console.log(outerVar);  // גישה לחיצוני
    console.log(innerVar);  // גישה לעצמי
  }

  inner();
}

outer();`;

  const result = `🌐 גלובלי
🌍 חיצוני
🔒 פנימי`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Scope Chain הוא המנגנון שמאפשר לג'אווהסקריפט "לטפס" מעלה כדי למצוא
          משתנים – החל מהקשר הנוכחי, דרך ההקשרים העוטפים, ועד ל־Global.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Scope Chain – שרשרת תחומים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Scope Chain?</h2>
            <p>
              זהו המבנה שדרכו מנוע ג'אווהסקריפט מוצא משתנים. אם משתנה לא נמצא
              בהקשר הנוכחי – המנוע עובר להקשר הבא החיצוני וכן הלאה, עד שמוצא או
              מגיע ל־Global.
            </p>

            <ul>
              <li>נוצר יחד עם כל Execution Context</li>
              <li>מכיל את כל ה־Lexical Environments של הפונקציה וההורים שלה</li>
              <li>המנוע בודק כל אחד מהם לפי הסדר מלמטה למעלה</li>
            </ul>

            <h2>🔁 שלבי חיפוש משתנה</h2>
            <ol>
              <li>בודק תחילה בסביבה המקומית (Local)</li>
              <li>אם לא נמצא – עובר החוצה (Lexical Outer)</li>
              <li>ממשיך עד ל־Global Execution Context</li>
              <li>אם לא נמצא כלל – זורק ReferenceError</li>
            </ol>

            <h2>⚖️ טבלת השוואה – Scope vs Scope Chain</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>מושג</th>
                    <th>הגדרה</th>
                    <th>שימוש עיקרי</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Scope</td>
                    <td>אזור נגישות משתנים</td>
                    <td>קובע למי יש גישה למה</td>
                  </tr>
                  <tr>
                    <td>Scope Chain</td>
                    <td>שרשרת כל התחומים העוטפים</td>
                    <td>משמש למציאת משתנים חיצוניים</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>שימוש במשתנה שלא הוגדר בכלל (ReferenceError)</li>
              <li>הנחה שפונקציה יכולה לגשת למשתנים פנימיים של אחרת</li>
              <li>בלבול בין זמינות משתנה לבין זמני הגדרה (Hoisting)</li>
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
              <li>זכור: אין גישה "פנימה" – רק החוצה</li>
              <li>בדוק את ה־Scope Chain בדיבאגר דרך הלשונית Scope</li>
              <li>הבנת Scope Chain היא בסיס להעמקה ב־Closures</li>
              <li>שימוש נכון ב־let/const מגביל גישה ומונע באגים</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ScopeChainPage;
