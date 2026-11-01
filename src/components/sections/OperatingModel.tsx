"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { operatingModel } from "@/content/site";
import { pad } from "@/lib/cn";

/** The partner-led operating model, drawn as a line that fills as you scroll through it. */
export function OperatingModel({ index = "05" }: { index?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section data-theme="light" aria-labelledby="model-heading" className="bg-ivory-deep py-28 text-ink md:py-40">
      <div className="container-x">
        <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
          <SectionLabel index={index} className="col-span-12 text-ink-muted md:col-span-4">
            How Nuvexa works today
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <h2 id="model-heading" className="display-lg max-w-[20ch]">
              Focused on what we do best. <em className="italic text-brass">Partnered for the rest.</em>
            </h2>
            <p className="lede mt-8 max-w-[56ch] text-ink-muted">
              Nuvexa does not currently operate in-house R&amp;D or manufacturing. We concentrate on insight, brand and commerce, and work with specialised,
              qualified partners for development, testing and manufacturing — managed closely, end to end.
            </p>
          </div>
        </div>

        <div ref={ref} className="relative">
          {/* Track: horizontal on desktop, vertical on mobile */}
          <div aria-hidden="true" className="absolute left-[11px] top-0 h-full w-px bg-ink/15 md:left-0 md:top-[11px] md:h-px md:w-full">
            <motion.div className="h-full w-full origin-top bg-brass md:hidden" style={reduce ? undefined : { scaleY: fill }} />
            <motion.div className="hidden h-full w-full origin-left bg-brass md:block" style={reduce ? undefined : { scaleX: fill }} />
          </div>
          <RevealGroup className="relative grid gap-12 md:grid-cols-5 md:gap-8">
            {operatingModel.map((s, i) => (
              <RevealItem key={s.step} className="relative pl-12 md:pl-0 md:pt-14">
                <span aria-hidden="true" className="absolute left-0 top-0 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-brass bg-ivory-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                </span>
                <p className="eyebrow mb-3 text-brass">{pad(i + 1)}</p>
                <h3 className="display-md mb-4">{s.step}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-muted">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
