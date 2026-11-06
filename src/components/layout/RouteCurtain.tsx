"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { Mark } from "@/components/ui/Logo";
import { EASE_IN_OUT_QUART } from "@/lib/cn";

/** An ink curtain that lifts off each newly arrived page. Skipped on first load (the preloader owns that). */
export function RouteCurtain() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [prevPath, setPrevPath] = useState(pathname);
  const [key, setKey] = useState<string | null>(null);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setKey(reduce ? null : pathname);
  }

  if (!key) return null;
  return (
    <motion.div
      key={key}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[95] flex items-center justify-center bg-ink text-brass"
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
      transition={{ duration: 0.48, delay: 0.05, ease: EASE_IN_OUT_QUART }}
    >
      <motion.span initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <Mark className="h-10 w-10" strokeWidth={1.2} />
      </motion.span>
    </motion.div>
  );
}
