"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { superbeing } from "@/content/superbeing";
import { pad } from "@/lib/cn";

function Tick({ i, total, progress }: { i: number; total: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const start = i / total;
  const fill = useTransform(progress, [start, start + 1 / total], [0, 1]);
  return (
    <li className="flex flex-1 flex-col items-center gap-3">
      <span className="relative block h-20 w-1 overflow-hidden rounded-full bg-ink/12 md:h-32 md:w-1.5">
        <motion.span className="absolute inset-0 origin-bottom rounded-full bg-brass" style={{ scaleY: reduce ? 1 : fill }} />
      </span>
      <span className="text-[0.62rem] font-semibold tabular-nums tracking-[0.1em] text-ink-muted">{pad(i + 1)}</span>
    </li>
  );
}

/** Fifteen months, drawn as fifteen bars that fill as the reader scrolls through the chapter. */
export function MonthsRail() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const { months, title, body } = superbeing.development;

  return (
    <section data-theme="light" aria-labelledby="months-heading" className="bg-ivory-deep py-28 text-ink md:py-40">
      <div className="container-x">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-5">
            <SectionLabel index="02" className="mb-8 text-ink-muted">
              The development
            </SectionLabel>
            <p className="font-serif text-[clamp(7rem,18vw,15rem)] font-semibold leading-[0.82] tracking-[-0.05em] text-brass">
              <Counter value={months} />
            </p>
            <p className="eyebrow mt-4 text-ink-muted">Months · one year and three</p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <h2 id="months-heading" className="display-lg mb-8 max-w-[16ch]">
              {title}
            </h2>
            {body.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className={i === 0 ? "lede mb-5 text-ink" : "body-copy text-ink-muted"}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div ref={ref} className="mt-20">
          <ol aria-label={`${months} months of development`} className="flex items-end gap-1.5 md:gap-3">
            {Array.from({ length: months }).map((_, i) => (
              <Tick key={i} i={i} total={months} progress={scrollYProgress} />
            ))}
          </ol>
          <div className="mt-6 flex justify-between text-[0.8rem] font-semibold text-ink-muted">
            <span>First question</span>
            <span>Formulations ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
