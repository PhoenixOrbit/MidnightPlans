import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';
import CtaBand from '../components/CtaBand';
import useDocumentMeta from '../hooks/useDocumentMeta';

function ServiceDetailCard({ service }) {
  const img = service.imageUrl || (service.imageName ? `/images/${service.imageName}` : null);
  const included = Array.isArray(service.whatsIncluded) ? service.whatsIncluded : [];

  return (
    <article className="service-detail-card">
      {img && (
        <img
          src={img}
          alt={service.alt || service.title}
          className="service-detail-img"
          loading="lazy"
        />
      )}
      <div className="service-detail-body">
        <h3 className="service-detail-title">{service.title}</h3>
        {service.shortDescription && (
          <p className="service-detail-short">{service.shortDescription}</p>
        )}
        {service.longDescription && (
          <p className="service-detail-long">{service.longDescription}</p>
        )}
        {included.length > 0 && (
          <ul className="service-detail-included">
            {included.map((item, i) => (
              <li key={i}>
                <span aria-hidden="true">✓</span> {item}
              </li>
            ))}
          </ul>
        )}
        <Link to="/contact" className="btn-pill service-detail-cta">
          Request This Service
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  useDocumentMeta(
    'Our Services',
    'Explore Midnight Plans\' full range of balloon decoration and event styling services in Ottawa — baby showers, birthdays, gender reveals, grand openings, Persian events, and more.'
  );

  const { services, loading } = useServices();

  return (
    <>
      <section className="services-page-hero" aria-labelledby="services-page-heading">
        <div className="services-page-hero-inner">
          <span className="section-label section-label-center">What We Offer</span>
          <h1 id="services-page-heading" className="services-page-heading">Our Services</h1>
          <p className="services-page-subtitle">
            Every event we style is custom-designed around your colors, theme, and venue.
            Below is a look at what we specialize in — if you don't see exactly what you
            need, reach out and let's talk about it.
          </p>
        </div>
      </section>

      <section className="services-detail-section" aria-label="Service list">
        <div className="services-detail-inner">
          {loading ? (
            <p className="services-loading">Loading services…</p>
          ) : (
            <div className="services-detail-grid">
              {services.map((service) => (
                <ServiceDetailCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Don't See Your Event Type?"
        subtitle="We style all kinds of celebrations — reach out and let's discuss a custom package."
        buttonLabel="Get A Custom Quote"
        to="/contact"
      />
    </>
  );
}
