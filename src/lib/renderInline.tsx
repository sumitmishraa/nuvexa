import { Fragment } from "react";

/** Renders `*phrase*` as an italic serif accent. */
export function renderInline(line: string) {
  return line.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} className="italic text-brass">
        {part.slice(1, -1)}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
