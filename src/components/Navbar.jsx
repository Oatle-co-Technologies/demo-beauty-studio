import { useRef, useState } from "react";
import "./Navbar.css";
import beautyLogo from "../assets/beauty-studio-logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  return (
    <nav className="navbar" aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
        toggleRef.current?.focus();
      }
    }}>
      <a href="#home" className="nav-brand" onClick={closeMenu}>
        <img src={beautyLogo} loading="eager" fetchPriority="high" alt="" className="nav-brand-logo" />
        <span>Mobile Beauty Studio</span>
      </a>
      <button className="nav-toggle" type="button" ref={toggleRef}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen} aria-controls="main-nav-links"
        onClick={() => setMenuOpen((open) => !open)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      <div id="main-nav-links" className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
        <a href="#services" onClick={closeMenu}>Services &amp; Pricing</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
        <a href="#booking" className="nav-book" onClick={closeMenu}>Book Now</a>
      </div>
    </nav>
  );
}
