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
    "Superbeing Nutrition, Super Titans, RUGD Men and Super Envi Intima — plus emerging verticals in Modern Ayurveda, Pet Care and Pharmaceuticals.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Our brands"
        title={"Digital-first\nconsumer health,\n*for every life stage.*"}
        lede="We are building e-commerce-led brands in India across nutraceuticals, kids' nutrition, men's grooming and intimate wellbeing — with emerging verticals in modern Ayurveda, pet care and, in the longer term, pharmaceuticals. Each one begins with a real, recurring need."
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
