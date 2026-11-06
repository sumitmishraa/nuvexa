"use client";

import { motion } from "motion/react";
import { Photo } from "@/components/ui/Photo";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

/** A photo that fades in and settles inside its frame. It always covers the frame, so no edge is ever exposed. */
export function RevealPhoto({
  src,
  alt,
  sizes,
  priority = false,
  position,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
    >
      <Photo src={src} alt={alt} sizes={sizes} priority={priority} position={position} />
    </motion.div>
  );
}
