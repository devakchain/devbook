import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-1/OperatorsPage.scss";

function OperatorsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arithmeticCode = `let a = 10;
let b = 3;

console.log("Sum:", a + b);         // 13
console.log("Diff:", a - b);        // 7
console.log("Product:", a * b);     // 30
console.log("Quotient:", a / b);    // 3.33...
console.log("Modulo:", a % b);      // 1`;

  const arithmeticResult = `Sum: 13
Diff: 7
Product: 30
Quotient: 3.3333333333333335
Modulo: 1`;

  const logicalCode = `let isAdmin = true;
let isLoggedIn = false;

console.log(isAdmin && isLoggedIn); // false
console.log(isAdmin || isLoggedIn); // true
console.log(!isAdmin);              // false`;

  const logicalResult = `false
true
false`;

  const assignmentCode = `let x = 5;
x += 2; // x = x + 2
x *= 3; // x = x * 3
console.log(x); // 21`;

  const assignmentResult = `21`;

  const comparisonCode = `console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(10 > 7);    // true
console.log(3 <= 2);    // false`;

  const comparisonResult = `true
false
true
false`;

  const specialCode = `let a;
console.log(typeof a);        // "undefined"

let obj = { name: "Sam" };
console.log("name" in obj);   // true

console.log(123 instanceof Number); // false
console.log(new Number(123) instanceof Number); // true`;

  const specialResult = `undefined
true
false
true`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          אופרטורים הם אבני הבניין של פעולות – מתמטיות, לוגיות, תנאיות והקצאה –
          והם כלי בסיסי לכל ביטוי ב-JavaScript.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Operators – אופרטורים</h1>

          {/* הסבר כולל */}
          <section className="explanation rtl">
            <h2>🧠 מהו אופרטור?</h2>
            <p>
              אופרטור הוא סמל שמבצע פעולה על ערכים או משתנים. JavaScript תומכת
              במגוון אופרטורים שונים – כל אחד מתאים לסוג פעולה אחר.
            </p>

            <h2>📌 הסוגים העיקריים:</h2>
            <ul>
              <li>
                <strong>Arithmetic</strong> – <code>+</code>, <code>-</code>,{" "}
                <code>*</code>, <code>/</code>, <code>%</code>
              </li>
              <li>
                <strong>Assignment</strong> – <code>=</code>, <code>+=</code>,{" "}
                <code>-=</code>, <code>*=</code>
              </li>
              <li>
                <strong>Comparison</strong> – <code>==</code>, <code>===</code>,{" "}
                <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>
              </li>
              <li>
                <strong>Logical</strong> – <code>&&</code>, <code>||</code>,{" "}
                <code>!</code>
              </li>
              <li>
                <strong>Type/Identity</strong> – <code>typeof</code>,{" "}
                <code>instanceof</code>
              </li>
              <li>
                <strong>Membership</strong> – <code>in</code>,{" "}
                <code>delete</code>
              </li>
              <li>
                <strong>Nullish</strong> – <code>??</code> (ברירת מחדל אם ערך
                null/undefined)
              </li>
            </ul>
          </section>

          {/* Arithmetic */}
          <section className="code-demo">
            <h2 className="">➕ Arithmetic Operators</h2>
            <CodeBlock code={arithmeticCode} language="javascript" />
            <LiveOutput result={arithmeticResult} />
          </section>

          {/* Assignment */}
          <section className="code-demo">
            <h2>📝 Assignment Operators</h2>
            <CodeBlock code={assignmentCode} language="javascript" />
            <LiveOutput result={assignmentResult} />
          </section>

          {/* Logical */}
          <section className="code-demo">
            <h2>🔀 Logical Operators</h2>
            <CodeBlock code={logicalCode} language="javascript" />
            <LiveOutput result={logicalResult} />
          </section>

          {/* Comparison */}
          <section className="code-demo">
            <h2>🔎 Comparison Operators</h2>
            <CodeBlock code={comparisonCode} language="javascript" />
            <LiveOutput result={comparisonResult} />
          </section>

          {/* Special Operators */}
          <section className="code-demo">
            <h2>🧪 Special Operators – typeof, in, instanceof</h2>
            <CodeBlock code={specialCode} language="javascript" />
            <LiveOutput result={specialResult} />
          </section>

          {/* טיפים */}
          <section className="note rtl">
            <h2>💡 טיפים חשובים:</h2>
            <ul>
              <li>
                <code>==</code> מבצע coercion – הימנע ממנו, העדף תמיד{" "}
                <code>===</code>
              </li>
              <li>
                <code>typeof null === "object"</code> – זו טעות היסטורית בשפה
              </li>
              <li>
                השתמש ב־<code>??</code> במקום <code>||</code> כשאתה רוצה ערך
                ברירת מחדל רק עבור null/undefined
              </li>
              <li>
                <code>instanceof</code> עובד רק עם אובייקטים שנוצרו עם{" "}
                <code>new</code>
              </li>
              <li>תמיד ודא שהשימוש באופרטורים לוגיים לא מחביא שגיאות לוגיקה</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OperatorsPage;
