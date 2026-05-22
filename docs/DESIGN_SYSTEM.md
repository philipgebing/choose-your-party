# Choose Your Party — Design System

All tokens live in `css/variables.css`. Reference them via CSS custom properties.

## Spacing (8px grid)

| Token | Value | px |
|---|---|---|
| `--space-1` | 0.25rem | 4 |
| `--space-2` | 0.5rem | 8 |
| `--space-3` | 0.75rem | 12 |
| `--space-4` | 1rem | 16 |
| `--space-5` | 1.25rem | 20 |
| `--space-6` | 1.5rem | 24 |
| `--space-8` | 2rem | 32 |
| `--space-10` | 2.5rem | 40 |
| `--space-12` | 3rem | 48 |
| `--space-16` | 4rem | 64 |
| `--space-20` | 5rem | 80 |
| `--space-24` | 6rem | 96 |

## Typography Scale

| Token | Value | px |
|---|---|---|
| `--text-hero` | clamp(2.75rem, 6vw, 3.75rem) | 44–60 |
| `--text-xl` | clamp(2rem, 3.5vw, 2.75rem) | 32–44 |
| `--text-lg` | clamp(1.5rem, 2.5vw, 1.875rem) | 24–30 |
| `--text-md` | 1.25rem | 20 |
| `--text-base` | 1rem | 16 |
| `--text-sm` | 0.9375rem | 15 |
| `--text-xs` | 0.8125rem | 13 |

## Z-index Scale

| Token | Value | Use |
|---|---|---|
| `--z-base` | 0 | Default |
| `--z-raised` | 10 | Cards, dropdowns |
| `--z-overlay` | 20 | Overlays, backdrops |
| `--z-modal` | 30 | Modals, dialogs |
| `--z-nav` | 40 | Sticky navigation |
| `--z-toast` | 50 | Toast notifications |

## Breakpoints

| Name | Range |
|---|---|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |

## Components (css/components.css)

### Buttons

```html
<!-- Primary CTA (amber) -->
<a class="btn btn-amber" href="#">Find Events</a>

<!-- Secondary/discovery (cyan) -->
<a class="btn btn-cyan" href="#">Discover Events</a>

<!-- Ghost/outlined -->
<a class="btn btn-ghost" href="#">Take the Quiz</a>

<!-- Size modifiers: btn-lg, btn-sm -->
<a class="btn btn-amber btn-lg" href="#">Find Events Now</a>
```

### Cards

```html
<!-- Standard card -->
<div class="card">...</div>

<!-- Card with cyan left accent -->
<div class="card card-accent-left">...</div>

<!-- Card with amber left accent (testimonials) -->
<div class="card card-accent-amber">...</div>
```

### Scroll Reveal

Add `.reveal` to any element to fade it in as it enters the viewport. Add `.stagger-children` to a parent for sequential delays.

```html
<div class="stagger-children">
  <div class="reveal">First</div>
  <div class="reveal">Second</div>
  <div class="reveal">Third</div>
</div>
```

## Animation Rules

- Only animate `transform` and `opacity` (compositor properties)
- Entrance animations use `ease-out`
- Interaction feedback ≤ 150ms
- All animations respect `prefers-reduced-motion` (reset.css sets 0.01ms duration)
- Bokeh loop pauses when hero is off-screen (IntersectionObserver in main.js)
