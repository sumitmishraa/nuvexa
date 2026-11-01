"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { vision } from "@/content/vision";
import { cn, pad } from "@/lib/cn";

const stageTone: Record<string, string> = {
  Now: "bg-brass text-ink",
  Next: "border border-brass text-brass",
  Beyond: "border border-ivory/40 text-ivory/80",
  Future: "border border-ivory/20 text-ivory/55",
};

/** A horizontal journey — the long-term roadmap told stage by stage, as the page scrolls. */
export function JourneyScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      setPinned(mq.matches && !reduce);
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      aria-labelledby="journey-heading"
      className="relative bg-ink text-ivory"
      style={pinned ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-svh flex-col justify-center overflow-hidden" : "py-24"}>
        <div className="container-x mb-14">
          <p className="eyebrow mb-6 text-ivory/75">
            <span className="text-brass">02</span> — The journey
          </p>
          <h2 id="journey-heading" className="display-xl max-w-[18ch]">
            From digital-first brands to <em className="italic text-brass-soft">advanced life sciences.</em>
          </h2>
        </div>

        <div className="relative">
          <div aria-hidden="true" className={cn("absolute left-0 right-0 top-[19px] h-px bg-ivory/12", !pinned && "hidden")}>
            <motion.div className="h-px origin-left bg-brass" style={{ scaleX: scrollYProgress }} />
          </div>
          <motion.ol
            ref={trackRef}
            className={pinned ? "flex w-max gap-6 px-[var(--gutter)]" : "container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4"}
            style={pinned ? { x } : undefined}
          >
            {vision.journey.map((step, i) => (
              <li key={step.title} className={cn("relative", pinned ? "w-[28vw] min-w-[300px] pt-14" : "border-l border-ivory/15 pl-8")}>
                <span
                  aria-hidden="true"
                  className={cn("absolute h-[13px] w-[13px] rounded-full border border-brass bg-ink", pinned ? "left-0 top-[13px]" : "-left-[7px] top-1")}
                />
                <span className={cn("eyebrow inline-block rounded-full px-3 py-1.5 text-[0.6rem]", stageTone[step.stage])}>{step.stage}</span>
                <p className="mt-6 font-serif text-6xl leading-none text-ivory/15">{pad(i + 1)}</p>
                <h3 className="display-md mt-4">{step.title}</h3>
                <p className="mt-4 max-w-[34ch] text-[0.95rem] leading-relaxed text-ivory/78">{step.body}</p>
              </li>
            ))}
          </motion.ol>
        </div>

        {!pinned ? null : (
          <Reveal className="container-x mt-14">
            <p className="eyebrow text-ivory/78">Phases, not promises of dates — each stage is earned by the one before it.</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
