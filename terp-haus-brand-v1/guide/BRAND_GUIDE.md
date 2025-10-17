# Terp Haus Brand System v1

**Primary Direction:** Premium, retro-earthy spectrum with crystalline clarity.

## Palette
- Teal `#1E7A83`
- Sage `#6C8C74`
- Mustard `#D59B2D`
- Terracotta `#B4643E`
- Aubergine `#6A3D57`
- Olive `#6E7F3B`
- Ink (text/background) `#1B1B1B`
- Paper (bg) `#F6F3EE`
- Gold (lux accents) `#C6A564`

## Typography
- Headline (suggested): **Satoshi / Inter / General Sans** (bold/extra-bold)
- Body: **Inter / Source Sans 3**

Set CSS vars: see `code/palette.css`. Tailwind tokens: `code/tailwind.brand.ts`.

## Logos
- `terp-haus-logo-color.svg` – hero + print
- `terp-haus-logo-mono.svg` – luxe gold on ink
- `terp-haus-mark-color.svg` – mark only
- `favicon.svg` – rounded-square app icon

## Usage Notes
- Keep generous whitespace around mark (min 1× leaf width).
- Avoid shrinking wordmark below 220px width; use mark-only under that.
- On photos: use mono gold or white outline variants (we can export if needed).
- Avoid saturated primaries; stick to palette above for harmony with product line.

## Dev Integration
- Place images in `public/images/`.
- Update header component to use `terp-haus-logo-color.svg`.
- Update Tailwind config with tokens from `code/tailwind.brand.ts`.
- Add `code/palette.css` to `globals.css`.

---
Prepared for Cursor handoff. ✨
