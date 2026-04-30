# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for **Feel-In**, a social connection app. Hosted on **GitHub Pages** with custom domain `feel-in.app` (via CNAME file). No build system, no package manager, no test framework — just serve the files directly.

## Development

Open `index.html` in a browser. No build step required. To preview locally with a server:

```
python3 -m http.server 8000
```

## Architecture

### File Layout

- `index.html` — Main landing page (hero, pillars, how-it-works, newsletter CTA, modal)
- `privacy.html` — Privacy policy (self-contained with inline styles and its own i18n)
- `styles.css` — All styles for `index.html`; uses CSS custom properties defined in `:root`
- `scripts.js` — All JS in a single IIFE: i18n, modal, newsletter submission, animations

### i18n System

Translations live in the `i18n` object inside `scripts.js` (es, en, pt). HTML elements use `data-i18n="keyName"` for text content and `data-i18n-attr="attribute:keyName"` for attributes. The `setLang()` function walks the DOM and applies all translations. Language is auto-detected from the browser and persisted in `localStorage` under `feelin_lang`.

When adding new translatable text: add the key to all three language objects in `scripts.js`, then use `data-i18n="yourKey"` on the HTML element.

### Newsletter / Modal

Buttons with `data-open-modal="subscribe"` or `data-open-modal="store"` open the same modal with different copy. Email submission posts to a Google Forms endpoint via a hidden iframe (no backend). The form URL and entry ID are constants at the top of `scripts.js`.

### Visual Effects

- Animated background blobs (CSS `@keyframes blobDrift`)
- SVG star field generated dynamically by `drawStars()` in JS
- Scroll-reveal via IntersectionObserver (`.reveal` / `.is-visible` classes)
- Hero entry animations gated by `.js-animate` class (only added when tab is visible)
- All animations respect `prefers-reduced-motion: reduce`

### Design Tokens

Colors, radii, spacing, fonts, and shadows are all CSS custom properties in `:root` of `styles.css`. Use these variables rather than hardcoded values.

Key fonts: `--font-display` (Playfair Display) for headings, `--font-body` (Inter) for body text. Icons use Material Symbols Outlined (loaded from Google Fonts).

## Deployment

Push to `main` — GitHub Pages serves automatically. The `CNAME` file maps to `feel-in.app`.
