import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-1/ScopePage.scss";

function ScopePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const globalCode = `let globalVar = "🌍 אני גלובלי";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();`;

  const functionScopeCode = `function localExample() {
  let localVar = "🔧 אני מקומי";
  console.log(localVar);
}

localExample();
// console.log(localVar); ❌ Error`;

  const blockScopeCode = `if (true) {
  const blockScoped = "📦 אני בתוך בלוק";
  console.log(blockScoped);
}
// console.log(blockScoped); ❌ Error`;

  const varLeakCode = `if (true) {
  var legacyVar = "⚠️ אני חוצה בלוק";
}

console.log(legacyVar); // יעבוד בגלל var`;

  const shadowingCode = `let x = 10;

function test() {
  let x = 5; // Shadowing משתנה אחר
  console.log("x בפנים:", x);
}

test();
console.log("x בחוץ:", x);`;

  const shadowingResult = `x בפנים: 5
x בחוץ: 10`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Scope (טווח משתנים) קובע מתי והיכן ניתן לגשת למשתנה בזיכרון. שליטה בזה
          מונעת שגיאות בלתי צפויות.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Scope – טווח משתנים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Scope?</h2>
            <p>
              Scope הוא מנגנון שקובע היכן משתנה או פונקציה זמינים לשימוש. הוא
              יוצר גבולות בזיכרון של הקוד.
            </p>
            <h3>סוגי Scope:</h3>
            <ul>
              <li>
                <strong>Global Scope</strong> – נגיש מכל מקום בקוד
              </li>
              <li>
                <strong>Function Scope</strong> – נגיש רק בתוך פונקציה
              </li>
              <li>
                <strong>Block Scope</strong> – נגיש רק בתוך בלוק ({`{}`}) –
                רלוונטי רק ל־<code>let</code> ו־<code>const</code>
              </li>
              <li>
                <strong>Lexical Scope</strong> – נבנה לפי מיקום הקוד (לא לפי זמן
                ריצה)
              </li>
            </ul>
          </section>

          {/* Global */}
          <section className="code-demo">
            <h2>🌍 Global Scope</h2>
            <p className="rtl">
              משתנים גלובליים זמינים בכל הקוד – אך שימוש מופרז בהם מסוכן:
            </p>
            <CodeBlock code={globalCode} language="javascript" />
            <LiveOutput result="🌍 אני גלובלי" />
          </section>

          {/* Function Scope */}
          <section className="code-demo">
            <h2>🔧 Function Scope</h2>
            <p className="rtl">
              משתנה מוגדר בתוך פונקציה ולא נגיש מבחוץ – מונע "זליגת ערכים":
            </p>
            <CodeBlock code={functionScopeCode} language="javascript" />
            <LiveOutput result="🔧 אני מקומי" />
          </section>

          {/* Block Scope */}
          <section className="code-demo">
            <h2>📦 Block Scope (let/const)</h2>
            <p className="rtl">
              <code>let</code> ו־<code>const</code> מוגבלים לבלוק בלבד – אידיאלי
              בתנאים ולולאות:
            </p>
            <CodeBlock code={blockScopeCode} language="javascript" />
            <LiveOutput result="📦 אני בתוך בלוק" />
          </section>

          {/* var החיסרון */}
          <section className="code-demo">
            <h2 className="rtl">⚠️ var לא מכבד בלוקים</h2>
            <p className="rtl">
              <code>var</code> מתנהג לפי פונקציה בלבד – וגורם לבעיות של גישה לא
              צפויה:
            </p>
            <CodeBlock code={varLeakCode} language="javascript" />
            <LiveOutput result="⚠️ אני חוצה בלוק" />
          </section>

          {/* Shadowing */}
          <section className="code-demo">
            <h2>🧪 Shadowing</h2>
            <p className="rtl">
              כשיש משתנה באותו שם גם בחוץ וגם בפנים – הפנימי "מסתיר" את החיצוני:
            </p>
            <CodeBlock code={shadowingCode} language="javascript" />
            <LiveOutput result={shadowingResult} />
          </section>

          {/* טבלה תיאורית */}
          <section className="comparison rtl">
            <h2>📊 טבלת השוואה בין סוגי Scope</h2>
            <table>
              <thead>
                <tr>
                  <th>סוג</th>
                  <th>מוגדר ב־</th>
                  <th>נגיש מ־</th>
                  <th>משתנים</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Global</td>
                  <td>מחוץ לכל פונקציה/בלוק</td>
                  <td>מכל מקום</td>
                  <td>var, let, const</td>
                </tr>
                <tr>
                  <td>Function</td>
                  <td>בתוך פונקציה</td>
                  <td>רק באותה פונקציה</td>
                  <td>var, let, const</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>בתוך {}</td>
                  <td>רק באותו בלוק</td>
                  <td>let, const</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* טיפים */}
          <section className="note rtl">
            <h2>💡 טיפים מקצועיים:</h2>
            <ul>
              <li>
                העדף <code>const</code> או <code>let</code> תמיד – אל תשתמש ב־
                <code>var</code>
              </li>
              <li>
                צור משתנים כמה שיותר קרוב לשימוש בהם (Minimize scope distance)
              </li>
              <li>הימנע מ־Global Scope למעט קונסטים גלובליים ברורים</li>
              <li>
                אם צריך גישה חיצונית – העבר משתנים כפרמטרים, לא דרך Globals
              </li>
              <li>הבן ש־Scope משפיע על ביצועים, זיכרון, ותחזוקת קוד</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ScopePage;
