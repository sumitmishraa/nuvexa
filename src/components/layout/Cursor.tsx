"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * A soft brass ring that trails the pointer and opens into a label over
 * elements marked `data-cursor="View"`. Fine pointers only; the native cursor stays.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useSpring(useMotionValue(-100), { stiffness: 380, damping: 32, mass: 0.5 });
  const y = useSpring(useMotionValue(-100), { stiffness: 380, damping: 32, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    let last = { x: -1, y: -1 };
    let raf = 0;
    const probe = () => {
      raf = 0;
      if (last.x < 0) return;
      const target = document.elementFromPoint(last.x, last.y)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };
    const move = (e: PointerEvent) => {
      setEnabled(true);
      last = { x: e.clientX, y: e.clientY };
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };
    // Content moves under a still pointer while scrolling — re-check what the cursor is over.
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(probe);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[80]" style={{ x, y }}>
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brass text-[0.62rem] font-medium uppercase tracking-[0.2em] text-ivory"
        animate={{
          width: label ? 92 : 28,
          height: label ? 92 : 28,
          backgroundColor: label ? "rgba(14,30,25,0.92)" : "rgba(14,30,25,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {label ? (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {label}
          </motion.span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
