import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-1/AssignmentPatterns.scss";

function AssignmentPatternsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const code = `// 1. ערכי ברירת מחדל במערכים
const [x = 1, y = 2] = [10];
console.log(x, y); // 10 2

// 2. שינוי שם משתנה מתוך אובייקט
const user = { name: "Sam", age: 30 };
const { name: fullName } = user;
console.log(fullName); // "Sam"

// 3. השמטת ערכים במערך
const [, second,, fourth] = [1, 2, 3, 4];
console.log(second, fourth); // 2 4

// 4. destructuring מקונן
const product = {
  id: 101,
  details: {
    price: 199,
    stock: 30
  }
};
const { details: { price } } = product;
console.log(price); // 199
`;

  const result = `10 2
Sam
2 4
199`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          דפוסי השמה (Assignment Patterns) הם טכניקה ב-JavaScript המאפשרת חילוץ
          ערכים מתוך מבני נתונים מורכבים כמו Arrays ו־Objects בצורה קריאה, חכמה
          ויעילה – תוך שילוב של ברירות מחדל, שינוי שמות, השמטת ערכים, וחילוץ
          מקונן.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Assignment Patterns – דפוסי השמה</h1>

          {/* תיאוריה מעמיקה */}
          <section className="explanation rtl">
            <h2> תיאוריה ויתרונות</h2>
            <p>
              Assignment Patterns נועדו להפוך קוד לקריא יותר ולחסוך חזרתיות כאשר
              אנו עובדים עם מבני נתונים. ב־JavaScript קיימת תמיכה מלאה
              ב־Destructuring לשני מבנים עיקריים:
            </p>
            <ul>
              <li>
                <strong>Arrays:</strong> סדר קובע – חילוץ לפי אינדקס
              </li>
              <li>
                <strong>Objects:</strong> שמות קובעים – חילוץ לפי מפתח
              </li>
            </ul>
            <p>
              זה מאפשר לנו לכתוב קוד דקלרטיבי, מודרני ומדויק יותר – בדגש על:
            </p>
            <ul>
              <li>✔️ הפחתת חזרתיות (DRY)</li>
              <li>✔️ כתיבה קומפקטית</li>
              <li>✔️ טיפול בנתונים עם מבנים מורכבים (API, תגובות מהשרת)</li>
              <li>✔️ ניהול ערכים חסרים או לא צפויים בצורה בטוחה</li>
            </ul>
          </section>

          {/* קוד דוגמה */}
          <section className="code-demo">
            <h2 className="rtl">🧪 דוגמה מעשית מלאה</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          {/* טיפים ודגשים */}
          <section className="note rtl">
            <h2>💡 דגשים מקצועיים</h2>
            <ul>
              <li>
                ✅ ברירות מחדל פועלות רק עבור ערכים שהם <code>undefined</code> –
                לא <code>null</code>
              </li>
              <li>⚠️ בעת שינוי שם משתנה – ודא שאין התנגשות עם משתנים קיימים</li>
              <li>
                ✅ כאשר מבצעים destructuring מקונן – נדרש לוודא שהשלבים הביניים
                אינם <code>undefined</code> כדי להימנע מ־TypeError
              </li>
              <li>
                ✅ ניתן לשלב destructuring בפרמטרים של פונקציה – לשיפור הקוד
              </li>
            </ul>
          </section>

          {/* שימושים בעולם האמיתי */}
          <section className="use-cases rtl">
            <h2>🌍 מתי נשתמש בזה בפועל?</h2>
            <ul>
              <li>
                📦 קבלת נתונים מ־API: חילוץ שדות ספציפיים מתוך תגובה מורכבת
              </li>
              <li>🎯 העברת פרמטרים לפונקציה – כולל ברירות מחדל</li>
              <li>🧰 עבודה עם קומפוננטות ב־React – destructuring של props</li>
              <li>🧪 קוד טסטים – השוואת ערכים מדויקים מתוך מבני אובייקטים</li>
            </ul>
          </section>

          {/* סיכום */}
          <section className="summary rtl">
            <h2> טיפ</h2>
            <p>
              דפוסי השמה הם כלי קריטי למפתח ברמה גבוהה. הם לא רק מקצרים קוד – הם
              מבטאים הבנה עמוקה במבני נתונים וכתיבה דקלרטיבית. שליטה בהם היא
              סימן להבדל בין קוד "שעובד" לקוד "ברמה תעשייתית".
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AssignmentPatternsPage;
