import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/DefaultParameters.scss";

function DefaultParametersPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const basicDefault = `function greet(name = "Stranger") {
  return "Hello, " + name + "!";
}

console.log(greet());
console.log(greet("Shmuel"));`;

  const nullVsUndefined = `function showValue(val = "Default") {
  console.log(val);
}

showValue();           // Default
showValue(undefined);  // Default
showValue(null);       // null`;

  const dependentParams = `function createUser(name = "Guest", age = name.length + 10) {
  return name + " is " + age + " years old";
}

console.log(createUser());         // Guest is 15 years old
console.log(createUser("David")); // David is 15 years old`;

  const invalidOrder = `// ❌ This will throw ReferenceError
function example(a = b, b = 5) {
  return a + b;
}

example();`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          Default Parameters הם תכונה מתקדמת ב־JavaScript שמאפשרת לקבוע ערכים
          אוטומטיים לפונקציה במקרה שלא נשלח פרמטר מסוים. זו דרך אלגנטית להגן על
          הפונקציה שלך מבאגים, ולשפר את הקריאות, היעילות והביצועים.
        </p>

        <div className="topic-content">
          <h1 className="stage-title">Default Parameters – ערכי ברירת מחדל</h1>

          {/* הסבר כללי */}
          <section className="explanation rtl">
            <h2> מה זה Default Parameter?</h2>
            <p>
              כאשר פונקציה מקבלת פרמטר אך המשתמש לא מספק ערך, ניתן להקצות מראש
              ברירת מחדל במקום לבדוק ידנית. זה מקל על תחזוקת קוד ומונע בדיקות
              מיותרות כמו <code>if (!param)</code>.
            </p>
          </section>

          {/* שימוש בסיסי */}
          <section className="code-demo">
            <h2 className="rtl">1. שימוש בסיסי</h2>
            <p className="rtl">
              אם לא נשלח ערך, או נשלח <code>undefined</code>, ייכנס לפעולה ערך
              ברירת המחדל.
            </p>
            <CodeBlock code={basicDefault} language="javascript" />
            <LiveOutput result={`Hello, Stranger!\nHello, Shmuel!`} />
          </section>

          {/* null לעומת undefined */}
          <section className="code-demo">
            <h2 className="rtl">2. null לעומת undefined</h2>
            <p className="rtl">
              רק <code>undefined</code> יפעיל את ברירת המחדל – כל ערך אחר (כולל{" "}
              <code>null</code>) יתפס כתקף.
            </p>
            <CodeBlock code={nullVsUndefined} language="javascript" />
            <LiveOutput result={`Default\nDefault\nnull`} />
          </section>

          {/* פרמטר תלוי בפרמטר קודם */}
          <section className="code-demo">
            <h2 className="rtl">3. תלות בין פרמטרים</h2>
            <p className="rtl">
              ניתן להשתמש בפרמטרים קודמים בתוך ערך ברירת המחדל – אך לא להפך.
            </p>
            <CodeBlock code={dependentParams} language="javascript" />
            <LiveOutput
              result={`Guest is 15 years old\nDavid is 15 years old`}
            />
          </section>

          {/* סדר לא תקין – שגיאה */}
          <section className="code-demo">
            <h2 className="rtl">4. ⚠️ סדר פרמטרים שגוי</h2>
            <p className="rtl">לא ניתן להשתמש בפרמטר שטרם הוגדר. הסדר חשוב!</p>
            <CodeBlock code={invalidOrder} language="javascript" />
            <LiveOutput
              result={`❌ ReferenceError: Cannot access 'b' before initialization`}
            />
          </section>

          {/* טיפים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים:</h2>
            <ul>
              <li>
                השתמש ב־Default Parameters לפונקציות שאתה לא שולט עליהן מבחוץ –
                זה יבטיח תקינות גם כששוכחים לשלוח ערכים.
              </li>
              <li>
                אל תשתמש באובייקטים או מערכים כערכי ברירת מחדל – הם נוצרים בכל
                קריאה מחדש.
              </li>
              <li>
                במקרה שצריך ערך מחושב יקר – שקול להעביר <code>undefined</code>{" "}
                ואז לחשב ידנית.
              </li>
              <li>
                ב־React: השתמש בהם בתוך destructuring של props כשאין
                defaultProps.
              </li>
              <li>
                אל תשלב Default Parameters עם לולאות recursion מבלי להיזהר – זה
                יכול לגרום לקריאות אינסופיות.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DefaultParametersPage;
