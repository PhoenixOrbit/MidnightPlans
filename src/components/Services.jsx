// ── Service data ──────────────────────────────────────────────
// ✏️ Edit titles and image filenames here.
// All images should be placed in /public/images/

const LEFT_SERVICES = [
  {
    id:        'baby-shower',
    title:     'Baby Shower',
    imageName: 'baby-shower.png',
    alt:       'Baby shower balloon decoration Ottawa',
  },
  {
    id:        'birthday',
    title:     'Birthday Party',
    imageName: 'birthday.png',
    alt:       'Birthday balloon decoration Ottawa',
  },
  {
    id:        'party',
    title:     'Party Decoration',
    imageName: 'party.png',
    alt:       'Party decoration Ottawa',
  },
  {
    id:        'gender-reveal',
    title:     'Gender Reveal',
    imageName: 'gender-reveal.png',
    alt:       'Gender reveal decoration Ottawa',
  },
];

const RIGHT_SERVICES = [
  {
    id:        'grand-opening',
    title:     'Grand Opening',
    imageName: 'grand-opening.png',
    alt:       'Grand opening decoration Ottawa',
  },
  {
    id:        'soft-play',
    title:     'Sofreh Aghd',
    imageName: 'soft-play.png',
    alt:       'Soft play area styling Ottawa',
  },
  {
    id:        'valentines',
    title:     "Valentine's Day",
    imageName: 'valentines.png',
    alt:       "Valentine's Day balloon decoration Ottawa",
  },
  {
    id:        'haft-seen',
    title:     'Haft Seen',
    imageName: 'haft-seen.png',
    alt:       'Haft Seen Persian New Year decoration Ottawa',
  },
];

function ServiceCard({ service }) {
  return (
    <article className="service-card" aria-label={service.title}>
      <img
        src={`/images/${service.imageName}`}
        alt={service.alt}
        className="service-card-img"
        loading="lazy"
      />
      <p className="service-card-title">{service.title}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="services-inner">

        <h2 id="services-heading" className="services-heading">
          Our Services
        </h2>

        {/* Lighter purple frame around the grid */}
        <div className="services-frame">
        {/* 3-column layout: left 2x2 | star balloon | right 2x2 */}
        <div className="services-layout">

          {/* Left 2×2 grid */}
          <div className="services-col" role="list" aria-label="Left service cards">
            {LEFT_SERVICES.map((s) => (
              <div role="listitem" key={s.id}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>

          {/*
            Center: star balloon
            ✏️ Image file: /public/images/star-balloon.png
          */}
          <div className="star-balloon-wrap" aria-hidden="true">
            <img
              src="/images/star-balloon.png"
              alt=""
              className="star-balloon-img"
            />
          </div>

          {/* Right 2×2 grid */}
          <div className="services-col" role="list" aria-label="Right service cards">
            {RIGHT_SERVICES.map((s) => (
              <div role="listitem" key={s.id}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>

        </div>
        </div>{/* end services-frame */}
      </div>
    </section>
  );
}
