"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/cn";

/** Fade-and-rise on first entry into the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered children: wrap items in <RevealItem>. */
export function RevealGroup({ children, className, stagger = 0.08 }: { children: React.ReactNode; className?: string; stagger?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
      }}
    >
      {children}
    </motion.div>
  );
}
