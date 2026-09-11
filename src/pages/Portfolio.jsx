import { useMemo, useState } from 'react';
import usePortfolio from '../hooks/usePortfolio';
import CtaBand from '../components/CtaBand';
import useDocumentMeta from '../hooks/useDocumentMeta';

function PortfolioCard({ item }) {
  const img = item.imageUrl || (item.imageName ? `/images/${item.imageName}` : null);
  return (
    <article className="portfolio-card" tabIndex={0}>
      {img && (
        <img
          src={img}
          alt={item.title}
          className="portfolio-card-img"
          loading="lazy"
        />
      )}
      {item.featured && <span className="portfolio-card-featured">★ Featured</span>}
      <div className="portfolio-card-overlay">
        {item.eventType && <span className="portfolio-card-tag">{item.eventType}</span>}
        <h3 className="portfolio-card-title">{item.title}</h3>
        {item.description && <p className="portfolio-card-desc">{item.description}</p>}
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  useDocumentMeta(
    'Portfolio',
    'Browse real balloon decoration and event styling work by Midnight Plans in Ottawa — baby showers, birthdays, gender reveals, Persian events, and more.'
  );

  const { portfolio, loading } = usePortfolio();
  const [filter, setFilter] = useState('All');

  const eventTypes = useMemo(() => {
    const types = new Set(portfolio.map((p) => p.eventType).filter(Boolean));
    return ['All', ...Array.from(types)];
  }, [portfolio]);

  const filtered = filter === 'All' ? portfolio : portfolio.filter((p) => p.eventType === filter);

  return (
    <>
      <section className="portfolio-hero" aria-labelledby="portfolio-heading">
        <div className="portfolio-hero-inner">
          <span className="section-label section-label-center">Our Work</span>
          <h1 id="portfolio-heading" className="portfolio-heading">Portfolio</h1>
          <p className="portfolio-subtitle">
            A look at real events we've styled around Ottawa, Orléans, Kanata, and Gatineau.
          </p>
        </div>
      </section>

      <section className="portfolio-section" aria-label="Portfolio gallery">
        <div className="portfolio-inner">
          {eventTypes.length > 2 && (
            <div className="portfolio-filters" role="group" aria-label="Filter by event type">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`portfolio-filter-pill${filter === type ? ' active' : ''}`}
                  onClick={() => setFilter(type)}
                  aria-pressed={filter === type}
                >
                  {type}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <p className="services-loading">Loading portfolio…</p>
          ) : filtered.length === 0 ? (
            <p className="services-loading">No portfolio pieces yet — check back soon.</p>
          ) : (
            <div className="portfolio-grid">
              {filtered.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Love What You See?"
        subtitle="Let's design something just as beautiful for your next event."
        buttonLabel="Book Your Event"
        to="/contact"
      />
    </>
  );
}
