# Choose Your Party — Landing Page

Event discovery platform landing page for the Lean Startup Bootcamp module.

## Quick Start

Open `index.html` in a browser — no build step required.

For local development with live reload:
```bash
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project Structure

```
choose-your-party-landing/
├── index.html          Main landing page (8 sections)
├── css/
│   ├── variables.css   Design tokens (colors, spacing, type, z-index)
│   ├── reset.css       CSS reset + accessibility defaults
│   ├── components.css  Reusable UI components
│   └── main.css        Layout + section styles (imports all CSS)
├── js/
│   └── main.js         Nav, FAQ accordion, scroll animations
├── assets/
│   ├── images/         Hero photo goes here (hero-placeholder.jpg)
│   └── fonts/          Local font files (optional)
└── docs/
    ├── BRAND.md        Brand voice and visual guidelines
    └── DESIGN_SYSTEM.md Design tokens and component docs
```

## Hero Photo

Replace the placeholder by adding a party/event photo to `assets/images/`:

```css
/* In css/main.css — .hero-photo rule */
background-image: url('../assets/images/your-photo.jpg');
```

Recommended: candid party/concert/venue photography, landscape orientation, 1600×900px minimum.

## Tech Stack

- Vanilla HTML, CSS, JavaScript — no framework, no build step
- Google Fonts: Playfair Display (headlines) + DM Sans (body)
- CSS custom properties for the full design system
- IntersectionObserver for scroll animations (with fallback)

## Browser Support

Chrome, Firefox, Safari, Edge — all modern evergreen browsers.
