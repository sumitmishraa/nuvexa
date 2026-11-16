"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import { SplitText } from "@/components/motion/SplitText";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { heroSizes, homeHero } from "@/content/heroes";
import { pharma } from "@/content/pharma";
import { EASE_OUT_EXPO } from "@/lib/cn";

const SEAL = "Pharmaceuticals · Science · Quality · Trust · ";

/**
 * The first screen: a scientist at work behind a plain statement of who Nuvexa is, two clear next steps,
 * and the four pharmaceutical focus areas explained in a line each, so patients and partners both get it at a glance.
 */
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useSiteReady();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const appear = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.2, delay, ease: EASE_OUT_EXPO },
  });

  return (
    <section ref={ref} data-theme="dark" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory">
      <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 1.6, ease: EASE_OUT_EXPO }}>
        {homeHero.video ? (
          <VideoLoop src={homeHero.video} poster={homeHero.poster} sizes={heroSizes.home} position="70% 50%" priority />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 origin-[70%_45%] motion-safe:animate-[ken-burns_26s_ease-in-out_infinite_alternate]">
              <Photo src={homeHero.poster} alt="" sizes={heroSizes.home} position="70% 50%" priority />
            </div>
          </div>
        )}
        {/* Darkest behind the words (left and bottom), clear over the scientist (right). */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,30,25,0.88)_0%,rgba(14,30,25,0.62)_42%,rgba(14,30,25,0.12)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,30,25,0.92)_0%,rgba(14,30,25,0.35)_38%,rgba(14,30,25,0)_62%)]" />
        <div className="absolute inset-0 bg-ink/30 lg:hidden" />
      </motion.div>

      <motion.div aria-hidden="true" className="absolute right-[var(--gutter)] top-28 hidden h-32 w-32 lg:block" {...appear(1.3)}>
        <svg viewBox="0 0 120 120" className="h-full w-full text-ivory/80" style={{ animation: "spin-slow 40s linear infinite" }}>
          <defs>
            <path id="seal-path" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
          </defs>
          <text className="fill-current text-[8.4px] uppercase tracking-[0.32em]">
            <textPath href="#seal-path">{SEAL}</textPath>
          </text>
        </svg>
        <svg viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-brass" fill="none">
          <path d="M3 3 Q12 12 3 21M21 3 Q12 12 21 21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div className="relative z-10 flex flex-1 flex-col justify-end pb-8 pt-32 md:pb-10" data-scroll-linked style={{ y: contentY, opacity: fade }}>
        <div className="container-x">
          <motion.p className="eyebrow mb-7 flex items-center gap-3 text-ivory/80" {...appear(0.2)}>
            <span className="h-px w-10 bg-brass" />
            Nuvexa Biotech, Bengaluru
          </motion.p>
          <SplitText as="h1" trigger="load" delay={0.25} className="display-hero text-[clamp(2.5rem,5.2vw,6rem)]! leading-[1.02]!" text={"Science-led medicines.\n*Trusted everyday health.*"} />

          <div className="mt-9 grid grid-cols-12 items-end gap-x-6 gap-y-7">
            <motion.p className="lede col-span-12 max-w-[50ch] text-ivory/85 lg:col-span-6" {...appear(0.85)}>
              Nuvexa is a pharmaceutical company built on quality, innovation and meaningful patient needs — with consumer health brands people
              use every day.
            </motion.p>
            <motion.div className="col-span-12 flex flex-wrap items-center gap-4 lg:col-span-6 lg:justify-end" {...appear(1)}>
              <ButtonLink href="/future-vision" variant="ivory">
                Explore our pharmaceutical focus
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light">
                Partner with us
              </ButtonLink>
            </motion.div>
          </div>

          {/* What Nuvexa works on, in plain words. One staggered reveal along a drawn brass rule. */}
          <div className="relative mt-12 md:mt-14">
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-full origin-left bg-brass/70"
              initial={{ scaleX: 0 }}
              animate={ready ? { scaleX: 1 } : undefined}
              transition={{ duration: 1.4, delay: 1.15, ease: EASE_OUT_EXPO }}
            />
            <ul aria-label="Our pharmaceutical focus areas" className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6 lg:grid-cols-4">
              {pharma.focusAreas.map((f, i) => (
                <motion.li key={f.title} className="lg:border-l lg:border-ivory/15 lg:pl-6 lg:first:border-l-0 lg:first:pl-0" {...appear(1.25 + i * 0.09)}>
                  <p className="font-serif text-[1.2rem] leading-tight md:text-[1.4rem]">{f.title}</p>
                  <p className="mt-1.5 max-w-[28ch] text-[0.86rem] leading-snug text-ivory/70 md:text-[0.92rem]">{f.gloss}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
