import { cn } from "@/lib/cn";

/** The Nuvexa mark: two mirrored arcs meeting at a single point — two disciplines, one purpose. */
export function Mark({ className, strokeWidth = 1.6 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("shrink-0", className)}>
      <path d="M3 3 Q12 12 3 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M21 3 Q12 12 21 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className="h-[1.05em] w-[1.05em]" />
      <span className="text-[0.95em] font-medium tracking-[0.32em]">NUVEXA</span>
    </span>
  );
}
