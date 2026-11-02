import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatBand } from "@/components/sections/StatBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";
import { investors as inv } from "@/content/investors";
import { site } from "@/content/site";
import { pad } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Nuvexa's investment thesis, partner-led business model, growth roadmap and principles — and how to reach us about investor relations.",
};

export default function InvestorsPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Investors"
        title={inv.heroTitle}
        lede={inv.heroLede}
        image="/media/investors.webp"
        imageAlt="A calm boardroom library with a green marble table, bound reports and a brass lamp in morning light"
      />

      {/* 01 · Thesis */}
      <section data-theme="light" aria-labelledby="thesis-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6">
            <SectionLabel index="01" className="col-span-12 mb-6 text-ink-muted md:col-span-4">
              Why Nuvexa
            </SectionLabel>
            <div className="col-span-12 md:col-span-8">
              <h2 id="thesis-heading" className="sr-only">
                Investment thesis
              </h2>
              <SplitText as="p" className="display-xl max-w-[18ch]" text={"Four reasons we believe\nin *what we are building.*"} />
            </div>
          </div>
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {inv.thesis.map((t, i) => (
              <RevealItem key={t.title} className="flex min-h-72 flex-col justify-between rounded-[1.5rem] border border-ink/12 bg-paper p-8 md:p-10">
                <span className="font-serif text-5xl font-semibold text-brass">{pad(i + 1)}</span>
                <div>
                  <h3 className="display-md mb-4">{t.title}</h3>
                  <p className="text-ink-muted">{t.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 02 · Business model */}
      <section data-theme="dark" aria-labelledby="model-heading" className="bg-ink py-28 text-ivory md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="02" className="mb-8 text-ivory/78">
              Business model
            </SectionLabel>
            <h2 id="model-heading" className="display-xl max-w-[14ch]">
              Our business model, <em className="italic text-brass-soft">stated openly.</em>
            </h2>
            <RevealGroup className="mt-10 space-y-5">
              {inv.model.body.map((p) => (
                <RevealItem key={p}>
                  <p className="lede text-ivory/82">{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <div className="col-span-12 grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:grid-cols-1">
            {inv.model.pillars.map((col, i) => (
              <Reveal key={col.title} delay={i * 0.1} className={i === 0 ? "rounded-[1.5rem] bg-ivory p-8 text-ink" : "rounded-[1.5rem] border border-ivory/15 p-8"}>
                <p className={i === 0 ? "eyebrow mb-5 text-[#74562f]" : "eyebrow mb-5 text-brass-soft"}>{col.title}</p>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-lg font-medium">
                      <span aria-hidden="true" className={i === 0 ? "h-1.5 w-1.5 rounded-full bg-brass" : "h-1.5 w-1.5 rounded-full bg-brass-soft"} />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Numbers */}
      <section data-theme="light" aria-labelledby="numbers-heading" className="bg-ivory py-28 text-ink md:py-36">
        <div className="container-x">
          <SectionLabel index="03" className="mb-8 text-ink-muted">
            In numbers
          </SectionLabel>
          <h2 id="numbers-heading" className="display-lg mb-14 max-w-[22ch]">
            Where we stand <em className="italic text-brass">today.</em>
          </h2>
          <StatBand />
        </div>
      </section>

      {/* 04 · Growth path */}
      <Roadmap index="04" />
      <section data-theme="light" aria-labelledby="longterm-heading" className="bg-ivory-deep py-24 text-ink md:py-32">
        <div className="container-x">
          <h2 id="longterm-heading" className="eyebrow mb-10 text-ink-muted">
            {inv.longTerm.title}
          </h2>
          <RevealGroup className="grid gap-px overflow-hidden rounded-[1.5rem] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {inv.longTerm.items.map((it, i) => (
              <RevealItem key={it} className="flex min-h-40 flex-col justify-between bg-ivory-deep p-7">
                <span className="eyebrow text-brass">{pad(i + 1)}</span>
                <p className="display-md">{it}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 text-ink-muted">{inv.longTerm.note}</p>
        </div>
      </section>

      {/* 05 · Principles */}
      <section data-theme="light" aria-labelledby="principles-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="05" className="mb-8 text-ink-muted">
                Governance & principles
              </SectionLabel>
              <h2 id="principles-heading" className="display-xl max-w-[12ch]">
                How we <em className="italic text-brass">make decisions.</em>
              </h2>
            </div>
          </div>
          <ol className="col-span-12 border-t border-ink/12 lg:col-span-6 lg:col-start-7">
            {inv.principles.map((p, i) => (
              <li key={p.title} className="border-b border-ink/12 py-8">
                <Reveal className="grid grid-cols-[auto_1fr] gap-x-6">
                  <span className="eyebrow pt-2 text-brass">{pad(i + 1)}</span>
                  <div>
                    <h3 className="display-md mb-3">{p.title}</h3>
                    <p className="text-ink-muted">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 · Leadership */}
      <section data-theme="light" aria-labelledby="leader-heading" className="bg-ivory-deep py-28 text-ink md:py-36">
        <div className="container-x grid grid-cols-12 items-center gap-6">
          <Reveal className="col-span-12 lg:col-span-4">
            <div data-theme="dark" className="flex aspect-[4/5] flex-col justify-between rounded-[1.5rem] bg-ink p-8 text-ivory">
              <Mark className="h-8 w-8 text-brass" strokeWidth={1.2} />
              <p aria-hidden="true" className="font-serif text-[clamp(6rem,12vw,10rem)] font-medium leading-none tracking-[-0.04em] text-ivory/90">
                S<span className="italic text-brass">A</span>
              </p>
              <p className="eyebrow text-ivory/78">{company.founder.role}</p>
            </div>
          </Reveal>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <SectionLabel index="06" className="mb-8 text-ink-muted">
              Leadership
            </SectionLabel>
            <h2 id="leader-heading" className="display-xl mb-8">
              {company.founder.name}
            </h2>
            <Reveal>
              <p className="lede text-ink-muted">{company.founder.bio[0]}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-copy mt-5 text-ink-muted">{company.founder.bio[3]}</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <ButtonLink href="/company#leadership" variant="outline">
                Read the full profile
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 · Investor relations */}
      <section data-theme="dark" aria-labelledby="ir-heading" className="bg-ink py-28 text-ivory md:py-40">
        <div className="container-x">
          <p className="eyebrow mb-8 text-ivory/78">
            <span className="text-brass">07</span> — Investor relations
          </p>
          <SplitText as="h2" className="display-xl max-w-[16ch]" text={"Speak with us\n*about Nuvexa.*"} />
          <span id="ir-heading" className="sr-only">
            {inv.relations.title}
          </span>
          <div className="mt-12 grid grid-cols-12 gap-6 border-t border-ivory/12 pt-10">
            <Reveal className="col-span-12 md:col-span-6">
              <p className="lede text-ivory/82">{inv.relations.body}</p>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 flex flex-wrap items-start gap-3 md:col-span-5 md:col-start-8 md:justify-end">
              <ButtonLink href="/contact" variant="ivory">
                Send an enquiry
              </ButtonLink>
              <ButtonLink href={`mailto:${site.emails.general}?subject=Investor%20relations`} variant="outline-light">
                {`Email ${site.emails.general}`}
              </ButtonLink>
            </Reveal>
          </div>
          <p className="mt-16 max-w-[80ch] text-[0.85rem] leading-relaxed text-ivory/70">{inv.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
