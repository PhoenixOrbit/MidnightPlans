export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">

        {/* Contact info row */}
        <div className="footer-contact">
          <a href="tel:+14387781250" className="footer-contact-item" aria-label="Call (438) 778 1250">
            <span aria-hidden="true">📞</span>
            (438) 778 1250
          </a>
          <span className="footer-divider" aria-hidden="true">|</span>
          <a href="mailto:info@midnightplans.ca" className="footer-contact-item" aria-label="Email info@midnightplans.ca">
            <span aria-hidden="true">✉️</span>
            info@midnightplans.ca
          </a>
          <span className="footer-divider" aria-hidden="true">|</span>
          <a
            href="https://instagram.com/midnight.plans"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
            aria-label="Instagram @midnight.plans"
          >
            <span aria-hidden="true">📸</span>
            @midnight.plans
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 Midnight Plans. All rights reserved.</p>
          <p className="footer-credit">
            Designed by&nbsp;
            <a
              href="https://www.phoenixorbit.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-po-link"
              aria-label="Visit Phoenix Orbit website"
            >
              <img
                src="/images/phoenix-orbit-logo.png"
                alt="Phoenix Orbit"
                className="footer-po-logo"
              />
              <strong>Phoenix Orbit</strong>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
