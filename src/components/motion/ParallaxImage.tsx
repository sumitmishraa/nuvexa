"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

/** Image that unmasks on entry and drifts gently against the scroll. Fills its parent. */
export function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  strength = 9,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden", className)}
      initial={reduce ? false : { clipPath: "inset(14% 10% 14% 10%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
    >
      <motion.div className="absolute -inset-y-[12%] inset-x-0" style={reduce ? undefined : { y }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </motion.div>
  );
}
