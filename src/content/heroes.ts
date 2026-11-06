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

/** The first-screen images of each page, warmed before the visitor arrives. */
export const routeHeroes: Record<string, { src: string; sizes: string }[]> = {
  "/": [{ src: "/media/pipette-plate.webp", sizes: heroSizes.home }],
  "/company": [{ src: "/media/microscope-study.webp", sizes: heroSizes.split }],
  "/brands": ["modern-ayurveda", "super-being", "super-titans", "pet-care", "rugd-men", "super-envi-intima", "pharmaceuticals"].map((name) => ({
    src: `/brands/${name}.webp`,
    sizes: heroSizes.mosaic,
  })),
  "/superbeing": [{ src: "/media/powder-scoop.webp", sizes: heroSizes.grow }],
  "/approach": [
    { src: "/media/sample-rack.webp", sizes: heroSizes.trioLarge },
    { src: "/media/tablet-coating.webp", sizes: heroSizes.trioSmall },
    { src: "/media/beaker.webp", sizes: heroSizes.trioSmall },
  ],
  "/future-vision": [{ src: "/media/analyser-hall.webp", sizes: heroSizes.full }],
  "/investors": [{ src: "/media/glass-boardroom.webp", sizes: heroSizes.pan }],
  "/careers": [
    { src: "/media/team-office.webp", sizes: heroSizes.overlapBack },
    { src: "/media/team-review.webp", sizes: heroSizes.overlapFront },
  ],
  "/contact": [{ src: "/media/office-conversation.webp", sizes: heroSizes.rise }],
};
