import { Link } from 'react-router-dom';

export default function ServingAreasTeaser() {
  return (
    <section id="serving-areas-teaser" className="serving-areas" aria-labelledby="serving-teaser-heading">
      <div className="serving-inner">
        <div className="serving-card">
          <div className="serving-text">
            <h2 id="serving-teaser-heading" className="serving-card-heading">
              Serving Areas
            </h2>
            <div className="areas-pill" aria-label="Areas served">
              Ottawa | Orléans | Central Gatineau | Kanata
            </div>
            <Link to="/serving-areas" className="btn-pill teaser-cta-inline">
              See Areas We Cover
            </Link>
          </div>

          <img
            src="/images/ottawa-city.png"
            alt="Ottawa Parliament Hill — Midnight Plans serves the Ottawa region"
            className="ottawa-img"
          />
        </div>

        <div className="van-wrap">
          <img
            src="/images/van.png"
            alt="Midnight Plans purple Volkswagen van"
            className="van-img"
          />
        </div>
      </div>
    </section>
  );
}
