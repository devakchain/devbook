import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-1/LoopsPage.scss";

function LoopsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const forCode = `for (let i = 0; i < 5; i++) {
  console.log("מספר:", i);
}`;

  const whileCode = `let count = 0;
while (count < 3) {
  console.log("ספירה:", count);
  count++;
}`;

  const doWhileCode = `let num = 0;
do {
  console.log("מספר:", num);
  num++;
} while (num <div 2);`;

  const forOfCode = `const fruits = ["תפוח", "בננה", "ענבים"];
for (const fruit of fruits) {
  console.log(fruit);
}`;

  const forInCode = `const person = { name: "דן", age: 30 };
for (const key in person) {
  console.log(key + ": " + person[key]);
}`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          לולאות הן דרך לשלוט בזרימה חוזרת של קוד – כשצריך לעבור על מערכים,
          אובייקטים, או לחזור על פעולה עד שתנאי יפסיק.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Loops – לולאות</h1>

          {/* הסבר כללי */}
          <section className="explanation rtl">
            <h2>🧠 מהי לולאה?</h2>
            <p>
              לולאה היא מבנה שמאפשר להריץ בלוק של קוד שוב ושוב כל עוד תנאי מסוים
              מתקיים. קיימים סוגים שונים של לולאות – לכל אחת שימוש מתאים לפי
              מבנה הנתונים וזרימת התוכנית.
            </p>
          </section>

          {/* for */}
          <section className="code-demo">
            <h2>for</h2>
            <p className="rtl">
              לולאה קלאסית עם שליטה מלאה על מונה, תנאי וספירה – אידיאלית למערכים
              כשצריך אינדקס:
            </p>
            <CodeBlock code={forCode} language="javascript" />
            <LiveOutput
              result={`מספר: 0\nמספר: 1\nמספר: 2\nמספר: 3\nמספר: 4`}
            />
          </section>

          {/* while */}
          <section className="code-demo">
            <h2>while</h2>
            <p className="rtl">
              מריצה קוד כל עוד התנאי נכון – מסוכן יותר אם לא שומרים על תנאי
              עצירה. מתאים למצבים שהמספר חזרות אינו ידוע מראש.
            </p>
            <CodeBlock code={whileCode} language="javascript" />
            <LiveOutput result={`ספירה: 0\nספירה: 1\nספירה: 2`} />
          </section>

          {/* do while */}
          <section className="code-demo">
            <h2>do...while</h2>
            <p className="rtl">
              מריצה את הקוד לפחות פעם אחת לפני בדיקת התנאי – פחות נפוץ בפועל:
            </p>
            <CodeBlock code={doWhileCode} language="javascript" />
            <LiveOutput result={`מספר: 0\nמספר: 1`} />
          </section>

          {/* for of */}
          <section className="code-demo">
            <h2>for...of</h2>
            <p className="rtl">
              לולאה מודרנית ונוחה – מיועדת למבנים איטרביליים כמו מערכים,
              מחרוזות, Set ו־Map.
            </p>
            <CodeBlock code={forOfCode} language="javascript" />
            <LiveOutput result={`תפוח\nבננה\nענבים`} />
          </section>

          {/* for in */}
          <section className="code-demo">
            <h2>for...in</h2>
            <p className="rtl">
              עוברת על מפתחות של אובייקט (כולל פרוטוטייפ!) – יש להיזהר משימוש על
              מערכים.
            </p>
            <CodeBlock code={forInCode} language="javascript" />
            <LiveOutput result={`name: דן\nage: 30`} />
          </section>

          {/* השוואה */}
          <section className="comparison rtl">
            <h2>📊 השוואה בין לולאות</h2>
            <table>
              <thead>
                <tr>
                  <th>לולאה</th>
                  <th>שימוש עיקרי</th>
                  <th>יתרונות</th>
                  <th>חסרונות</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>for</td>
                  <td>שליטה מלאה על מונה</td>
                  <td>גמישה, ברורה</td>
                  <td>צריך לנהל מונה ותנאי ידנית</td>
                </tr>
                <tr>
                  <td>while</td>
                  <td>תנאי פתוח מראש</td>
                  <td>פשוטה לקריאה</td>
                  <td>מסוכן אם שוכחים עצירה</td>
                </tr>
                <tr>
                  <td>do...while</td>
                  <td>לפחות הרצה אחת</td>
                  <td>בודק רק אחרי הריצה</td>
                  <td>לא צפוי – פחות שימושי בפועל</td>
                </tr>
                <tr>
                  <td>for...of</td>
                  <td>ערכים מתוך מבנה איטרבילי</td>
                  <td>מודרני, קריא</td>
                  <td>לא נגיש לאינדקס</td>
                </tr>
                <tr>
                  <td>for...in</td>
                  <td>מפתחות של אובייקט</td>
                  <td>פשוט למיפוי</td>
                  <td>כולל פרוטוטייפ – לא למערכים</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* טיפים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים:</h2>
            <ul>
              <li>
                העדף <code>for...of</code> על פני <code>for</code> כשאתה לא צריך
                אינדקס
              </li>
              <li>
                אל תשתמש ב־<code>for...in</code> על מערכים – הוא לא מבטיח סדר
              </li>
              <li>
                במקום לולאות ידניות – שקול מתודות כמו <code>map()</code>,{" "}
                <code>filter()</code>, <code>reduce()</code>
              </li>
              <li>
                מנע לולאות מקוננות מיותרות – השתמש בלוגיקה יעילה או{" "}
                <code>flatMap</code>
              </li>
              <li>
                ל־Set/Map יש לולאות משלהם: <code>forEach</code> או{" "}
                <code>for...of</code>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LoopsPage;
