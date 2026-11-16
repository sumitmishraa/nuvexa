import type { Metadata } from "next";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { slot } from "@/lib/slot";

const band = slot("brands-band");
import { BrandIndex } from "@/components/sections/BrandIndex";
import { CtaPair } from "@/components/sections/CtaPair";
import { BrandMosaic } from "@/components/sections/BrandMosaic";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Nuvexa's consumer health portfolio: Superbeing Nutrition, Super Titans, RUGD Men and Super Envi Intima, with emerging verticals in Modern Ayurveda and Pet Care, alongside our pharmaceutical core.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Our brands"
        title={"Consumer health,\n*built with\npharmaceutical care.*"}
        lede="Alongside our pharmaceutical core, we build consumer health brands in India across nutraceuticals, kids' nutrition, men's grooming and intimate wellbeing, with emerging verticals in modern Ayurveda and pet care. Each one is held to the same standard of research and quality, and begins with a real, recurring need."
        visual={<BrandMosaic />}
      />
      <BrandIndex />
      <PhotoBand src={band.src} alt={band.alt} label="Each brand begins with a real need" className="pt-0 md:pt-0">
        Each one begins with a real, recurring need.
      </PhotoBand>
      <CtaPair />
    </>
  );
}
