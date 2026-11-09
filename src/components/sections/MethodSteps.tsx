"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { Reveal } from "@/components/motion/Reveal";
import { approach } from "@/content/approach";
import { slot } from "@/lib/slot";

const stepPhotos = [slot("method-need"), slot("method-reason"), slot("method-difference"), slot("method-clarity"), slot("method-listen")];

/** The method as numbered steps, each opening with its own photograph, joined by a line that draws as the page scrolls. */
export function MethodSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute bottom-0 left-[6px] top-0 w-px bg-ink/12">
        <motion.div className="h-full w-full origin-top bg-brass" data-scroll-linked style={{ scaleY: scrollYProgress }} />
      </div>
      <ol>
        {approach.method.map((m, i) => (
          <li key={m.step} className="group relative border-b border-ink/12 pl-10 last:border-b-0 md:pl-14">
            <span aria-hidden="true" className="absolute left-0 top-12 h-[13px] w-[13px] rounded-full border border-brass bg-ivory" />
            <div className="grid grid-cols-12 items-center gap-x-6 gap-y-5 py-9 md:py-10">
              <Reveal className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-3 md:col-span-8" y={20}>
                <span className="col-span-2 font-serif text-4xl text-brass md:col-span-2 md:text-5xl">{m.step}</span>
                <div className="col-span-10">
                  <h3 className="display-md mb-3 transition-transform duration-500 group-hover:translate-x-2">{m.title}</h3>
                  <p className="max-w-[56ch] text-ink-muted">{m.body}</p>
                </div>
              </Reveal>
              <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ivory-deep md:col-span-4">
                <RevealPhoto src={stepPhotos[i].src} alt={stepPhotos[i].alt} sizes="(min-width: 768px) 30vw, 90vw" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
