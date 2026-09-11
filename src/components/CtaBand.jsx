import { Link } from 'react-router-dom';

export default function CtaBand({
  title = "Let's Plan Your Event",
  subtitle = 'Ready to create something magical? Reach out and let’s discuss your vision.',
  buttonLabel = 'Get In Touch',
  to = '/contact',
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-heading">
      <div className="cta-band-inner">
        <h2 id="cta-band-heading">{title}</h2>
        <p>{subtitle}</p>
        <Link to={to} className="btn-pill btn-pill-light">{buttonLabel}</Link>
      </div>
    </section>
  );
}
