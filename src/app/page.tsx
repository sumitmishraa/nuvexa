import { Reveal } from "@/components/motion/Reveal";

import { SplitText } from "@/components/motion/SplitText";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { WordReveal } from "@/components/motion/WordReveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { HomeHero } from "@/components/sections/HomeHero";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { PhotoRibbon } from "@/components/sections/PhotoRibbon";
import { Pillars } from "@/components/sections/Pillars";
import { PortfolioScroll } from "@/components/sections/PortfolioScroll";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatBand } from "@/components/sections/StatBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";
import { values } from "@/content/site";
import { superbeing as sb } from "@/content/superbeing";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <WordReveal
        eyebrow="01 — Our conviction"
        text="Everyday health is full of small, recurring *needs* — in our routines, at every life stage, and for the pets we share our homes with. That is where every Nuvexa brand begins."
        image="/media/daily-organiser.webp"
        imageAlt="A hand taking a capsule from a seven-day organiser on a dark table"
      />

      {/* Who we are */}
      <section data-theme="light" aria-labelledby="about-heading" className="bg-ivory pb-20 text-ink md:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 border-t border-ink/12 pt-12 md:pt-16">
            <div className="col-span-12 lg:col-span-6">
              <SectionLabel index="02" className="mb-8 text-ink-muted">
                Who we are
              </SectionLabel>
              <SplitText as="h2" className="display-xl" text={"A house of brands\nfor *everyday health.*"} />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:pt-14">
              <div className="grid gap-6">
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
          <StatBand className="mt-16" />
        </div>
      </section>

      {/* Superbeing Nutrition */}
      <section data-theme="dark" aria-labelledby="flagship-heading" className="bg-ink-soft text-ivory">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[3/2] overflow-hidden">
            <RevealPhoto src={sb.image} alt={sb.imageAlt} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div className="flex flex-col items-start justify-center px-[var(--gutter)] py-14 md:py-20">
            <p className="eyebrow mb-6 text-brass">Our flagship</p>
            <h2 id="flagship-heading" className="display-lg">
              Your need is specific. <em className="italic text-brass-soft">Your nutrition should be too.</em>
            </h2>
            <Reveal delay={0.1}>
              <p className="lede mb-9 mt-6 max-w-[44ch] text-ivory/82">{sb.promise}</p>
            </Reveal>
            <ButtonLink href="/superbeing" variant="ivory">
              Discover Superbeing Nutrition
            </ButtonLink>
          </div>
        </div>
      </section>

      <PortfolioScroll />
      <Pillars />
      <OperatingModel />
      <Roadmap />

      {/* Values ribbon */}
      <section data-theme="light" aria-label="Our values" className="overflow-hidden border-y border-ink/10 bg-ivory-deep py-14 text-ink md:py-20">
        <PhotoRibbon words={values.map((v) => v.title)} />
      </section>

      {/* Founder's note */}
      <section data-theme="dark" aria-labelledby="founder-heading" className="bg-ink-soft py-20 text-ivory md:py-28">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <Mark className="h-12 w-12 text-brass" strokeWidth={1.1} />
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="eyebrow mb-10 text-ivory/78" id="founder-heading">
              A note from our founder
            </p>
            <SplitText as="p" className="display-xl" text={"“We do not start\nwith products.\n*We start with problems.*”"} />
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
