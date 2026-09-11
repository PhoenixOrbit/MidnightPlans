// ── Default services (fallback shown when Firestore isn't configured yet,
//    or hasn't been seeded). Once the admin adds real services in the
//    dashboard, the live Firestore data takes over automatically. ──
export const SERVICES_SEED = [
  {
    id: 'baby-shower',
    title: 'Baby Shower Decorations',
    shortDescription: 'Soft, dreamy balloon backdrops to welcome your little one.',
    longDescription:
      "Whether it's a gender-neutral pastel theme or a bold color statement, we design balloon garlands, arches, and centerpieces that turn any venue into a magazine-worthy baby shower.",
    whatsIncluded: [
      'Custom color palette matched to your theme',
      'Balloon arch or garland backdrop',
      'Table centerpieces and accents',
      'Setup and takedown included',
    ],
    imageName: 'baby-shower.png',
    alt: 'Baby shower balloon decoration Ottawa',
    order: 1,
  },
  {
    id: 'birthday',
    title: 'Birthday Party Decorations',
    shortDescription: 'From first birthdays to milestone celebrations, styled to impress.',
    longDescription:
      'We build birthday setups around your guest of honor — favorite colors, characters, or a fully custom theme — with balloon installations that make every photo pop.',
    whatsIncluded: [
      'Theme consultation and moodboard',
      'Balloon arch, wall, or column display',
      'Number/age balloon feature',
      'Setup and takedown included',
    ],
    imageName: 'birthday.png',
    alt: 'Birthday balloon decoration Ottawa',
    order: 2,
  },
  {
    id: 'party',
    title: 'Party Decoration',
    shortDescription: 'Elegant styling for anniversaries, graduations, and general celebrations.',
    longDescription:
      'From intimate gatherings to larger celebrations, we style the space with balloon décor and accents that fit the occasion — no event is too small or too big.',
    whatsIncluded: [
      'Full venue color and style consultation',
      'Balloon installations tailored to your space',
      'Coordination with your venue timeline',
      'Setup and takedown included',
    ],
    imageName: 'party.png',
    alt: 'Party decoration Ottawa',
    order: 3,
  },
  {
    id: 'gender-reveal',
    title: 'Gender Reveal Decorations',
    shortDescription: 'A show-stopping reveal moment, designed around the surprise.',
    longDescription:
      'We design the big reveal — confetti-pop balloons, color-burst arches, or a dramatic backdrop — so the moment is as beautiful as it is memorable.',
    whatsIncluded: [
      'Reveal-balloon mechanism (pop, drop, or burst)',
      'Blue/pink coordinated backdrop',
      'Photo-ready staging area',
      'Setup and takedown included',
    ],
    imageName: 'gender-reveal.png',
    alt: 'Gender reveal decoration Ottawa',
    order: 4,
  },
  {
    id: 'grand-opening',
    title: 'Grand Opening Decorations',
    shortDescription: 'Make a bold first impression for your business launch.',
    longDescription:
      'We help storefronts and businesses celebrate their opening day with eye-catching balloon displays that draw foot traffic and photos.',
    whatsIncluded: [
      'Brand-color-matched balloon design',
      'Storefront arch or entrance display',
      'Ribbon-cutting backdrop option',
      'Setup and takedown included',
    ],
    imageName: 'grand-opening.png',
    alt: 'Grand opening decoration Ottawa',
    order: 5,
  },
  {
    id: 'soft-play',
    title: 'Sofreh Aghd Styling',
    shortDescription: 'Traditional Persian wedding ceremony spread, styled with care.',
    longDescription:
      'A beautifully arranged Sofreh Aghd honoring Persian wedding traditions, styled with attention to every symbolic detail and coordinated with your event colors.',
    whatsIncluded: [
      'Traditional Sofreh Aghd items arrangement',
      'Custom fabric and floral coordination',
      'On-site setup before the ceremony',
      'Consultation on traditional elements',
    ],
    imageName: 'soft-play.png',
    alt: 'Sofreh Aghd styling Ottawa',
    order: 6,
  },
  {
    id: 'valentines',
    title: "Valentine's Day Decorations",
    shortDescription: 'Romantic balloon styling for proposals and celebrations.',
    longDescription:
      "From proposal setups to romantic dinners, we create a soft, elegant balloon atmosphere in red, blush, and gold tones for Valentine's Day.",
    whatsIncluded: [
      'Romantic color palette (red, blush, gold)',
      'Balloon arch or heart-shaped feature',
      'Optional proposal staging',
      'Setup and takedown included',
    ],
    imageName: 'valentines.png',
    alt: "Valentine's Day balloon decoration Ottawa",
    order: 7,
  },
  {
    id: 'haft-seen',
    title: 'Haft Seen Styling',
    shortDescription: 'Elegant Persian New Year (Nowruz) table styling.',
    longDescription:
      'We design and style a full Haft Seen table for Nowruz, honoring each of the seven symbolic items with a modern, elegant presentation for your home or event.',
    whatsIncluded: [
      'All seven symbolic "S" items arranged',
      'Custom linens and decorative accents',
      'Delivery and on-site setup',
      'Consultation on traditional elements',
    ],
    imageName: 'haft-seen.png',
    alt: 'Haft Seen Persian New Year decoration Ottawa',
    order: 8,
  },
];
