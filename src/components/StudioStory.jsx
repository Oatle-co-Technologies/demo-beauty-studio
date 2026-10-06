import { useState } from "react";
import "./StudioStory.css";
import RoseDivider from "./RoseDivider";

const steps = [
  { title: "Choose your treatment", text: "Explore our services and choose the care you have in mind. Pick a preferred date and time for your home visit." },
  { title: "Start the conversation", text: "Complete the booking form to prepare your WhatsApp message. In the live service, you open WhatsApp and tap Send to share your request with the studio." },
  { title: "Confirm your home visit", text: "The studio confirms availability, your final quote and the visit address on WhatsApp. Once agreed, your beautician comes to you." },
];

export default function StudioStory() {
  const [activeStep, setActiveStep] = useState(null);
  return <>
    <RoseDivider />
    <section className="studio-about" id="about" aria-labelledby="about-title">
      <div className="studio-story-heading">
        <p className="section-eyebrow">About Mobile Beauty Studio</p>
        <h2 id="about-title">Your space.<br />Your moment.</h2>
      </div>
      <div className="studio-about-copy">
        <p className="studio-lead">Beauty should fit into your life. A quiet moment at home. A look for a special occasion. A little time set aside for yourself.</p>
        <p>Mobile Beauty Studio brings nails, lashes, braids, makeup and massage to your door in Pretoria and surrounding areas. Choose the treatment you want, tell us what you have in mind, and plan a visit around your day.</p>
        <p>Every visit starts with a conversation about your preferences, the treatment and the price, so you know what to expect before your appointment.</p>
      </div>
    </section>
    <RoseDivider />
    <section className="studio-how" id="how-it-works" aria-labelledby="how-title">
      <div className="studio-story-heading">
        <p className="section-eyebrow">How it works</p>
        <h2 id="how-title">From a little wish<br />to a home visit.</h2>
        <p>Three simple steps to beauty, brought to you.</p>
      </div>
      <ol className="visit-steps">
        {steps.map((step, index) => <li key={step.title}>
          <button
            type="button"
            className={`visit-step-number${activeStep === index ? " is-active" : ""}`}
            aria-label={`Step ${index + 1}: ${step.title}`}
            aria-expanded={activeStep === index}
            aria-controls={`visit-step-detail-${index}`}
            onClick={() => setActiveStep(index)}
          >0{index + 1}</button>
          <h3>{step.title}</h3>
        </li>)}
      </ol>
      <p className="visit-step-hint">Tap a number to explore the step.</p>
      <div className="visit-step-panels" aria-live="polite">
        {steps.map((step, index) => <div
          key={step.title}
          id={`visit-step-detail-${index}`}
          className="visit-step-detail"
          hidden={activeStep !== index}
        >
          <p>{step.text}</p>
        </div>)}
      </div>
    </section>
  </>;
}
