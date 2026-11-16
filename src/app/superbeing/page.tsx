import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Marquee } from "@/components/motion/Marquee";
import { MonthsRail } from "@/components/sections/superbeing/MonthsRail";
import { WeDeclined } from "@/components/sections/superbeing/WeDeclined";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { Photo } from "@/components/ui/Photo";
import { SectionHead } from "@/components/ui/SectionHead";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandHref, getBrand } from "@/content/brands";
import { company } from "@/content/company";
import { superbeing as sb } from "@/content/superbeing";
import { pad } from "@/lib/cn";
import { photoFile } from "@/lib/photoFile";
import { slot } from "@/lib/slot";
import { renderInline } from "@/lib/renderInline";

export const metadata: Metadata = {
  title: "Superbeing Nutrition",
  description: `${sb.headline} ${sb.promise}`,
  openGraph: { images: [{ url: photoFile(sb.image, 1600), alt: sb.imageAlt }] },
};

const lensPhotos = [slot("lens-amount"), slot("lens-people"), slot("lens-measured"), slot("lens-fit")];
const origin = slot("sb-origin");
const everyday = slot("sb-everyday");

export default function SuperbeingPage() {
  const next = getBrand("super-titans")!;

  return (
    <>
      <PageHero
        variant="grow"
        eyebrow="Superbeing Nutrition"
        title={"Your need is specific.\n*Your nutrition*\n*should be too.*"}
        lede={sb.promise}
        photos={[{ src: sb.image, alt: sb.imageAlt, position: "center 62%" }]}
      />

      {/* 01 · Origin */}
      <section data-theme="light" aria-labelledby="origin-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHead index="01" label={sb.origin.eyebrow} labelClassName="text-ink-muted">
            <h2 id="origin-heading" className="display-lg max-w-[18ch]">
              It began with a personal search.
            </h2>
          </SectionHead>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:items-start">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className="statement max-w-[34ch]">{renderInline(sb.origin.text)}</p>
              </Reveal>
              <RevealGroup className="mt-6 space-y-4">
                {sb.origin.body.map((p) => (
                  <RevealItem key={p}>
                    <p className="body-copy max-w-[60ch] text-ink-muted">{p}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
              <Reveal delay={0.1}>
                <blockquote className="mt-10 border-l-2 border-brass pl-6 md:pl-8">
                  <p className="display-md italic">&ldquo;What would we formulate if we started with the person&rsquo;s actual need?&rdquo;</p>
                </blockquote>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="body-copy mt-8 font-semibold">{sb.origin.after}</p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ink">
                <RevealPhoto src={origin.src} alt={origin.alt} sizes="(min-width: 768px) 40vw, 92vw" />
              </div>
              <div className="mt-5 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg" style={{ background: "#ffffff" }}>
                  <Image src="/brands/super-being.webp" alt="Superbeing Nutrition logo" fill sizes="48px" className="object-contain p-1" />
                </div>
                <p className="eyebrow text-ink-muted">A personal search</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Fifteen months */}
      <MonthsRail />

      {/* 03 · Selected on research */}
      <PhotoBand src="/media/pipette-hood.webp" video="/media/video/pipette-hood.mp4" />
      <section data-theme="light" aria-labelledby="science-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHead index="03" label="Selected on research" labelClassName="text-ink-muted" className="mb-0 md:mb-0">
            <h2 id="science-heading" className="display-lg max-w-[18ch]">
              Patented ingredients, selected on research.
            </h2>
          </SectionHead>
          <div className="mt-8 grid gap-x-6 gap-y-5 md:grid-cols-2">
            <Reveal>
              <p className="body-copy text-ink-muted">{sb.ingredients.intro}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-copy text-ink-muted">{sb.ingredients.notForTheLabel}</p>
            </Reveal>
          </div>

          <p className="eyebrow mb-6 mt-16 text-ink-muted">For every ingredient, we reviewed</p>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sb.ingredients.lenses.map((l, i) => (
              <RevealItem key={l.title} className="group overflow-hidden rounded-[1.25rem] border border-ink/12 bg-paper">
                <div className="relative aspect-[3/2] overflow-hidden bg-ivory-deep">
                  <Photo src={lensPhotos[i].src} alt="" sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="font-serif text-3xl font-semibold text-brass">{pad(i + 1)}</span>
                  <h3 className="mb-2 mt-3 font-serif text-[1.35rem] font-semibold leading-tight">{l.title}</h3>
                  <p className="text-ink-muted">{l.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-16 grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow mb-5 text-ink-muted">Our attention also extended to</p>
              <RevealGroup className="flex flex-wrap gap-2.5" stagger={0.05}>
                {sb.ingredients.attention.map((a) => (
                  <RevealItem key={a}>
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-4 py-2.5 text-[0.95rem] font-medium">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brass" />
                      {a}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7">
              <blockquote className="border-l-2 border-brass pl-8">
                <p className="display-md">{sb.ingredients.principle}</p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 · Built on biology */}
      <section data-theme="light" aria-labelledby="biology-heading" className="bg-ivory-deep py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHead index="04" label="For women · for men" labelClassName="text-ink-muted" lede={sb.biology.intro} ledeClassName="text-ink-muted">
            <h2 id="biology-heading" className="display-lg max-w-[18ch]">
              Built on biology, not just a label.
            </h2>
          </SectionHead>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-[1.5rem] bg-paper p-8 md:p-12">
              <p className="eyebrow mb-6 text-brass">What differs</p>
              <ul className="divide-y divide-ink/10">
                {sb.biology.differs.map((d) => (
                  <li key={d} className="statement py-3.5">
                    {d}
                  </li>
                ))}
              </ul>
              <p className="body-copy mt-6 text-ink-muted">{sb.biology.ironNote}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[1.5rem] bg-ink p-8 text-ivory md:p-12">
              <p className="eyebrow mb-6 text-brass-soft">What shapes everyday life</p>
              <ul className="divide-y divide-ivory/10">
                {sb.biology.lifeFactors.map((d) => (
                  <li key={d} className="statement py-3.5">
                    {d}
                  </li>
                ))}
              </ul>
              <p className="body-copy mt-6 text-ivory/80">Biology is only part of the picture.</p>
            </Reveal>
          </div>
          <Reveal className="mt-5 rounded-[1.5rem] border border-brass/50 p-8 md:p-12">
            <p className="statement max-w-[48ch]">{sb.biology.statement}</p>
          </Reveal>
        </div>
      </section>

      {/* 05 · We declined */}
      <WeDeclined />

      {/* 06 · Everyday life */}
      <section data-theme="light" aria-labelledby="everyday-heading" className="bg-ivory pt-24 text-ink md:pt-36">
        <div className="container-x">
          <SectionHead index="06" label="Everyday life" labelClassName="text-ink-muted" className="mb-0 md:mb-0">
            <h2 id="everyday-heading" className="display-lg max-w-[18ch]">
              Built around everyday life.
            </h2>
          </SectionHead>
          <RevealGroup className="mt-8 grid gap-x-6 gap-y-5 md:grid-cols-2">
            {sb.everyday.body.map((p) => (
              <RevealItem key={p}>
                <p className="body-copy text-ink-muted">{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <div className="container-x mt-12 md:mt-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-ink">
            <RevealPhoto src={everyday.src} alt={everyday.alt} sizes="(min-width: 768px) 92vw, 100vw" />
          </div>
        </div>
        <div className="mt-16 overflow-hidden border-y border-ink/10 bg-ivory-deep py-12">
          <Marquee items={sb.everyday.fragments} duration={60} />
        </div>
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <p className="display-md">{sb.everyday.principle}</p>
          </Reveal>
        </div>
      </section>

      {/* 07 · Your voice */}
      <section data-theme="dark" aria-labelledby="voice-heading" className="bg-ink-soft py-24 text-ivory md:py-36">
        <div className="container-x">
          <SectionHead index="07" label="Your voice" labelClassName="text-ivory/78" className="mb-0 md:mb-0">
            <h2 id="voice-heading" className="display-lg max-w-[18ch]">
              Your voice helps shape what comes next.
            </h2>
          </SectionHead>
          <RevealGroup className="mb-12 mt-8 grid gap-x-6 gap-y-5 md:mb-16 md:grid-cols-2">
            {sb.voice.intro.map((p) => (
              <RevealItem key={p}>
                <p className="body-copy text-ivory/80">{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sb.voice.ways.map((w, i) => (
              <RevealItem key={w.title} className="flex min-h-44 flex-col justify-between md:min-h-60 rounded-[1.25rem] border border-ivory/12 bg-ink p-6">
                <span className="font-serif text-4xl font-semibold text-brass">{pad(i + 1)}</span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{w.title}</h3>
                  <p className="text-[0.95rem] text-ivory/78">{w.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-16 grid grid-cols-12 gap-6 border-t border-ivory/12 pt-10">
            <Reveal className="col-span-12 md:col-span-7">
              <p className="display-md max-w-[30ch]">{sb.voice.principle}</p>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9">
              <p className="text-ivory/80">{sb.voice.guide}</p>
              <ButtonLink href="/contact" variant="ivory">
                Share your experience
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 · Honest feedback */}
      <section data-theme="light" aria-labelledby="feedback-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="08" className="mb-7 text-ink-muted">
                Honest feedback
              </SectionLabel>
              <h2 id="feedback-heading" className="display-lg max-w-[14ch]">
                Honest feedback makes us better.
              </h2>
              <p className="lede mt-6 text-ink-muted">{sb.feedback.intro}</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-ink/12">
              {sb.feedback.questions.map((q, i) => (
                <li key={q} className="border-b border-ink/12 py-5">
                  <Reveal className="flex items-baseline gap-6">
                    <span className="eyebrow text-brass">{pad(i + 1)}</span>
                    <p className="statement">{q}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal>
              <p className="body-copy mt-10 text-ink-muted">{sb.feedback.commitment}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 · Clear information */}
      <section data-theme="light" aria-labelledby="clarity-heading" className="bg-ivory-deep py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHead index="09" label="Our promise to you" labelClassName="text-ink-muted">
            <h2 id="clarity-heading" className="display-lg max-w-[18ch]">
              Clear information. Realistic expectations.
            </h2>
          </SectionHead>
          <p className="eyebrow mb-6 text-ink-muted">{sb.clarity.intro}</p>
          <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sb.clarity.points.map((p) => (
              <RevealItem key={p} className="flex gap-4 rounded-[1.25rem] bg-paper p-6">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-brass">
                  <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M6 10.5 8.7 13 14 7.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[1.02rem] font-medium leading-relaxed">{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-10 grid gap-6 rounded-[1.5rem] border border-brass/50 p-8 md:grid-cols-2 md:p-10">
            <div>
              <p className="eyebrow mb-3 text-brass">Research, read honestly</p>
              <p className="text-ink-muted">{sb.clarity.research}</p>
            </div>
            <div>
              <p className="eyebrow mb-3 text-brass">Your information</p>
              <p className="text-ink-muted">{sb.clarity.privacy}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 · Commitment */}
      <section data-theme="dark" aria-labelledby="commitment-heading" className="bg-ink py-24 text-ivory md:py-36">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <Mark className="h-12 w-12 text-brass" strokeWidth={1.1} />
          </div>
          <div className="col-span-12 md:col-span-9">
            <SectionLabel index="10" className="mb-7 text-ivory/78">
              <span id="commitment-heading">{sb.commitment.title}</span>
            </SectionLabel>
            <Reveal>
              <p className="lede mb-12 max-w-[52ch] text-ivory/85">{sb.commitment.body}</p>
            </Reveal>
            <blockquote>
              <Reveal>
                <p className="display-md max-w-[36ch] italic">&ldquo;{sb.commitment.founderNote}&rdquo;</p>
              </Reveal>
              <Reveal delay={0.2} className="mt-10 flex items-center gap-4 border-t border-ivory/10 pt-8">
                <div>
                  <p className="text-lg font-semibold">{company.founder.name}</p>
                  <p className="eyebrow mt-1 text-ivory/78">Founder, Superbeing Nutrition</p>
                </div>
              </Reveal>
            </blockquote>
            <div className="mt-16">
              {sb.commitment.signoff.map((line, i) => (
                <Reveal key={line} delay={i * 0.12}>
                  <p className="display-lg">{line}</p>
                </Reveal>
              ))}
              <Reveal delay={0.4}>
                <p className="lede mt-10 text-ivory/80">{sb.commitment.invitation}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="ivory">
                    Share your experience
                  </ButtonLink>
                  <ButtonLink href="/brands" variant="outline-light">
                    Explore the Nuvexa portfolio
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next brand */}
      <section data-theme="light" aria-label="Next brand" className="bg-ivory text-ink">
        <Link href={brandHref(next)} data-cursor="Next" className="group container-x grid grid-cols-12 items-center gap-6 py-24 md:py-36">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6 text-ink-muted">Next in the portfolio</p>
            <p className="display-lg transition-colors duration-500 group-hover:text-brass">
              {next.name} <span className="inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
            </p>
            <p className="mt-4 italic text-ink-muted">&ldquo;{next.quote}&rdquo;</p>
          </div>
          <div className="relative col-span-12 hidden aspect-square overflow-hidden rounded-[1.25rem] md:col-span-3 md:col-start-10 md:block" style={{ background: next.logoBg }}>
            <Image src={next.logo} alt="" fill sizes="25vw" className="object-contain p-[8%] transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </Link>
      </section>
    </>
  );
}
