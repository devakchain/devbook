import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-1/LoopsPage.scss"; // שים לב! כמו בלולאות

function FunctionTypesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const functionDeclaration = `// Function Declaration
function sayHello() {
  return "שלום!";
}

console.log(sayHello()); // שלום!
`;

  const functionExpression = `// Function Expression
const sayBye = function () {
  return "להתראות!";
};

console.log(sayBye()); // להתראות!
`;

  const arrowFunction = `// Arrow Function
const greet = (name) => "שלום, " + name;

console.log(greet("דנה")); // שלום, דנה
`;

  const iifeCode = `// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("פונקציה הופעלה מידית!");
})();`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          ב-JavaScript, פונקציות הן הבלוק המרכזי של כל לוגיקה. הבנה עמוקה של
          סוגי הפונקציות תוביל אותך לרמות הגבוהות ביותר בכתיבת קוד יעיל, קריא
          ואופטימלי לביצועים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Function Types – סוגי פונקציות</h1>

          {/* הסבר כללי */}
          <section className="explanation rtl">
            <p>ב-JS קיימים 4 סוגי פונקציות עיקריים:</p>
            <ul>
              <li>
                <strong>Function Declaration</strong> – זמינה גם לפני ההצהרה
              </li>
              <li>
                <strong>Function Expression</strong> – נשמרת כמשתנה
              </li>
              <li>
                <strong>Arrow Function</strong> – תחביר מודרני, לא יוצר this
              </li>
              <li>
                <strong>IIFE</strong> – פונקציה שפועלת מיד עם ההגדרה
              </li>
            </ul>
          </section>

          {/* Function Declaration */}
          <section className="code-demo">
            <h2>1. Function Declaration</h2>
            <p className="rtl">
              הצהרת פונקציה רגילה – זמינה בכל מקום בקובץ (Hoisting). נוחה כשיש
              קריאות חוזרות מראש.
            </p>
            <CodeBlock code={functionDeclaration} language="javascript" />
            <LiveOutput result={"שלום!"} />
          </section>

          {/* Function Expression */}
          <section className="code-demo">
            <h2>2. Function Expression</h2>
            <p className="rtl">
              פונקציה שנשמרת לתוך משתנה – אינה זמינה לפני ההגדרה. מאפשרת גמישות
              דינמית.
            </p>
            <CodeBlock code={functionExpression} language="javascript" />
            <LiveOutput result={"להתראות!"} />
          </section>

          {/* Arrow Function */}
          <section className="code-demo">
            <h2>3. Arrow Function</h2>
            <p className="rtl">
              תחביר מודרני לפונקציות קצרות – אינו יוצר <code>this</code> משלו.
            </p>
            <CodeBlock code={arrowFunction} language="javascript" />
            <LiveOutput result={"שלום, דנה"} />
          </section>

          {/* IIFE */}
          <section className="code-demo">
            <h2>4. IIFE – Immediately Invoked Function Expression</h2>
            <p className="rtl">
              פונקציה שמופעלת מיידית ברגע ההגדרה – נועדה לסגירת scope או הפעלת
              קוד חד־פעמי.
            </p>
            <CodeBlock code={iifeCode} language="javascript" />
            <LiveOutput result={"פונקציה הופעלה מידית!"} />
          </section>

          {/* ניתוח תיאורטי */}
          <section className="note rtl">
            <h2>💡 הסבר תיאורטי ופרקטי – ניתוח מקצועי</h2>
            <ul>
              <li>
                <strong>Function Declaration:</strong> זמינה לפני ההגדרה
                (hoisting), מעולה ל־API ברור אך פחות גמישה.
              </li>
              <li>
                <strong>Function Expression:</strong> מתאימה לפונקציות מותנות,
                לא זמינה מראש.
              </li>
              <li>
                <strong>Arrow Function:</strong> תחביר מודרני ונוח ל־callbacks,
                אך לא מתאימה ל־methods כי לא קושרת this.
              </li>
              <li>
                <strong>IIFE:</strong> שימושית לסגירת scope, במיוחד לפני ES6
                modules.
              </li>
            </ul>

            <h2 style={{ marginTop: "2rem" }}>🔍 מתי להשתמש במה?</h2>
            <ul>
              <li>
                ✅ השתמש ב־<strong>Declaration</strong> כשאתה בונה לוגיקת בסיס
                שנקראת מראש.
              </li>
              <li>
                ⚙️ השתמש ב־<strong>Expression</strong> כשאתה צריך דינמיות או
                לוגיקה מותנית.
              </li>
              <li>
                ⚡ העדף <strong>Arrow</strong> עבור קוד קצר, מיפוי מערכים,
                ו־React.
              </li>
              <li>
                🔒 השתמש ב־<strong>IIFE</strong> לבידוד משתנים או init של מודול.
              </li>
            </ul>
          </section>

          {/* טיפ מקצועי */}
          <section className="note rtl">
            <h2>💎 טיפ מקצועי</h2>
            <p>
              כשאתה כותב קוד <strong>לצוות</strong>, חשוב לא רק מה הכי קצר – אלא
              מה הכי ברור. למשל, למרות ש־Arrow Function נראית מדהים ב־callback,
              אם אתה כותב לוגיקה קריטית – ייתכן ש־Function Declaration תתאים
              יותר לקריאות ול־debugging.
            </p>
            <p>
              כתיבת פונקציות זה לא רק "איך", אלא <strong>"למה"</strong> – תבחר
              את סוג הפונקציה בהתאם לקונטקסט, ל־scope, ולמטרת הקריאה.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FunctionTypesPage;
