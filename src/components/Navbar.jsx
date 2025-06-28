import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.scss";

function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/">
            Code<span>Book</span>
          </Link>
        </div>

        <div
          className={`navbar__toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar__links ${isOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/javascript"
            className={isActive("/javascript") ? "active" : ""}
            onClick={handleLinkClick}
          >
            JavaScript
          </Link>
          <Link
            to="/html"
            className={isActive("/html") ? "active" : ""}
            onClick={handleLinkClick}
          >
            HTML
          </Link>
          <Link
            to="/css"
            className={isActive("/css") ? "active" : ""}
            onClick={handleLinkClick}
          >
            CSS
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
