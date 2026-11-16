import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CtaPair } from "@/components/sections/CtaPair";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { PageHero } from "@/components/sections/PageHero";
import { Pillars } from "@/components/sections/Pillars";
import { SectionHead } from "@/components/ui/SectionHead";
import { approach } from "@/content/approach";
import { slot } from "@/lib/slot";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "How Nuvexa builds brands: problem-first, evidence-led, research-driven and communicated with clarity.",
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
      <section data-theme="light" aria-labelledby="method-heading" className="bg-ivory pb-24 text-ink md:pb-36">
        <div className="container-x">
          <SectionHead index="01" label="The method" labelClassName="text-ink-muted" className="border-t border-ink/12 pt-12 md:pt-16">
            <SplitText as="h2" id="method-heading" className="display-lg max-w-[18ch]" text={"From everyday need\nto *trusted brand.*"} />
          </SectionHead>
          <MethodSteps />
        </div>
      </section>

      <section data-theme="dark" aria-label="Why it matters" className="bg-ink py-24 text-ivory md:py-36">
        <div className="container-x">
          <p className="eyebrow mb-8 text-ivory/80">Why it matters</p>
          <SplitText
            as="p"
            className="display-md max-w-[30ch]"
            text={"Brands that solve real problems earn\nsomething no campaign can buy:\n*repeat trust.*"}
          />
        </div>
      </section>

      <Pillars set="approach" />
      <OperatingModel index="05" variant="story" />

      {/* Commitments */}
      <section data-theme="light" aria-labelledby="commit-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHead index="06" label="Our commitments" labelClassName="text-ink-muted">
            <h2 id="commit-heading" className="display-lg max-w-[18ch]">
              Responsibility, built in.
            </h2>
          </SectionHead>
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
