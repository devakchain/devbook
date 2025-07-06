// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { javascriptRoutes } from "./routes/javascriptRoutes";
import { htmlRoutes } from "./routes/htmlRoutes"; // ← חדש
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {javascriptRoutes}
        {htmlRoutes} {/* ← כאן מצורף הנתיב של HTML Supreme */}
      </Routes>
    </>
  );
}

export default App;
