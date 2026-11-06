import { photoFile } from "./photoFile";

/** next/image loader: serves the pre-made files from scripts/optimize-images.mjs directly. */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  return photoFile(src, width);
}
