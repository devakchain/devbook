import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/RestParametersPage.scss";

function RestParametersPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const basicRest = `function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));         // 6
console.log(sum(5, 10, 15, 20));   // 50`;

  const mixedParams = `function introduce(greeting, ...names) {
  return greeting + " " + names.join(", ");
}

console.log(introduce("Hi", "Shmuel", "David", "Sara"));`;

  const restLimit = `function example(...args, last) {
  console.log(args, last);
}

example(1, 2, 3); // ❌ SyntaxError – rest must be last`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Rest Parameters מאפשרים לאסוף מספר בלתי מוגבל של ארגומנטים לפונקציה
          לתוך מערך אחד. הם נכתבים עם שלוש נקודות (...) בתחילת שם הפרמטר,
          ומספקים גמישות ועוצמה רבה במיוחד במצבים שבהם מספר הארגומנטים אינו ידוע
          מראש.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">
            Rest Parameters – קליטה חכמה של ארגומנטים
          </h1>

          {/* הסבר כללי */}
          <section className="explanation rtl">
            <h2>מה זה Rest Parameter?</h2>
            <p>
              כשאתה לא יודע מראש כמה ערכים יועברו לפונקציה – השתמש בפרמטר Rest
              כדי לאסוף את כל הערכים למערך. הוא תמיד צריך להופיע אחרון ברשימת
              הפרמטרים.
            </p>
          </section>

          {/* שימוש בסיסי */}
          <section className="code-demo">
            <h2 className="rtl">1. שימוש בסיסי</h2>
            <p className="rtl">
              כל הארגומנטים שנשלחים לפונקציה נאספים למערך בשם{" "}
              <code>numbers</code>.
            </p>
            <CodeBlock code={basicRest} language="javascript" />
            <LiveOutput result={`6\n50`} />
          </section>

          {/* שילוב עם פרמטרים רגילים */}
          <section className="code-demo">
            <h2 className="rtl">2. שילוב עם פרמטרים רגילים</h2>
            <p className="rtl">
              ניתן לשלב בין פרמטר רגיל לבין Rest – אך תמיד לשים את Rest בסוף.
            </p>
            <CodeBlock code={mixedParams} language="javascript" />
            <LiveOutput result={`Hi Shmuel, David, Sara`} />
          </section>

          {/* הגבלה – rest חייב לבוא אחרון */}
          <section className="code-demo">
            <h2 className="rtl">3. ⚠️ הגבלה תחבירית</h2>
            <p className="rtl">
              אסור למקם פרמטר אחרי Rest – זה יגרום לשגיאה תחבירית.
            </p>
            <CodeBlock code={restLimit} language="javascript" />
            <LiveOutput
              result={`❌ SyntaxError: Rest parameter must be last formal parameter`}
            />
          </section>

          {/* טיפים מתקדמים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים:</h2>
            <ul>
              <li>
                Rest Parameters מחליפים את <code>arguments</code> באלגנטיות – הם
                תמיד מערך אמיתי (ולא דמוי-מערך).
              </li>
              <li>
                ניתן להשתמש בהם עם פונקציות כמו <code>reduce</code>,{" "}
                <code>map</code> וכו'.
              </li>
              <li>
                אל תבלבל עם <code>spread</code> – שניהם נראים דומה (...) אך
                עושים ההפך.
              </li>
              <li>שמור על סדר נכון של פרמטרים – קודם רגילים ואז rest.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RestParametersPage;
