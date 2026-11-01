# Nuvexa — corporate website

Website for Nuvexa Biotech Pvt. Ltd., a digital-first consumer health and personal care company and house of brands (Super Being, Super Titans, RUGD Men, Super Envi Intima, plus emerging verticals in Modern Ayurveda, Pet Care and Pharmaceuticals).

This is a front-end-only build: there is no backend, and the contact form validates input but does not send it yet.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components) with TypeScript
- Tailwind CSS v4: design tokens are in `src/app/globals.css`
- [Motion](https://motion.dev) for animation, plus [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- Fonts: Noto Serif Display (via `next/font/google`) and Satoshi (self-hosted in `src/app/fonts`)

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
```

## Project layout

```
src/app/            routes: home, company, brands, brands/[slug], approach,
                    future-vision, careers, contact, legal/*, 404, sitemap, robots
src/components/     layout (header, menu, footer, preloader), motion primitives, sections, ui
src/content/        all site copy as typed data; edit text here
public/brands/      brand logo and vertical image tiles
public/media/       photography
CONTENT-NOTES.md    open questions for the client, asset sources and licences
```

## Deploy on Vercel

1. Import this repository at [vercel.com/new](https://vercel.com/new).
2. Keep the detected defaults: Framework **Next.js**, build command `next build`, no environment variables needed.
3. Every push to `main` deploys automatically to production, and other branches get preview URLs.
