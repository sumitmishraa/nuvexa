"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import { getBrand } from "@/content/brands";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

/* Seven brand visuals as one composed wall: verticals as photographs, consumer brands as their marks. */
const tiles = [
  { slug: "modern-ayurveda", area: "md:col-start-1 md:row-span-2" },
  { slug: "super-being", area: "" },
  { slug: "super-titans", area: "" },
  { slug: "pet-care", area: "md:col-span-2" },
  { slug: "rugd-men", area: "" },
  { slug: "super-envi-intima", area: "" },
  { slug: "pharmaceuticals", area: "md:col-span-2" },
];

export function BrandMosaic() {
  const reduce = useReducedMotion();
  const ready = useSiteReady();
  return (
    <div className="grid h-full w-full grid-cols-2 gap-2 bg-ink p-2 md:grid-cols-5 md:grid-rows-2 md:gap-3 md:p-3">
      {tiles.map((t, i) => {
        const brand = getBrand(t.slug)!;
        const logo = brand.mode === "logo";
        return (
          <motion.div
            key={t.slug}
            className={cn("relative min-h-28 overflow-hidden rounded-[1rem]", t.area)}
            style={{ background: brand.logoBg }}
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={ready ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 1.2, delay: 0.45 + i * 0.08, ease: EASE_OUT_EXPO }}
          >
            <Image
              src={brand.logo}
              alt={logo ? `${brand.name} logo` : brand.name}
              fill
              sizes="(min-width: 768px) 40vw, 50vw"
              className={logo ? "object-contain p-[6%]" : "object-cover"}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
