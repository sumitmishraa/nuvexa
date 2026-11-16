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
    "Pharmaceuticals at our core, alongside Superbeing Nutrition, Super Titans, RUGD Men, Super Envi Intima and emerging verticals in Modern Ayurveda and Pet Care.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Our brands"
        title={"Science-led\npharmaceuticals &\n*everyday health.*"}
        lede="Pharmaceuticals are at the core of Nuvexa. Alongside them, we build e-commerce-led brands in India across nutraceuticals, kids' nutrition, men's grooming and intimate wellbeing, with emerging verticals in modern Ayurveda and pet care. Each one begins with a real, recurring need."
        visual={<BrandMosaic />}
      />
      <BrandIndex />
      <PhotoBand src={band.src} alt={band.alt} label="Each brand begins with a real need" className="pt-0 md:pt-0">
        Each one begins with <em className="italic text-brass-soft">a real, recurring need.</em>
      </PhotoBand>
      <CtaPair />
    </>
  );
}
