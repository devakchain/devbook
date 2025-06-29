import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/IterationMethodsPage.scss";

function IterationMethodsPage() {
  const navigate = useNavigate();

  const code = `const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log("🔁", num));

// map
const doubled = numbers.map(num => num * 2);

// filter
const evens = numbers.filter(num => num % 2 === 0);

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);

// find
const firstEven = numbers.find(num => num % 2 === 0);

// some / every
const hasNegative = numbers.some(num => num < 0);
const allPositive = numbers.every(num => num > 0);

console.log("doubled:", doubled);
console.log("evens:", evens);
console.log("sum:", sum);
console.log("firstEven:", firstEven);
console.log("hasNegative:", hasNegative);
console.log("allPositive:", allPositive);`;

  const result = `🔁 1
🔁 2
🔁 3
🔁 4
🔁 5
doubled: [2, 4, 6, 8, 10]
evens: [2, 4]
sum: 15
firstEven: 2
hasNegative: false
allPositive: true`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          מתודות איטרציה מאפשרות לעבור על מערכים ולבצע עיבוד, חיפוש, חיבור או
          סינון בצורה קריאה, מודרנית ויעילה – ללא צורך בלולאות ידניות.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Iteration Methods – מתודות איטרציה</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 למה להשתמש במתודות איטרציה?</h2>
            <p>
              כדי לכתוב קוד מודרני, פונקציונלי ונקי – במקום שימוש ב-for או
              while, נעדיף להשתמש ב־<code>map</code>, <code>filter</code>,{" "}
              <code>reduce</code> וכד'.
            </p>

            <h2>🛠 סקירה של מתודות</h2>
            <ul>
              <li>
                <code>forEach</code> – ביצוע פעולה על כל איבר (לא מחזירה ערך)
              </li>
              <li>
                <code>map</code> – מחזירה מערך חדש לאחר עיבוד
              </li>
              <li>
                <code>filter</code> – מחזירה מערך עם איברים שעברו תנאי
              </li>
              <li>
                <code>reduce</code> – אגרגציה לערך יחיד (למשל סכום, ממוצע וכו')
              </li>
              <li>
                <code>find</code> – מחזירה את האיבר הראשון שתואם לתנאי
              </li>
              <li>
                <code>some</code> – בודקת אם לפחות איבר אחד עונה על תנאי
              </li>
              <li>
                <code>every</code> – בודקת אם כל האיברים עומדים בתנאי
              </li>
            </ul>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>
                שכחת return בתוך <code>map</code>
              </li>
              <li>
                שימוש ב-<code>forEach</code> כשאתה מצפה לקבל מערך חדש
              </li>
              <li>
                ב-<code>reduce</code> – שכחת את הערך ההתחלתי
              </li>
              <li>
                שימוש ב-<code>find</code> כשיש הרבה התאמות – היא מחזירה רק את
                הראשונה
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
                שילוב של <code>filter</code> עם <code>map</code> נפוץ מאוד להצגה
                של תוצאות מעובדות
              </li>
              <li>
                השתמש ב-<code>reduce</code> כדי לבצע גם map וגם sum יחד – לחסוך
                לולאות
              </li>
              <li>
                הפוך תנאים של <code>some</code> / <code>every</code> לבדיקות של
                ולידציה
              </li>
              <li>
                זכור שכל המתודות האלה לא משנות את המערך המקורי (חוץ מ־forEach
                במקרה נדיר)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default IterationMethodsPage;
