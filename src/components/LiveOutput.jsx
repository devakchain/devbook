import React from "react";
import "../styles/liveoutput.scss";

/**
 * @param {string} html - קוד HTML רגיל
 * @param {string} css - קוד CSS רגיל
 * @param {string} js - קוד JavaScript רגיל
 * @param {string} jsx - קוד React (עתידי)
 * @param {string} language - השפה: "html", "js", "jsx", "scss" וכו'
 */
function LivePreview({
  html = "",
  css = "",
  js = "",
  jsx = "",
  language = "html",
}) {
  let srcDoc = "";

  if (language === "html") {
    srcDoc = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
  } else if (language === "jsx") {
    // ניתוח ריאקט אפשר לעשות עם bundler בעתיד (למשל Vite+iframe)
    srcDoc = "<p>⚠️ JSX/React live preview is under development.</p>";
  } else {
    srcDoc = "<p>Unsupported language.</p>";
  }

  return (
    <div className="live-preview-container">
      <iframe
        title="Live Preview"
        srcDoc={srcDoc}
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="300px"
      ></iframe>
    </div>
  );
}

export default LivePreview;
