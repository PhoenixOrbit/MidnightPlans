export default function BalloonsBanner() {
  return (
    <section className="balloons-banner" aria-label="Midnight Plans balloon showcase">
      <video
        className="balloons-video"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/images/balloons-banner.MP4" type="video/mp4" />
      </video>

      {/* Soft gradient at the bottom — hides the Meta AI watermark naturally */}
      <div className="balloons-bottom-fade" aria-hidden="true" />
    </section>
  );
}
