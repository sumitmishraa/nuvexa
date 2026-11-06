const MEDIA_WIDTHS = [384, 640, 1080, 1600, 2400];
const BRAND_WIDTHS = [384, 640, 1080];

/** Maps a photo's path and a wanted width to its pre-made static file. */
export function photoFile(src: string, width: number) {
  const match = src.match(/^\/(media|brands)\/(.+)\.webp$/);
  if (!match) return src;
  const widths = match[1] === "brands" ? BRAND_WIDTHS : MEDIA_WIDTHS;
  const chosen = widths.find((w) => w >= width) ?? widths[widths.length - 1];
  return `/${match[1]}/${match[2]}-${chosen}.webp`;
}
