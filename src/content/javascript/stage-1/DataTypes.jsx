import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-1/DataTypes.scss";

function DataTypesPage() {
  const navigate = useNavigate();

  const code = `const name = "Samuel";                  // String
const age = 30;                        // Number
const isAdmin = true;                 // Boolean
const score = null;                   // Null
let user;                             // Undefined
const id = Symbol("id");              // Symbol
const bigNumber = 12345678901234567890n; // BigInt

const colors = ["red", "blue"];       // Array (Reference)
const person = { name: "Dana" };      // Object (Reference)
function greet() { return "Hi"; }     // Function (Reference)

console.log(typeof name);
console.log(typeof age);
console.log(typeof isAdmin);
console.log(typeof score);
console.log(typeof user);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof colors);
console.log(typeof person);
console.log(typeof greet);`;

  const result = `string
number
boolean
object
undefined
symbol
bigint
object
object
function`;

  return (
    <div className="js-page page-content">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← חזור
      </button>

      <p className="page-subtitle rtl">
        JavaScript כוללת סוגי נתונים פרימיטיביים ורפרנסיים – כל אחד מתנהג אחרת
        בזיכרון ובשימוש. שליטה בהם קריטית להבנת השפה לעומק.
      </p>

      <div className="topic-content">
        <h1 className="stage-title">Data Types – סוגי נתונים</h1>

        {/* תיאוריה כללית */}
        <section className="explanation rtl">
          <h2>📚 סוגי נתונים בפרימיטיב לעומת רפרנס</h2>
          <p>
            קיימת הבחנה בין <strong>Primitive Types</strong> לבין{" "}
            <strong>Reference Types</strong>:
          </p>
          <ul>
            <li>
              <strong>Primitive:</strong> נשמרים כערך ישיר בזיכרון. כוללים:
              <code>
                String, Number, Boolean, Null, Undefined, Symbol, BigInt
              </code>
            </li>
            <li>
              <strong>Reference:</strong> נשמרים ככתובת בזיכרון, מפנים למבנים
              מורכבים:
              <code>Object, Array, Function</code>
            </li>
          </ul>

          <h2>🧠 איך typeof מתנהג?</h2>
          <p>
            הפונקציה <code>typeof</code> משמשת לבדוק סוג נתון, אך לא תמיד היא
            מדויקת:
          </p>
          <ul>
            <li>
              <code>typeof null === "object"</code> – טעות היסטורית בשפה
            </li>
            <li>
              <code>typeof [] === "object"</code> – לכן עדיף להשתמש ב־
              <code>Array.isArray()</code>
            </li>
            <li>
              <code>typeof function() &#123;&#125; === "function"</code> – זה
              המקרה היחיד שמחזיר "function"
            </li>
          </ul>
        </section>

        {/* טבלה תיאורטית */}
        <section className="explanation rtl">
          <h2>📊 טבלת סיכום – פרימיטיביים</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>סוג</th>
                  <th>דוגמה</th>
                  <th>typeof</th>
                  <th>יתרונות</th>
                  <th>חסרונות</th>
                  <th>שימושים נפוצים</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>String</td>
                  <td>"Hello"</td>
                  <td>string</td>
                  <td>קל לתפעול</td>
                  <td>תווים בלבד</td>
                  <td>תצוגת טקסט, תיוג</td>
                </tr>
                <tr>
                  <td>Number</td>
                  <td>42</td>
                  <td>number</td>
                  <td>דיוק גבוה</td>
                  <td>אין Infinity בדיקה פשוטה</td>
                  <td>חישובים, סכומים</td>
                </tr>
                <tr>
                  <td>Boolean</td>
                  <td>true</td>
                  <td>boolean</td>
                  <td>קל לתנאים</td>
                  <td>שני מצבים בלבד</td>
                  <td>בדיקות לוגיות</td>
                </tr>
                <tr>
                  <td>Null</td>
                  <td>null</td>
                  <td>object</td>
                  <td>כוונה ברורה לריק</td>
                  <td>typeof לא נכון</td>
                  <td>איפוס ערכים</td>
                </tr>
                <tr>
                  <td>Undefined</td>
                  <td>let x;</td>
                  <td>undefined</td>
                  <td>מובנה בשפה</td>
                  <td>פחות קריא</td>
                  <td>בדיקת קיום</td>
                </tr>
                <tr>
                  <td>Symbol</td>
                  <td>Symbol("id")</td>
                  <td>symbol</td>
                  <td>ייחודי לחלוטין</td>
                  <td>קשה לדיבוג</td>
                  <td>מפתחות מוסתרים</td>
                </tr>
                <tr>
                  <td>BigInt</td>
                  <td>123456789n</td>
                  <td>bigint</td>
                  <td>מספרים ענקיים</td>
                  <td>לא תואם Math</td>
                  <td>קריפטוגרפיה, Hash</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* דוגמת קוד */}
        <section className="code-demo">
          <h2>🧪 דוגמת קוד מלאה</h2>
          <CodeBlock code={code} language="javascript" />
          <LiveOutput result={result} />
        </section>

        {/* טיפים */}
        <section className="note rtl">
          <h2>💡 טיפים חשובים</h2>
          <ul>
            <li>
              <code>null</code> משמש לאיפוס ערכים ידני, <code>undefined</code>{" "}
              מציין חוסר ערך
            </li>
            <li>
              <code>Symbol</code> מבטיח ייחודיות – שני Symbols לעולם לא שווים
            </li>
            <li>
              בדוק אם מערך עם <code>Array.isArray()</code> – לא עם typeof
            </li>
            <li>
              אל תשתמש ב־<code>BigInt</code> אם אתה צריך להשתמש בפונקציות Math
              רגילות
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DataTypesPage;
