import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// ── Edit nav links here ──────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',          to: '/'              },
  { label: 'Our Services',  to: '/services'      },
  { label: 'Portfolio',     to: '/portfolio'     },
  { label: 'Serving Areas', to: '/serving-areas' },
  { label: 'About Us',      to: '/about'         },
  { label: 'Contact Us',    to: '/contact'       },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on every navigation.
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <div className="nav-wrapper" role="navigation" aria-label="Main navigation">
      <nav className="main-nav">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `nav-pill${isActive ? ' active' : ''}`}
            aria-label={`Go to ${link.label}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile hamburger toggle */}
      <button
        type="button"
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-nav-panel"
        className={`nav-mobile-panel${menuOpen ? ' open' : ''}`}
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="tel:+14387781250" className="nav-mobile-cta">
          📞 (438) 778 1250
        </a>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="nav-mobile-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
