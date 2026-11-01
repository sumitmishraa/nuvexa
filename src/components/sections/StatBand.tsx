import { Counter } from "@/components/motion/Counter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { facts } from "@/content/site";
import { cn } from "@/lib/cn";

/** Proof in numbers — only true, countable facts. */
export function StatBand({ className, theme = "light" }: { className?: string; theme?: "light" | "dark" }) {
  const line = theme === "dark" ? "border-ivory/12" : "border-ink/12";
  return (
    <RevealGroup className={cn("grid grid-cols-2 border-t lg:grid-cols-4", line, className)}>
      {facts.map((f) => (
        <RevealItem key={f.label} className={cn("border-b py-10 pr-6 lg:border-b-0 lg:border-r lg:py-12 lg:pl-8 lg:first:pl-0 lg:last:border-r-0", line)}>
          <Counter value={f.value} className="block font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-none text-brass" />
          <p className="mt-5 text-[0.95rem] font-medium">{f.label}</p>
          <p className={cn("mt-2 text-[0.85rem] leading-relaxed", theme === "dark" ? "text-ivory/55" : "text-ink-muted")}>{f.note}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
