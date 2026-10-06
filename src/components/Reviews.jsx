import "./Reviews.css";

const reviews = [
  { name: "Sample client · Nails", quote: "Having my nails done at home made it so easy to fit a little care into a busy day. A lovely way to slow down and feel polished." },
  { name: "Sample client · Makeup", quote: "Getting ready for a special occasion felt so much calmer in my own space. I loved having time to talk through the look I wanted." },
  { name: "Sample client · Massage", quote: "No travelling afterwards, just time to relax at home. The home-visit experience is exactly the kind of convenience I was looking for." },
];

export default function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <p className="section-eyebrow">A little love from our clients</p>
      <h2 id="reviews-title">Care worth<br />talking about.</h2>
      <p className="reviews-note">Illustrative reviews for this demo. These are sample stories, not verified customer testimonials.</p>
      <div className="reviews-grid">
        {reviews.map((review) => <figure className="review-card" key={review.name}>
          <span className="review-quote-mark" aria-hidden="true">“</span>
          <blockquote><p>{review.quote}</p></blockquote>
          <figcaption>{review.name}</figcaption>
        </figure>)}
      </div>
    </section>
  );
}
