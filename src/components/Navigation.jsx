import { useState, useEffect } from 'react';

// ── Edit nav links here ──────────────────────────────────────
const NAV_LINKS = [
  { label: 'Our Services',  id: 'services'      },
  { label: 'Serving Areas', id: 'serving-areas' },
  { label: 'About us',      id: 'about'         },
  { label: 'Contact us',    id: 'contact'       },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navigation() {
  const [activeId, setActiveId] = useState('');

  // Highlight the nav pill matching the current visible section
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="nav-wrapper" role="navigation" aria-label="Main navigation">
      <nav className="main-nav">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            className={`nav-pill${activeId === link.id ? ' active' : ''}`}
            onClick={() => { scrollTo(link.id); setActiveId(link.id); }}
            aria-label={`Go to ${link.label}`}
            aria-current={activeId === link.id ? 'true' : undefined}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
