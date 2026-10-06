import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import StudioStory from "./components/StudioStory";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import RoseDivider from "./components/RoseDivider";

import beautyLogo from "./assets/beauty-studio-logo.png";

import braidsImage from "./assets/services/mobile-studio-braids.jpg";
import lashesImage from "./assets/services/mobile-studio-lashe-installation.jpg";
import makeupImage from "./assets/services/mobile-studio-makeup.jpg";
import massageImage from "./assets/services/mobile-studio-massages.jpg";
import nailsImage from "./assets/services/mobile-studio-nails .jpg";
import pedicureImage from "./assets/services/mobile-studio-pedicure.jpg";
import eyebrowsImage from "./assets/services/mobile-stuido-eyebrowshaping.jpg";

const services = [
  {
    id: 1,
    name: "Braids",
    image: braidsImage,
    description:
      "Beautiful protective styles professionally done in the comfort of your own space.",
    priceFrom: 350,
    priceTo: 950,
  },
  {
    id: 2,
    name: "Lash Installation",
    image: lashesImage,
    description:
      "Professionally applied lashes designed to complement your eyes and your preferred look.",
    priceFrom: 250,
    priceTo: 650,
  },
  {
    id: 3,
    name: "Makeup",
    image: makeupImage,
    description:
      "Professional makeup for events, celebrations and moments that deserve something special.",
    priceFrom: 400,
    priceTo: 900,
  },
  {
    id: 4,
    name: "Massage",
    image: massageImage,
    description:
      "Relax and unwind with a professional massage in the comfort of your own space.",
    priceFrom: 450,
    priceTo: 850,
  },
  {
    id: 5,
    name: "Nails",
    image: nailsImage,
    description:
      "Beautiful, professionally finished nails without having to leave home.",
    priceFrom: 250,
    priceTo: 650,
  },
  {
    id: 6,
    name: "Pedicure",
    image: pedicureImage,
    description:
      "Professional foot and nail care designed to leave you feeling polished and refreshed.",
    priceFrom: 250,
    priceTo: 550,
  },
  {
    id: 7,
    name: "Eyebrows",
    image: eyebrowsImage,
    description:
      "Professional eyebrow shaping and grooming tailored to complement your natural features.",
    priceFrom: 150,
    priceTo: 400,
  },
];

function App() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = [...document.querySelectorAll(
      ".services-heading, .service-image, .studio-story-heading, .studio-about-copy, .visit-steps li, .booking-intro, .booking-panel, .reviews > h2, .reviews-note, .review-card, .footer-content, .rose-divider"
    )];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("motion-visible");
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => {
      // Content already on screen stays visible, including direct section links.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add("motion-reveal");
      observer.observe(element);
    });
    const showAll = () => {
      if (preference.matches) elements.forEach((element) => element.classList.add("motion-visible"));
    };
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      elements.forEach((element) => element.classList.remove("motion-reveal", "motion-visible"));
    };
  }, []);

  const [selectedService, setSelectedService] = useState(null);

  const dialogRef = useRef(null);
  const touchStart = useRef(null);
  const isServiceOpen = selectedService !== null;

  useEffect(() => {
    if (!isServiceOpen) return;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("button")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedService(null);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setSelectedService((current) => current === null ? null :
          (current + direction + services.length) % services.length);
      }
      if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isServiceOpen]);

  const openService = (index) => {
    setSelectedService(index);
  };

  const closeService = () => {
    setSelectedService(null);
  };

  const showPreviousService = () => {
    setSelectedService((current) =>
      current === null ? null : (current + services.length - 1) % services.length
    );
  };

  const showNextService = () => {
    setSelectedService((current) =>
      current === null ? null : (current + 1) % services.length
    );
  };

  return (
    <>
    <Navbar />
    <main>
      {/* HERO */}
      <section className="hero" id="home">
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

      {/* SERVICES */}
      <RoseDivider />
      <section className="services" id="services">
        <div className="services-heading">
          <p className="section-eyebrow">Our Services</p>

          <h2>
            Beauty,
            <br />
            brought to you.
          </h2>

          <p className="services-intro">
            Professional beauty treatments in the comfort of your own space.
            Select a service to explore treatments and pricing.
          </p>
        </div>

        <div className="services-gallery">
          {services.map((service, index) => (
            <button
              type="button"
              className={`service-image service-image-${index + 1}`}
              key={service.id}
              onClick={() => openService(index)}
              aria-label={`View ${service.name}`}
            >
              <img
                src={service.image}
                alt={service.name}
              />

              <span className="service-hover-label">
                {service.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      <StudioStory />
      <RoseDivider />
      <Booking services={services} />
      <RoseDivider />
      <Reviews />

      {/* SERVICE LIGHTBOX */}
      {selectedService !== null && (
        <div
          className="service-lightbox"

        >
          <button
            type="button"
            className="lightbox-backdrop"
            onClick={closeService}
            aria-label="Close service details"
          />

          <div
            className="lightbox-card"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${services[selectedService].name} service details`}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeService}
              aria-label="Close"
            >
              ×
            </button>

            <div
              className="lightbox-image"
              onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
              onTouchCancel={() => { touchStart.current = null; }}
              onTouchEnd={(event) => {
                if (touchStart.current === null) return;
                const distance = touchStart.current - event.changedTouches[0].clientX;
                touchStart.current = null;
                if (distance > 50) showNextService();
                if (distance < -50) showPreviousService();
              }}
            >
              <img
                src={services[selectedService].image}
                alt={services[selectedService].name}
              />
            </div>

            <div className="lightbox-content">
              <div className="lightbox-copy" aria-live="polite">
                <p className="section-eyebrow">
                  Mobile Beauty Studio
                </p>

                <h3>
                  {services[selectedService].name}
                </h3>

                <p className="service-description">
                  {services[selectedService].description}
                </p>

                <p className="service-price">
                  From{" "}
                  <strong>
                    R{services[selectedService].priceFrom}
                  </strong>{" "}
                  – R{services[selectedService].priceTo}
                </p>
              </div>

              <div className="lightbox-navigation">
                <button
                  type="button"
                  onClick={showPreviousService}
                  aria-label="Previous service"
                >
                  ←
                </button>

                <span>
                  {selectedService + 1} / {services.length}
                </span>

                <button
                  type="button"
                  onClick={showNextService}
                  aria-label="Next service"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
    <Footer />
    </>
  );
}

export default App;