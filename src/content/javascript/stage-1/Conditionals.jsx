import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-1/Conditionals.scss";

function ConditionalsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ifElseCode = `const age = 18;

if (age >= 18) {
  console.log("מותר לך להצביע");
} else {
  console.log("עדיין לא בגיל המתאים");
}`;

  const elseIfCode = `const score = 85;

if (score >= 90) {
  console.log("מצטיין");
} else if (score >= 75) {
  console.log("טוב מאוד");
} else {
  console.log("צריך להשתפר");
}`;

  const ternaryCode = `const isMember = true;
const fee = isMember ? 10 : 20;
console.log(fee);`;

  const switchCode = `const color = "green";

switch (color) {
  case "red":
    console.log("עצור");
    break;
  case "green":
    console.log("סע");
    break;
  case "yellow":
    console.log("תאט");
    break;
  default:
    console.log("צבע לא מזוהה");
}`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          תנאים הם הבסיס ללוגיקה דינאמית בקוד – דרכם נשלוט על זרימת התוכנית לפי
          מצב משתנה.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Conditionals – תנאים</h1>

          {/* הסבר כללי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה תנאי?</h2>
            <p>
              תנאי ב־JavaScript בודק האם ביטוי מחזיר ערך אמת (truthy) או שקר
              (falsy), ופועל בהתאם. קיימות מספר דרכים לממש תנאים – לכל אחת
              יתרונות בהתאם להקשר.
            </p>
          </section>

          {/* if / else */}
          <section className="code-demo">
            <h2>if / else</h2>
            <p>
              הצורה הנפוצה ביותר – אם תנאי מתקיים, הרץ בלוק מסוים – אחרת בלוק
              חלופי:
            </p>
            <CodeBlock code={ifElseCode} language="javascript" />
            <LiveOutput result="מותר לך להצביע" />
          </section>

          {/* else if */}
          <section className="code-demo">
            <h2>else if</h2>
            <p>מאפשר לבדוק רצף של תנאים מדורגים:</p>
            <CodeBlock code={elseIfCode} language="javascript" />
            <LiveOutput result="טוב מאוד" />
          </section>

          {/* Ternary Operator */}
          <section className="code-demo">
            <h2 className="rtl">? : – אופרטור תנאי (Ternary)</h2>
            <p>
              דרך מקוצרת ל־<code>if/else</code> במצבים פשוטים – מחזיר ערך:
            </p>
            <CodeBlock code={ternaryCode} language="javascript" />
            <LiveOutput result="10" />
          </section>

          {/* Switch */}
          <section className="code-demo">
            <h2>Switch</h2>
            <p>
              מתאימה לבדיקת ערכים מרובים. כל case מייצג אפשרות אחת, ויש צורך ב־
              <code>break</code> כדי לעצור:
            </p>
            <CodeBlock code={switchCode} language="javascript" />
            <LiveOutput result="סע" />
          </section>

          {/* השוואה */}
          <section className="comparison rtl">
            <h2>📊 השוואה בין סוגי תנאים</h2>
            <table>
              <thead>
                <tr>
                  <th>שיטה</th>
                  <th>יתרונות</th>
                  <th>חסרונות</th>
                  <th>שימושים נפוצים</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>if / else</code>
                  </td>
                  <td>ברור, קריא</td>
                  <td>קוד ארוך בריבוי תנאים</td>
                  <td>תנאים בסיסיים</td>
                </tr>
                <tr>
                  <td>
                    <code>else if</code>
                  </td>
                  <td>מדורג, חכם</td>
                  <td>קינון עמוק</td>
                  <td>ציונים, דירוגים</td>
                </tr>
                <tr>
                  <td>
                    <code>? :</code>
                  </td>
                  <td>תמציתי</td>
                  <td>בלתי קריא במורכבות</td>
                  <td>הקצאת ערך פשוט</td>
                </tr>
                <tr>
                  <td>
                    <code>switch</code>
                  </td>
                  <td>מסודר לריבוי ערכים</td>
                  <td>לא תומך בביטויים מורכבים</td>
                  <td>סטטוס, קלט משתמש</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* טיפים */}
          <section className="note rtl">
            <h2>💡 טיפים מקצועיים:</h2>
            <ul>
              <li>
                העדף <code>if</code> עבור ביטויים לוגיים, ו־<code>switch</code>{" "}
                עבור ערכים קבועים
              </li>
              <li>
                הימנע מקינון עמוק – במקום זאת, חלק את הקוד לפונקציות קטנות
              </li>
              <li>
                אל תשתמש באופרטור תנאי <code>? :</code> להחלטות מורכבות – זה
                יקשה על תחזוקה
              </li>
              <li>
                ניתן להשתמש ב־<code>return</code> מוקדם בתוך תנאים כדי להימנע מ־
                <code>else</code> בכלל (Early Return)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ConditionalsPage;
