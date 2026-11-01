"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pillars } from "@/content/site";

type Pillar = (typeof pillars)[number];

function Card({ index, total, progress, pillar }: { index: number; total: number; progress: MotionValue<number>; pillar: Pillar }) {
  const reduce = useReducedMotion();
  // Every card recedes by the same step for each card that lands on top of it; the last stays full size.
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.04]);
  return (
    // Identical height and spacing for every card, so all five pin, overlap and settle the same way.
    <div className="sticky mb-[18vh]" style={{ top: `calc(14vh + ${index * 28}px)` }}>
      <motion.article
        style={reduce ? undefined : { scale }}
        className="relative grid h-[66svh] w-full origin-top grid-cols-12 content-center gap-6 overflow-hidden rounded-[1.5rem] border border-ink/10 bg-paper p-8 shadow-[0_-24px_60px_-40px_rgba(14,30,25,0.4)] md:h-[54svh] md:p-14"
      >
        <span className="col-span-12 font-serif text-[clamp(4rem,10vw,9rem)] leading-none text-brass md:col-span-4">{pillar.index}</span>
        <div className="col-span-12 flex flex-col justify-end md:col-span-8">
          <h3 className="display-lg mb-6">{pillar.title}</h3>
          <p className="lede max-w-[48ch] text-ink-muted">{pillar.body}</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-ink/[0.07]">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" />
        </svg>
      </motion.article>
    </div>
  );
}

/** Five pillars stacked as sticky cards; earlier cards recede as later ones arrive. */
export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section data-theme="light" aria-labelledby="pillars-heading" className="bg-ivory text-ink">
      <div className="container-x pt-28 md:pt-40">
        <div className="grid grid-cols-12 gap-6">
          <SectionLabel index="04" className="col-span-12 mb-6 text-ink-muted md:col-span-4">
            How we build
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <h2 id="pillars-heading" className="display-xl max-w-[18ch]">
              Five disciplines. <em className="italic text-brass">One standard.</em>
            </h2>
            <p className="lede mt-8 max-w-[52ch] text-ink-muted">
              Nuvexa combines science, consumer insight, technology and artificial intelligence, disciplined execution and brand building — to create trusted
              products for consumers and enduring value for partners and shareholders.
            </p>
          </div>
        </div>
        <div ref={ref} className="relative pb-28 pt-16 md:pb-40 md:pt-24">
          {pillars.map((p, i) => (
            <Card key={p.title} index={i} total={pillars.length} progress={scrollYProgress} pillar={p} />
          ))}
          {/* Tail: gives the final card the same pinned hold the others get before the section releases. */}
          <div aria-hidden="true" className="h-[24vh]" />
        </div>
      </div>
    </section>
  );
}
