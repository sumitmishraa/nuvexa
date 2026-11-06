"use client";

import { motion } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import { Photo } from "@/components/ui/Photo";
import { Mark } from "@/components/ui/Logo";
import { getBrand } from "@/content/brands";
import { heroSizes } from "@/content/heroes";
import { EASE_OUT_EXPO } from "@/lib/cn";

const slugs = ["modern-ayurveda", "super-being", "super-titans", "pet-care", "rugd-men", "super-envi-intima", "pharmaceuticals"];

/* Seven brand visuals as one even wall of squares, matching the tiles' own shape, so nothing is cropped. */
export function BrandMosaic() {
  const ready = useSiteReady();
  const arrive = (i: number) => ({
    initial: { opacity: 0, y: 36 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.1, delay: 0.3 + i * 0.12, ease: EASE_OUT_EXPO },
  });
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
      {slugs.map((slug, i) => {
        const brand = getBrand(slug)!;
        const logo = brand.mode === "logo";
        return (
          <motion.div key={slug} className="relative aspect-square overflow-hidden rounded-[1rem]" style={{ background: brand.logoBg }} {...arrive(i)}>
            <Photo src={brand.logo} alt={logo ? `${brand.name} logo` : brand.name} sizes={heroSizes.mosaic} priority contain={logo} className={logo ? "p-[6%]" : undefined} />
          </motion.div>
        );
      })}
      <motion.div className="flex aspect-square flex-col justify-between rounded-[1rem] bg-ink-soft p-5 md:p-7" {...arrive(slugs.length)}>
        <Mark className="h-7 w-7 text-brass" strokeWidth={1.2} />
        <p className="display-md">
          Seven ways we serve <em className="italic text-brass-soft">everyday health.</em>
        </p>
      </motion.div>
    </div>
  );
}
