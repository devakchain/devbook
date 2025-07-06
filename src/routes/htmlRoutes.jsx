import React from "react";
import { Route } from "react-router-dom";

// ייבוא כל העמודים
import HtmlPage from "../content/html/HtmlPage";
import Stage1Page from "../content/html/stage-1/Stage1Page";
import DoctypePage from "../content/html/stage-1/DoctypePage";
import HtmlHeadBodyPage from "../content/html/stage-1/HtmlHeadBodyPage";
import MetaPage from "../content/html/stage-1/MetaPage";
import LangDirPage from "../content/html/stage-1/LangDirPage";

// ייצוא בשם (Named Export) של מערך הנתיבים
export const htmlRoutes = (
  <>
    <Route path="/html" element={<HtmlPage />} />
    <Route path="/html/stage-1" element={<Stage1Page />} />
    <Route path="/html/stage-1/doctype" element={<DoctypePage />} />
    <Route path="/html/stage-1/html-head-body" element={<HtmlHeadBodyPage />} />
    <Route path="/html/stage-1/meta" element={<MetaPage />} />
    <Route path="/html/stage-1/lang-dir" element={<LangDirPage />} />
  </>
);
