import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/ObjectsPage.scss";

function ObjectsPage() {
  const navigate = useNavigate();

  const code = `const person = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
    city: "New York",
    zip: 10001,
  },
};

// קריאה
console.log(person.name);

// עדכון
person.age = 31;

// הוספה
person.email = "john@example.com";

// מחיקה
delete person.isStudent;

// Object Utilities
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("age"));

// העתקות
const shallowCopy = Object.assign({}, person);
const deepCopy = structuredClone(person);

console.log(shallowCopy);
console.log(deepCopy);`;

  const result = `John
31
["name", "age", "address", "email"]
["John", 31, { city: "New York", zip: 10001 }, "john@example.com"]
[["name", "John"], ["age", 31], ["address", { city: "New York", zip: 10001 }], ["email", "john@example.com"]]
true
{ name: "John", age: 31, address: { city: "New York", zip: 10001 }, email: "john@example.com" }
{ name: "John", age: 31, address: { city: "New York", zip: 10001 }, email: "john@example.com" }`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          אובייקטים הם אחת ממבני הנתונים המרכזיים ב-JavaScript. הם מאפשרים לשמור
          מידע במבנה של key:value, וניתן לגשת, לעדכן, למחוק ולהרחיב אותם בצורה
          גמישה במיוחד.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Objects – אובייקטים ב-JavaScript</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>📦 מה זה Object?</h2>
            <p>
              אובייקט הוא מבנה נתונים המכיל זוגות של key:value. ניתן לאחסן בו כל
              סוג של ערך: מספרים, מחרוזות, בוליאנים, מערכים, פונקציות ואובייקטים
              אחרים.
            </p>
            <ul>
              <li>מאפשר ארגון מידע בצורה היררכית</li>
              <li>גישה נוחה לערכים באמצעות dot או brackets</li>
              <li>מאפשר הרחבה, מחיקה וניתוח דינמי של מבנה הנתונים</li>
            </ul>

            <h2>🛠 שימושים נפוצים</h2>
            <ul>
              <li>שמירת מידע על ישות אחת (משתמש, מוצר, אירוע)</li>
              <li>שימוש כאובייקט קונפיגורציה</li>
              <li>בנייה של JSON לתקשורת בין לקוח לשרת</li>
            </ul>

            <h2>🧰 מתודות שימושיות</h2>
            <ul>
              <li>
                <code>Object.keys(obj)</code> – מחזירה מערך של כל המפתחות
              </li>
              <li>
                <code>Object.values(obj)</code> – מחזירה את הערכים
              </li>
              <li>
                <code>Object.entries(obj)</code> – מחזירה זוגות key-value
              </li>
              <li>
                <code>hasOwnProperty()</code> – בודקת אם מפתח שייך ישירות
                לאובייקט
              </li>
            </ul>

            <h2>📤 העתקת אובייקטים</h2>
            <ul>
              <li>
                <code>Object.assign({}, obj)</code> – העתקה רדודה (shallow)
              </li>
              <li>
                <code>structuredClone(obj)</code> – העתקה עמוקה (deep copy)
              </li>
              <li>
                או שימוש ב-<code>JSON.parse(JSON.stringify(obj))</code> (לא
                מתאים לפונקציות)
              </li>
            </ul>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>שכחת להשתמש ב-brackets כשצריך (למשל עם מפתח דינמי)</li>
              <li>הנחה שהעתקה יוצרת אובייקט עצמאי (לרוב זה רק העתקת הפניה)</li>
              <li>גישה למפתחות לא קיימים שמחזירה undefined</li>
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
              <li>
                השתמש ב־<code>Object.entries()</code> עם <code>forEach</code>{" "}
                כדי לאתר ולנתח ערכים דינמית
              </li>
              <li>
                הכן קונסטרוקטור (function או class) אם אתה צריך הרבה אובייקטים
                דומים
              </li>
              <li>
                אפשר להשתמש ב־<code>Object.freeze(obj)</code> כדי למנוע שינויים
              </li>
              <li>זכור: אובייקטים מושווים לפי רפרנס, לא לפי ערך</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ObjectsPage;
