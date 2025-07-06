import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/html.scss";

const stages = [
  {
    id: 1,
    label: "Document Structure",
    description:
      "היכרות עם מבנה עמוד HTML: דוק־טייפ, תגיות בסיס, הגדרת קידוד ושפה.",
    path: "/html/stage-1",
  },
  {
    id: 2,
    label: "Semantic Tags",
    description:
      "הבנת ההבדלים בין תגיות מבניות כמו div, section, article ו־aside.",
    path: "/html/stage-2",
  },
  {
    id: 3,
    label: "Text Elements",
    description:
      "שימוש נכון בכותרות, פסקאות, הדגשות, קווים אופקיים ואלמנטים נוספים.",
    path: "/html/stage-3",
  },
  {
    id: 4,
    label: "Lists",
    description:
      "יצירה ושימוש ברשימות ממוינות, לא ממוינות ומילוניות (description lists).",
    path: "/html/stage-4",
  },
  {
    id: 5,
    label: "Media",
    description: "שילוב תמונות, אודיו, וידאו ו־iframe בעמודים בצורה מקצועית.",
    path: "/html/stage-5",
  },
  {
    id: 6,
    label: "Links & Navigation",
    description: "קישורים חיצוניים ופנימיים, קפיצות לעוגנים (anchors) והורדות.",
    path: "/html/stage-6",
  },
  {
    id: 7,
    label: "Forms",
    description:
      "בניית טפסים עם שדות קלט, כפתורים, תפריטים, קבוצות בחירה ועוד.",
    path: "/html/stage-7",
  },
  {
    id: 8,
    label: "Tables",
    description: "בניית טבלאות עם thead, tbody, th, td, caption ו־colgroup.",
    path: "/html/stage-8",
  },
  {
    id: 9,
    label: "Global Attributes",
    description:
      "הבנת תכונות כלליות: id, class, style, title, hidden, tabindex ועוד.",
    path: "/html/stage-9",
  },
  {
    id: 10,
    label: "Native Interactivity",
    description:
      "יצירת אינטראקטיביות בלי JavaScript – עם details, summary ו־checkbox.",
    path: "/html/stage-10",
  },
  {
    id: 11,
    label: "SEO & Metadata",
    description:
      "עקרונות בסיסיים בקידום אתרים: תגיות meta, favicon, כותרות ו־robots.",
    path: "/html/stage-11",
  },
  {
    id: 12,
    label: "Performance",
    description: "שיפור מהירות טעינה עם preload, defer, async ו־lazy loading.",
    path: "/html/stage-12",
  },
  {
    id: 13,
    label: "Accessibility",
    description:
      "שימוש נכון בתגיות aria, תפקידים (roles), תיוג נגיש וניווט מקלדת.",
    path: "/html/stage-13",
  },
  {
    id: 14,
    label: "Deprecated Tags",
    description:
      "סקירה של תגיות מיושנות שיצאו מהתקן כמו font, marquee ו־center.",
    path: "/html/stage-14",
  },
  {
    id: 15,
    label: "HTML APIs",
    description:
      "שימוש ביכולות מתקדמות כמו drag & drop, contentEditable ו־audio API.",
    path: "/html/stage-15",
  },
  {
    id: 16,
    label: "Advanced Scenarios",
    description:
      "תרחישים מיוחדים, טריקים מתקדמים, הדגמות חיות ופתרונות יצירתיים.",
    path: "/html/stage-16",
  },
];

function HtmlPage() {
  const navigate = useNavigate();

  return (
    <div className="html-page">
      <h1>שלבי שליטה מלאה ב־HTML</h1>
      <p className="page-subtitle">
        שלוט ב־HTML מהבסיס ועד לרמת מאסטר. כל שלב כולל הסבר, קוד ודוגמה חיה.
      </p>

      <div className="stage-grid">
        {stages.map((stage) => (
          <div
            key={stage.path}
            className="stage-card"
            onClick={() => navigate(stage.path)}
          >
            <span className="step-number">שלב {stage.id}</span>
            <h2 className="stage-title">{stage.label}</h2>
            <p className="stage-description">{stage.description}</p>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← חזור
      </button>
    </div>
  );
}

export default HtmlPage;
