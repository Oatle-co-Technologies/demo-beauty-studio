import "./App.css";

function App() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">MOBILE BEAUTY • WE COME TO YOU</p>

            <h1>Beauty, on your terms.</h1>

            <p className="hero-description">
              Professional nails, lashes, hair and massage services brought
              directly to your door.
            </p>

            <a href="#services" className="primary-button">
              Book a home visit
            </a>

            <p className="service-area">Pretoria & surrounding areas</p>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              Beauty image
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;