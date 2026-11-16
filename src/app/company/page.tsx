import type { Metadata } from "next";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CtaPair } from "@/components/sections/CtaPair";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { PageHero } from "@/components/sections/PageHero";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatBand } from "@/components/sections/StatBand";
import { Mark } from "@/components/ui/Logo";
import { Photo } from "@/components/ui/Photo";
import { SectionHead } from "@/components/ui/SectionHead";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";
import { values } from "@/content/site";
import { pad } from "@/lib/cn";
import { slot } from "@/lib/slot";

export const metadata: Metadata = {
  title: "Company",
  description: "Nuvexa is a research-driven pharmaceutical and consumer health company, with pharmaceuticals at its core and trusted brands built around real, recurring needs.",
};

const valuePhotos = [slot("value-consumer"), slot("value-trust"), slot("value-execution"), slot("value-innovation"), slot("value-agility"), slot("value-longterm")];
const hero = slot("company-hero");
const story = slot("company-story");
const band = slot("company-band");

export default function CompanyPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="About Nuvexa"
        title={"A research-driven\npharmaceutical &\n*consumer health* company."}
        lede={company.heroLede}
        photos={[hero]}
      />

      {/* Story */}
      <section data-theme="light" aria-labelledby="story-heading" className="bg-ivory pb-24 text-ink md:pb-36">
        <div className="container-x border-t border-ink/12 pt-12 md:pt-16">
          <SectionHead index="01" label="Our story" labelClassName="text-ink-muted">
            <h2 id="story-heading" className="display-lg max-w-[18ch]">
              Built around problems, not products.
            </h2>
          </SectionHead>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:items-start">
            <RevealGroup className="col-span-12 space-y-6 md:col-span-7">
              {company.story.map((p, i) => (
                <RevealItem key={i}>
                  <p className={i === 0 ? "statement max-w-[34ch]" : "body-copy max-w-[60ch] text-ink-muted"}>{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ivory-deep md:col-span-5">
              <RevealPhoto src={story.src} alt={story.alt} sizes="(min-width: 768px) 40vw, 92vw" />
            </div>
          </div>
        </div>
        <div className="container-x">
          <StatBand className="mt-16" />
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
              <div className="flex flex-col p-[var(--gutter)] py-24 md:py-24">
                <p className="eyebrow flex items-center gap-3 text-brass">
                  <Mark className="h-4 w-4" />
                  {item.label}
                </p>
                <Reveal>
                  <p className="statement mt-8 max-w-[34ch] md:mt-10">{item.body}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section data-theme="light" aria-labelledby="values-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHead index="02" label="Core values" labelClassName="text-ink-muted">
            <SplitText as="h2" id="values-heading" className="display-lg max-w-[18ch]" text={"The principles\nthat *guide us.*"} />
          </SectionHead>
          <RevealGroup className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
            {values.map((v, i) => (
              <RevealItem key={v.title} className="group">
                <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ivory-deep">
                  <Photo src={valuePhotos[i].src} alt="" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105" />
                </div>
                <p className="eyebrow mb-3 text-brass">{pad(i + 1)}</p>
                <h3 className="display-md mb-3 transition-transform duration-500 group-hover:translate-x-1">{v.title}</h3>
                <p className="text-ink-muted">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" data-theme="light" aria-labelledby="leadership-heading" className="scroll-mt-24 bg-ivory-deep py-24 text-ink md:py-36">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="03" className="mb-7 text-ink-muted">
                Leadership
              </SectionLabel>
              {/* Typographic monogram until an official portrait is supplied */}
              <div data-theme="dark" className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-ink p-8 text-ivory md:p-10">
                <Mark className="h-8 w-8 text-brass" strokeWidth={1.2} />
                <p aria-hidden="true" className="font-serif text-[clamp(7rem,16vw,13rem)] font-medium leading-none tracking-[-0.04em] text-ivory/90">
                  S<span className="text-brass">A</span>
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
            <h2 id="leadership-heading" className="display-lg mb-10">
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

      <Roadmap index="04" />

      {/* Image interlude */}
      <PhotoBand src={band.src} label="Everyday health, thoughtfully built">
        Everyday health, thoughtfully built.
      </PhotoBand>

      <CtaPair />
    </>
  );
}
