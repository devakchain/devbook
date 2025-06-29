import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-3/MutationMethodsPage.scss";

function MutationMethodsPage() {
  const navigate = useNavigate();

  const code = `let items = ["📘", "📙", "📕"];

// push - הוספה לסוף
items.push("📗");

// pop - הסרה מהסוף
items.pop();

// unshift - הוספה לתחילה
items.unshift("📒");

// shift - הסרה מהתחלה
items.shift();

// splice - הסרה + הוספה באמצע
items.splice(1, 1, "📓");

// sort - מיון אלפבתי (משנה מקור!)
const sorted = items.sort();

// reverse - הפוך סדר
const reversed = items.reverse();

console.log("items:", items);
console.log("sorted:", sorted);
console.log("reversed:", reversed);`;

  const result = `items: ["📕", "📓"]
sorted: ["📓", "📕"]
reversed: ["📕", "📓"]`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          מתודות שינוי (Mutation) משנות את המערך המקורי. הן שימושיות אך דורשות
          זהירות כדי למנוע תופעות לוואי לא צפויות בקוד מורכב.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Mutation Methods – שינוי מערכים</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Mutation?</h2>
            <p>
              Mutation הוא שינוי ישיר של מבנה נתונים קיים – במקרה של מערך, זה
              אומר להוסיף, להסיר או למיין ערכים במקום לעבודה על עותק.
            </p>

            <h2>🛠 מתודות עיקריות</h2>
            <ul>
              <li>
                <code>push()</code> – הוספת איבר לסוף
              </li>
              <li>
                <code>pop()</code> – הסרת איבר מהסוף
              </li>
              <li>
                <code>unshift()</code> – הוספת איבר להתחלה
              </li>
              <li>
                <code>shift()</code> – הסרת איבר מהתחלה
              </li>
              <li>
                <code>splice()</code> – הסרה או הוספה של איברים לפי אינדקס
              </li>
              <li>
                <code>sort()</code> – מיון המערך
              </li>
              <li>
                <code>reverse()</code> – הפיכת סדר המערך
              </li>
            </ul>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>
                הנחה ש-<code>sort</code> ממיין לפי ערך מספרי (צריך להשוות ידנית)
              </li>
              <li>
                שימוש ב-<code>splice</code> בלי להבין שהוא משנה את המערך המקורי
              </li>
              <li>
                שימוש ב-<code>reverse</code> במקום להחזיר עותק הפוך
              </li>
            </ul>
          </section>

          {/* דוגמת קוד */}
          <section className="code-demo">
            <h2>🧪 דוגמת קוד מלאה</h2>
            <CodeBlock code={code} language="javascript" />
            <LiveOutput result={result} />
          </section>

          {/* טיפים מתקדמים */}
          <section className="note rtl">
            <h2>💡 טיפים מקצועיים</h2>
            <ul>
              <li>
                העדף תמיד פעולות non-mutating כשעובדים עם state בריאקט או Redux
              </li>
              <li>
                אם אתה חייב להשתמש ב-mutating – דאג לעשות עותק קודם (spread,
                slice)
              </li>
              <li>
                <code>sort()</code> דורשת פונקציית השוואה במספרים – אחרת המיון
                שגוי
              </li>
              <li>
                במקום <code>splice()</code> השתמש ב-
                <code>slice() + concat()</code> לעותקים
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MutationMethodsPage;
