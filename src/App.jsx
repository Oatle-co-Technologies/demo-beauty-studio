import "./App.css";
import beautyLogo from "./assets/beauty-studio-logo.png";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <Navbar />

        <div className="hero-content">
          <div className="brand-lockup">
            <img
              src={beautyLogo}
              alt=""
              className="brand-mark"
            />

            <h1>
              <span>Mobile</span>
              <span>Beauty</span>
              <span>Studio</span>
            </h1>
          </div>

          <p className="hero-description">
            Professional nails, lashes, hair and massage services brought
            directly to your door.
          </p>

          <a href="#booking" className="primary-button">
            Book a home visit
          </a>

          <p className="service-area">
            Pretoria & surrounding areas
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;