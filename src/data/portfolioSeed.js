// ── Default portfolio pieces (fallback shown when Firestore isn't
//    configured yet, or the "portfolio" collection is still empty).
//    Once the admin uploads real work in the dashboard, live Firestore
//    data takes over automatically. ──
export const PORTFOLIO_SEED = [
  {
    id: 'sample-baby-shower',
    title: 'Blush & Gold Baby Shower',
    description: 'A soft blush and gold balloon arch styled for an Ottawa baby shower.',
    eventType: 'Baby Shower',
    imageName: 'baby-shower.png',
    featured: true,
    order: 1,
  },
  {
    id: 'sample-birthday',
    title: 'Milestone Birthday Backdrop',
    description: 'A full-wall balloon backdrop designed for a milestone birthday celebration.',
    eventType: 'Birthday Party',
    imageName: 'birthday.png',
    featured: true,
    order: 2,
  },
  {
    id: 'sample-gender-reveal',
    title: 'Confetti Pop Gender Reveal',
    description: 'A dramatic reveal moment styled with a coordinated color-burst installation.',
    eventType: 'Gender Reveal',
    imageName: 'gender-reveal.png',
    featured: false,
    order: 3,
  },
  {
    id: 'sample-haft-seen',
    title: 'Elegant Haft Seen Table',
    description: 'A traditional Haft Seen table styled for Nowruz with modern accents.',
    eventType: 'Persian Event',
    imageName: 'haft-seen.png',
    featured: true,
    order: 4,
  },
];
