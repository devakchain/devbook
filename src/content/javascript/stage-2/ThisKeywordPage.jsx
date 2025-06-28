import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";
import LiveOutput from "../../../components/LiveOutput";
import "../../../styles/javascript/stage-2/ThisKeywordPage.scss";

function ThisKeywordPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const basicCode = `// this בתוך אובייקט
const person = {
  name: "Samuel",
  greet() {
    return "Hello, " + this.name;
  },
};

console.log(person.greet()); // Hello, Samuel`;

  const basicOutput = `Hello, Samuel`;

  const arrowCode = `// this בתוך Arrow Function
const user = {
  name: "Sarah",
  greet: () => {
    return "Hi, " + this.name;
  },
};

console.log(user.greet()); // Hi, undefined`;

  const arrowOutput = `Hi, undefined`;

  const bindCode = `// שימוש ב-bind
function greet() {
  return "Welcome " + this.username;
}

const user = { username: "Avi" };
const boundGreet = greet.bind(user);

console.log(boundGreet()); // Welcome Avi`;

  const bindOutput = `Welcome Avi`;

  const callApplyCode = `// call ו-apply
function introduce(city, age) {
  return \`\${this.name} from \${city}, age \${age}\`;
}

const person = { name: "Daniel" };

console.log(introduce.call(person, "Tel Aviv", 32));   // call
console.log(introduce.apply(person, ["Haifa", 28]));    // apply`;

  const callApplyOutput = `Daniel from Tel Aviv, age 32
Daniel from Haifa, age 28`;

  const timeoutCode = `// this ב-setTimeout
const car = {
  brand: "Toyota",
  showBrand: function () {
    setTimeout(function () {
      console.log("1:", this.brand); // undefined
    }, 500);

    setTimeout(() => {
      console.log("2:", this.brand); // Toyota
    }, 1000);
  },
};

car.showBrand();`;

  const timeoutOutput = `1: undefined
2: Toyota`;

  const classCode = `// this במחלקה (class)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " says hi!";
  }
}

const cat = new Animal("Fluffy");
console.log(cat.speak());`;

  const classOutput = `Fluffy says hi!`;

  return (
    <div className="page-content">
      <div className="js-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזור
        </button>

        <p className="page-subtitle rtl">
          this הוא מצביע שמייצג את ההקשר הנוכחי שבו קוד רץ. ב-JavaScript הוא
          מתנהג באופן דינמי, ומשתנה לפי איך הפונקציה נקראת – לא רק איפה היא
          נכתבה.
        </p>

        <div className="topic-content">
          <h1 className="stage-title rtl">🔑 The this Keyword </h1>

          {/* הסבר תיאורטי */}
          <section className="explanation rtl">
            <h2>🧠 מה זה this?</h2>
            <p>
              this מתנהג שונה ב-JavaScript לעומת שפות אחרות. הוא לא נקבע לפי
              מיקום בקוד, אלא לפי ההקשר של הקריאה. לכן הבנה עמוקה של כל
              הסיטואציות האפשריות – היא מפתח לרמה גבוהה.
            </p>

            <h2>📌 מצבים עיקריים של this:</h2>
            <ul>
              <li>
                <strong>1. בתוך אובייקט:</strong> this מצביע על האובייקט
              </li>
              <li>
                <strong>2. בפונקציה רגילה:</strong> this הוא window (non-strict)
                או undefined (strict)
              </li>
              <li>
                <strong>3. בפונקציית חץ:</strong> this יורש מההקשר החיצוני
              </li>
              <li>
                <strong>4. באירועים:</strong> מצביע על האלמנט שיצר את האירוע
              </li>
              <li>
                <strong>5. ב-class:</strong> this מתייחס לאינסטנס שנוצר
              </li>
              <li>
                <strong>6. bind / call / apply:</strong> שליטה ידנית על this
              </li>
            </ul>
          </section>

          {/* דוגמאות פרקטיות */}
          <section className="code-demo">
            <h2 className="rtl">🧪 this בתוך אובייקט</h2>
            <CodeBlock code={basicCode} language="javascript" />
            <LiveOutput result={basicOutput} />
          </section>

          <section className="code-demo">
            <h2 className="rtl">❌ Arrow Function – this נשבר</h2>
            <CodeBlock code={arrowCode} language="javascript" />
            <LiveOutput result={arrowOutput} />
          </section>

          <section className="code-demo">
            <h2 className="rtl">🔗 bind – שליטה על this</h2>
            <CodeBlock code={bindCode} language="javascript" />
            <LiveOutput result={bindOutput} />
          </section>

          <section className="code-demo">
            <h2 className="rtl">📞 call ו־apply – קריאה מיידית</h2>
            <CodeBlock code={callApplyCode} language="javascript" />
            <LiveOutput result={callApplyOutput} />
          </section>

          <section className="code-demo">
            <h2 className="rtl">⏱ this בתוך setTimeout</h2>
            <CodeBlock code={timeoutCode} language="javascript" />
            <LiveOutput result={timeoutOutput} />
          </section>

          <section className="code-demo">
            <h2 className="rtl">🐾 this בתוך class</h2>
            <CodeBlock code={classCode} language="javascript" />
            <LiveOutput result={classOutput} />
          </section>

          {/* טבלת השוואה מודרנית */}
          <section className="comparison rtl">
            <h2>📊 השוואה בין bind / call / apply</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>שיטה</th>
                  <th>תיאור</th>
                  <th>this מצביע על</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>bind</td>
                  <td>יוצר פונקציה חדשה עם this קבוע</td>
                  <td>לאובייקט שקבעת מראש</td>
                </tr>
                <tr>
                  <td>call</td>
                  <td>מפעיל מיידית את הפונקציה עם this</td>
                  <td>לאובייקט שאתה מעביר</td>
                </tr>
                <tr>
                  <td>apply</td>
                  <td>כמו call, אך עם מערך ארגומנטים</td>
                  <td>גם כן לאובייקט שאתה מעביר</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* טיפים מתקדמים */}
          <section className="note rtl">
            <h2>💡 טיפים מתקדמים:</h2>
            <ul>
              <li>this הוא קריטי ב־OOP, React, Event Listeners, ו־Callbacks</li>
              <li>
                פונקציות חץ לעולם לא יוצרות this משלהן – הן יורשות את הקונטקסט
              </li>
              <li>תמיד בדוק מי קורא לפונקציה – לא רק איפה היא הוגדרה</li>
              <li>
                ב-Class, this חייב להיות מטופל בזהירות – במיוחד לפני שימוש
                ב־bind
              </li>
              <li>
                call/apply מאפשרות להעביר this מיידית בלי ליצור פונקציה חדשה
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ThisKeywordPage;
