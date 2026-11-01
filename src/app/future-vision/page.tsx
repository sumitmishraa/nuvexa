import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { JourneyScroll } from "@/components/sections/JourneyScroll";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { Roadmap } from "@/components/sections/Roadmap";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getBrand } from "@/content/brands";
import { vision } from "@/content/vision";

export const metadata: Metadata = {
  title: "Future Vision",
  description: "From digital-first consumer brands in India to pharmaceutical R&D, biologics, biotechnology and owned manufacturing — Nuvexa's long-term journey.",
};

export default function FutureVisionPage() {
  const pharma = getBrand("pharmaceuticals")!;
  return (
    <>
      <CinematicHero
        eyebrow="Future vision"
        title={"Building for\nthe *long term.*"}
        lede={vision.heroLede}
        image="/brands/pharmaceuticals.webp"
        imageAlt="A modern laboratory with glass flasks, vials and capsules beside a microscope"
        imagePosition="center 60%"
      />

      {/* Today */}
      <section data-theme="light" aria-labelledby="today-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <SectionLabel index="01" className="col-span-12 text-ink-muted md:col-span-4">
            Current operations
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <h2 id="today-heading" className="display-lg mb-10 max-w-[18ch]">
              {vision.today.title}. <em className="italic text-brass">Openly.</em>
            </h2>
            <Reveal>
              <p className="lede max-w-[58ch] text-ink-muted">{vision.today.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <JourneyScroll />

      {/* Pharma ambition */}
      <section data-theme="light" aria-labelledby="pharma-heading" className="bg-ivory-deep py-28 text-ink md:py-40">
        <div className="container-x grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 lg:col-span-10">
            <SectionLabel index="03" className="mb-8 text-ink-muted">
              The long-term ambition
            </SectionLabel>
            <h2 id="pharma-heading" className="display-xl mb-10 max-w-[14ch]">
              Science-led <em className="italic text-brass">healthcare.</em>
            </h2>
            <Reveal>
              <p className="lede mb-10 text-ink-muted">{pharma.intro[1]}</p>
            </Reveal>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] bg-ink/10">
              {pharma.focusAreas!.map((f) => (
                <li key={f} className="bg-ivory-deep p-6">
                  <span className="display-md">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Roadmap index="04" showLink={false} />

      <section data-theme="light" aria-label="Closing thought" className="bg-ivory py-24 text-ink md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="display-lg max-w-[30ch]">{vision.closing}</p>
          </Reveal>
        </div>
      </section>

      <CtaPair />
    </>
  );
}
