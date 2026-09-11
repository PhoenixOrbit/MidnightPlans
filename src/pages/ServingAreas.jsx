import ServingAreas from '../components/ServingAreas';
import CtaBand from '../components/CtaBand';
import useDocumentMeta from '../hooks/useDocumentMeta';

const AREAS = [
  {
    name: 'Ottawa',
    text: 'Our home base. From downtown condos to family homes across the city, we style baby showers, birthdays, and Persian celebrations throughout Ottawa.',
  },
  {
    name: 'Orléans',
    text: 'We regularly style events across Orléans — from backyard birthday parties to gender reveals and community hall bookings.',
  },
  {
    name: 'Kanata',
    text: 'Serving Kanata families and businesses with balloon installations for milestone birthdays, grand openings, and holiday celebrations.',
  },
  {
    name: 'Central Gatineau',
    text: 'Just across the river, we bring the same custom balloon styling to events in Central Gatineau — delivery and setup included.',
  },
];

export default function ServingAreasPage() {
  useDocumentMeta(
    'Serving Areas',
    'Midnight Plans provides balloon decoration and event styling across Ottawa, Orléans, Kanata, and Central Gatineau.'
  );

  return (
    <>
      <ServingAreas />

      <section className="areas-detail" aria-labelledby="areas-detail-heading">
        <div className="areas-detail-inner">
          <span className="section-label section-label-center">Where We Work</span>
          <h2 id="areas-detail-heading" className="areas-detail-heading">
            Balloon Decoration Across the Ottawa Region
          </h2>
          <div className="areas-detail-grid">
            {AREAS.map((area) => (
              <div className="area-detail-card" key={area.name}>
                <h3 className="area-detail-title">{area.name}</h3>
                <p className="area-detail-text">{area.text}</p>
              </div>
            ))}
          </div>
          <p className="areas-detail-note">
            Don't see your area listed? Reach out anyway — we're happy to discuss travel
            for events outside our usual radius.
          </p>
        </div>
      </section>

      <CtaBand
        title="Planning an Event Near You?"
        subtitle="Let's talk about your date, venue, and vision."
        buttonLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
