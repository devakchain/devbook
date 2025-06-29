import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/ShallowDeepCopyPage.scss";

function ShallowDeepCopyPage() {
  const navigate = useNavigate();

  const code = `const original = {
  name: "Dana",
  preferences: {
    theme: "dark",
    language: "he"
  }
};

// Shallow Copy
const shallow = Object.assign({}, original);
shallow.preferences.theme = "light";

// Deep Copy
const deep = structuredClone(original);
deep.preferences.language = "en";

console.log("original:", original);
console.log("shallow:", shallow);
console.log("deep:", deep);`;

  const result = `original: { name: "Dana", preferences: { theme: "light", language: "he" } }
shallow: { name: "Dana", preferences: { theme: "light", language: "he" } }
deep: { name: "Dana", preferences: { theme: "light", language: "en" } }`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          העתקת אובייקטים ב-JavaScript יכולה להיות שטחית (Shallow) או עמוקה
          (Deep). הבנה של ההבדלים ביניהן קריטית כאשר עובדים עם מבני נתונים
          מקוננים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">
            Shallow vs Deep Copy – העתקות ב-JavaScript
          </h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Shallow Copy?</h2>
            <p>
              העתקה שטחית מעתיקה רק את השכבה העליונה של האובייקט. אם יש בו
              אובייקטים פנימיים, הם לא מועתקים – אלא נשתמרת הפניה אליהם.
            </p>

            <h2>🔁 מה זה Deep Copy?</h2>
            <p>
              העתקה עמוקה יוצרת עותק עצמאי לגמרי, כולל כל רמות הניקוד – כך
              שהשינויים לא משפיעים על המקור.
            </p>

            <h2>⚖️ טבלת השוואה</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>סוג</th>
                    <th>מה מועתק?</th>
                    <th>השפעה על מקוננים</th>
                    <th>שיטות נפוצות</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shallow Copy</td>
                    <td>שכבה ראשונה בלבד</td>
                    <td>משותף – שינוי ישפיע על המקור</td>
                    <td>Object.assign, Spread {"..."}</td>
                  </tr>
                  <tr>
                    <td>Deep Copy</td>
                    <td>העתקה מלאה, כולל עומק</td>
                    <td>עצמאי – אין קשר למקור</td>
                    <td>structuredClone, JSON.parse(JSON.stringify(...))</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>הנחה ש-Object.assign או Spread יעתיקו לעומק – הם לא!</li>
              <li>
                שימוש ב-JSON.stringify באובייקט עם פונקציות או ערכים מיוחדים –
                יאבד אותם
              </li>
              <li>שכחת לבדוק אם הדפדפן תומך ב-structuredClone</li>
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
                אם יש לך רק אובייקט שטוח – Object.assign או spread זה מספיק
              </li>
              <li>
                במבנים מורכבים – השתמש תמיד ב־structuredClone או ספריות כמו
                lodash.cloneDeep
              </li>
              <li>
                לעתים עדיף לא להעתיק אלא לנהל immutable state (כמו ב־Redux)
              </li>
              <li>אם אתה משתמש ב־class – ודא שאתה יוצר copy דרך constructor</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShallowDeepCopyPage;
