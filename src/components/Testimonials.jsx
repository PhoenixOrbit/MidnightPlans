// ✏️ Placeholder testimonials — replace with real client quotes once available.
const TESTIMONIALS = [
  {
    quote: 'Midnight Plans turned our living room into something out of a magazine. Every detail was perfect.',
    author: 'Happy Client',
    event: 'Baby Shower, Ottawa',
  },
  {
    quote: "Samira understood our vision immediately and the balloon arch was the highlight of the whole party.",
    author: 'Happy Client',
    event: 'Birthday Party, Kanata',
  },
  {
    quote: 'Professional, on time, and the Haft Seen table was absolutely beautiful. Highly recommend.',
    author: 'Happy Client',
    event: 'Nowruz, Orléans',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner">
        <span className="section-label section-label-center">Kind Words</span>
        <h2 id="testimonials-heading" className="testimonials-heading">What Clients Say</h2>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <blockquote className="testimonial-card" key={i}>
              <p className="testimonial-quote">“{t.quote}”</p>
              <footer className="testimonial-footer">
                <span className="testimonial-author">{t.author}</span>
                <span className="testimonial-event">{t.event}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
