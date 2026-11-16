import { Reveal } from "@/components/motion/Reveal";

import { SplitText } from "@/components/motion/SplitText";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { WordReveal } from "@/components/motion/WordReveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { HomeHero } from "@/components/sections/HomeHero";
import { Marquee } from "@/components/motion/Marquee";
import { Pillars } from "@/components/sections/Pillars";
import { PortfolioScroll } from "@/components/sections/PortfolioScroll";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatBand } from "@/components/sections/StatBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getBrand } from "@/content/brands";
import { company } from "@/content/company";
import { values } from "@/content/site";
import { superbeing as sb } from "@/content/superbeing";
import { slot } from "@/lib/slot";

const conviction = slot("home-conviction");
const flagship = slot("home-flagship");
const pharmaPhoto = slot("home-pharma");

export default function HomePage() {
  const pharma = getBrand("pharmaceuticals")!;
  return (
    <>
      <HomeHero />

      {/* Pharmaceuticals: the core */}
      <section data-theme="dark" aria-labelledby="pharma-heading" className="bg-ink text-ivory">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-[var(--gutter)] py-14 md:py-20">
            <p className="eyebrow mb-6 text-brass">Our core</p>
            <h2 id="pharma-heading" className="display-lg">
              Science-led <em className="italic text-brass-soft">pharmaceuticals.</em>
            </h2>
            <Reveal delay={0.1}>
              <p className="lede mb-8 mt-6 max-w-[46ch] text-ivory/82">{pharma.intro[0]}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mb-10 flex flex-wrap gap-2" aria-label="Focus areas">
                {pharma.focusAreas!.map((f) => (
                  <li key={f} className="rounded-full border border-ivory/25 px-4 py-2 text-[0.88rem]">
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <ButtonLink href="/brands/pharmaceuticals" variant="ivory">
              Explore Pharmaceuticals
            </ButtonLink>
          </div>
          <div className="relative order-first aspect-[3/2] overflow-hidden md:order-none md:aspect-auto md:min-h-[32rem]">
            <RevealPhoto src={pharmaPhoto.src} alt={pharmaPhoto.alt} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <WordReveal
        eyebrow="01 — Our conviction"
        text="Everyday health is full of small, recurring *needs* — in our routines, at every life stage, and for the pets we share our homes with. That is where every Nuvexa brand begins."
        image={conviction.src}
        imageAlt={conviction.alt}
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
                    Nuvexa Biotech Pvt. Ltd. is a science-led pharmaceutical and consumer health company. Pharmaceuticals are at our core. Alongside them,
                    we build differentiated brands around real, recurring needs — in nutrition, kids&rsquo; nutrition, men&rsquo;s grooming, intimate
                    wellbeing, modern Ayurveda and pet care — and we design every one of them to earn trust over time.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="body-copy text-ink-muted">
                    Our consumer brands grow digital-first, through e-commerce in India. As they achieve product-market fit and sustainable scale, we plan to
                    extend into offline retail, pharmacies, healthcare networks and international markets.
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
            <RevealPhoto src={flagship.src} alt={flagship.alt} sizes="(min-width: 768px) 50vw, 100vw" />
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
      <Roadmap index="05" />

      {/* Values ribbon */}
      <section data-theme="light" aria-label="Our values" className="overflow-hidden border-y border-ink/10 bg-ivory-deep py-16 text-ink md:py-24">
        <Marquee items={values.map((v) => v.title)} duration={56} />
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
