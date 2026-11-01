import { cn } from "@/lib/cn";

export function SectionLabel({ index, children, className }: { index?: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      {index ? <span className="text-brass">{index}</span> : null}
      {index ? <span aria-hidden="true" className="h-px w-10 bg-current opacity-35" /> : null}
      <span>{children}</span>
    </p>
  );
}
