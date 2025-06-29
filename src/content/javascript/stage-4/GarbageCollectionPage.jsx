import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/GarbageCollectionPage.scss";

function GarbageCollectionPage() {
  const navigate = useNavigate();

  const code = `let user = {
  name: "Alice",
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  },
};

user.greet(); // בשלב זה האובייקט בשימוש

user = null; // רפרנס הוסר - האובייקט ייאסף ע"י ה-GC אם אין רפרנס נוסף`;

  const result = `Hello, my name is Alice`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          מנגנון ה-Garbage Collection בג'אווהסקריפט אחראי על ניקוי זיכרון
          אוטומטי – הוא מזהה מתי אין יותר רפרנס לאובייקט ומוחק אותו מה-Heap כדי
          לפנות מקום.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Garbage Collection – איסוף זיכרון</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 איך זה עובד?</h2>
            <p>
              ג'אווהסקריפט משתמשת באלגוריתם בשם <strong>Mark-and-Sweep</strong>:
            </p>
            <ul>
              <li>GC מתחיל מה-Root (כמו window, stack)</li>
              <li>מסמן את כל האובייקטים שניתן להגיע אליהם</li>
              <li>כל אובייקט שלא סומן – נמחק</li>
            </ul>

            <h2>🧪 דוגמה:</h2>
            <p>
              אם משתנה כבר לא מצביע לאובייקט כלשהו – אין דרך להגיע אליו, ולכן
              הוא ייאסף:
            </p>
            <CodeBlock
              code={`let user = { name: "Bob" };
user = null; // האובייקט הקודם כבר לא נגיש`}
              language="javascript"
            />

            <h2>📊 טבלת השוואה – גישות נפוצות</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>בעיה</th>
                    <th>גורם לזליגה</th>
                    <th>פתרון</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Event Listeners לא מוסרים</td>
                    <td>רפרנס נשמר בזיכרון</td>
                    <td>להסיר עם removeEventListener</td>
                  </tr>
                  <tr>
                    <td>Closure עם משתנים לא בשימוש</td>
                    <td>ה-GC לא מזהה שאינם דרושים</td>
                    <td>להימנע מיצירת סגירות עמוקות</td>
                  </tr>
                  <tr>
                    <td>מערכים/Maps שגדלים ללא ניקוי</td>
                    <td>אחסון ערכים מיותרים</td>
                    <td>לנקות באופן יזום</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ דגשים חשובים</h2>
            <ul>
              <li>ה-GC רץ ברקע ואינו מיידי – תזמון לא צפוי</li>
              <li>אין שליטה ישירה עליו, אבל יש אמצעים לעזור לו</li>
              <li>משפיע משמעותית על ביצועים – זליגת זיכרון = האטה</li>
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
            <h2>💡 טיפים מתקדמים</h2>
            <ul>
              <li>השתמש ב-WeakMap/WeakSet לאחסון זמני</li>
              <li>בצע ניטור דרך Performance Memory ב־DevTools</li>
              <li>הימנע מהגדרות גלובליות מיותרות</li>
              <li>קצר מחזורי חיים של אובייקטים שאינם נחוצים</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GarbageCollectionPage;
