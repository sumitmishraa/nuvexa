import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { SplitText } from "@/components/motion/SplitText";
import { WordReveal } from "@/components/motion/WordReveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { HomeHero } from "@/components/sections/HomeHero";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { Pillars } from "@/components/sections/Pillars";
import { PortfolioScroll } from "@/components/sections/PortfolioScroll";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatBand } from "@/components/sections/StatBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";
import { values } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <WordReveal
        eyebrow="01 — Our conviction"
        text="Everyday health is full of small, recurring *needs* — in our routines, at every life stage, and for the pets we share our homes with. That is where every Nuvexa brand begins."
      />

      {/* Who we are */}
      <section data-theme="light" aria-labelledby="about-heading" className="bg-ivory pb-28 text-ink md:pb-40">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 border-t border-ink/12 pt-16 md:pt-24">
            <SectionLabel index="02" className="col-span-12 mb-4 text-ink-muted md:col-span-4">
              Who we are
            </SectionLabel>
            <div className="col-span-12 md:col-span-8">
              <SplitText
                as="h2"
                className="display-xl max-w-[17ch]"
                text={"A house of brands\nfor *everyday health.*"}
              />
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <Reveal>
                  <p className="body-copy text-ink-muted">
                    Nuvexa Biotech Pvt. Ltd. is a next-generation healthcare and consumer company. We build differentiated brands around real, recurring needs
                    — in nutrition, kids&rsquo; nutrition, men&rsquo;s grooming, intimate wellbeing, modern Ayurveda and pet care — and we design every one of
                    them to earn trust over time.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="body-copy text-ink-muted">
                    Our initial focus is digital-first, e-commerce-led growth in India, supported by specialised development and manufacturing partners. As
                    our brands achieve product-market fit and sustainable scale, we plan to extend into offline retail, pharmacies, healthcare networks and
                    international markets.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.2} className="mt-10">
                <ButtonLink href="/company" variant="outline">
                  More about Nuvexa
                </ButtonLink>
              </Reveal>
            </div>
          </div>
          <StatBand className="mt-24" />
        </div>
      </section>

      <PortfolioScroll />
      <Pillars />
      <OperatingModel />
      <Roadmap />

      {/* Values ribbon */}
      <section data-theme="light" aria-label="Our values" className="overflow-hidden border-y border-ink/10 bg-ivory-deep py-14 text-ink md:py-20">
        <Marquee items={values.map((v) => v.title)} />
      </section>

      {/* Founder's note */}
      <section data-theme="dark" aria-labelledby="founder-heading" className="bg-ink-soft py-28 text-ivory md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <Mark className="h-12 w-12 text-brass" strokeWidth={1.1} />
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="eyebrow mb-10 text-ivory/78" id="founder-heading">
              A note from our founder
            </p>
            <SplitText as="p" className="display-xl max-w-[18ch]" text={"“We do not start\nwith products.\n*We start with problems.*”"} />
            <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-ivory/10 pt-8">
              <div>
                <p className="text-lg">{company.founder.name}</p>
                <p className="eyebrow mt-1 text-ivory/78">{company.founder.role}</p>
              </div>
              <ButtonLink href="/company#leadership" variant="outline-light">
                Read the full story
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaPair />
    </>
  );
}
