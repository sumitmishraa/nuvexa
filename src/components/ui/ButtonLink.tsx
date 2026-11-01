import Link from "next/link";
import { Magnetic } from "@/components/motion/Magnetic";
import { cn } from "@/lib/cn";

type Variant = "ink" | "ivory" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  ink: "bg-ink text-ivory hover:bg-ink-soft",
  ivory: "bg-ivory text-ink hover:bg-paper",
  outline: "border border-ink/25 text-ink hover:border-ink",
  "outline-light": "border border-ivory/30 text-ivory hover:border-ivory",
};

/** Pill link with a rolling label and a magnetic pull on fine pointers. */
export function ButtonLink({
  href,
  children,
  variant = "ink",
  className,
}: {
  href: string;
  children: string;
  variant?: Variant;
  className?: string;
}) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const inner = (
    <>
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full">{children}</span>
        <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </>
  );
  const classes = cn(
    "group inline-flex h-13 items-center gap-3 rounded-full px-7 text-[0.82rem] font-medium tracking-[0.06em] transition-colors duration-300",
    variants[variant],
    className,
  );
  return (
    <Magnetic>
      {external ? (
        <a href={href} className={classes}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {inner}
        </Link>
      )}
    </Magnetic>
  );
}
