import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/ArrayIterationPage.scss";

function ArrayIterationPage() {
  const navigate = useNavigate();

  const code = `const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 22 }
];

// 1. forEach
users.forEach(user => console.log("👤", user.name));

// 2. map
const names = users.map(user => user.name);

// 3. filter
const adults = users.filter(user => user.age >= 30);

// 4. find
const foundUser = users.find(user => user.name === "Bob");

// 5. some
const hasTeen = users.some(user => user.age < 20);

// 6. every
const allAdults = users.every(user => user.age >= 18);

// 7. reduce
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

console.log("📝 names:", names);
console.log("🧓 adults:", adults);
console.log("🔍 foundUser:", foundUser);
console.log("🧒 hasTeen:", hasTeen);
console.log("✅ allAdults:", allAdults);
console.log("📊 totalAge:", totalAge);`;

  const result = `👤 Alice
👤 Bob
👤 Charlie
📝 names: ["Alice", "Bob", "Charlie"]
🧓 adults: [{ id: 2, name: "Bob", age: 34 }]
🔍 foundUser: { id: 2, name: "Bob", age: 34 }
🧒 hasTeen: false
✅ allAdults: true
📊 totalAge: 84`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          שיטות איטרציה על מערכים הן כלים קריטיים במניפולציה, סינון, עיבוד והצגה
          של מידע בצורה אלגנטית, קריאה ואפקטיבית.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Array Iteration – איטרציה על מערכים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🔁 למה אנחנו צריכים את זה?</h2>
            <p>
              איטרציה על מערכים מאפשרת לנו לבצע פעולה על כל איבר במערך – החל
              מהצגה, חישוב, סינון ועד לצבירה.
            </p>
            <ul>
              <li>
                <strong>forEach</strong> – להרצה עם תופעת לוואי (side effect)
              </li>
              <li>
                <strong>map</strong> – לבניית מערך חדש
              </li>
              <li>
                <strong>filter</strong> – לסינון חלקים מהמערך
              </li>
              <li>
                <strong>find</strong> – למציאת איבר ספציפי
              </li>
              <li>
                <strong>some / every</strong> – לבדיקה לוגית
              </li>
              <li>
                <strong>reduce</strong> – לצבירה לערך בודד
              </li>
            </ul>

            <h2>📊 טבלת השוואה</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>שיטה</th>
                    <th>מה מחזירה?</th>
                    <th>משנה את המקור?</th>
                    <th>שימושים נפוצים</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>forEach</td>
                    <td>undefined</td>
                    <td>לא</td>
                    <td>הרצה עם תופעות לוואי (log, DOM, API)</td>
                  </tr>
                  <tr>
                    <td>map</td>
                    <td>מערך חדש</td>
                    <td>לא</td>
                    <td>שינוי צורת הנתונים</td>
                  </tr>
                  <tr>
                    <td>filter</td>
                    <td>מערך מסונן</td>
                    <td>לא</td>
                    <td>הסרת איברים שלא עומדים בתנאי</td>
                  </tr>
                  <tr>
                    <td>find</td>
                    <td>איבר יחיד</td>
                    <td>לא</td>
                    <td>חיפוש איבר מסוים</td>
                  </tr>
                  <tr>
                    <td>reduce</td>
                    <td>ערך בודד</td>
                    <td>לא</td>
                    <td>חישובים מצטברים</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>שימוש ב-map כשלא צריך את המערך החדש – השתמש ב-forEach</li>
              <li>קריאה ל-reduce בלי ערך התחלה – עלול לגרום לשגיאות</li>
              <li>שכחת return בתוך map / filter</li>
              <li>אי הבנה שהשיטות אינן משנות את המקור</li>
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
              <li>שיטות אלה נחשבות ל־Non-Mutating – הן לא משנות את המקור</li>
              <li>לשיפור ביצועים – השתמש ב־reduce רק כשצריך באמת</li>
              <li>
                העדף שיטות דקלרטיביות (map/filter) על פני לולאות imperatives
              </li>
              <li>שקול להשתמש ב־flatMap לעיבוד ועיבוי מערכים מקוננים</li>
              <li>תמיד בדוק אם הפעולה שלך מחזירה את מה שאתה מצפה</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ArrayIterationPage;
