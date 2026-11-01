"use client";

import { createContext, useContext, useEffect, useRef, type RefObject } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);
/** The live Lenis instance (null with reduced motion). Read `.current` at call time. */
export const useLenis = () => useContext(LenisContext);

/** Lenis drives native scroll, so Motion's scroll-linked hooks stay in sync for free. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const instance = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), autoRaf: true });
    lenisRef.current = instance;
    return () => {
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
