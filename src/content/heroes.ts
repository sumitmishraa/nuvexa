/** Display widths for each hero, shared with PreloadPages so the browser reuses the same file. */
export const heroSizes = {
  home: "(min-width: 1024px) 100vw, 240vw",
  split: "(min-width: 768px) 46vw, 100vw",
  mosaic: "(min-width: 768px) 23vw, 46vw",
  grow: "(min-width: 768px) 92vw, 100vw",
  trioLarge: "(min-width: 768px) 52vw, 100vw",
  trioSmall: "(min-width: 768px) 26vw, 50vw",
  full: "100vw",
  pan: "(min-width: 1024px) 112vw, 125vw",
  overlapBack: "(min-width: 1024px) 40vw, 82vw",
  overlapFront: "(min-width: 1024px) 28vw, 58vw",
  rise: "(min-width: 1024px) 46vw, 100vw",
} as const;

/** The home hero's background still, and a loop over it when one exists (null: the still drifts slowly instead). */
export const homeHero: { video: string | null; poster: string } = {
  video: null,
  poster: "/media/hero-scientist.webp",
};

/** The first-screen images of each page, warmed before the visitor arrives. */
export const routeHeroes: Record<string, { src: string; sizes: string }[]> = {
  "/": [{ src: homeHero.poster, sizes: heroSizes.home }],
  "/company": [{ src: "/media/company-hero.webp", sizes: heroSizes.split }],
  "/brands": ["super-being", "super-titans", "rugd-men", "super-envi-intima", "modern-ayurveda", "pet-care"].map((name) => ({
    src: `/brands/${name}.webp`,
    sizes: heroSizes.mosaic,
  })),
  "/superbeing": [{ src: "/media/sb-hero.webp", sizes: heroSizes.grow }],
  "/approach": [
    { src: "/media/approach-need.webp", sizes: heroSizes.trioLarge },
    { src: "/media/approach-ingredient.webp", sizes: heroSizes.trioSmall },
    { src: "/media/approach-product.webp", sizes: heroSizes.trioSmall },
  ],
  "/future-vision": [{ src: "/media/analyser-hall.webp", sizes: heroSizes.full }],
  "/investors": [{ src: "/media/inv-hero.webp", sizes: heroSizes.pan }],
  "/careers": [
    { src: "/media/careers-team.webp", sizes: heroSizes.overlapBack },
    { src: "/media/careers-one.webp", sizes: heroSizes.overlapFront },
  ],
  "/contact": [{ src: "/media/contact-hero.webp", sizes: heroSizes.rise }],
};
