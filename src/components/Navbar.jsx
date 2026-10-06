import "./Navbar.css";
import beautyLogo from "../assets/beauty-studio-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-brand">
        <img src={beautyLogo} alt="" className="nav-brand-logo" />
        <span>Mobile Beauty Studio</span>
      </a>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#how-it-works">How It Works</a>

        <a href="#booking" className="nav-book">
          Book Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;