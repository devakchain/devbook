import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/NonMutatingMethodsPage.scss";

function NonMutatingMethodsPage() {
  const navigate = useNavigate();

  const code = `const numbers = [1, 2, 3, 4];

// slice - חיתוך ללא שינוי המקור
const sliced = numbers.slice(1, 3);

// concat - חיבור מערכים
const combined = numbers.concat([5, 6]);

// includes - בדיקת קיום
const hasThree = numbers.includes(3);

// indexOf - מיקום איבר
const index = numbers.indexOf(2);

// join - מחרוזת ממערך
const joined = numbers.join("-");

// flat - השטחה של מערך מקונן
const nested = [1, [2, 3], [4, [5]]];
const flattened = nested.flat(2);

// flatMap - שילוב map + flat
const doubled = numbers.flatMap(n => [n, n * 2]);

console.log("sliced:", sliced);
console.log("combined:", combined);
console.log("hasThree:", hasThree);
console.log("index:", index);
console.log("joined:", joined);
console.log("flattened:", flattened);
console.log("doubled:", doubled);`;

  const result = `sliced: [2, 3]
combined: [1, 2, 3, 4, 5, 6]
hasThree: true
index: 1
joined: 1-2-3-4
flattened: [1, 2, 3, 4, 5]
doubled: [1, 2, 2, 4, 3, 6, 4, 8]`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          מתודות שאינן משנות את המערך המקורי (Non-Mutating) מאפשרות לעבוד בבטחה
          עם מבני נתונים ולשמור על גישה פונקציונלית ונקייה.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">
            Non-Mutating Methods – עבודה בטוחה עם מערכים
          </h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 למה להשתמש ב-Non-Mutating?</h2>
            <p>
              כשעובדים עם מערכים – במיוחד ב-React או Redux – חשוב להימנע
              משינויים ישירים (Mutation). במקום זה, משתמשים במתודות שמחזירות
              עותק חדש.
            </p>

            <h2>🛠 מתודות עיקריות</h2>
            <ul>
              <li>
                <code>slice()</code> – חותך חלקים מהמערך
              </li>
              <li>
                <code>concat()</code> – מחבר מערכים
              </li>
              <li>
                <code>includes()</code> – בודק אם ערך קיים
              </li>
              <li>
                <code>indexOf()</code> – מוצא מיקום של ערך
              </li>
              <li>
                <code>join()</code> – מחבר איברים למחרוזת
              </li>
              <li>
                <code>flat()</code> – משטח מערכים מקוננים
              </li>
              <li>
                <code>flatMap()</code> – מבצע map ואז flat
              </li>
            </ul>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>
                שימוש ב-<code>slice()</code> במקום <code>splice()</code> או
                להיפך
              </li>
              <li>
                שכחה ש-<code>indexOf</code> מחזיר -1 אם לא נמצא
              </li>
              <li>
                בלבול בין <code>flat()</code> לרמות קינון (צריך depth)
              </li>
              <li>
                <code>flatMap()</code> פועל רק על מערכים ולא על אובייקטים
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
              <li>עדיף תמיד להתחיל ממתודות non-mutating כדי לשמור על יציבות</li>
              <li>
                ב-Redux חובה להימנע ממוטציות – כל שינוי חייב להיות באמצעות עותק
              </li>
              <li>
                שילוב של <code>slice</code> + <code>concat</code> יוצר תחליף ל-
                <code>splice</code> ללא שינוי המקור
              </li>
              <li>
                אם אתה לא בטוח אם פעולה משנה – קרא בתיעוד או הדפס את המקור
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NonMutatingMethodsPage;
