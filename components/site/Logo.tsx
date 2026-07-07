import { site } from "@/content/site";

/**
 * Text wordmark for v1, anchored by the orange square — the same mark
 * that tags every section. When the official AWS SBG brand kit arrives,
 * swap the markup here for the real lockup — nothing else changes.
 */
export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 text-[15px] tracking-tight">
      <span aria-hidden className="h-3 w-3 bg-accent" />
      <span className="font-extrabold">{site.shortName}</span>
      <span className="font-medium text-muted">{site.campus}</span>
    </a>
  );
}
