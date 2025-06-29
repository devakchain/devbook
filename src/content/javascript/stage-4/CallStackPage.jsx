import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import { useNavigate } from "react-router-dom";
import "../../../styles/javascript/stage-4/CallStackPage.scss";

function CallStackPage() {
  const navigate = useNavigate();

  const code = `function a() {
  console.log("🔵 A start");
  b();
  console.log("🔵 A end");
}

function b() {
  console.log("🟡 B start");
  c();
  console.log("🟡 B end");
}

function c() {
  console.log("🔴 C doing something");
}

a();`;

  const result = `🔵 A start
🟡 B start
🔴 C doing something
🟡 B end
🔵 A end`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Call Stack (מחסנית הקריאות) הוא מבנה נתונים בסיסי בג'אווהסקריפט שמנהל
          את הסדר שבו פונקציות מורצות – באמצעות Push/Pop של Execution Context.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Call Stack – מחסנית הקריאות</h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה Call Stack?</h2>
            <p>
              Call Stack הוא מנגנון שבו JavaScript עוקבת אחרי סדר ההרצה של
              פונקציות. כל פונקציה שנקראת נדחפת למחסנית (Push), וכשהיא מסתיימת –
              נשלפת (Pop).
            </p>

            <ul>
              <li>Stack מבוסס על עקרון LIFO – האחרון שנכנס, הראשון שיוצא</li>
              <li>כל פונקציה יוצרת Execution Context משלה</li>
              <li>כאשר הפונקציה מסתיימת – ההקשר מוסר מה־Stack</li>
              <li>
                השגיאה <code>Maximum call stack size exceeded</code> נגרמת
                מקריאה רקורסיבית אינסופית
              </li>
            </ul>

            <h2>🔁 תהליך בזמן אמת</h2>
            <ol>
              <li>ה־Global Execution Context נכנס ראשון</li>
              <li>פונקציית a() נדחפת</li>
              <li>a קוראת ל־b – גם b נדחפת</li>
              <li>b קוראת ל־c – גם c נדחפת</li>
              <li>c מסתיימת → נשלפת → חוזרים ל־b → חוזרים ל־a</li>
            </ol>

            <h2>📊 טבלת תנועת הקריאות</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>שלב</th>
                    <th>מה קורה ב־Call Stack</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Global pushed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>a pushed</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>b pushed</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>c pushed</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>c popped → חוזר ל־b</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>b popped → חוזר ל־a</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>a popped → חוזר ל־Global</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ טעויות נפוצות</h2>
            <ul>
              <li>רקורסיה אינסופית שלא מסתיימת → Stack Overflow</li>
              <li>בלבול בין Call Stack לבין Event Loop (שהוא נפרד)</li>
              <li>הנחה שפונקציה אסינכרונית מידית ב־Call Stack – היא נדחית</li>
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
              <li>השתמש בדיבאגר וב־Chrome DevTools כדי לראות Stack חי</li>
              <li>שמור פונקציות קצרות כדי למנוע עומס ב־Stack</li>
              <li>נסה להימנע מקריאות עמוקות מדי – במיוחד בלולאות או רקורסיה</li>
              <li>הבנת Call Stack היא בסיס ל־Event Loop ו־Async Programming</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CallStackPage;
