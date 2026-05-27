# Midnight Plans — Landing Page

Luxury balloon decoration and event styling website for **Midnight Plans**, Ottawa.

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy this to any static host (Netlify, Vercel, GitHub Pages, etc.).

### 4. Preview the production build locally

```bash
npm run preview
```

---

## Folder Structure

```
MidnightPlans/
├── index.html                  ← SEO meta tags, JSON-LD, Google Fonts
├── package.json
├── vite.config.js
│
├── public/
│   ├── images/                 ← Drop your real photos here (see list below)
│   └── icons/
│       └── favicon.svg         ← Site favicon (balloon icon)
│
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root component, imports all sections
    │
    ├── components/             ← One file per page section
    │   ├── Navigation.jsx      ← Sticky nav + mobile hamburger menu
    │   ├── Hero.jsx            ← Full-height hero with floating balloons
    │   ├── ServingAreas.jsx    ← Ottawa / Orléans / Kanata / Gatineau cards + SEO text
    │   ├── Services.jsx        ← 8 service cards grid
    │   ├── About.jsx           ← Samira bio section
    │   ├── Contact.jsx         ← Contact info + booking form
    │   └── Footer.jsx          ← Footer with links and copyright
    │
    └── styles/
        └── main.css            ← All global styles and CSS custom properties
```

---

## How to Edit Content

Every piece of editable content has a `✏️` comment directly above it.

| What to change | Where |
|---|---|
| Business name, tagline | `src/components/Hero.jsx` → `hero-title` and `hero-tagline` |
| Hero stats (200+, 4 areas, 8+ types) | `src/components/Hero.jsx` → `BALLOONS` and hero stats block |
| Service titles & descriptions | `src/components/Services.jsx` → `SERVICES` array |
| Serving areas | `src/components/ServingAreas.jsx` → `AREAS` array |
| About / bio text | `src/components/About.jsx` → paragraph blocks |
| Phone, email, Instagram | `src/components/Contact.jsx` → `CONTACT_DETAILS` array |
| Event type dropdown options | `src/components/Contact.jsx` → `EVENT_TYPES` array |
| Brand colors | `src/styles/main.css` → `:root` CSS custom properties |
| SEO meta title & description | `index.html` → `<title>` and `<meta name="description">` |
| Structured data (schema.org) | `index.html` → `<script type="application/ld+json">` |
| Nav links | `src/components/Navigation.jsx` → `NAV_LINKS` array |
| Footer links | `src/components/Footer.jsx` → `NAV_LINKS` and `SERVICE_LINKS` |

---

## Brand Colors

All colors are CSS variables in `src/styles/main.css` → `:root`:

| Variable | Value | Usage |
|---|---|---|
| `--color-primary-bg` | `#5E57A5` | Hero & contact backgrounds |
| `--color-secondary` | `#B9A7F5` | Secondary lavender accents |
| `--color-light-lavender` | `#D9CCFF` | Gradient highlights |
| `--color-soft-purple` | `#8B74D9` | Buttons, icons, tags |
| `--color-dark-accent` | `#4B3F8F` | Footer, hover states |
| `--color-card-bg` | `#F5F1FF` | Card & section backgrounds |
| `--color-gold` | `#E8D49A` | Taglines, badges, labels |
| `--color-heading` | `#2A2145` | All headings |
| `--color-body` | `#4A4466` | Body text |

---

## Connecting the Contact Form

The form currently shows a success message after submit (no backend).

To make it actually send emails, choose one of:

**Option A — Formspree (easiest, free tier available)**
1. Sign up at https://formspree.io
2. Create a new form and copy your form ID
3. In `src/components/Contact.jsx`, replace the placeholder `fetch` call:

