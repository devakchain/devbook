import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/ObjectUtilitiesPage.scss";

function ObjectUtilitiesPage() {
  const navigate = useNavigate();

  const code = `const user = {
  name: "Alice",
  age: 28,
  job: "Developer"
};

// Object.keys
const keys = Object.keys(user);

// Object.values
const values = Object.values(user);

// Object.entries
const entries = Object.entries(user);

// hasOwnProperty
const hasAge = user.hasOwnProperty("age");
const hasSalary = user.hasOwnProperty("salary");`;

  const result = `keys: ["name", "age", "job"]
values: ["Alice", 28, "Developer"]
entries: [["name", "Alice"], ["age", 28], ["job", "Developer"]]
hasAge: true
hasSalary: false`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Object Utilities הן פונקציות עזר שמובנות ב-JavaScript ומיועדות לשליפת
          מידע מתוך אובייקטים בצורה קלה, ברורה וחזקה. הן כלי מפתח בכל ניתוח,
          מיפוי או טרנספורמציה של נתונים מורכבים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Object Utilities – כלי עזר לאובייקטים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה הן Object Utilities?</h2>
            <p>
              אלה מתודות שמובנות ב-Object ומאפשרות לנו לשלוף מידע מתוך מבנה
              האובייקט – בין אם זה המפתחות (keys), הערכים (values), או זוגות
              key-value (entries).
            </p>

            <h2>🛠 כלים עיקריים</h2>
            <ul>
              <li>
                <code>Object.keys(obj)</code> – מחזירה מערך של כל המפתחות
              </li>
              <li>
                <code>Object.values(obj)</code> – מחזירה מערך של כל הערכים
              </li>
              <li>
                <code>Object.entries(obj)</code> – מחזירה מערך של זוגות [key,
                value]
              </li>
              <li>
                <code>obj.hasOwnProperty(key)</code> – בודקת אם לאובייקט יש מפתח
                מסוים (ישירות ולא בירושה)
              </li>
            </ul>

            <h2>📊 טבלת השוואה</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>מתודה</th>
                    <th>פלט</th>
                    <th>שימושים נפוצים</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Object.keys</td>
                    <td>['key1', 'key2']</td>
                    <td>לולאות, בדיקות קיום</td>
                  </tr>
                  <tr>
                    <td>Object.values</td>
                    <td>['value1', 'value2']</td>
                    <td>השוואות, הצגת ערכים</td>
                  </tr>
                  <tr>
                    <td>Object.entries</td>
                    <td>[[key, value], ...]</td>
                    <td>map, forEach, המרה למבנים אחרים</td>
                  </tr>
                  <tr>
                    <td>hasOwnProperty</td>
                    <td>true / false</td>
                    <td>בדיקת בטיחות למפתחות</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>
                שימוש ב-<code>for..in</code> בלי בדיקת{" "}
                <code>hasOwnProperty</code> – עלול לכלול מפתחות בירושה
              </li>
              <li>
                הנחה ש-<code>Object.keys</code> מחזירה גם מפתחות של properties
                סימבוליים – לא נכון
              </li>
              <li>
                שכחה שהסדר של <code>Object.entries</code> לא תמיד מובטח
                באובייקטים מורכבים
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
              <li>
                שלב <code>Object.entries</code> עם <code>reduce</code> כדי להפוך
                אובייקטים
              </li>
              <li>
                במקום לבדוק עם <code>in</code> – השתמש ב-
                <code>hasOwnProperty</code> כדי להימנע ממפתחות בירושה
              </li>
              <li>
                תוכל להשתמש ב-<code>Object.fromEntries()</code> כדי לבנות
                אובייקט חדש מזוגות
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ObjectUtilitiesPage;
