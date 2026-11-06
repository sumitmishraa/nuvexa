# Nuvexa redesign — content & asset notes for the client

All copy lives in `src/content/*.ts`. It expands the original nuvexabio.com text; nothing has been invented (no stats, dates, awards, certifications, ingredients or health claims). Please confirm the items below before launch.

## To confirm
1. **General enquiries email** — the old site's "General Enquiries" address decodes to `ceo@nuvexabio.com`. Is that intended, or should it be e.g. `hello@` / `info@`?
2. **Phase 1 wording** — the old About page said Phase 1 covers "India and international markets", while the homepage and Future Vision say India first. The new site says **India first**.
3. **Brand status** — Superbeing Nutrition shows "Our flagship"; the other brands show "Launching soon" and verticals "Future vertical" / "Long-term ambition". Update when products go live.
4. **Stats** — the stat band uses only true counts (4 consumer brands, 7 brands & verticals, 15 months of Superbeing development, 3 roadmap phases). Swap in real metrics (customers, cities, SKUs) once they can be published.
7. **Superbeing Nutrition story** — the site's core story (`/superbeing`, home page, Approach, Company) comes from the client document *"SUPERBEING NUTRITION – story telling – 2.11.26 v2"*, kept close to its wording in `src/content/superbeing.ts`. The first-person founder voice is attributed to **Shakeel Ahamed**, as confirmed. No product names, ingredients or benefit claims are shown — add them (with compliant claims) when the range is ready; the "Explore our products" CTA currently points to Contact.
9. **Navigation & Investors page** — the main navigation follows the client's order (Company · Our Brands · Superbeing Nutrition · Approach · Future Vision · Investors · Careers); Contact stays as the header button, in the menu and in the footer. The new `/investors` page uses only facts already published (business model, roadmap, brands, Superbeing development story, values, leadership) — no financials, funding or valuation. Please supply any investor materials (deck, annual returns, filings) to link there, confirm the investor-relations contact address, and have the disclaimer line reviewed by counsel.
8. **Superbeing URL** — the flagship lives at `/superbeing`; the old `/brands/super-being` URL redirects there permanently.
5. **Legal pages** — `/legal/privacy` and `/legal/terms` are structured drafts marked "pending legal review". They need counsel-approved text (the old links were 404s).
6. **Contact form** — UI only. Validation works; delivery is not connected, and the success message says so. Connect to an email/CRM endpoint before launch.

## Assets
- **Brand logos** — taken from the current site (1254×1254 PNGs with their own background colours). Vector (SVG) versions would look sharper.
- **Brand cards** use the brands' own tiles: the four consumer brands show their logos on their native background colour, and the three verticals (Ayurveda, Pet Care, Pharmaceuticals) show their existing photographs from the current site. The click "brand reveal" animation is code (Motion), not video.
- **Founder portrait** — the Leadership section shows a typographic "SA" monogram card until an official portrait is supplied.
- **Modern Ayurveda tile** — this existing brand tile still shows leaves and herbs. It suits the vertical, but please confirm you are happy with it, given the move away from botanical imagery elsewhere.

