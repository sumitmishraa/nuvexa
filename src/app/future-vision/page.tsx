import type { Metadata } from "next";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { Reveal } from "@/components/motion/Reveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { JourneyScroll } from "@/components/sections/JourneyScroll";
import { PageHero } from "@/components/sections/PageHero";
import { Roadmap } from "@/components/sections/Roadmap";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pharma } from "@/content/pharma";
import { vision } from "@/content/vision";
import { slot } from "@/lib/slot";

const science = slot("fv-science");

export const metadata: Metadata = {
  title: "Future Vision",
  description: "Pharmaceuticals at the core: Nuvexa's journey into pharmaceutical R&D, complex generics, biologics, biosimilars and biotechnology.",
};

export default function FutureVisionPage() {
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

      {/* Pharmaceuticals: the core */}
      <section data-theme="light" aria-labelledby="pharma-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x grid grid-cols-12 items-start gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index="01" className="mb-7 text-ink-muted">
              Our core focus
            </SectionLabel>
            <h2 id="pharma-heading" className="display-lg mb-6 max-w-[16ch]">
              Research-driven pharmaceuticals.
            </h2>
            <Reveal>
              <p className="body-copy mb-8 max-w-[60ch] text-ink-muted">{pharma.intro[1]}</p>
            </Reveal>
            <ul className="grid gap-px overflow-hidden rounded-[1.25rem] bg-ink/10 sm:grid-cols-2">
              {pharma.focusAreas.map((f) => (
                <li key={f.title} className="bg-ivory p-6">
                  <span className="statement">{f.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink lg:col-span-5">
            <RevealPhoto src={science.src} alt={science.alt} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <JourneyScroll />

      <Roadmap index="03" showLink={false} photos />

      <section data-theme="light" aria-label="Closing thought" className="bg-ivory py-24 text-ink md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="display-md max-w-[34ch]">{vision.closing}</p>
          </Reveal>
        </div>
      </section>

      <CtaPair />
    </>
  );
}
