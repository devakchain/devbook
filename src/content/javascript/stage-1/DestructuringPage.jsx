import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-1/DestructuringPage.scss";

function DestructuringPage() {
  const navigate = useNavigate();

  const code = `// 📦 Object Destructuring
const user = {
  name: "Samuel",
  age: 30,
  country: "Israel",
  hobbies: ["coding", "reading"],
};

// חילוץ רגיל
const { name, age } = user;
console.log("Name:", name);
console.log("Age:", age);

// חילוץ עם שינוי שם משתנה
const { country: location } = user;
console.log("Location:", location);

// ברירת מחדל
const { gender = "Not specified" } = user;
console.log("Gender:", gender);

// 📦 Nested Object Destructuring
const person = {
  id: 1,
  info: {
    email: "samuel@example.com",
    phone: "123-456",
  },
};

const {
  info: { email },
} = person;
console.log("Email:", email);

// 📦 Array Destructuring
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, , thirdColor] = colors;
console.log("First Color:", firstColor);
console.log("Third Color:", thirdColor);

// 📦 Function Parameter Destructuring
function printUser({ name, age }) {
  console.log(\`User: \${name}, Age: \${age}\`);
}
printUser(user);`;

  const result = `Name: Samuel
Age: 30
Location: Israel
Gender: Not specified
Email: samuel@example.com
First Color: red
Third Color: blue
User: Samuel, Age: 30`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Destructuring היא טכניקה מתקדמת שמאפשרת לחלץ ערכים מתוך אובייקטים
          ומערכים בצורה אלגנטית, ברורה ותחזוקתית יותר.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Destructuring – חילוץ ערכים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Destructuring?</h2>
            <p>
              Destructuring הוא תחביר ב־JavaScript שמאפשר לחלץ ערכים מתוך
              אובייקטים או מערכים ישירות לתוך משתנים. זה הופך קוד מ־verbose
              לקצר, ברור ויעיל.
            </p>

            <h2>📌 סוגי Destructuring:</h2>
            <ul>
              <li>
                <strong>Object Destructuring</strong>: לפי שמות מפתחות
              </li>
              <li>
                <strong>Array Destructuring</strong>: לפי מיקום אינדקס
              </li>
              <li>
                <strong>Nested Destructuring</strong>: מתוך מבנים פנימיים
              </li>
              <li>
                <strong>Function Parameters</strong>: חילוץ ישיר בפרמטרים
              </li>
              <li>
                <strong>Renaming</strong>: שינוי שם משתנה בעת חילוץ
              </li>
              <li>
                <strong>Default Values</strong>: קביעת ערכים כאשר אין נתונים
              </li>
            </ul>
          </section>

          {/* קוד ודוגמאות */}
          <section className="code-demo">
            <h2 className="rtl">🧪 דוגמת קוד חיה</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          {/* השוואה מול גישה מסורתית */}
          <section className="comparison rtl">
            <h2>📊 השוואה מול גישה מסורתית</h2>
            <table>
              <thead>
                <tr>
                  <th>גישה</th>
                  <th>דוגמה</th>
                  <th>יתרונות</th>
                  <th>חסרונות</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>גישה רגילה</td>
                  <td>
                    <code>const name = user.name;</code>
                  </td>
                  <td>ברורה, מסורתית</td>
                  <td>חוזרת על עצמה, לא קריאה במבנים מורכבים</td>
                </tr>
                <tr>
                  <td>Destructuring</td>
                  <td>
                    <code>const {name} = user;</code>
                  </td>
                  <td>תמציתית, קריאה, מודרנית</td>
                  <td>דורשת זהות שמות</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* טיפים מתקדמים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים:</h2>
            <ul>
              <li>
                ב־Object Destructuring – השמות חייבים להתאים בדיוק לשמות במקור
              </li>
              <li>
                אפשר להחיל ערך ברירת מחדל <code>{`{ a = 1 }`}</code> כדי למנוע
                undefined
              </li>
              <li>
                ניתן לשלב Destructuring בתוך לולאות, return של פונקציות או בתוך
                setState ב-React
              </li>
              <li>
                שימוש ב־Destructuring בתוך פרמטרים שומר על פונקציות קצרות ונקיות
              </li>
              <li>מומלץ להשתמש ב־Destructuring גם עבור React Props</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DestructuringPage;
