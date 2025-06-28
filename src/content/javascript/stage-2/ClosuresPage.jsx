import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/ClosuresPage.scss";

function ClosuresPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const basicClosure = `function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    return counter;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3`;

  const loopIssue = `for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
} // 3 3 3 — בגלל שאין קלוז׳ר אמיתי סביב כל איטרציה`;

  const loopFix = `for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
} // 0 1 2 — בזכות קלוז׳ר`;

  const factoryFunction = `function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10`;

  const memoization = `function memoize(fn) {
  const cache = {};
  return function (n) {
    if (cache[n]) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const factorial = memoize(function (x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
});

console.log(factorial(5)); // 120`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Closure הוא אחד המנגנונים העמוקים והחזקים ביותר ב-JavaScript, המשמש
          לבידוד משתנים, שמירה על state והגדרת פונקציות גמישות ודינאמיות.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Closures – קלוז׳רים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <p>
              Closure נוצר כאשר פונקציה פנימית "זוכרת" את ההקשר שבו נוצרה – גם
              לאחר שהפונקציה החיצונית הסתיימה.
            </p>
            <p>
              כל פעם שאתה מחזיר פונקציה מתוך פונקציה – אתה יוצר Closure. הוא
              מחזיק זיכרון פנימי של הסקופ החיצוני.
            </p>
          </section>

          {/* דוגמה בסיסית */}
          <section className="code-demo">
            <h2>1. Closure בסיסי</h2>
            <CodeBlock code={basicClosure} language="javascript" />
            <LiveOutput result="1\n2\n3" />
          </section>

          {/* לולאה עם בעיה */}
          <section className="code-demo">
            <h2>2. בעיה עם var בתוך לולאה</h2>
            <CodeBlock code={loopIssue} language="javascript" />
            <LiveOutput result="3\n3\n3" />
          </section>

          {/* פתרון עם IIFE */}
          <section className="code-demo">
            <h2>3. פתרון באמצעות Closure</h2>
            <CodeBlock code={loopFix} language="javascript" />
            <LiveOutput result="0\n1\n2" />
          </section>

          {/* Factory Function */}
          <section className="code-demo">
            <h2>4. פונקציית מפעל (Factory Function)</h2>
            <CodeBlock code={factoryFunction} language="javascript" />
            <LiveOutput result="10" />
          </section>

          {/* Memoization */}
          <section className="code-demo">
            <h2>5. זיכרון פנימי – Memoization</h2>
            <CodeBlock code={memoization} language="javascript" />
            <LiveOutput result="120" />
          </section>

          {/* טיפ */}
          <section className="note rtl">
            <h2>💎 טיפ מקצועי</h2>
            <p>
              שימוש חכם ב־Closures מאפשר לך לבודד נתונים, למנוע זליגות גלובליות,
              לבנות API גמיש ולשפר ביצועים. למד לזהות איפה אתה יכול לסגור משתנים
              בתוך scope ולחסוך טעויות.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ClosuresPage;
