"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO } from "@/lib/cn";

/* A tiny global "site is ready" signal so hero animations begin as the curtain lifts. */
let ready = false;
const listeners = new Set<() => void>();
function markReady() {
  if (ready) return;
  ready = true;
  listeners.forEach((l) => l());
}
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
export const useSiteReady = () =>
  useSyncExternalStore(
    subscribe,
    () => ready,
    () => false,
  );

const KEY = "nvx-intro-seen";
const LETTERS = "NUVEXA".split("");

/** Read once when the module loads in the browser, before this visit marks the intro as seen. */
const shortIntro = (() => {
  if (typeof window === "undefined") return false;
  let seen = false;
  try {
    seen = sessionStorage.getItem(KEY) === "1";
  } catch {
    /* storage unavailable — play the intro */
  }
  return seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
})();
const noop = () => () => {};

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const quick = useSyncExternalStore(
    noop,
    () => shortIntro,
    () => false,
  );

  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    const short = shortIntro;
    const t = window.setTimeout(
      () => {
        markReady();
        setVisible(false);
      },
      short ? 150 : 2100,
    );
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="preloader"
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-ink text-ivory"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: quick ? 0.35 : 1.1, ease: EASE_IN_OUT_QUART }}
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        >
          {!quick ? (
            <div className="flex flex-col items-center gap-8">
              <svg viewBox="0 0 24 24" fill="none" className="h-14 w-14 text-brass">
                {["M3 3 Q12 12 3 21", "M21 3 Q12 12 21 21"].map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    stroke="currentColor"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: EASE_OUT_EXPO }}
                  />
                ))}
              </svg>
              <div className="flex overflow-hidden text-sm font-medium tracking-[0.5em]">
                {LETTERS.map((l, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "120%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.55 + i * 0.06, ease: EASE_OUT_EXPO }}
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
              <motion.span
                className="eyebrow text-ivory/78"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Building trusted brands
              </motion.span>
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
