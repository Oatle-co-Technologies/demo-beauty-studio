import beautyLogo from "../assets/beauty-studio-logo.png";
import "./Footer.css";

export default function Footer() {
  const year = new Intl.DateTimeFormat("en-ZA", { year: "numeric", timeZone: "Africa/Johannesburg" }).format(new Date());
  return <footer className="site-footer">
    <div className="footer-content">
      <a className="footer-brand" href="#home"><img src={beautyLogo} alt="" className="footer-brand-logo" /><span>Mobile Beauty Studio</span></a>
      <p>Beauty, brought to you.</p>
      <p className="footer-area">Pretoria & surrounding areas</p>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#how-it-works">How it works</a>
        <a href="#booking">Bookings</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <div className="footer-socials" aria-label="Social media">
        <span className="footer-social" role="img" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-dot" cx="17.5" cy="6.5" r="1" /></svg>
        </span>
        <span className="footer-social" role="img" aria-label="Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1 .4-2 2-2h2V1.5c-.7-.1-1.8-.2-3-.2-3 0-5 1.8-5 5V9H7v4h3v8" /></svg>
        </span>
        <span className="footer-social" role="img" aria-label="TikTok" title="TikTok">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v13a5 5 0 1 1-5-5v4a1.5 1.5 0 1 0 1.5 1.5V3H14c.5 3 2 4.5 5 5v3a8 8 0 0 1-5-2" /></svg>
        </span>
      </div>
      <small>© {year} Mobile Beauty Studio · Demo website</small>
    </div>
  </footer>;
}
