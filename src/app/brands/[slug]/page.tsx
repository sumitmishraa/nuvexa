import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { BrandStage } from "@/components/ui/BrandStage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandHref, brands, getBrand, toneStyles } from "@/content/brands";
import { pad } from "@/lib/cn";

export function generateStaticParams() {
  return brands.filter((b) => !b.href).map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/brands/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: brand.name,
    description: brand.summary,
    openGraph: brand.image ? { images: [{ url: brand.image, alt: brand.imageAlt }] } : undefined,
  };
}

export default async function BrandPage({ params }: PageProps<"/brands/[slug]">) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const index = brands.findIndex((b) => b.slug === brand.slug);
  const next = brands[(index + 1) % brands.length];
  const tone = toneStyles[brand.tone];
  // The ink tone is already used by "The need"; give philosophy the warm paper ground instead.
  const philosophy = tone.bg === "#0e1e19" ? { bg: "#e7dfd0", fg: "#0e1e19" } : { bg: tone.bg, fg: tone.fg };
  const philosophyTheme = philosophy.fg === "#0e1e19" ? "light" : "dark";

  return (
    <>
      {/* Hero */}
      <section data-theme="light" className="bg-ivory pb-20 pt-32 text-ink md:pt-40">
        <div className="container-x grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 flex flex-col lg:col-span-6">
            <div>
              <Reveal>
                <nav aria-label="Breadcrumb" className="eyebrow mb-12 flex items-center gap-3 text-ink-muted">
                  <Link href="/brands" className="hover:text-ink">
                    Our brands
                  </Link>
                  <span aria-hidden="true" className="h-px w-6 bg-brass" />
                  <span aria-current="page">{pad(index + 1)}</span>
                </nav>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="eyebrow mb-6 text-brass">{brand.category}</p>
              </Reveal>
              <SplitText as="h1" trigger="load" delay={0.15} className="display-hero" text={brand.name.replace(" ", "\n")} />
            </div>
            <Reveal delay={0.45} className="mt-12">
              <p className="display-md max-w-[22ch] italic text-ink-muted">&ldquo;{brand.quote}&rdquo;</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-ink/20 px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em]">{brand.status}</span>
                <span className="rounded-full border border-ink/20 px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em]">{brand.lifeStage}</span>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <BrandStage brand={brand} entrance priority className="aspect-square rounded-[1.75rem] lg:aspect-auto lg:h-[74svh]" sizes="(min-width: 1024px) 48vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Lifestyle photography, where the brand has it */}
      {brand.image ? (
        <section data-theme="dark" aria-hidden="true" className="relative h-[72svh] overflow-hidden bg-ink">
          <ParallaxImage src={brand.image} alt="" sizes="100vw" />
        </section>
      ) : null}

      {/* Introduction */}
      <section data-theme="light" aria-labelledby="intro-heading" className="bg-ivory pb-28 text-ink md:pb-36">
        <div className="container-x grid grid-cols-12 gap-6 border-t border-ink/12 pt-16">
          <SectionLabel index="01" className="col-span-12 text-ink-muted md:col-span-4">
            <span id="intro-heading">Introducing {brand.name}</span>
          </SectionLabel>
          <RevealGroup className="col-span-12 space-y-8 md:col-span-8">
            {brand.intro.map((p, i) => (
              <RevealItem key={i}>
                <p className={i === 0 ? "display-md max-w-[32ch]" : "lede max-w-[58ch] text-ink-muted"}>{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* The need */}
      <section data-theme="dark" aria-labelledby="need-heading" className="py-28 md:py-40" style={{ background: "#0e1e19", color: "#f2ede3" }}>
        <div className="container-x grid grid-cols-12 gap-6">
          <SectionLabel index="02" className="col-span-12 mb-6 text-ivory/75 md:col-span-4">
            The need
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <SplitText as="h2" className="display-xl max-w-[18ch]" text={brand.need.title} />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {brand.need.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="body-copy text-ivory/80">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section data-theme={philosophyTheme} aria-labelledby="philosophy-heading" className="py-28 md:py-40" style={{ background: philosophy.bg, color: philosophy.fg }}>
        <div className="container-x">
          <p id="philosophy-heading" className="eyebrow mb-12 opacity-85">
            <span className={philosophyTheme === "light" ? "text-brass" : ""}>03</span> — Brand philosophy
          </p>
          <Reveal>
            <p className="display-lg max-w-[30ch]">{brand.philosophy}</p>
          </Reveal>
          {brand.formula ? (
            <RevealGroup className="mt-16 flex flex-wrap items-center gap-3">
              {brand.formula.map((f, i) => (
                <RevealItem key={f} className="flex items-center gap-3">
                  <span className="rounded-full border border-current/30 px-5 py-3 text-[0.9rem]">{f}</span>
                  {i < brand.formula!.length - 1 ? (
                    <span aria-hidden="true" className="font-serif text-2xl opacity-60">
                      +
                    </span>
                  ) : null}
                </RevealItem>
              ))}
            </RevealGroup>
          ) : null}
        </div>
      </section>

      {/* Focus areas (pharmaceuticals) */}
      {brand.focusAreas ? (
        <section data-theme="dark" aria-labelledby="focus-heading" className="bg-ink py-28 text-ivory md:py-36">
          <div className="container-x">
            <h2 id="focus-heading" className="eyebrow mb-12 text-ivory/75">
              Long-term focus areas
            </h2>
            <RevealGroup className="grid gap-px overflow-hidden rounded-[1.5rem] bg-ivory/10 md:grid-cols-4">
              {brand.focusAreas.map((f, i) => (
                <RevealItem key={f} className="bg-ink p-8 md:min-h-64">
                  <p className="eyebrow mb-16 text-brass">{pad(i + 1)}</p>
                  <p className="display-md">{f}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      {/* What it stands for + who it's for */}
      <section data-theme="light" aria-labelledby="stands-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <SectionLabel index="04" className="mb-8 text-ink-muted">
              What it stands for
            </SectionLabel>
            <h2 id="stands-heading" className="display-lg max-w-[14ch]">
              What {brand.name} <em className="italic text-brass">stands for.</em>
            </h2>
            <Reveal className="mt-12 rounded-[1.25rem] bg-ivory-deep p-8">
              <p className="eyebrow mb-4 text-brass">Who it&rsquo;s for</p>
              <p className="text-ink-muted">{brand.audience}</p>
            </Reveal>
          </div>
          <RevealGroup className="col-span-12 flex flex-wrap content-start gap-3 lg:col-span-6 lg:col-start-7" stagger={0.05}>
            {brand.standsFor.map((s) => (
              <RevealItem key={s}>
                <span className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3.5 text-[0.95rem]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brass" />
                  {s}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* The Nuvexa way */}
      <section data-theme="light" aria-labelledby="way-heading" className="bg-ivory-deep py-28 text-ink md:py-36">
        <div className="container-x">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="05" className="mb-6 text-ink-muted">
                The Nuvexa way
              </SectionLabel>
              <h2 id="way-heading" className="display-lg">
                How we&rsquo;re building it.
              </h2>
            </div>
          </div>
          <RevealGroup className="grid gap-5 md:grid-cols-3">
            {brand.approach.map((a, i) => (
              <RevealItem key={a.title} className="rounded-[1.25rem] bg-paper p-8 md:p-10">
                <p className="mb-14 font-serif text-5xl text-brass">{pad(i + 1)}</p>
                <h3 className="display-md mb-4">{a.title}</h3>
                <p className="text-ink-muted">{a.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-16 grid grid-cols-12 gap-6 border-t border-ink/12 pt-10">
            <p className="lede col-span-12 text-ink-muted md:col-span-8">{brand.closing}</p>
            <div className="col-span-12 flex md:col-span-4 md:justify-end">
              <ButtonLink href="/contact">{`Enquire about ${brand.name}`}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next brand */}
      <section data-theme="dark" aria-label="Next brand" className="bg-ink text-ivory">
        <Link href={brandHref(next)} data-cursor="Next" className="group container-x grid grid-cols-12 items-center gap-6 py-20 md:py-28">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6 text-ivory/78">Next in the portfolio</p>
            <p className="display-xl transition-colors duration-500 group-hover:text-brass-soft">
              {next.name} <span className="inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
            </p>
            <p className="mt-4 italic text-ivory/75">&ldquo;{next.quote}&rdquo;</p>
          </div>
          <div className="relative col-span-12 hidden aspect-square overflow-hidden rounded-[1.25rem] md:col-span-3 md:col-start-10 md:block" style={{ background: next.logoBg }}>
            <Image
              src={next.logo}
              alt=""
              fill
              sizes="25vw"
              className={`${next.mode === "logo" ? "object-contain" : "object-cover"} transition-transform duration-1000 group-hover:scale-105`}
            />
          </div>
        </Link>
      </section>
    </>
  );
}
