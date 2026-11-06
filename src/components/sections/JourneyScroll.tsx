"use client";

import { useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { vision } from "@/content/vision";
import { EASE_OUT_EXPO, cn, pad } from "@/lib/cn";

const stageFill: Record<string, string> = {
  Now: "bg-brass",
  Next: "bg-brass/70",
  Beyond: "bg-ivory/45",
  Future: "bg-ivory/25",
};

const stageTone: Record<string, string> = {
  Now: "bg-brass text-ink",
  Next: "border border-brass text-brass",
  Beyond: "border border-ivory/40 text-ivory/80",
  Future: "border border-ivory/25 text-ivory/70",
};

/** The long-term journey on a central spine that draws as the page scrolls; stages step in from either side. */
export function JourneyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 65%"] });
  const [focus, setFocus] = useState(0);

  return (
    <section data-theme="dark" aria-labelledby="journey-heading" className="bg-ink py-20 text-ivory md:py-28">
      <div className="container-x">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-6 text-ivory/75">
            <span className="text-brass">02</span> — The journey
          </p>
          <h2 id="journey-heading" className="display-xl max-w-[18ch]">
            From digital-first brands to <em className="italic text-brass-soft">advanced life sciences.</em>
          </h2>
        </div>

        {/* The whole journey at a glance: eight rising steps, linked to the timeline below. */}
        <div className="mb-14 md:mb-20">
          <div className="flex h-44 items-end gap-1.5 md:h-72 md:gap-3">
            {vision.journey.map((step, i) => (
              <button
                key={step.title}
                type="button"
                aria-label={`${pad(i + 1)}, ${step.stage}: ${step.title}`}
                aria-pressed={focus === i}
                onClick={() => setFocus(i)}
                onMouseEnter={() => setFocus(i)}
                onFocus={() => setFocus(i)}
                className="flex h-full flex-1 items-end"
              >
                <motion.span
                  className={cn("block w-full origin-bottom rounded-t-lg transition-opacity duration-300", stageFill[step.stage], focus === i ? "opacity-100" : "opacity-70")}
                  style={{ height: `${22 + i * 11}%` }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 1, delay: i * 0.09, ease: EASE_OUT_EXPO }}
                />
              </button>
            ))}
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-4 border-t border-ivory/12 pt-5">
            <span className={cn("eyebrow inline-block rounded-full px-3 py-1.5 text-[0.6rem]", stageTone[vision.journey[focus].stage])}>{vision.journey[focus].stage}</span>
            <span className="display-md">{vision.journey[focus].title}</span>
          </p>
        </div>

        <div ref={ref} className="relative md:pb-28">
          <div aria-hidden="true" className="absolute bottom-0 left-[6px] top-0 w-px bg-ivory/12 md:left-1/2">
            <motion.div className="h-full w-full origin-top bg-brass" data-scroll-linked style={{ scaleY: scrollYProgress }} />
          </div>
          <ol className="relative grid gap-y-12 md:grid-cols-2 md:gap-x-24 md:gap-y-10">
            {vision.journey.map((step, i) => {
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={step.title}
                  className={cn("relative pl-10 md:pl-0", right && "md:top-28")}
                  initial={{ opacity: 0, x: right ? 36 : -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                  transition={{ duration: 1.1, ease: EASE_OUT_EXPO }}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-0 top-1.5 h-[13px] w-[13px] rounded-full border border-brass bg-ink",
                      right ? "md:-left-[calc(3rem+6px)]" : "md:left-auto md:-right-[calc(3rem+7px)]",
                    )}
                  />
                  <div className="flex items-center gap-4">
                    <span className={cn("eyebrow inline-block rounded-full px-3 py-1.5 text-[0.6rem]", stageTone[step.stage])}>{step.stage}</span>
                    <span className="font-serif text-2xl leading-none text-ivory/45">{pad(i + 1)}</span>
                  </div>
                  <h3 className={cn("display-md mt-4 transition-colors duration-300", focus === i && "text-brass-soft")}>{step.title}</h3>
                  <p className="mt-3 max-w-[40ch] text-[0.98rem] leading-relaxed text-ivory/78">{step.body}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-14">
          <p className="eyebrow text-ivory/78">Phases, not promises of dates — each stage is earned by the one before it.</p>
        </Reveal>
      </div>
    </section>
  );
}
