import { Mark } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

/** Endless, slow ribbon of words separated by the Nuvexa mark. Pauses on hover. */
export function Marquee({ items, className, duration = 48 }: { items: readonly string[]; className?: string; duration?: number }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="display-lg whitespace-nowrap px-8 italic md:px-12">{item}</span>
          <Mark className="h-6 w-6 text-brass md:h-8 md:w-8" strokeWidth={1.2} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div className="flex w-max group-hover:[animation-play-state:paused]" style={{ animation: `marquee ${duration}s linear infinite` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
