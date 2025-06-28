import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-1/TypeConversion.scss";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";

function TypeConversionPage() {
  const navigate = useNavigate();

  const conversionCode = `const num = Number("123");      // 123
const str = String(123);        // "123"
const boolTrue = Boolean(1);    // true
const boolFalse = Boolean(0);   // false
const boolEmpty = Boolean("");  // false`;

  const conversionResult = `123
"123"
true
false
false`;

  const coercionCode = `console.log("5" - 2);     // 3
console.log("5" + 2);     // "52"
console.log("5" * "2");   // 10
console.log(true + 1);    // 2
console.log(false + "3"); // "false3"`;

  const coercionResult = `3
52
10
2
false3`;

  const equalityCode = `console.log("0" == 0);     // true
console.log("0" === 0);    // false
console.log(false == "");  // true
console.log(false === ""); // false`;

  const equalityResult = `true
false
true
false`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ חזרה
        </button>

        <p className="page-subtitle rtl">
          המרות סוג ב-JavaScript קובעות כיצד משתנים מתנהגים בעת השוואות, חישובים
          וקלטים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Type Conversion & Coercion</h1>

          <section className="explanation rtl">
            <h2>🧠 ההבדל בין Conversion ל־Coercion</h2>
            <p>JavaScript כוללת שתי דרכים להמרת סוגי נתונים:</p>
            <ul>
              <li>
                <strong>Type Conversion (Explicit)</strong>: מתבצע ע"י מפתח
                בעזרת פונקציות כמו <code>Number()</code>, <code>String()</code>,{" "}
                <code>Boolean()</code>
              </li>
              <li>
                <strong>Type Coercion (Implicit)</strong>: מתבצע אוטומטית על ידי
                המנוע של JavaScript בעת פעולה בין סוגים שונים
              </li>
            </ul>
          </section>

          <section className="comparison ">
            <h2 className="rtl">🔁 Type Conversion – המרה מפורשת</h2>
            <p className="rtl">
              המפתח מחליט מתי ואיך להמיר סוגי נתונים בעזרת פונקציות מובנות.
            </p>

            <CodeBlock code={conversionCode} language="javascript" />
            <LiveOutput result={conversionResult} />
          </section>

          <section className="comparison">
            <h2 className="rtl">⚠️ Type Coercion – המרה אוטומטית</h2>
            <p className="rtl">
              מתרחשת כאשר JavaScript מנסה להשלים פעולה בין סוגים שונים – לדוגמה:
              מספר ומחרוזת. התוצאה עלולה להפתיע!
            </p>

            <CodeBlock code={coercionCode} language="javascript" />
            <LiveOutput result={coercionResult} />
          </section>

          <section className="comparison">
            <h2 className="rtl">== לעומת ===</h2>
            <p className="rtl">
              <code>==</code> מבצע coercion (המרה אוטומטית), בעוד{" "}
              <code>===</code> בודק גם ערך וגם סוג נתון.
            </p>

            <CodeBlock code={equalityCode} language="javascript" />
            <LiveOutput result={equalityResult} />
          </section>

          <section className="explanation rtl">
            <h2>📊 טבלת סיכום – הבדלים עיקריים</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>מאפיין</th>
                    <th>Type Conversion</th>
                    <th>Type Coercion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>יזום על ידי</td>
                    <td>המפתח</td>
                    <td>JavaScript (המנוע)</td>
                  </tr>
                  <tr>
                    <td>שליטה</td>
                    <td>מלאה</td>
                    <td>לא צפוי תמיד</td>
                  </tr>
                  <tr>
                    <td>דוגמה</td>
                    <td>
                      <code>Number("5")</code>
                    </td>
                    <td>
                      <code>"5" * 1</code>
                    </td>
                  </tr>
                  <tr>
                    <td>שימושי עבור</td>
                    <td>קלט משתמש, ניתוח נתונים</td>
                    <td>השוואות, חישובים לא מדויקים</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="note rtl">
            <h2>💡 טיפים חשובים:</h2>
            <ul>
              <li>
                השתמש תמיד ב-<code>===</code> במקום <code>==</code> למניעת
                הפתעות
              </li>
              <li>
                <code>Boolean()</code> מחזיר false רק על:{" "}
                <code>0, "", null, undefined, NaN, false</code>
              </li>
              <li>
                המרות מפורשות שומרות על קוד ברור ומובן – המנע מ-coercion לא
                צפויה
              </li>
              <li>
                <code>NaN</code> הוא מסוג <code>number</code> – תבדוק אותו רק עם{" "}
                <code>isNaN()</code>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TypeConversionPage;