```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Option B — Netlify Forms**
1. Add `data-netlify="true"` to the `<form>` element
2. Deploy to Netlify — forms appear automatically in your dashboard

---

## SEO Checklist

- [x] Single `<h1>` on the page (Hero section)
- [x] Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`)
- [x] Meta title optimized for "balloon decoration Ottawa"
- [x] Meta description with local keywords
- [x] JSON-LD LocalBusiness structured data
- [x] Open Graph tags for social sharing
- [x] Canonical URL (`https://midnightplans.ca` — update before deploying)
- [x] Alt text on all image placeholders
- [x] Skip-to-content accessibility link
- [x] `aria-label` on all interactive elements
- [ ] Update `og:image` with a real 1200×630 social preview image
- [ ] Update `link rel="canonical"` with your actual domain

---

## Required Images

Replace each placeholder in the site by dropping real photos into `/public/images/`.
After adding a file, remove the placeholder `<div>` comment and uncomment the `<img>` tag in the component.

### Hero Section

| Filename | Component | Used in | Recommended Size |
|---|---|---|---|
| `hero-balloons.jpg` | `Hero.jsx` | Full-height hero right panel | **800 × 1000 px** |

### About Section

| Filename | Component | Used in | Recommended Size |
|---|---|---|---|
| `samira-profile.jpg` | `About.jsx` | Samira portrait (4:5 ratio) | **800 × 1000 px** |

### Service Cards (`Services.jsx`)

Each card shows a gradient placeholder until you add the corresponding image.

| Filename | Service Card | Recommended Size |
|---|---|---|
| `baby-shower.jpg` | Baby Shower Decorations | **600 × 600 px** |
| `birthday.jpg` | Birthday Party Decorations | **600 × 600 px** |
| `party.jpg` | Party Decorations | **600 × 600 px** |
| `gender-reveal.jpg` | Gender Reveal Decorations | **600 × 600 px** |
| `grand-opening.jpg` | Grand Opening Decorations | **600 × 600 px** |
| `soft-play.jpg` | Soft Play Area Styling | **600 × 600 px** |
| `valentines.jpg` | Valentine's Day Decorations | **600 × 600 px** |
| `haft-seen.jpg` | Haft Seen Styling | **600 × 600 px** |

### Social / SEO

| Filename | Usage | Recommended Size |
|---|---|---|
| `og-image.jpg` | Open Graph social preview (Facebook, Instagram link previews) | **1200 × 630 px** |

> **Image tips:**
> - Use `.jpg` for photos (smaller file size), `.png` for graphics with transparency
> - Compress images before uploading — use [Squoosh](https://squoosh.app) or [TinyJPG](https://tinyjpg.com)
> - Keep hero and profile images portrait-oriented (4:5 or 3:4 ratio)
> - Service card images look best when they're square or landscape (1:1 or 4:3)

---

## Replacing a Placeholder with a Real Image

**Example — replacing the Baby Shower service card:**

1. Add `baby-shower.jpg` to `/public/images/`
2. Open `src/components/Services.jsx`
3. Find the baby-shower card's image section and swap the placeholder:

```jsx
{/* BEFORE — placeholder */}
<div
  className="service-img-placeholder"
  style={{ background: service.gradient }}
  role="img"
  aria-label={service.alt}
>
  <span className="service-icon-emoji">{service.icon}</span>
  <span className="service-img-filename">{service.imageName}</span>
</div>

{/* AFTER — real image */}
<img
  src={`/images/${service.imageName}`}
  alt={service.alt}
  loading="lazy"
  width="600"
  height="600"
/>
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI components |
| [Vite 4](https://vitejs.dev) | Build tool & dev server |
| CSS Custom Properties | Design tokens / theming |
| Google Fonts | Playfair Display + Poppins |
| Schema.org JSON-LD | Local business SEO |

No additional libraries or frameworks — this keeps the bundle lean and load times fast.

---

## Deploying

**Netlify (recommended — free)**
1. Run `npm run build`
2. Drag the `dist/` folder into https://app.netlify.com/drop

**Vercel**
1. Push to a GitHub repo
2. Import at https://vercel.com/new — Vite is detected automatically

**Custom server / cPanel**
1. Run `npm run build`
2. Upload contents of `dist/` to your `public_html` folder

---

*Built for Midnight Plans — Ottawa's luxury balloon decoration specialist.*
