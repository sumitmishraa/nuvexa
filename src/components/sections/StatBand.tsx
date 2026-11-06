"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Counter } from "@/components/motion/Counter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Photo } from "@/components/ui/Photo";
import { brands } from "@/content/brands";
import { facts } from "@/content/site";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

const STEPS = [36, 68, 100];

/** Each number drawn from what it counts: real brand tiles, fifteen capsule bars, three rising phases. */
function FactVisual({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const move = (i: number, step: number) => ({ duration: 0.8, delay: i * step, ease: EASE_OUT_EXPO });

  if (value === 15) {
    return (
      <div ref={ref} aria-hidden="true" className="flex h-11 items-end gap-[3px]">
        {Array.from({ length: value }).map((_, i) => (
          <motion.span key={i} className="block h-full flex-1 origin-bottom rounded-full bg-brass" initial={{ scaleY: 0 }} animate={seen ? { scaleY: 1 } : undefined} transition={move(i, 0.06)} />
        ))}
      </div>
    );
  }
  if (value === 3) {
    return (
      <div ref={ref} aria-hidden="true" className="flex h-11 items-end gap-1.5">
        {STEPS.map((height, i) => (
          <motion.span key={height} className="block w-10 origin-bottom rounded-t-md bg-brass" style={{ height: `${height}%` }} initial={{ scaleY: 0 }} animate={seen ? { scaleY: 1 } : undefined} transition={move(i, 0.18)} />
        ))}
      </div>
    );
  }
  return (
    <div ref={ref} aria-hidden="true" className="flex h-11 items-center gap-1">
      {brands.slice(0, value).map((brand, i) => (
        <motion.span
          key={brand.slug}
          className="relative block aspect-square min-w-0 max-w-11 flex-1 overflow-hidden rounded-md"
          style={{ background: brand.logoBg }}
          initial={{ opacity: 0, y: 10 }}
          animate={seen ? { opacity: 1, y: 0 } : undefined}
          transition={move(i, 0.09)}
        >
          <Photo src={brand.logo} alt="" sizes="48px" contain={brand.mode === "logo"} />
        </motion.span>
      ))}
    </div>
  );
}

/** Proof in numbers — only true, countable facts. */
export function StatBand({ className, theme = "light" }: { className?: string; theme?: "light" | "dark" }) {
  const line = theme === "dark" ? "border-ivory/12" : "border-ink/12";
  return (
    <RevealGroup className={cn("grid grid-cols-2 border-t lg:grid-cols-4", line, className)}>
      {facts.map((f) => (
        <RevealItem key={f.label} className={cn("border-b py-10 pr-6 lg:border-b-0 lg:border-r lg:py-12 lg:pl-8 lg:first:pl-0 lg:last:border-r-0", line)}>
          <Counter value={f.value} className="block font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-none text-brass" />
          <div className="mt-5">
            <FactVisual value={f.value} />
          </div>
          <p className="mt-5 text-[0.95rem] font-medium">{f.label}</p>
          <p className={cn("mt-2 text-[0.85rem] leading-relaxed", theme === "dark" ? "text-ivory/55" : "text-ink-muted")}>{f.note}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
