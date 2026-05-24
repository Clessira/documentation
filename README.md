# NowDoing — Documentation

User-facing docs for the NowDoing macOS app, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

Lives at `docs.nowdoing.app` (planned). Two languages:

- **`de`** — canonical (default locale, no URL prefix)
- **`en`** — mirror under `/en/`

Content/feature changes must land in **both** language trees in parallel.

## Project layout

```
src/
├── assets/             # logo, OG images
├── styles/theme.css    # brand overrides for Starlight tokens
├── content.config.ts   # Starlight docs collection registration
└── content/docs/
    ├── index.mdx                  # DE landing (splash)
    ├── einstieg/                  # Einstieg / Getting started
    ├── funktionen/                # Funktionen / Features
    ├── integrationen/             # Integrationen / Integrations
    ├── referenz/                  # Referenz / Reference
    └── en/                        # English mirror — same structure
public/favicon.svg
astro.config.mjs        # sidebar tree + i18n + brand
```

The sidebar in `astro.config.mjs` is the source of truth for the page tree. Adding a page = create the MD in both locales + add a sidebar entry.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Local dev server at `localhost:4321`             |
| `npm run build`           | Build static site to `./dist/`                   |
| `npm run preview`         | Preview the production build locally             |

## Brand

Palette + logo align with the marketing site (`website/`):

- `--nd-brand` `#4f9dff` (blue) → `--nd-brand-2` `#b48cff` (purple) gradient
- Deep navy background `#061b3a` in dark mode
- Logo is the gradient app mark with the rotating arc

Edit `src/styles/theme.css` for token overrides; the rest comes from Starlight defaults.

## Voice rules (mirrors `website/CLAUDE.md`)

- Tone: opinionated, indie, dry. Short sentences. German uses **du**.
- Central promise: **"Data stays on your Mac."** Never imply cloud/account/telemetry.
- Beta is **free**; release is a **one-time purchase** — never "subscription".
- No emojis in body copy. Inline glyphs (✓, ✕, →, ⌘) where they already appear are fine.
