import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Marquee } from "@/components/motion/Marquee";
import { MonthsRail } from "@/components/sections/superbeing/MonthsRail";
import { WeDeclined } from "@/components/sections/superbeing/WeDeclined";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { Photo } from "@/components/ui/Photo";
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
      <section data-theme="light" aria-label={sb.origin.eyebrow} className="bg-ivory py-20 text-ink md:py-28">
        <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-8 text-ink-muted">01 — {sb.origin.eyebrow}</p>
            <Reveal>
              <p className="display-lg max-w-[26ch]">{renderInline(sb.origin.text)}</p>
            </Reveal>
          </div>
          <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink lg:col-span-5">
            <RevealPhoto src={origin.src} alt={origin.alt} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>
      <section data-theme="light" aria-labelledby="question-heading" className="bg-ivory pb-20 text-ink md:pb-28">
        <div className="container-x grid grid-cols-12 gap-6 border-t border-ink/12 pt-12 md:pt-16">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl" style={{ background: "#ffffff" }}>
                <Image src="/brands/super-being.webp" alt="Superbeing Nutrition logo" fill sizes="64px" className="object-contain p-1" />
              </div>
              <p className="eyebrow text-ink-muted">A personal search</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <RevealGroup className="space-y-4">
              {sb.origin.body.map((p) => (
                <RevealItem key={p}>
                  <p className="lede text-ink-muted">{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <h2 id="question-heading" className="sr-only">
              {sb.origin.question}
            </h2>
            <SplitText as="p" className="display-xl mt-12" text={"“What would we formulate\nif we started with the\n*person’s actual need?*”"} />
            <Reveal delay={0.2}>
              <p className="lede mt-10 font-semibold">{sb.origin.after}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 · Fifteen months */}
      <MonthsRail />

      {/* 03 · Selected for their science */}
      <PhotoBand src="/media/pipette-hood.webp" video="/media/video/pipette-hood.mp4" />
      <section data-theme="light" aria-labelledby="science-heading" className="bg-ivory py-20 text-ink md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6">
            <SectionLabel index="03" className="col-span-12 mb-6 text-ink-muted md:col-span-4">
              Selected for their science
            </SectionLabel>
            <div className="col-span-12 md:col-span-8">
              <h2 id="science-heading" className="display-xl max-w-[16ch]">
                Patented ingredients, <em className="italic text-brass">selected for their science.</em>
              </h2>
              <Reveal>
                <p className="lede mt-8 text-ink-muted">{sb.ingredients.intro}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="body-copy mt-5 text-ink-muted">{sb.ingredients.notForTheLabel}</p>
              </Reveal>
            </div>
          </div>

          <p className="eyebrow mb-6 mt-20 text-ink-muted">For every ingredient, we reviewed</p>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sb.ingredients.lenses.map((l, i) => (
              <RevealItem key={l.title} className="group overflow-hidden rounded-[1.25rem] border border-ink/12 bg-paper">
                <div className="relative aspect-[3/2] overflow-hidden bg-ivory-deep">
                  <Photo src={lensPhotos[i].src} alt="" sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="font-serif text-3xl font-semibold text-brass">{pad(i + 1)}</span>
                  <h3 className="display-md mb-3 mt-3">{l.title}</h3>
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
                <p className="display-lg">{sb.ingredients.principle}</p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 · Built on biology */}
      <section data-theme="light" aria-labelledby="biology-heading" className="bg-ivory-deep py-20 text-ink md:py-28">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6">
            <SectionLabel index="04" className="col-span-12 mb-6 text-ink-muted md:col-span-4">
              For women · for men
            </SectionLabel>
            <div className="col-span-12 md:col-span-8">
              <h2 id="biology-heading" className="display-xl max-w-[14ch]">
                Built on biology, <em className="italic text-brass">not just a label.</em>
              </h2>
              <Reveal>
                <p className="lede mt-8 text-ink-muted">{sb.biology.intro}</p>
              </Reveal>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-[1.5rem] bg-paper p-8 md:p-12">
              <p className="eyebrow mb-6 text-brass">What differs</p>
              <ul className="divide-y divide-ink/10">
                {sb.biology.differs.map((d) => (
                  <li key={d} className="display-md py-4">
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
                  <li key={d} className="display-md py-4">
                    {d}
                  </li>
                ))}
              </ul>
              <p className="body-copy mt-6 text-ivory/80">Biology is only part of the picture.</p>
            </Reveal>
          </div>
          <Reveal className="mt-14 rounded-[1.5rem] border border-brass/50 p-8 md:p-12">
            <p className="display-lg max-w-[34ch]">{sb.biology.statement}</p>
          </Reveal>
        </div>
      </section>

      {/* 05 · We declined */}
      <WeDeclined />

      {/* 06 · Everyday life */}
      <section data-theme="light" aria-labelledby="everyday-heading" className="bg-ivory pt-20 text-ink md:pt-28">
        <div className="container-x grid grid-cols-12 gap-6">
          <SectionLabel index="06" className="col-span-12 mb-6 text-ink-muted md:col-span-4">
            Everyday life
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <h2 id="everyday-heading" className="display-xl max-w-[14ch]">
              Built around <em className="italic text-brass">everyday life.</em>
            </h2>
            <RevealGroup className="mt-8 space-y-5">
              {sb.everyday.body.map((p) => (
                <RevealItem key={p}>
                  <p className="lede text-ink-muted">{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
        <div className="container-x mt-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-ink">
            <RevealPhoto src={everyday.src} alt={everyday.alt} sizes="(min-width: 768px) 92vw, 100vw" />
          </div>
        </div>
        <div className="mt-16 overflow-hidden border-y border-ink/10 bg-ivory-deep py-12">
          <Marquee items={sb.everyday.fragments} duration={60} />
        </div>
        <div className="container-x py-16 md:py-20">
          <Reveal>
            <p className="display-lg text-center">{sb.everyday.principle}</p>
          </Reveal>
        </div>
      </section>

      {/* 07 · Your voice */}
      <section data-theme="dark" aria-labelledby="voice-heading" className="bg-ink-soft py-20 text-ivory md:py-28">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6">
            <SectionLabel index="07" className="col-span-12 mb-6 text-ivory/78 md:col-span-4">
              Your voice
            </SectionLabel>
            <div className="col-span-12 md:col-span-8">
              <h2 id="voice-heading" className="display-xl max-w-[16ch]">
                Your voice helps shape <em className="italic text-brass-soft">what comes next.</em>
              </h2>
              <RevealGroup className="mt-8 space-y-5">
                {sb.voice.intro.map((p) => (
                  <RevealItem key={p}>
                    <p className="lede text-ivory/80">{p}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sb.voice.ways.map((w, i) => (
              <RevealItem key={w.title} className="flex min-h-60 flex-col justify-between rounded-[1.25rem] border border-ivory/12 bg-ink p-6">
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
              <p className="display-lg">{sb.voice.principle}</p>
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
      <section data-theme="light" aria-labelledby="feedback-heading" className="bg-ivory py-20 text-ink md:py-28">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="08" className="mb-8 text-ink-muted">
                Honest feedback
              </SectionLabel>
              <h2 id="feedback-heading" className="display-xl max-w-[12ch]">
                Honest feedback <em className="italic text-brass">makes us better.</em>
              </h2>
              <p className="lede mt-8 text-ink-muted">{sb.feedback.intro}</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-ink/12">
              {sb.feedback.questions.map((q, i) => (
                <li key={q} className="border-b border-ink/12 py-7">
                  <Reveal className="flex items-baseline gap-6">
                    <span className="eyebrow text-brass">{pad(i + 1)}</span>
                    <p className="display-md">{q}</p>
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
      <section data-theme="light" aria-labelledby="clarity-heading" className="bg-ivory-deep py-20 text-ink md:py-28">
        <div className="container-x">
          <div className="mb-14 grid grid-cols-12 gap-6">
            <SectionLabel index="09" className="col-span-12 mb-6 text-ink-muted md:col-span-4">
              Our promise to you
            </SectionLabel>
            <h2 id="clarity-heading" className="display-xl col-span-12 max-w-[16ch] md:col-span-8">
              Clear information. <em className="italic text-brass">Realistic expectations.</em>
            </h2>
          </div>
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
      <section data-theme="dark" aria-labelledby="commitment-heading" className="bg-ink py-20 text-ivory md:py-28">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <Mark className="h-12 w-12 text-brass" strokeWidth={1.1} />
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="eyebrow mb-6 text-ivory/78" id="commitment-heading">
              10 — {sb.commitment.title}
            </p>
            <Reveal>
              <p className="lede mb-12 max-w-[52ch] text-ivory/85">{sb.commitment.body}</p>
            </Reveal>
            <blockquote>
              <SplitText as="p" className="display-lg max-w-[30ch]" text={`“${sb.commitment.founderNote}”`} />
              <Reveal delay={0.2} className="mt-10 flex items-center gap-4 border-t border-ivory/10 pt-8">
                <div>
                  <p className="text-lg font-semibold">{company.founder.name}</p>
                  <p className="eyebrow mt-1 text-ivory/78">Founder, Superbeing Nutrition</p>
                </div>
              </Reveal>
            </blockquote>
            <div className="mt-20">
              {sb.commitment.signoff.map((line, i) => (
                <Reveal key={line} delay={i * 0.12}>
                  <p className={i === 2 ? "display-xl italic text-brass-soft" : "display-xl"}>{line}</p>
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
        <Link href={brandHref(next)} data-cursor="Next" className="group container-x grid grid-cols-12 items-center gap-6 py-20 md:py-28">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6 text-ink-muted">Next in the portfolio</p>
            <p className="display-xl transition-colors duration-500 group-hover:text-brass">
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
