/** Renders copy that may carry legacy `*phrase*` markers as plain text (no italic accents). */
export function renderInline(line: string) {
  return line.replace(/\*([^*]+)\*/g, "$1");
}
