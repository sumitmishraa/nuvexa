import type { Metadata } from "next";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { Reveal } from "@/components/motion/Reveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { JourneyScroll } from "@/components/sections/JourneyScroll";
import { PageHero } from "@/components/sections/PageHero";
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
      <PageHero
        variant="curtain"
        eyebrow="Future vision"
        title={"Building for\nthe *long term.*"}
        lede={vision.heroLede}
        photos={[{ src: "/media/analyser-hall.webp", alt: "" }]}
        video="/media/video/analyser-hall.mp4"
      />

      {/* Today */}
      <section data-theme="light" aria-labelledby="today-heading" className="bg-ivory py-20 text-ink md:py-28">
        <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index="01" className="mb-8 text-ink-muted">
              Current operations
            </SectionLabel>
            <h2 id="today-heading" className="display-lg mb-8 max-w-[18ch]">
              {vision.today.title}. <em className="italic text-brass">Openly.</em>
            </h2>
            <Reveal>
              <p className="lede max-w-[58ch] text-ink-muted">{vision.today.body}</p>
            </Reveal>
          </div>
          <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink lg:col-span-5">
            <RevealPhoto src="/media/cleanroom.webp" alt="Technicians in protective suits working in a bright cleanroom" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <JourneyScroll />

      {/* Pharma ambition */}
      <section data-theme="light" aria-labelledby="pharma-heading" className="bg-ivory-deep py-20 text-ink md:py-28">
        <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index="03" className="mb-8 text-ink-muted">
              The long-term ambition
            </SectionLabel>
            <h2 id="pharma-heading" className="display-xl mb-10 max-w-[14ch]">
              Science-led <em className="italic text-brass">healthcare.</em>
            </h2>
            <Reveal>
              <p className="lede mb-10 text-ink-muted">{pharma.intro[1]}</p>
            </Reveal>
            <ul className="grid gap-px overflow-hidden rounded-[1.25rem] bg-ink/10 sm:grid-cols-2">
              {pharma.focusAreas!.map((f) => (
                <li key={f} className="bg-ivory-deep p-6">
                  <span className="display-md">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink lg:col-span-5">
            <RevealPhoto src="/media/microscope-closeup.webp" alt="A researcher looking through a large microscope, with culture dishes on the bench behind" sizes="(min-width: 1024px) 40vw, 100vw" />
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
