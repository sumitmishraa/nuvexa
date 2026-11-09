"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { operatingModel } from "@/content/site";
import { pad } from "@/lib/cn";

/** The five steps on a brass line that draws itself as the section scrolls into view. */
export function OperatingLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute left-[11px] top-0 h-full w-px bg-ink/15 md:left-0 md:top-[11px] md:h-px md:w-full">
        <motion.div className="h-full w-full origin-top bg-brass md:hidden" data-scroll-linked style={{ scaleY: fill }} />
        <motion.div className="hidden h-full w-full origin-left bg-brass md:block" data-scroll-linked style={{ scaleX: fill }} />
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
  );
}
