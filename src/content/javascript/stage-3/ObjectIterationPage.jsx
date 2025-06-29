import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/ObjectIterationPage.scss";

function ObjectIterationPage() {
  const navigate = useNavigate();

  const code = `const person = {
  name: "Alice",
  age: 30,
  profession: "Engineer"
};

console.log("🔁 Using for...in:");
for (let key in person) {
  console.log(key + ":", person[key]);
}

console.log("🔑 Using Object.keys():");
Object.keys(person).forEach(key => {
  console.log(key + ":", person[key]);
});

console.log("📦 Using Object.entries():");
for (const [key, value] of Object.entries(person)) {
  console.log(key + ":", value);
}`;

  const result = `🔁 Using for...in:
name: Alice
age: 30
profession: Engineer

🔑 Using Object.keys():
name: Alice
age: 30
profession: Engineer

📦 Using Object.entries():
name: Alice
age: 30
profession: Engineer`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Object Iteration ב־JavaScript הוא תהליך שבו עוברים על זוגות המפתחות
          והערכים של אובייקטים. חשוב לדעת איך לבחור בין השיטות השונות לכל שימוש.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Object Iteration – מעבר על אובייקטים</h1>

          <section className="explanation rtl">
            <h2>🧠 שיטות נפוצות ל־Iteration:</h2>
            <ul>
              <li>
                <strong>for...in:</strong> עובר על כל המפתחות (כולל תורשתיים)
              </li>
              <li>
                <strong>Object.keys():</strong> מחזיר מערך של מפתחות בלבד
              </li>
              <li>
                <strong>Object.values():</strong> מחזיר מערך של ערכים בלבד
              </li>
              <li>
                <strong>Object.entries():</strong> מחזיר מערך של זוגות [key,
                value]
              </li>
            </ul>

            <h2>⚠️ דגשים מקצועיים</h2>
            <ul>
              <li>
                העדף Object.keys/entries על פני for...in כדי להימנע ממפתחות
                בירושה
              </li>
              <li>
                שימוש ב־for...in מתאים רק כשאתה שולט על מבנה האובייקט לחלוטין
              </li>
              <li>השתמש ב־Object.entries עבור destructuring נוח בלולאה</li>
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
              <li>Object.entries שימושית במיוחד כשרוצים גם key וגם value</li>
              <li>
                אם יש צורך גם במפתח וגם בערך – entries היא הבחירה הכי נוחה
              </li>
              <li>שקול להוסיף בדיקה עם hasOwnProperty בתוך לולאת for...in</li>
              <li>
                כשמתמודדים עם ערכים דינאמיים – entries יחד עם destructuring מקנה
                קוד קריא מאוד
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ObjectIterationPage;
