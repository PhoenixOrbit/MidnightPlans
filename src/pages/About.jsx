import About from '../components/About';
import CtaBand from '../components/CtaBand';
import useDocumentMeta from '../hooks/useDocumentMeta';

const VALUES = [
  {
    icon: '🎈',
    title: 'Custom Design, Every Time',
    text: 'No two events are styled the same. Every color palette, arch shape, and accent is designed around your specific vision.',
  },
  {
    icon: '✨',
    title: 'Premium Materials',
    text: 'We use high-quality, professional-grade balloons and finishes that hold their shape and shine — not the deflated look of a big-box party store.',
  },
  {
    icon: '⏱️',
    title: 'On-Time, Every Time',
    text: 'Setup is planned around your event timeline so everything is ready — and takedown handled — without you lifting a finger.',
  },
  {
    icon: '📍',
    title: 'Local Ottawa Expertise',
    text: 'Based in Ottawa and proudly serving Orléans, Kanata, and Central Gatineau, with deep experience styling both Western and Persian celebrations.',
  },
];

const PROCESS = [
  { step: '01', title: 'Consult', text: 'Tell us about your event — date, venue, colors, and vision. We\'ll talk through ideas and give you a custom quote.' },
  { step: '02', title: 'Design', text: 'We plan the full look: balloon arch or garland style, color palette, and any special accents for your theme.' },
  { step: '03', title: 'Setup', text: 'We arrive ahead of your event and install everything on-site, so the space is ready before your guests arrive.' },
  { step: '04', title: 'Enjoy', text: 'You celebrate — we handle takedown afterward so there\'s nothing left for you to clean up.' },
];

export default function AboutPage() {
  useDocumentMeta(
    'About Us',
    'Meet Samira, founder of Midnight Plans — Ottawa\'s luxury balloon decoration and event styling specialist. Learn our story, values, and process.'
  );

  return (
    <>
      <About />

      <section className="values" aria-labelledby="values-heading">
        <div className="values-inner">
          <span className="section-label section-label-center">Why Choose Us</span>
          <h2 id="values-heading" className="values-heading">What Sets Midnight Plans Apart</h2>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-icon" aria-hidden="true">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process" aria-labelledby="process-heading">
        <div className="process-inner">
          <span className="section-label section-label-center">How It Works</span>
          <h2 id="process-heading" className="process-heading">From Idea to Installation</h2>
          <div className="process-grid">
            {PROCESS.map((p) => (
              <div className="process-card" key={p.step}>
                <span className="process-step">{p.step}</span>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Start Planning?"
        subtitle="Tell us about your event and let's design something beautiful together."
        buttonLabel="Get In Touch"
        to="/contact"
      />
    </>
  );
}
