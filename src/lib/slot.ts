import slots from "@/content/photo-slots.json";
import { photoManifest } from "@/content/photo-manifest";

export type SlotKey = keyof typeof slots;

/** A photo slot: its own file, cut to its frame's shape, with alt text that matches the picture actually served. */
export function slot(key: SlotKey) {
  const src = `/media/${key}.webp`;
  const entry = slots[key];
  const generated = photoManifest[src]?.generated ?? false;
  return { src, alt: generated ? entry.alt : entry.fallbackAlt };
}
