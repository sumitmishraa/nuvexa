import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { WordReveal } from "@/components/motion/WordReveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { Pillars } from "@/components/sections/Pillars";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { approach } from "@/content/approach";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "How Nuvexa builds brands: problem-first, evidence-led, partner-powered and communicated with clarity.",
};

export default function ApproachPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Our approach"
        title={"We start with *problems,*\nnot products."}
        lede={approach.heroLede}
        image="/media/approach.webp"
        imageAlt="Hands arranging botanical samples, seeds and glass vials on paper with pencil diagrams"
      />

      {/* Method */}
      <section data-theme="light" aria-labelledby="method-heading" className="bg-ivory pb-28 text-ink md:pb-40">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6 border-t border-ink/12 pt-16 md:mb-20 md:pt-24">
            <SectionLabel index="01" className="col-span-12 text-ink-muted md:col-span-4">
              The method
            </SectionLabel>
            <SplitText as="h2" className="display-xl col-span-12 max-w-[16ch] md:col-span-8" text={"From everyday need\nto *trusted brand.*"} />
          </div>
          <ol className="border-t border-ink/12">
            {approach.method.map((m) => (
              <li key={m.step} className="group border-b border-ink/12">
                <Reveal className="grid grid-cols-12 gap-6 py-10 md:py-14">
                  <span className="col-span-2 font-serif text-4xl text-brass md:col-span-1 md:text-5xl">{m.step}</span>
                  <h3 className="display-md col-span-10 transition-transform duration-500 group-hover:translate-x-2 md:col-span-5">{m.title}</h3>
                  <p className="col-span-12 text-ink-muted md:col-span-5 md:col-start-8">{m.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WordReveal
        theme="dark"
        eyebrow="Why it matters"
        text="Brands that solve real problems earn something no campaign can buy: *repeat* trust, kept one honest promise at a time."
      />

      <Pillars />
      <OperatingModel index="05" />

      {/* Commitments */}
      <section data-theme="light" aria-labelledby="commit-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6">
            <SectionLabel index="06" className="col-span-12 text-ink-muted md:col-span-4">
              Our commitments
            </SectionLabel>
            <h2 id="commit-heading" className="display-xl col-span-12 max-w-[16ch] md:col-span-8">
              Responsibility, <em className="italic text-brass">built in.</em>
            </h2>
          </div>
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {approach.commitments.map((c) => (
              <RevealItem key={c.title} className="rounded-[1.5rem] border border-ink/12 p-8 md:p-12">
                <h3 className="display-md mb-5">{c.title}</h3>
                <p className="text-ink-muted">{c.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaPair />
    </>
  );
}
