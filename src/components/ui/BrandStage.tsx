"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import type { Brand } from "@/content/brands";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

const REVEAL_MS = 880;

/**
 * Click handler for a brand link: plays the brand reveal, then navigates.
 * Modified clicks (new tab, etc.) and reduced motion fall through to normal navigation.
 */
export function useBrandReveal(href: string) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [revealing, setRevealing] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);
  // Activity keeps visited pages mounted-but-hidden; reset so a returning visitor sees a calm card.
  useLayoutEffect(() => () => setRevealing(false), []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || reduce) return;
    e.preventDefault();
    if (revealing) return;
    setRevealing(true);
    router.prefetch(href);
    timer.current = window.setTimeout(() => router.push(href), REVEAL_MS);
  };

  return { revealing, onClick };
}

/**
 * The visual of a brand: its own logo, full-bleed on its native ground, or — for the
 * emerging verticals — its photograph. Tilts toward the pointer, catches a sweep of
 * light on hover and plays a short "brand reveal" when `revealing` is set.
 */
export function BrandStage({
  brand,
  revealing = false,
  entrance = false,
  className,
  sizes = "(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 90vw",
  priority = false,
}: {
  brand: Brand;
  revealing?: boolean;
  /** Plays a one-off arrival animation (used in the brand page hero). */
  entrance?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();
  const ready = useSiteReady();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 160, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), spring);

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  const isLogo = brand.mode === "logo";
  const play = entrance && !reduce;

  return (
    <div className={cn("relative [perspective:1100px]", className)} onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        ref={ref}
        className="group/stage relative h-full w-full overflow-hidden rounded-[inherit] shadow-[0_30px_60px_-35px_rgba(14,30,25,0.55)]"
        style={{ background: brand.logoBg, rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformStyle: "preserve-3d" }}
        initial={play ? { opacity: 0, scale: 0.9 } : false}
        animate={play && ready ? { opacity: 1, scale: 1 } : revealing ? { scale: 1.015 } : { scale: 1 }}
        transition={{ duration: play ? 1.3 : 0.6, ease: EASE_OUT_EXPO }}
      >
        {/* Brand visual */}
        <motion.div
          className="absolute inset-0"
          animate={revealing ? { scale: isLogo ? 1.12 : 1.1, y: isLogo ? -6 : 0 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE_OUT_EXPO }}
        >
          <div
            className={cn(
              "absolute transition-transform duration-[1200ms] ease-[var(--ease-out-expo)]",
              // Logos breathe inside the brass frame; photographs run full-bleed.
              isLogo ? "inset-[9%] group-hover/stage:scale-[1.04]" : "inset-0 group-hover/stage:scale-[1.06]",
            )}
          >
            <Image
              src={brand.logo}
              alt={isLogo ? `${brand.name} logo` : brand.imageAlt ?? `${brand.name} — ${brand.category}`}
              fill
              sizes={sizes}
              priority={priority}
              className={isLogo ? "object-contain" : "object-cover"}
            />
          </div>
        </motion.div>

        {/* Depth: a quiet inner shadow keeps native logo grounds from looking flat */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.14)]" />
        {/* Brass hairline frame */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-[calc(var(--radius,1.25rem)-0.5rem)] border border-[#b08a55]/35 transition-[inset,border-color] duration-700 group-hover/stage:inset-2 group-hover/stage:border-[#b08a55]/70" />

        {/* Light sweep */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -inset-y-1/4 left-0 w-1/3 -translate-x-[180%] -skew-x-[18deg] bg-white/35 blur-2xl transition-transform duration-[1100ms] ease-[var(--ease-out-expo)] group-hover/stage:translate-x-[420%]",
            revealing && "translate-x-[420%]",
          )}
        />
        {play && ready ? (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-1/4 left-0 w-1/3 -skew-x-[18deg] bg-white/40 blur-2xl"
            initial={{ x: "-180%" }}
            animate={{ x: "420%" }}
            transition={{ duration: 1.6, delay: 0.5, ease: EASE_OUT_EXPO }}
          />
        ) : null}

        {/* Brand reveal: brass rings + a soft bloom */}
        <AnimatePresence>
          {revealing ? (
            <motion.div key="reveal" aria-hidden="true" className="pointer-events-none absolute inset-0" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {[0, 0.14].map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cdb08a]"
                  initial={{ scale: 0.3, opacity: 0.9 }}
                  animate={{ scale: 2.6, opacity: 0 }}
                  transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
                />
              ))}
              <motion.span
                className="absolute inset-0 bg-[#f8f5ef]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.32, 0] }}
                transition={{ duration: 0.85, times: [0, 0.35, 1] }}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
