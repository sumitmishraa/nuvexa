"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

type Tag = "h1" | "h2" | "h3" | "p";

/** Renders `*phrase*` as an italic serif accent. */
function renderInline(line: string) {
  return line.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} className="italic text-brass">
        {part.slice(1, -1)}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/**
 * Masked line-by-line reveal. Lines are authored with "\n" so the typography is art-directed,
 * not left to the browser. `trigger="load"` waits for the preloader; `"view"` waits for scroll.
 */
export function SplitText({
  text,
  as = "h2",
  className,
  trigger = "view",
  delay = 0,
}: {
  text: string;
  as?: Tag;
  className?: string;
  trigger?: "load" | "view";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ready = useSiteReady();
  const lines = text.split("\n");
  const plain = text.replace(/\*/g, "").replace(/\n/g, " ");
  const Tag = motion[as];

  const animateProps =
    trigger === "load"
      ? { animate: ready ? "show" : "hidden" }
      : { whileInView: "show", viewport: { once: true, margin: "0px 0px -8% 0px" } };

  return (
    <Tag
      className={cn(className)}
      initial={reduce ? false : "hidden"}
      {...animateProps}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
    >
      <span className="sr-only">{plain}</span>
      {lines.map((line, i) => (
        <span key={i} aria-hidden="true" className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "108%", rotate: 1.5 },
              show: { y: "0%", rotate: 0, transition: { duration: 1.25, ease: EASE_OUT_EXPO } },
            }}
          >
            {renderInline(line)}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
