import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CtaPair } from "@/components/sections/CtaPair";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatBand } from "@/components/sections/StatBand";
import { Mark } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";
import { values } from "@/content/site";
import { pad } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Company",
  description: "Nuvexa is a digital-first consumer health and personal care company, building trusted brands around real, recurring needs.",
};

export default function CompanyPage() {
  return (
    <>
      <CinematicHero
        eyebrow="About Nuvexa"
        title={"A digital-first\nconsumer health &\n*personal care* company."}
        lede={company.heroLede}
        image="/media/company.webp"
        imageAlt="A calm limestone and glass interior with an olive tree in warm morning light"
      />

      {/* Story */}
      <section data-theme="light" aria-labelledby="story-heading" className="bg-ivory pb-28 text-ink md:pb-40">
        <div className="container-x grid grid-cols-12 gap-6 border-t border-ink/12 pt-16 md:pt-24">
          <SectionLabel index="01" className="col-span-12 text-ink-muted md:col-span-4">
            Our story
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <h2 id="story-heading" className="sr-only">
              Our story
            </h2>
            <RevealGroup className="space-y-8">
              {company.story.map((p, i) => (
                <RevealItem key={i}>
                  <p className={i === 0 ? "display-md max-w-[30ch]" : "lede max-w-[58ch] text-ink-muted"}>{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
        <div className="container-x">
          <StatBand className="mt-24" />
        </div>
      </section>

      {/* Mission & vision diptych */}
      <section data-theme="dark" aria-label="Mission and vision" className="bg-ink text-ivory">
        <div className="grid md:grid-cols-2">
          {[
            { label: "Mission", body: company.mission },
            { label: "Vision", body: company.vision },
          ].map((item, i) => (
            <div key={item.label} className={i === 0 ? "border-b border-ivory/10 md:border-b-0 md:border-r" : ""}>
              <div className="flex min-h-[70svh] flex-col justify-between p-[var(--gutter)] py-20 md:py-28">
                <p className="eyebrow flex items-center gap-3 text-brass">
                  <Mark className="h-4 w-4" />
                  {item.label}
                </p>
                <Reveal>
                  <p className="display-md mt-16 max-w-[24ch]">{item.body}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section data-theme="light" aria-labelledby="values-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
            <SectionLabel index="02" className="col-span-12 text-ink-muted md:col-span-4">
              Core values
            </SectionLabel>
            <SplitText as="h2" className="display-xl col-span-12 max-w-[16ch] md:col-span-8" text={"The principles\nthat *guide us.*"} />
          </div>
          <RevealGroup className="grid border-t border-ink/12 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <RevealItem key={v.title} className="group border-b border-ink/12 py-10 md:pr-10 lg:[&:nth-child(3n+2)]:px-10 lg:[&:nth-child(3n+3)]:pl-10">
                <p className="eyebrow mb-8 text-brass">{pad(i + 1)}</p>
                <h3 className="display-md mb-4 transition-transform duration-500 group-hover:translate-x-1">{v.title}</h3>
                <p className="text-ink-muted">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" data-theme="light" aria-labelledby="leadership-heading" className="scroll-mt-24 bg-ivory-deep py-28 text-ink md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="03" className="mb-8 text-ink-muted">
                Leadership
              </SectionLabel>
              {/* Typographic monogram until an official portrait is supplied */}
              <div data-theme="dark" className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-ink p-8 text-ivory md:p-10">
                <Mark className="h-8 w-8 text-brass" strokeWidth={1.2} />
                <p aria-hidden="true" className="font-serif text-[clamp(7rem,16vw,13rem)] font-medium leading-none tracking-[-0.04em] text-ivory/90">
                  S<span className="italic text-brass">A</span>
                </p>
                <div className="border-t border-ivory/15 pt-5">
                  <p className="text-lg font-semibold">{company.founder.name}</p>
                  <p className="eyebrow mt-1 text-ivory/75">{company.founder.role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-4 text-brass">{company.founder.role}</p>
            <h2 id="leadership-heading" className="display-xl mb-12">
              {company.founder.name}
            </h2>
            <Reveal>
              <blockquote className="mb-14 border-l-2 border-brass pl-8">
                <p className="display-md italic">&ldquo;{company.founder.quote}&rdquo;</p>
              </blockquote>
            </Reveal>
            <RevealGroup className="space-y-6">
              {company.founder.bio.map((p, i) => (
                <RevealItem key={i}>
                  <p className="body-copy text-ink-muted">{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <OperatingModel index="04" />
      <Roadmap index="05" />

      {/* Image interlude */}
      <section data-theme="dark" aria-hidden="true" className="relative h-[70svh] overflow-hidden bg-ink">
        <Image src="/media/super-being.webp" alt="" fill sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 flex items-end">
          <p className="container-x display-lg pb-12 text-ivory">
            Everyday health, <em className="italic text-brass-soft">thoughtfully built.</em>
          </p>
        </div>
      </section>

      <CtaPair />
    </>
  );
}
