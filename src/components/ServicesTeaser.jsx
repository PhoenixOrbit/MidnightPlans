import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';

function ServiceCard({ service }) {
  const img = service.imageUrl || (service.imageName ? `/images/${service.imageName}` : null);
  return (
    <Link to="/services" className="service-card" aria-label={service.title}>
      {img && (
        <img src={img} alt={service.alt || service.title} className="service-card-img" loading="lazy" />
      )}
      <p className="service-card-title">{service.title}</p>
    </Link>
  );
}

export default function ServicesTeaser() {
  const { services } = useServices();
  const half = Math.ceil(services.length / 2);
  const left = services.slice(0, half);
  const right = services.slice(half);

  return (
    <section id="services-teaser" className="services" aria-labelledby="services-teaser-heading">
      <div className="services-inner">
        <span className="section-label section-label-center">What We Offer</span>
        <h2 id="services-teaser-heading" className="services-heading">
          Our Services
        </h2>

        <div className="services-frame">
          <div className="services-layout">
            <div className="services-col" role="list" aria-label="Left service cards">
              {left.map((s) => (
                <div role="listitem" key={s.id}><ServiceCard service={s} /></div>
              ))}
            </div>

            <div className="star-balloon-wrap" aria-hidden="true">
              <img src="/images/star-balloon.png" alt="" className="star-balloon-img" />
            </div>

            <div className="services-col" role="list" aria-label="Right service cards">
              {right.map((s) => (
                <div role="listitem" key={s.id}><ServiceCard service={s} /></div>
              ))}
            </div>
          </div>
        </div>

        <div className="teaser-cta">
          <Link to="/services" className="btn-pill">View All Services</Link>
        </div>
      </div>
    </section>
  );
}
