# Design

## Visual Theme

Monochrome defense-tech minimalism with a visible grid, large grotesque typography, restrained reveal motion, and minimal yellow signal accents. The atmosphere is dark but not blue-black: charcoal, smoke, graphite, warm off-white, and a low-chroma amber.

Physical scene: a mixed audience reviews the company on a laptop or large monitor in a quiet office, expecting clarity, discretion, and engineering credibility rather than spectacle.

## Color Palette

- `--ink`: `oklch(0.12 0.006 90)` for primary surfaces.
- `--panel`: `oklch(0.18 0.006 90)` for secondary bands.
- `--line`: `oklch(0.36 0.006 90 / 0.42)` for grid and borders.
- `--text`: `oklch(0.91 0.008 95)` for primary text.
- `--muted`: `oklch(0.68 0.008 95)` for secondary text.
- `--accent`: `oklch(0.77 0.14 86)` for sparse active states and signal marks.

## Typography

Use a committed neo-grotesque sans stack close to Neue Haas: Helvetica Neue first, Noto Sans as the web/Cyrillic fallback, then Arial. Avoid monospace. Hierarchy comes from scale, weight, case, and spacing, not novelty.

## Components

- Navigation: compact fixed header, text links plus small functional icons.
- Language toggle: UA / EN, persistent per browser.
- Hero: full-viewport first impression with image, grid overlay, clear "who we are" copy, Catalog and Price CTAs.
- Trust block: split military and procurement proof without sensitive details.
- Product constructor: product line cards paired with selectable frame, sensor, link, and mission choices. No public prices or full technical specifications.
- Request routing: support, procurement, and partnership as first-step choices.
- Footer: contact, language, legal information, and About link.
- Footer direction: framed dark technical panel with upper metadata, thin horizontal rules, compact legal row, and an oversized `/PUF` wordmark near the bottom.

## Motion

Use IntersectionObserver reveals with short stagger, opacity, and transform only. No bounce. Respect `prefers-reduced-motion`.

## Layout

Use full-width bands and strict grid alignment. Cards may appear for repeated product/news items only. Radius should stay at or below 8px.
