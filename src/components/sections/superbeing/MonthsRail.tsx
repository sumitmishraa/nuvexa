"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { superbeing } from "@/content/superbeing";
import { EASE_OUT_EXPO, pad } from "@/lib/cn";

function Tick({ i, drawn }: { i: number; drawn: boolean }) {
  return (
    <li className="flex flex-1 flex-col items-center gap-3">
      <span className="relative block h-20 w-full max-w-[2.5rem] overflow-hidden rounded-full bg-ink/12 md:h-40">
        <motion.span
          className="absolute inset-0 origin-bottom rounded-full bg-brass"
          initial={{ scaleY: 0 }}
          animate={drawn ? { scaleY: 1 } : undefined}
          transition={{ duration: 0.8, delay: i * 0.09, ease: EASE_OUT_EXPO }}
        />
      </span>
      <span className="text-[0.62rem] font-semibold tabular-nums tracking-[0.1em] text-ink-muted">{pad(i + 1)}</span>
    </li>
  );
}

/** Fifteen months, drawn once as fifteen bars rising in turn when the line enters the view. */
export function MonthsRail() {
  const ref = useRef<HTMLDivElement>(null);
  const drawn = useInView(ref, { once: true, margin: "0px 0px -18% 0px" });
  const { months, title, body } = superbeing.development;

  return (
    <section data-theme="light" aria-labelledby="months-heading" className="bg-ivory-deep py-24 text-ink md:py-36">
      <div className="container-x">
        <SectionLabel index="02" className="mb-7 text-ink-muted">
          The development
        </SectionLabel>
        <h2 id="months-heading" className="display-lg max-w-[18ch]">
          {title}
        </h2>
        <div className="mt-10 grid grid-cols-12 items-start gap-x-6 gap-y-8 md:mt-12">
          <div className="col-span-12 md:col-span-5">
            <p className="font-serif text-[clamp(6rem,13vw,11rem)] font-semibold leading-[0.82] tracking-[-0.05em] text-brass">
              <Counter value={months} />
            </p>
            <p className="eyebrow mt-4 text-ink-muted">Months · one year and three</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            {body.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className={i === 0 ? "statement mb-5 max-w-[40ch] text-ink" : "body-copy max-w-[60ch] text-ink-muted"}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div ref={ref} className="mt-20">
          <ol aria-label={`${months} months of development`} className="flex items-end gap-1.5 md:gap-3">
            {Array.from({ length: months }).map((_, i) => (
              <Tick key={i} i={i} drawn={drawn} />
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
