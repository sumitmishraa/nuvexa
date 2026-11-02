import type { Metadata } from "next";
import { Marquee } from "@/components/motion/Marquee";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { WordReveal } from "@/components/motion/WordReveal";
import { CtaPair } from "@/components/sections/CtaPair";
import { HomeHero } from "@/components/sections/HomeHero";
import { Pillars } from "@/components/sections/Pillars";
import { PortfolioScroll } from "@/components/sections/PortfolioScroll";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatBand } from "@/components/sections/StatBand";
import { WeDeclined } from "@/components/sections/superbeing/WeDeclined";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";
import { values } from "@/content/site";
import { superbeing as sb } from "@/content/superbeing";

export const metadata: Metadata = {
  title: { absolute: "Superbeing Nutrition by Nuvexa — Your need is specific. Your nutrition should be too." },
  description: `${sb.promise} Superbeing Nutrition is the flagship brand of Nuvexa Biotech, a digital-first consumer health company in Bengaluru.`,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <WordReveal
        eyebrow="01 — Why Superbeing exists"
        text="Not the same formulation with a different brand cover. We start with the person's *actual need* — and develop the product around it."
      />

      {/* The Superbeing standard */}
      <section data-theme="light" aria-labelledby="standard-heading" className="bg-ivory pb-28 text-ink md:pb-40">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 border-t border-ink/12 pt-16 md:pt-24">
            <SectionLabel index="02" className="col-span-12 mb-4 text-ink-muted md:col-span-4">
              The Superbeing standard
            </SectionLabel>
            <div className="col-span-12 md:col-span-8">
              <h2 id="standard-heading" className="sr-only">
                The Superbeing standard
              </h2>
              <SplitText as="p" className="display-xl max-w-[18ch]" text={"Every ingredient has a reason.\n*Every product has a purpose.*"} />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-6">
            <Reveal className="col-span-12 lg:col-span-5" y={40}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink">
                <ParallaxImage src="/media/research.webp" alt="Botanical extracts in glass vials beside printed research papers and a brass magnifying glass" sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            </Reveal>
            <div className="col-span-12 flex flex-col lg:col-span-7">
              <RevealGroup className="grid flex-1 gap-4 sm:grid-cols-2">
                {sb.standard.map((s) => (
                  <RevealItem key={s.title} className="flex min-h-56 flex-col justify-between rounded-[1.25rem] border border-ink/12 bg-paper p-7">
                    <p className="font-serif text-5xl font-semibold leading-none text-brass">
                      {s.value}
                      {s.unit ? <span className="ml-2 text-xl font-medium text-ink-muted">{s.unit}</span> : null}
                    </p>
                    <div>
                      <h3 className="display-md mb-2">{s.title}</h3>
                      <p className="text-ink-muted">{s.body}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
              <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-between gap-6">
                <p className="max-w-[44ch] text-ink-muted">{sb.promise}</p>
                <ButtonLink href={sb.href}>Read the Superbeing story</ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <WeDeclined compact index="03" />

      {/* Who we are */}
      <section data-theme="light" aria-labelledby="about-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6">
            <SectionLabel index="04" className="col-span-12 mb-4 text-ink-muted md:col-span-4">
              Nuvexa Biotech
            </SectionLabel>
            <div className="col-span-12 md:col-span-8">
              <h2 id="about-heading" className="sr-only">
                Nuvexa Biotech — the same principle in every brand
              </h2>
              <SplitText as="p" className="display-xl max-w-[18ch]" text={"The same principle runs\nthrough *every Nuvexa brand.*"} />
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <Reveal>
                  <p className="body-copy text-ink-muted">
                    Nuvexa Biotech Pvt. Ltd. is a next-generation healthcare and consumer company. Superbeing Nutrition is our flagship — and the way it was
                    built, starting from a specific need, is how we build every brand: in kids&rsquo; nutrition, men&rsquo;s grooming, intimate wellbeing,
                    modern Ayurveda and pet care.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="body-copy text-ink-muted">
                    Our initial focus is digital-first, e-commerce-led growth in India, with specialised development and manufacturing partners. As our
                    brands earn repeat demand and sustainable scale, we plan to extend into offline retail, pharmacies, healthcare networks and international
                    markets.
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
      <Roadmap />

      {/* Values ribbon */}
      <section data-theme="light" aria-label="Superbeing promise" className="overflow-hidden border-y border-ink/10 bg-ivory-deep py-14 text-ink md:py-20">
        <Marquee items={[...sb.commitment.signoff, ...values.slice(0, 3).map((v) => v.title)]} />
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
            <SplitText
              as="p"
              className="display-lg max-w-[26ch]"
              text={"“My ambition is to build the brand\nI was searching for: *thoughtful formulations,*\n*understandable science,* dependable support\nand a willingness to keep improving.”"}
            />
            <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-ivory/10 pt-8">
              <div>
                <p className="text-lg font-semibold">{company.founder.name}</p>
                <p className="eyebrow mt-1 text-ivory/78">Founder · Nuvexa & Superbeing Nutrition</p>
              </div>
              <ButtonLink href={sb.href} variant="outline-light">
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
