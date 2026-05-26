export default function Hero() {
  return (
    /* Section uses the same purple bg as the rest of the page */
    <section id="hero" className="hero" aria-labelledby="hero-title">

      {/* Rounded frame — Background.jpg fills this card */}
      <div className="hero-frame">

        {/* Left: title + tagline, sitting inside the frame */}
        <div className="hero-left">
          {/* H1 — only one per page */}
          <h1 id="hero-title" className="hero-title">
            Midnight<br />Plans
          </h1>
          <p className="hero-tagline">You go wild, I'll make it happen</p>
        </div>

        {/* Right: woman image — anchored to bottom, overflows above the frame */}
        <div className="hero-right">
          {/* ✏️ Image file: /public/images/hero-balloons.png */}
          <img
            src="/images/hero-balloons.png"
            alt="Elegant balloon decoration by Midnight Plans Ottawa"
            className="hero-img"
          />
        </div>

      </div>
    </section>
  );
}
