import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-brand">
        Mobile Beauty Studio
      </a>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>

        <a href="#booking" className="nav-book">
          Book Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;