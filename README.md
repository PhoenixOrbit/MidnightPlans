# Midnight Plans — Website & Admin Dashboard

Luxury balloon decoration and event styling website for **Midnight Plans**, Ottawa.
A multi-page React site with a Firebase-backed admin dashboard for managing
services and portfolio work without touching code.

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

## Admin Dashboard

Visit `/admin` to log in and manage the site's **Services** and **Portfolio**
sections — add, edit, or delete items and upload images, all without editing
code. This requires a one-time Firebase setup — see **[SETUP_ADMIN.md](SETUP_ADMIN.md)**
for the full walkthrough. Until it's configured, the site still works normally
for visitors using the bundled sample content.

---

## Pages & Routes

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero + teasers for services, areas, testimonials |
| `/about` | About Us | Story, values, process |
| `/services` | Our Services | Full list, pulled live from Firestore (falls back to seed data) |
| `/portfolio` | Portfolio | Gallery of past work, filterable by event type |
| `/serving-areas` | Serving Areas | Ottawa, Orléans, Kanata, Central Gatineau |
| `/contact` | Contact Us | Info + booking form |
| `/admin` | Admin Login | |
| `/admin/dashboard` | Admin Dashboard | Protected — manage services & portfolio |

---

## Folder Structure

```
MidnightPlans/
├── index.html                  ← SEO meta tags, JSON-LD, Google Fonts
├── package.json
├── vite.config.js
├── .env.example                ← Firebase config template
├── SETUP_ADMIN.md              ← Admin dashboard setup guide
│
├── public/
│   ├── images/                 ← Site photos
│   └── icons/
│       └── favicon.svg
│
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Router setup (all routes)
    ├── firebase.js             ← Firebase init (auth/firestore/storage)
    │
    ├── pages/                  ← One file per route
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── Portfolio.jsx
    │   ├── ServingAreas.jsx
    │   ├── Contact.jsx
    │   ├── AdminLogin.jsx
    │   ├── AdminDashboard.jsx
    │   └── NotFound.jsx
    │
    ├── components/             ← Shared section/UI components
    │   ├── Layout.jsx          ← Nav + Outlet + Footer wrapper
    │   ├── Navigation.jsx      ← Sticky nav + mobile hamburger menu
    │   ├── ProtectedRoute.jsx  ← Guards /admin/dashboard
    │   ├── Hero.jsx, About.jsx, ServingAreas.jsx, Contact.jsx, Footer.jsx, ...
    │   └── admin/
    │       ├── ServicesManager.jsx
    │       └── PortfolioManager.jsx
    │
    ├── context/
    │   └── AuthContext.jsx     ← Firebase auth state/login/logout
    │
    ├── data/
    │   ├── adminApi.js         ← Firestore/Storage CRUD helpers
    │   ├── servicesSeed.js     ← Fallback services shown before Firestore has data
    │   └── portfolioSeed.js    ← Fallback portfolio pieces
    │
    ├── hooks/
    │   ├── useServices.js      ← Live Firestore "services" (+ seed fallback)
    │   ├── usePortfolio.js     ← Live Firestore "portfolio" (+ seed fallback)
    │   └── useDocumentMeta.js  ← Per-page <title>/meta description
    │
    └── styles/
        └── main.css            ← All global styles and CSS custom properties
```

---

## How to Edit Content

| What to change | Where |
|---|---|
| Business name, tagline | `src/components/Hero.jsx` |
| Default services (before admin adds real ones) | `src/data/servicesSeed.js` |
| Default portfolio pieces | `src/data/portfolioSeed.js` |
| About page story/values/process | `src/pages/About.jsx` |
| Serving areas descriptions | `src/pages/ServingAreas.jsx` → `AREAS` array |
| Phone, email, Instagram | `src/components/Contact.jsx` → `CONTACT_DETAILS` |
| Event type dropdown options | `src/components/Contact.jsx` → `EVENT_TYPES` |
| Brand colors | `src/styles/main.css` → `:root` CSS custom properties |
| SEO meta title & description per page | Each page's `useDocumentMeta(...)` call |
| Site-wide SEO meta / structured data | `index.html` |
| Nav links | `src/components/Navigation.jsx` → `NAV_LINKS` |

Once the admin dashboard is set up (see [SETUP_ADMIN.md](SETUP_ADMIN.md)), services
and portfolio content should be managed from `/admin/dashboard` instead of editing
the seed files directly — the live Firestore data takes over automatically.

---

## Brand Colors

All colors are CSS variables in `src/styles/main.css` → `:root`:

| Variable | Value | Usage |
|---|---|---|
| `--color-primary-bg` | `#5E57A5` | Hero & section backgrounds |
| `--color-secondary` | `#B9A7F5` | Secondary lavender accents |
| `--color-light-lavender` | `#D9CCFF` | Gradient highlights |
| `--color-soft-purple` | `#8B74D9` | Buttons, icons, tags |
| `--color-dark-accent` | `#4B3F8F` | Footer, hover states |
| `--color-card-bg` | `#F5F1FF` | Card & section backgrounds |
| `--color-gold` | `#FFD700` | Taglines, badges, labels |
| `--color-heading` | `#2A2145` | All headings |
| `--color-body` | `#4A4466` | Body text |

---

## Connecting the Contact Form

The form currently opens a `mailto:` link pre-filled with the request. To
connect it to a real backend instead, choose one of:

**Option A — Formspree (easiest, free tier available)**
1. Sign up at https://formspree.io
2. Create a new form and copy your form ID
3. In `src/components/Contact.jsx`, replace the `mailto:` submit logic with a `fetch` call to your Formspree endpoint.

**Option B — Netlify Forms**
1. Add `data-netlify="true"` to the `<form>` element
2. Deploy to Netlify — forms appear automatically in your dashboard

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI components |
| [React Router 6](https://reactrouter.com) | Multi-page routing |
| [Firebase](https://firebase.google.com) | Auth, Firestore, Storage (admin dashboard) |
| [Vite 4](https://vitejs.dev) | Build tool & dev server |
| CSS Custom Properties | Design tokens / theming |
| Google Fonts | Playfair Display + Poppins + Raleway |
| Schema.org JSON-LD | Local business SEO |

---

## Deploying

**Netlify (recommended — free)**
1. Run `npm run build`
2. Drag the `dist/` folder into https://app.netlify.com/drop
3. Add the `VITE_FIREBASE_*` env vars in Netlify's site settings if using the admin dashboard.

**Vercel**
1. Push to a GitHub repo
2. Import at https://vercel.com/new — Vite is detected automatically
3. Add the `VITE_FIREBASE_*` env vars in the project settings.

**GitHub Pages (`gh-pages`)**
```bash
npm run deploy
```
`predeploy` automatically copies `index.html` to `404.html` in the build output —
this is what lets deep links like `/services` work on GitHub Pages, which has no
native support for client-side routing.

---

*Built for Midnight Plans — Ottawa's luxury balloon decoration specialist.*
