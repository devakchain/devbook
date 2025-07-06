import React from "react";
import { useNavigate } from "react-router-dom";
import CopyButton from "../../../components/CopyButton";
import LivePreview from "../../../components/LiveOutput";
import "../../../styles/html/stage-1/html-stage-pages.scss";

function MetaPage() {
  const navigate = useNavigate();

  const examples = [
    {
      title: "1. charset – קידוד תווים",
      explanation:
        "מגדיר איך הדפדפן יפענח את הטקסט. חובה ל־UTF-8 עבור תמיכה בעברית.",
      category: "🧠 בסיס / חיוני",
      code: `<meta charset="UTF-8" />`,
      preview: "<h3>עברית תקינה 😄</h3>",
    },
    {
      title: "2. description – תיאור הדף",
      explanation: "משפיע איך האתר יוצג בתוצאות חיפוש. חשוב ל־SEO.",
      category: "🔍 SEO",
      code: `<meta name="description" content="לימוד HTML בצורה מודרנית" />`,
      preview: "<p>🕵️ לא מוצג בדף, אבל קריטי ל־SEO</p>",
    },
    {
      title: "3. keywords – מילות מפתח",
      explanation: "שיטה ישנה ל־SEO. כיום כמעט לא משפיעה.",
      category: "🔍 SEO",
      code: `<meta name="keywords" content="HTML, meta, קידוד, תגיות" />`,
      preview: "<p>🔎 פחות בשימוש כיום</p>",
    },
    {
      title: "4. author – מחבר האתר",
      explanation: "מציין מי יצר את הדף. מופיע במטא־דאטה.",
      category: "👨‍💻 מידע מפתח",
      code: `<meta name="author" content="שמואל יצחק" />`,
      preview: "<p>✍️ מידע תיעודי – לא מוצג למשתמש</p>",
    },
    {
      title: "5. viewport – תצוגה רספונסיבית",
      explanation: "מאפשר תצוגה תקינה במובייל וטאבלטים.",
      category: "📱 Mobile / UX",
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
      preview: "<p>📱 חובה ברוב האתרים של היום</p>",
    },
    {
      title: "6. X-UA-Compatible – תאימות לאקספלורר",
      explanation: "מציין לדפדפן לעבוד במצב תקני. שימושי רק ל־IE.",
      category: "🧓 תמיכה ישנה",
      code: `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`,
      preview: "<p>🧓 היום פחות רלוונטי</p>",
    },
    {
      title: "7. refresh – הפניה אוטומטית",
      explanation: "מרענן את הדף או מפנה לאחר זמן.",
      category: "🔄 הפניה",
      code: `<meta http-equiv="refresh" content="5; url=https://example.com" />`,
      preview: "<p>⏳ הפניה אחרי 5 שניות (לא פעיל כאן)</p>",
    },
    {
      title: "8. robots – שליטה על אינדוקס",
      explanation: "קובע האם גוגל ומנועי חיפוש יאנדקסו את הדף.",
      category: "🤖 SEO",
      code: `<meta name="robots" content="index, follow" />`,
      preview: "<p>🤖 הנחיה לגוגל – לא למשתמשים</p>",
    },
    {
      title: "9. Open Graph – כותרת",
      explanation: "כותרת לשיתוף ברשתות חברתיות.",
      category: "📘 רשתות חברתיות",
      code: `<meta property="og:title" content="לימוד HTML ברמה גבוהה" />`,
      preview: "<p>📘 og:title</p>",
    },
    {
      title: "10. Open Graph – תיאור",
      explanation: "תיאור לשיתוף ברשתות חברתיות.",
      category: "📘 רשתות חברתיות",
      code: `<meta property="og:description" content="אתר מדהים ללימוד HTML" />`,
      preview: "<p>📘 og:description</p>",
    },
    {
      title: "11. Open Graph – תמונה",
      explanation: "תמונה שתוצג כשמשתפים את הדף.",
      category: "📘 רשתות חברתיות",
      code: `<meta property="og:image" content="https://example.com/image.jpg" />`,
      preview: "<p>🖼️ og:image</p>",
    },
    {
      title: "12. Twitter Card",
      explanation: "שליטה בתצוגת הדף בטוויטר.",
      category: "🐦 רשתות חברתיות",
      code: `<meta name="twitter:card" content="summary_large_image" />`,
      preview: "<p>🐦 twitter:card</p>",
    },
    {
      title: "13. Twitter Title",
      explanation: "כותרת שתוצג בטוויטר.",
      category: "🐦 רשתות חברתיות",
      code: `<meta name="twitter:title" content="קורס HTML מלא" />`,
      preview: "<p>🐦 twitter:title</p>",
    },
    {
      title: "14. CSP – מדיניות אבטחה",
      explanation: "מונע התקפות XSS. קריטי לאבטחת מידע.",
      category: "🛡️ אבטחה",
      code: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />`,
      preview: "<p>🛡️ מגביל מקורות חיצוניים</p>",
    },
    {
      title: "15. referrer",
      explanation: "שולט האם לשלוח את כתובת הדף הקודם.",
      category: "🔐 פרטיות",
      code: `<meta name="referrer" content="no-referrer" />`,
      preview: "<p>🔐 פרטיות – לא שולח referrer</p>",
    },
    {
      title: "16. theme-color",
      explanation: "צבע הדפדפן במובייל (Chrome/Android).",
      category: "🎨 UX",
      code: `<meta name="theme-color" content="#000000" />`,
      preview: "<p>🎨 צבע בריבוע הדפדפן</p>",
    },
    {
      title: "17. color-scheme",
      explanation: "תמיכה במצב כהה/בהיר בדפדפנים מודרניים.",
      category: "🌗 UX",
      code: `<meta name="color-scheme" content="light dark" />`,
      preview: "<p>🌗 מצב כהה/בהיר</p>",
    },
    {
      title: "18. application-name",
      explanation: "שם האפליקציה לדפדפנים ומובייל.",
      category: "📱 Mobile App",
      code: `<meta name="application-name" content="HTML Mastery" />`,
      preview: "<p>🧩 שם אפליקציה</p>",
    },
    {
      title: "19. generator",
      explanation: "איזו מערכת יצרה את הדף.",
      category: "🛠️ מידע טכני",
      code: `<meta name="generator" content="React + Vite" />`,
      preview: "<p>⚙️ מידע על מנוע האתר</p>",
    },
    {
      title: "20. msapplication-TileColor",
      explanation: "צבע עבור Windows tiles.",
      category: "🪟 Windows UX",
      code: `<meta name="msapplication-TileColor" content="#2b5797" />`,
      preview: "<p>🪟 צבע לאריחי Windows</p>",
    },
  ];

  return (
    <div className="page-content">
      <div className="html-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← חזרה
        </button>

        <h1 className="topic-title">
          &lt;meta&gt; – כל תגיות המטא ברמה הגבוהה ביותר
        </h1>

        <section className="topic-section">
          <h2>מה זה &lt;meta&gt;?</h2>
          <p>
            תגית <code>&lt;meta&gt;</code> מוסיפה מידע על הדף – לדפדפן, למנועי
            חיפוש, רשתות חברתיות, מערכות הפעלה ועוד. קריטית לנראות, זמינות,
            תצוגה וביצועים.
          </p>
        </section>

        {examples.map((ex, index) => (
          <section key={index} className="topic-section">
            <h2>{ex.title}</h2>
            <p>
              <strong>קטגוריה:</strong> {ex.category}
              <br />
              {ex.explanation}
            </p>
            <div className="code-preview">
              <pre>
                <code>{ex.code}</code>
              </pre>
              <CopyButton code={ex.code} />
            </div>
            <LivePreview html={ex.preview} />
          </section>
        ))}

        <section className="topic-section">
          <h2>💡 טיפ למקצוענים</h2>
          <p>
            הוסיפו תמיד בתחילת ה־<code>&lt;head&gt;</code> את השורות הבאות:
          </p>
          <div className="code-preview">
            <pre>
              <code>{`<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#ffffff" />
<meta name="color-scheme" content="light dark" />`}</code>
            </pre>
            <CopyButton
              code={`<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<meta name="theme-color" content="#ffffff" />\n<meta name="color-scheme" content="light dark" />`}
            />
          </div>
          <p>✅ זה מבטיח תאימות מלאה, נראות מעולה, ותמיכה במצבים כהים.</p>
        </section>
      </div>
    </div>
  );
}

export default MetaPage;
