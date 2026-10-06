import { useState } from "react";
import "./Booking.css";

function todayInPretoria() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Johannesburg", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const value = (type) => parts.find((part) => part.type === type).value;
  return `${value("year")}-${value("month")}-${value("day")}`;
}

export default function Booking({ services }) {
  const [request, setRequest] = useState(null);
  const [error, setError] = useState("");
  const minimumDate = todayInPretoria();

  function reviewRequest(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    for (const key of Object.keys(data)) data[key] = data[key].trim();
    if (!data.name || !data.phone || !data.area) {
      setError("Please enter your name, phone number and suburb.");
      return;
    }
    if (!/^\+?[\d\s()-]{7,20}$/.test(data.phone) || data.phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number, including your area or country code.");
      return;
    }
    if (data.date < todayInPretoria()) {
      setError("Please choose today or a future date.");
      return;
    }
    setError("");
    setRequest(data);
  }

  return (
    <section className="booking" id="booking" aria-labelledby="booking-title">
      <div className="booking-intro">
        <p className="section-eyebrow">Your next moment of care</p>
        <h2 id="booking-title">Make room<br />for you.</h2>
        <p>Choose your treatment and preferred date. We bring the beauty experience to your door.</p>
      </div>

      <div className="booking-panel">
        <h3>Plan your home visit</h3>
        <p className="booking-demo">Your preferred date and time are subject to availability. Treatment details and the final quote are agreed before your visit.</p>
        <form onSubmit={reviewRequest} onChange={() => { setRequest(null); setError(""); }}>
          <div className="booking-fields">
            <label className="booking-wide" htmlFor="booking-service">Choose a service
              <select id="booking-service" name="service" defaultValue="" required>
                <option value="" disabled>Select your treatment</option>
                {services.map((service) => <option key={service.id} value={service.name}>{service.name}</option>)}
              </select>
            </label>
            <label htmlFor="booking-date">Preferred date
              <input id="booking-date" name="date" type="date" min={minimumDate} required />
            </label>
            <label htmlFor="booking-time">Preferred time
              <select id="booking-time" name="time" defaultValue="" required>
                <option value="" disabled>Select a time</option>
                <option>Morning</option><option>Afternoon</option><option>Flexible</option>
              </select>
            </label>
            <label htmlFor="booking-name">Full name
              <input id="booking-name" name="name" autoComplete="name" maxLength={100} required />
            </label>
            <label htmlFor="booking-phone">Phone number
              <input id="booking-phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 082 123 4567" maxLength={20} required />
            </label>
            <label className="booking-wide" htmlFor="booking-area">Suburb / area
              <input id="booking-area" name="area" autoComplete="address-level3" placeholder="Where would you like your home visit?" maxLength={150} required />
            </label>
            <label className="booking-wide" htmlFor="booking-notes">Anything we should know? <span>(optional)</span>
              <textarea id="booking-notes" name="notes" rows={3} maxLength={1000} placeholder="Your preferred style, occasion or questions…" />
            </label>
          </div>
          {error && <p className="booking-error" role="alert">{error}</p>}
          <button className="booking-submit" type="submit">Preview booking message <span aria-hidden="true">→</span></button>
        </form>
        {request && <div className="booking-review" role="status">
          <h4>Your WhatsApp message preview</h4>
          <p className="booking-message">{[
            "Hi Mobile Beauty Studio! I’d like to request a home visit.",
            "",
            `Treatment: ${request.service}`,
            `Preferred date: ${new Intl.DateTimeFormat("en-ZA", { dateStyle: "long", timeZone: "Africa/Johannesburg" }).format(new Date(`${request.date}T12:00:00+02:00`))}`,
            `Preferred time: ${request.time}`,
            `Name: ${request.name}`,
            `Phone: ${request.phone}`,
            `Area: ${request.area}`,
            ...(request.notes ? [`Notes: ${request.notes}`] : []),
            "",
            "Please confirm availability and the final quote. Thank you!",
          ].join("\n")}</p>
          <p>This is a preview. No booking request has been sent.</p>
        </div>}
      </div>
    </section>
  );
}
