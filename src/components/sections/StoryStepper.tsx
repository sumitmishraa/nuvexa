"use client";

import { useId, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Photo } from "@/components/ui/Photo";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { operatingModel } from "@/content/site";
import { cn, pad } from "@/lib/cn";

const SECONDS = 6;
const SIZES = "(min-width: 1024px) 56vw, 100vw";

const media: { src: string; video?: string; alt: string }[] = [
  { src: "/media/consumer-conversation.webp", alt: "Two women in conversation, one taking notes as the other talks" },
  { src: "/media/pipette-work.webp", alt: "A gloved hand using a pipette over a row of sample tubes" },
  { src: "/media/gloves-lab.webp", video: "/media/video/gloves-lab.mp4", alt: "" },
  { src: "/media/filling-line.webp", alt: "White bottles moving along an automated filling line" },
  { src: "/media/warehouse-aisle.webp", alt: "A long warehouse aisle with boxed stock on tall racks" },
];

/** The five steps as a story that plays by itself: each step brings its own picture, and a bar shows the time left. */
export function StoryStepper() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);

  return (
    <div
      ref={ref}
      className="grid grid-cols-12 items-center gap-x-6 gap-y-8"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink lg:col-span-7">
        {media.map((item, i) => (
          <div key={item.src} aria-hidden={i !== active} className={cn("absolute inset-0 transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0")}>
            {item.video ? <VideoLoop src={item.video} poster={item.src} sizes={SIZES} play={i === active && inView} /> : <Photo src={item.src} alt={i === active ? item.alt : ""} sizes={SIZES} />}
          </div>
        ))}
        <p className="eyebrow absolute left-5 top-5 rounded-full bg-ink/80 px-4 py-2 text-ivory">
          {pad(active + 1)} / {pad(media.length)}
        </p>
      </div>

      <ol className="col-span-12 lg:col-span-5">
        {operatingModel.map((step, i) => {
          const open = i === active;
          const panelId = `${baseId}-${i}`;
          return (
            <li key={step.step} className="relative border-b border-ink/12">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-5 py-4 text-left md:py-5"
                >
                  <span className={cn("eyebrow transition-colors duration-500", open ? "text-brass" : "text-ink-muted")}>{pad(i + 1)}</span>
                  <span className={cn("display-md transition-all duration-500 group-hover:translate-x-1", !open && "text-ink/70 group-hover:text-ink")}>{step.step}</span>
                </button>
              </h3>
              <div id={panelId} inert={!open} className={cn("grid transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)]", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="min-h-0 overflow-hidden">
                  <p className="body-copy max-w-[44ch] pb-5 pl-[2.6rem] text-ink-muted">{step.body}</p>
                </div>
              </div>
              {open ? (
                <span aria-hidden="true" className="absolute inset-x-0 -bottom-px block h-0.5 overflow-hidden">
                  <span
                    key={active}
                    className="block h-full origin-left bg-brass"
                    style={{ animation: `step-progress ${SECONDS}s linear forwards`, animationPlayState: inView && !held ? "running" : "paused" }}
                    onAnimationEnd={() => {
                      if (!reduce) setActive((current) => (current + 1) % media.length);
                    }}
                  />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
