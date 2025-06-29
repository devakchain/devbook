import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/MapsPage.scss";

function MapsPage() {
  const navigate = useNavigate();

  const code = `const userRoles = new Map();

userRoles.set("alice", "admin");
userRoles.set("bob", "editor");
userRoles.set("charlie", "viewer");

console.log(userRoles.get("alice")); // admin
console.log(userRoles.has("bob")); // true
console.log(userRoles.size); // 3

userRoles.delete("charlie");
console.log(userRoles.has("charlie")); // false

userRoles.forEach((role, user) => {
  console.log('');
});`;

  const result = `admin
true
3
false
alice is a admin
bob is a editor`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Map הוא מבנה נתונים ב-JavaScript שמאפשר לשמור זוגות של מפתח וערך
          <strong> עם סדר שמירה, כל סוג של מפתח ותכונות ייחודיות </strong>.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Maps – זוגות מפתח/ערך מתקדמים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🔎 מה זה Map?</h2>
            <p>
              Map מאפשר שמירה של ערכים עם מפתחות מכל סוג (לא רק string כמו
              ב-Object), ושומר על סדר ההכנסה.
            </p>
            <ul>
              <li>תומך ב־object, function, NaN כמפתחות</li>
              <li>מתאים למקרי שימוש שבהם הסדר חשוב או שהמפתחות אינם מחרוזות</li>
              <li>קל יותר לאיטרציה באמצעות forEach או for..of</li>
            </ul>

            <h2>⚙️ מתודות עיקריות</h2>
            <ul>
              <li>
                <code>set(key, value)</code> – הוספה/עדכון של זוג
              </li>
              <li>
                <code>get(key)</code> – שליפת ערך לפי מפתח
              </li>
              <li>
                <code>has(key)</code> – בדיקה אם קיים מפתח
              </li>
              <li>
                <code>delete(key)</code> – הסרה לפי מפתח
              </li>
              <li>
                <code>clear()</code> – ריקון מלא
              </li>
              <li>
                <code>size</code> – מספר הזוגות
              </li>
            </ul>

            <h2>📊 מתי לבחור Map על פני Object?</h2>
            <table className="table-wrapper">
              <thead>
                <tr>
                  <th>קריטריון</th>
                  <th>Object</th>
                  <th>Map</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>מפתחות מכל סוג</td>
                  <td>לא</td>
                  <td>כן</td>
                </tr>
                <tr>
                  <td>שמירה על סדר</td>
                  <td>לא מובטח</td>
                  <td>כן</td>
                </tr>
                <tr>
                  <td>ביצועים באיטרציה</td>
                  <td>איטי יותר</td>
                  <td>מהיר יותר</td>
                </tr>
              </tbody>
            </table>

            <h2>🚧 טעויות נפוצות</h2>
            <ul>
              <li>
                נסיון להשתמש ב־object כמפתח ב־Object רגיל – יתורגם למחרוזת
              </li>
              <li>
                שכחה של <code>get</code> או <code>set</code> (ולא גישה ישירה כמו
                ב־Object)
              </li>
              <li>
                ב־Map אי אפשר להשתמש בנקודה לגישה למפתח (חובה להשתמש ב־get)
              </li>
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
              <li>אם אתה צריך לשמור מפתחות שהם אובייקטים – תמיד השתמש ב־Map</li>
              <li>
                לצורך מעבר על זוגות – השתמש ב־forEach או ב־for..of עם
                destructuring
              </li>
              <li>
                אפשר להשתמש ב־Map כאופציה פשוטה לאחסון קונפיגורציות, הגדרות או
                מטא־מידע
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MapsPage;
