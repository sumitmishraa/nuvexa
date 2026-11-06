"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import { SplitText } from "@/components/motion/SplitText";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { heroSizes } from "@/content/heroes";
import { EASE_OUT_EXPO } from "@/lib/cn";

const SEAL = "Science · Consumer insight · Trust · Everyday health · ";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useSiteReady();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const appear = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.2, delay, ease: EASE_OUT_EXPO },
  });

  return (
    <section ref={ref} data-theme="dark" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-ivory">
      <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 1.6, ease: EASE_OUT_EXPO }}>
        <VideoLoop src="/media/video/pipette-plate.mp4" poster="/media/pipette-plate.webp" sizes={heroSizes.home} priority />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,30,25,0.94)_6%,rgba(14,30,25,0.62)_50%,rgba(14,30,25,0.36)_100%)]" />
        <div className="absolute inset-0 bg-ink/25 lg:hidden" />
      </motion.div>

      <motion.div aria-hidden="true" className="absolute right-[var(--gutter)] top-28 hidden h-32 w-32 md:block" {...appear(1.1)}>
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

      <motion.div className="relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16" data-scroll-linked style={{ y: contentY, opacity: fade }}>
        <div className="container-x">
          <motion.p className="eyebrow mb-8 flex items-center gap-3 text-ivory/80" {...appear(0.2)}>
            <span className="h-px w-10 bg-brass" />
            Nuvexa Biotech · Bengaluru, India
          </motion.p>
          <SplitText as="h1" trigger="load" delay={0.25} className="display-hero" text={"Building trusted brands.\n*Solving everyday*\nhealth needs."} />
          <div className="mt-12 grid grid-cols-12 items-end gap-6 border-t border-ivory/15 pt-8">
            <motion.p className="lede col-span-12 max-w-[46ch] text-ivory/80 md:col-span-6" {...appear(0.9)}>
              A next-generation consumer health company building differentiated brands around real, recurring needs — across nutrition, grooming, intimate
              wellbeing, modern Ayurveda and pet care.
            </motion.p>
            <motion.div className="col-span-12 flex flex-wrap items-center gap-4 md:col-span-6 md:justify-end" {...appear(1.05)}>
              <ButtonLink href="/brands" variant="ivory">
                Explore our brands
              </ButtonLink>
              <ButtonLink href="/approach" variant="outline-light">
                Our approach
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div aria-hidden="true" className="absolute bottom-0 left-1/2 hidden h-16 w-px -translate-x-1/2 overflow-hidden bg-ivory/15 md:block" {...appear(1.4)}>
        <span className="block h-1/2 w-full bg-brass" style={{ animation: "drift 2.4s ease-in-out infinite" }} />
      </motion.div>
    </section>
  );
}
