import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

/**
 * The one section header used across the site: label, then heading, then an optional lede, all on a
 * single left edge. An optional aside sits to the right on wide screens, aligned to the heading's foot.
 */
export function SectionHead({
  index,
  label,
  labelClassName,
  lede,
  ledeClassName,
  aside,
  className,
  children,
}: {
  index?: string;
  label: React.ReactNode;
  labelClassName?: string;
  lede?: React.ReactNode;
  ledeClassName?: string;
  aside?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mb-14 md:mb-20", aside ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12" : null, className)}>
      <div className="min-w-0">
        <SectionLabel index={index} className={cn("mb-7", labelClassName)}>
          {label}
        </SectionLabel>
        {children}
        {lede ? <p className={cn("lede mt-8 max-w-[54ch]", ledeClassName)}>{lede}</p> : null}
      </div>
      {aside ? <div className="max-w-[40ch] md:shrink-0 md:pb-1">{aside}</div> : null}
    </div>
  );
}
