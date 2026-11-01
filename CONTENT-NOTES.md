# Nuvexa redesign — content & asset notes for the client

All copy lives in `src/content/*.ts`. It expands the original nuvexabio.com text; nothing has been invented (no stats, dates, awards, certifications, ingredients or health claims). Please confirm the items below before launch.

## To confirm
1. **General enquiries email** — the old site's "General Enquiries" address decodes to `ceo@nuvexabio.com`. Is that intended, or should it be e.g. `hello@` / `info@`?
2. **Phase 1 wording** — the old About page said Phase 1 covers "India and international markets", while the homepage and Future Vision say India first. The new site says **India first**.
3. **Brand status** — every brand shows "Launching soon" and verticals show "Future vertical" / "Long-term ambition", matching the old site's "Coming soon". Update when products go live.
4. **Stats** — the stat band uses only true counts (4 consumer brands, 7 brands & verticals, 6 categories, 3 roadmap phases). Swap in real metrics (customers, cities, SKUs) once they can be published.
5. **Legal pages** — `/legal/privacy` and `/legal/terms` are structured drafts marked "pending legal review". They need counsel-approved text (the old links were 404s).
6. **Contact form** — UI only. Validation works; delivery is not connected, and the success message says so. Connect to an email/CRM endpoint before launch.

## Assets
- **Brand logos** — taken from the current site (1254×1254 PNGs with their own background colours). Vector (SVG) versions would look sharper.
- **Brand cards** use the brands' own tiles: the four consumer brands show their logos on their native background colour, and the three verticals (Ayurveda, Pet Care, Pharmaceuticals) show their existing photographs from the current site. The click "brand reveal" animation is code (Motion), not video.
- **Photography generated with ElevenLabs** (free plan: ~3 images/day, one at a time; video needs a paid plan). All 1280×720 — regenerate at higher resolution or replace with commissioned photography before launch:
  - `media/hero-leaf.webp` — Home hero (leaf, droplet, glass "molecules")
  - `media/super-being.webp`, `media/super-titans.webp` — brand lifestyle bands
  - `media/company.webp` — Company hero (limestone interior, olive tree)
  - `media/careers.webp` — Careers hero (brand studio table)
  - `media/approach.webp` — Approach hero (hands arranging botanical samples)
- **Stock photography** — `media/contact.webp` (Contact hero) is "A large tree sitting in the middle of a lush green park" by Nithin Purple, Cubbon Park, Bengaluru — Unsplash License (free for commercial use, attribution appreciated): https://unsplash.com/photos/a-large-tree-sitting-in-the-middle-of-a-lush-green-park-nuIpe_EumH4
- **Future Vision hero** reuses the Pharmaceuticals lab photograph from the current site.
- **Founder portrait** — the Leadership section shows a typographic "SA" monogram card until an official portrait is supplied.

### Still to generate when ElevenLabs credits allow (shared suffix: "Forest-ink and warm ivory palette, brass highlights, soft directional window light, shallow depth of field, subtle film grain. No text, no logos, no packaging, no people.")
- RUGD Men lifestyle band — dark slate with water droplets, wooden shaving brush, charcoal towel, steam, brushed brass bowl; hard side light.
- Super Envi Intima lifestyle band — draped ivory silk, a blush petal on still water in a ceramic dish; serene, discreet.
- Contact (bespoke) — Bengaluru rain-tree canopy in morning mist and golden light.
- Future Vision (bespoke) — glass sphere on dark green stone with molecular light patterns, brass horizon.
- Hero film (paid plan) — 10s seamless macro of a droplet rolling along a leaf vein, glass spheres drifting out of focus.
