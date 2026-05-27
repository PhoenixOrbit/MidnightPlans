export default function ServingAreas() {
  return (
    <section id="serving-areas" className="serving-areas" aria-labelledby="serving-heading">
      <div className="serving-inner">

        {/* White card — "Serving Areas" + Ottawa photo */}
        <div className="serving-card">

          {/* Left: heading + areas pill */}
          <div className="serving-text">
            <h2 id="serving-heading" className="serving-card-heading">
              Serving Areas
            </h2>

            {/* ✏️ Edit area names inside the pill here */}
            <div className="areas-pill" aria-label="Areas served">
              Ottawa | Orléans | Central Gatineau | Kanata
            </div>
          </div>

          {/*
            Right: Ottawa Parliament photo
            ✏️ Image file: /public/images/ottawa-city.png
          */}
          <img
            src="/images/ottawa-city.png"
            alt="Ottawa Parliament Hill — Midnight Plans serves the Ottawa region"
            className="ottawa-img"
          />
        </div>

        {/*
          VW Van — sits below the card, slightly overlapping
          ✏️ Image file: /public/images/van.png
        */}
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
