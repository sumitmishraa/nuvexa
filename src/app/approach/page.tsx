import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CtaPair } from "@/components/sections/CtaPair";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { PageHero } from "@/components/sections/PageHero";
import { Pillars } from "@/components/sections/Pillars";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { approach } from "@/content/approach";
import { slot } from "@/lib/slot";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "How Nuvexa builds brands: problem-first, evidence-led, partner-powered and communicated with clarity.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        variant="trio"
        eyebrow="Our approach"
        title={"We start with *problems,*\nnot products."}
        lede={approach.heroLede}
        photos={[
          slot("approach-need"),
          slot("approach-ingredient"),
          slot("approach-product"),
        ]}
      />

      {/* Method */}
      <section data-theme="light" aria-labelledby="method-heading" className="bg-ivory pb-20 text-ink md:pb-28">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6 border-t border-ink/12 pt-16 md:mb-20 md:pt-24">
            <SectionLabel index="01" className="col-span-12 text-ink-muted md:col-span-4">
              The method
            </SectionLabel>
            <SplitText as="h2" className="display-xl col-span-12 md:col-span-8" text={"From everyday need\nto *trusted brand.*"} />
          </div>
          <MethodSteps />
        </div>
      </section>

      <section data-theme="dark" aria-label="Why it matters" className="bg-ink py-20 text-ivory md:py-28">
        <div className="container-x">
          <p className="eyebrow mb-8 text-ivory/80">Why it matters</p>
          <SplitText
            as="p"
            className="display-lg"
            text={"Brands that solve real problems earn\nsomething no campaign can buy: *repeat*\n*trust,* kept one honest promise at a time."}
          />
        </div>
      </section>

      <Pillars set="approach" />
      <OperatingModel index="05" variant="story" />

      {/* Commitments */}
      <section data-theme="light" aria-labelledby="commit-heading" className="bg-ivory py-20 text-ink md:py-28">
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
