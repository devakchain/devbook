import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/ArraysPage.scss";

function ArraysPage() {
  const navigate = useNavigate();

  const code = `const fruits = ["🍎", "🍌", "🍇"];

// קריאה לפי אינדקס
console.log(fruits[1]);

// עדכון
fruits[1] = "🥝";

// הוספה לסוף ולתחילה
fruits.push("🍍");
fruits.unshift("🍓");

// הסרה
fruits.pop();
fruits.shift();

// בדיקה
console.log(fruits.includes("🍇"));

// חיבור מערכים
const moreFruits = ["🍑", "🍒"];
const allFruits = fruits.concat(moreFruits);

// חיתוך
const sliced = allFruits.slice(1, 3);

console.log("fruits:", fruits);
console.log("allFruits:", allFruits);
console.log("sliced:", sliced);`;

  const result = `🥝
true
fruits: ["🥝", "🍇"]
allFruits: ["🥝", "🍇", "🍑", "🍒"]
sliced: ["🍇", "🍑"]`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          מערכים (Arrays) הם מבני נתונים יסודיים ב-JavaScript שמאפשרים לאחסן
          רשימות של ערכים. בעזרת מתודות מתקדמות ניתן לבצע עיבוד, סינון, חיפוש,
          שינוי ועוד.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Arrays – מערכים ב-JavaScript</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>📦 מה זה Array?</h2>
            <p>
              Array הוא אובייקט מובנה ב-JavaScript שמכיל אוסף של ערכים מסודרים
              לפי אינדקס. הערכים יכולים להיות מכל סוג: מספרים, מחרוזות,
              אובייקטים, פונקציות ועוד.
            </p>

            <h2>🔁 שיטות עבודה נפוצות</h2>
            <ul>
              <li>
                גישה לפי אינדקס – <code>arr[0]</code>
              </li>
              <li>
                עדכון ערך – <code>arr[1] = ...</code>
              </li>
              <li>
                אורך מערך – <code>arr.length</code>
              </li>
              <li>
                לולאות – <code>for</code>, <code>for...of</code>,{" "}
                <code>forEach</code>
              </li>
            </ul>

            <h2>📚 מתודות שימושיות</h2>
            <ul>
              <li>
                <strong>Mutation:</strong> <code>push</code>, <code>pop</code>,{" "}
                <code>shift</code>, <code>unshift</code>, <code>splice</code>,{" "}
                <code>sort</code>, <code>reverse</code>
              </li>
              <li>
                <strong>Non-Mutating:</strong> <code>slice</code>,{" "}
                <code>concat</code>, <code>includes</code>, <code>indexOf</code>
                , <code>join</code>, <code>flat</code>, <code>flatMap</code>
              </li>
              <li>
                <strong>Iteration:</strong> <code>map</code>,{" "}
                <code>filter</code>, <code>reduce</code>, <code>find</code>,{" "}
                <code>some</code>, <code>every</code>
              </li>
            </ul>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>
                שימוש ב-<code>splice</code> במקום <code>slice</code> בטעות –
                הראשון משנה את המערך
              </li>
              <li>שכחת שהשוואה של מערכים היא לפי רפרנס ולא ערכים</li>
              <li>
                שימוש ב-<code>map</code> מבלי להחזיר ערך בפונקציה
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
                העדף שימוש ב-<code>map</code>/<code>filter</code> על פני{" "}
                <code>for</code> רגיל – לקוד פונקציונלי
              </li>
              <li>
                אם אתה צריך deep clone של מערך – השתמש ב-
                <code>structuredClone</code> או <code>JSON</code>
              </li>
              <li>
                השתמש ב-<code>Array.from()</code> או{" "}
                <code>new Array(length).fill()</code> לבנייה חכמה
              </li>
              <li>
                ניתן להשתמש ב-<code>reduce</code> כתחליף ל
                <code>map + filter</code> בשלב אחד
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ArraysPage;
