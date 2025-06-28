import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/IIFEPage.scss";

function IIFEPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const code = `// Immediately Invoked Function Expression (IIFE)
(function () {
  const message = "📢 This runs immediately!";
  console.log(message);
})();`;

  const result = `📢 This runs immediately!`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          IIFE – Immediately Invoked Function Expression – היא פונקציה שמריצה את
          עצמה מיד לאחר שהיא מוגדרת. זהו כלי עוצמתי להפרדה לוגית, הגנה על
          משתנים, ושליטה בטווחים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">IIFE – פונקציה שמופעלת מיד</h1>

          <section className="explanation rtl">
            <h2>🧠 מה זה IIFE?</h2>
            <p>
              IIFE היא פונקציית JavaScript שנכתבת בתוך סוגריים ומופעלת מיד. היא
              עוזרת לשמור על משתנים פרטיים ולהימנע מזיהום ה-scope הגלובלי.
            </p>
            <ul>
              <li>שימוש נפוץ ליצירת scope מבודד</li>
              <li>מונעת התנגשויות עם משתנים אחרים</li>
              <li>משמשת כבסיס למודולים ישנים לפני ES6</li>
            </ul>

            <h2>📊 מתי נשתמש ב-IIFE?</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>שימוש</th>
                    <th>למה?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Scope מבודד</td>
                    <td>להימנע מזיהום ה-scope הגלובלי</td>
                  </tr>
                  <tr>
                    <td>הגנה על משתנים</td>
                    <td>משתנים בתוך IIFE אינם נגישים מבחוץ</td>
                  </tr>
                  <tr>
                    <td>הרצה מיידית</td>
                    <td>יש צורך בפונקציה שתופעל מיד עם טעינת הסקריפט</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>שכחת סוגריים מסביב להגדרת הפונקציה</li>
              <li>שימוש מיותר ב-IIFE כשאין צורך אמיתי בהרצה מיידית</li>
              <li>יצירת קוד לא קריא עם שימוש יתר</li>
            </ul>
          </section>

          <section className="code-demo">
            <h2>🧪 דוגמת קוד מלאה</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          <section className="note rtl">
            <h2>💡 טיפים מקצועיים</h2>
            <ul>
              <li>השתמש ב-IIFE כשאתה צריך encapsulation מיידי</li>
              <li>בשילוב עם closures ניתן לבנות מודולים פרטיים</li>
              <li>
                אם אתה ב-ES6 ומעלה – שקול שימוש ב-block scopes (let/const)
              </li>
              <li>מנע עומס קוד: אל תשתמש ב-IIFE סתם בשביל "שיהיה"</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default IIFEPage;
