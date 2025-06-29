import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/SetsPage.scss";

function SetsPage() {
  const navigate = useNavigate();

  const code = `const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(2); // לא יתווסף - כפול

console.log(numbers.has(2)); // true
numbers.delete(3);

for (const num of numbers) {
  console.log(num);
}`;

  const result = `true
1
2`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          אובייקט <code>Set</code> ב-JavaScript הוא מבנה נתונים ייחודי שמכיל
          ערכים שאינם כפולים. הוא אידיאלי למצבים שבהם נדרשת בדיקת ייחודיות
          מהירה.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Sets – מבנה נתונים ללא כפילויות</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Set?</h2>
            <p>
              Set הוא קולקציה של ערכים ייחודיים בלבד. כלומר, לא ניתן להוסיף אותו
              ערך פעמיים. הוא דינמי, ניתן להוספה, מחיקה ולולאה, אך אינו מאפשר
              גישה לפי אינדקס.
            </p>
            <ul>
              <li>שימושי מאוד לניקוי מערכים מכפילויות</li>
              <li>
                מהיר מאוד לבדיקת קיום ערך באמצעות <code>has()</code>
              </li>
              <li>
                תומך באיטרציה עם <code>for...of</code> או <code>forEach()</code>
              </li>
            </ul>

            <h2>📌 מתודות שימושיות</h2>
            <ul>
              <li>
                <code>add(value)</code> – מוסיף ערך אם אינו קיים
              </li>
              <li>
                <code>has(value)</code> – מחזיר true אם הערך קיים
              </li>
              <li>
                <code>delete(value)</code> – מוחק ערך קיים
              </li>
              <li>
                <code>clear()</code> – מוחק את כל הערכים
              </li>
              <li>
                <code>size</code> – מחזיר את מספר הערכים
              </li>
            </ul>

            <h2>⚠️ מגבלות וטעויות נפוצות</h2>
            <ul>
              <li>
                אין גישה לפי אינדקס (<code>set[0]</code> לא יעבוד)
              </li>
              <li>לא ניתן לאחזר ערך מסוים לפי מיקום</li>
              <li>
                Set שונה ממערך: לא תומך ב-<code>map</code>, <code>filter</code>{" "}
                וכו' ישירות
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
            <h2>💡 טיפים מתקדמים</h2>
            <ul>
              <li>
                להמיר מערך לסט: <code>const unique = new Set(array)</code>
              </li>
              <li>
                להחזיר מערך ייחודי: <code>[...new Set(array)]</code>
              </li>
              <li>אפשר לאחסן גם אובייקטים, פונקציות וסטרינגים</li>
              <li>מתאים לבדיקת קיום ביעילות O(1)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SetsPage;
