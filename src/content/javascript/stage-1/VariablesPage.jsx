import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-1/variables.scss";

function VariablesPage() {
  const navigate = useNavigate();

  const code = `console.log(a); // undefined
var a = 10;

try {
  console.log(b); // ReferenceError
} catch (e) {
  console.log("Error with let:", e.message);
}

let b = 20;

try {
  console.log(c); // ReferenceError
} catch (e) {
  console.log("Error with const:", e.message);
}

const c = 30;`;

  const result = `undefined
Error with let: Cannot access 'b' before initialization
Error with const: Cannot access 'c' before initialization`;

  return (
    <div className="page-content">
      <div className="js-page" style={{ position: "relative" }}>
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          משתנים הם הבסיס לכל קוד ב-JavaScript – בעזרתם אנו שומרים, ניגשים
          ומשנים ערכים בזיכרון.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Variables – var, let, const</h1>

          {/* תיאוריה כללית */}
          <section className="explanation rtl">
            <p>
              משתנים משמשים לאחסון ערכים בזיכרון ולהפנייה לערכים אלו דרך שם
              מזהה. JavaScript כוללת שלוש דרכים להכריז על משתנים:
            </p>
            <ul>
              <li>
                <strong>var</strong> – ישן יותר, תחום לפונקציה, תומך ב־hoisting
                עם ערך undefined
              </li>
              <li>
                <strong>let</strong> – מודרני, תחום לבלוק, לא ניתן לגשת לפני
                הכרזה בגלל TDZ
              </li>
              <li>
                <strong>const</strong> – כמו let, אך הערך לא ניתן להקצאה מחדש
                (immutable binding)
              </li>
            </ul>
          </section>

          {/* טבלת השוואה */}
          <section className="comparison rtl">
            <h2>📊 השוואה מלאה – var / let / const</h2>
            <table>
              <thead>
                <tr>
                  <th>מאפיין</th>
                  <th>var</th>
                  <th>let</th>
                  <th>const</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scope</td>
                  <td>Function</td>
                  <td>Block</td>
                  <td>Block</td>
                </tr>
                <tr>
                  <td>Hoisting</td>
                  <td>Yes (undefined)</td>
                  <td>Yes (TDZ)</td>
                  <td>Yes (TDZ)</td>
                </tr>
                <tr>
                  <td>Reassignable</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Redeclarable</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Global Binding</td>
                  <td>Attached to window</td>
                  <td>Not attached</td>
                  <td>Not attached</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* קוד מעשי */}
          <section className="code-demo">
            <h2 className="rtl">🧪 דוגמת קוד חיה – הבדל בין hoisting ל־TDZ</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          {/* טיפים והערות */}
          <section className="note rtl">
            <h2>💡 טיפים ואזהרות קריטיות</h2>
            <ul>
              <li>
                הימנע מ־<code>var</code> אלא אם אתה חייב תמיכה בדפדפנים ישנים
                מאוד
              </li>
              <li>
                העדף תמיד <code>const</code> כברירת מחדל – אם צריך לשנות, השתמש
                ב־
                <code>let</code>
              </li>
              <li>
                אל תבלבל בין "immutable binding" לבין ערכים משתנים בתוך
                אובייקטים: <code>const user = &#123; name: "Sam" &#125;;</code>{" "}
                עדיין ניתן לשנות <code>user.name</code>
              </li>
              <li>Hoisting זה מבלבל – תמיד תכריז על משתנים למעלה בקוד</li>
              <li>
                לעולם אל תעשה <code>let a = 1; let a = 2;</code> – זה יגרום
                לשגיאה
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default VariablesPage;