## Photography
All photographs in `public/media/` are real stock photographs from Unsplash, under the [Unsplash License](https://unsplash.com/license): free for commercial use, attribution appreciated but not required. Each has a light shared colour treatment; the Careers team photograph is also cropped.

Four silent background videos in `public/media/video/` are free stock clips from Pexels, under the [Pexels License](https://www.pexels.com/license/) (free for commercial use, attribution not required). Their poster stills are frames from the same clips. Clip page and creator names should be recorded before launch if credit is wanted: `pipette-plate.mp4` (Pexels video 3195394, Home hero), `analyser-hall.mp4` (8381327, Future Vision hero), `pipette-hood.mp4` (8863360, Superbeing), `gloves-lab.mp4` (8485791, the "Testing" step of How Nuvexa works today).

Full-size photo masters live in `assets/`. After replacing or adding one, run `node scripts/optimize-images.mjs` to regenerate the served sizes.

**These images and videos are illustrative.** They do not show Nuvexa's own people, products or premises, and Nuvexa does not operate in-house R&D or manufacturing. In particular, the laboratory, cleanroom, production and warehouse images represent the wider science and supply world, not Nuvexa facilities, and the capsule and powder images are not Nuvexa products. Please replace them with commissioned or partner-approved photography and real product shots when available.

Please also confirm that the people pictured are acceptable for a health brand's use. The Unsplash License does not include separate model or property releases.

| File | Used on | Photographer | Source |
|---|---|---|---|
| `lab-glassware.webp` | Home hero, 404, share image (`og.jpg`) | Hans Reniers | [Unsplash](https://unsplash.com/photos/three-clear-beakers-placed-on-tabletop-lQGJCMY5qcM) |
| `daily-organiser.webp` | Home | Laurynas Me | [Unsplash](https://unsplash.com/photos/person-about-to-pick-medicine-from-medicine-organizer-1TL8AoEDj_c) |
| `scientist-microscope.webp` | Disciplines: Science | Trust "Tru" Katsande | [Unsplash](https://unsplash.com/photos/woman-looking-on-microscope-inside-room-6q5QG8iIgRo) |
| `consumer-conversation.webp` | Disciplines: Consumer insight | Vitaly Gariev | [Unsplash](https://unsplash.com/photos/two-women-talking-in-a-modern-office-setting-QxkvMblcaJ0) |
| `data-review.webp` | Disciplines: Technology & AI | Accuray | [Unsplash](https://unsplash.com/photos/medical-professionals-reviewing-digital-imaging-MFSEP2g4YS0) |
| `filling-line.webp` | Disciplines: Disciplined execution | Mina Rad | [Unsplash](https://unsplash.com/photos/bottles-being-filled-on-an-automated-production-line-GiuvVfcNFzY) |
| `brand-strategy.webp` | Disciplines: Brand building | Vitaly Gariev | [Unsplash](https://unsplash.com/photos/two-people-collaborating-at-a-desk-with-a-laptop-FXVt6t0tkmI) |
| `microscope-study.webp` | Company hero | Lucas Vasques | [Unsplash](https://unsplash.com/photos/man-sight-on-white-microscope-9vnACvX2748) |
| `lab-bench.webp` | Company | Trnava University | [Unsplash](https://unsplash.com/photos/laboratory-workbench-with-microscope-and-equipment-_9xRHrMOjeg) |
| `production-hall.webp` | Company | Petr | [Unsplash](https://unsplash.com/photos/white-and-green-metal-stand-KR9j7uqFhnI) |
| `warehouse-aisle.webp` | Our Brands | Junseong Lee | [Unsplash](https://unsplash.com/photos/a-large-warehouse-filled-with-lots-of-boxes-WKMOPVvlLvo) |
| `powder-scoop.webp` | Superbeing hero, Home | Alex Saks | [Unsplash](https://unsplash.com/photos/a-scoop-of-powder-sitting-on-top-of-a-table-MUlIfSNODXE) |
| `capsules.webp` | Superbeing | Diamond Rehab Thailand | [Unsplash](https://unsplash.com/photos/a-pile-of-yellow-pills-sitting-on-top-of-a-table-_xoVogHqGkI) |
| `pipette-work.webp` | Superbeing | Julia Koblitz | [Unsplash](https://unsplash.com/photos/scientist-using-pipette-with-test-tubes-in-lab-RlOAwXt2fEA) |
| `powder-morning.webp` | Superbeing | Alex Saks | [Unsplash](https://unsplash.com/photos/a-scoop-of-protein-powder-on-a-wooden-surface-wxtscG-05wo) |
| `powder-pale.webp` | Super Titans | Alex Saks | [Unsplash](https://unsplash.com/photos/a-scoop-of-powder-and-a-scoop-of-powder-on-a-white-background-iYWf4PEd-lI) |
| `sample-rack.webp` | Approach hero | CDC | [Unsplash](https://unsplash.com/photos/person-in-white-long-sleeve-shirt-and-blue-denim-jeans-holding-pink-yarn-rHCNMH9Vlmw) |
| `tablet-coating.webp` | Approach hero | Sulyok Img | [Unsplash](https://unsplash.com/photos/small-pink-pills-tumbling-on-a-machine-surface-YsrHdAE9cFw) |
| `beaker.webp` | Approach hero | RephiLe water | [Unsplash](https://unsplash.com/photos/gloved-hand-holding-laboratory-beaker-cuqp2Jzz_lY) |
| `research-lab.webp` | Future Vision hero | ThisisEngineering | [Unsplash](https://unsplash.com/photos/scientist-using-laptop-in-laboratory-8yS04veb1TQ) |
| `cleanroom.webp` | Future Vision | TECNIC Bioprocess Solutions | [Unsplash](https://unsplash.com/photos/workers-in-protective-suits-inside-a-cleanroom-k2H_b2AEqbg) |
| `microscope-closeup.webp` | Future Vision | National Cancer Institute | [Unsplash](https://unsplash.com/photos/scientist-using-microscope-in-laboratory-JxoWb7wHqnA) |
| `glass-boardroom.webp` | Investors hero | Rodeo Project Management Software | [Unsplash](https://unsplash.com/photos/people-sitting-on-chair-inside-building-ONe-snuCaqQ) |
| `boardroom-table.webp` | Investors | Christina @ wocintechchat.com | [Unsplash](https://unsplash.com/photos/people-having-meeting-on-rectangular-brown-table-ftCWdZOFZqo) |
| `team-office.webp` | Careers hero | Sable Flow | [Unsplash](https://unsplash.com/photos/people-in-sunlit-office-workspace-meeting-KHpjeuaWOec) |
| `team-review.webp` | Careers hero | Vitaly Gariev | [Unsplash](https://unsplash.com/photos/two-people-looking-at-data-on-a-laptop-screen-t3RACFVYRlk) |
| `office-conversation.webp` | Contact hero | TienDat Nguyen | [Unsplash](https://unsplash.com/photos/2-women-sitting-on-black-sofa-WY5kuE0R4-k) |
