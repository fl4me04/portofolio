/**
 * Anchor scrolling for the in-page section links.
 *
 * Native `scroll-behavior: smooth` in CSS would cover this, but doing it
 * in JS keeps the offset arithmetic in one place and lets the
 * reduced-motion case opt out explicitly.
 */

/** Matches `scroll-mt-24` on each section's anchor marker: the 56px
 *  toolbar plus 40px of clearance. */
export const SCROLL_OFFSET = 96;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  // Home means the top of the document, not the hero's own box, which
  // sits 56px down because the sticky toolbar takes that much flow.
  const top =
    id === "home"
      ? 0
      : el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}
