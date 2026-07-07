/**
 * The site's recurring mark: a small orange square plus a letterspaced
 * caps label. Section headers, the hero, and the Join finale all render
 * this device — retune it here and it changes everywhere. `on-accent`
 * is the variant for orange fills, where the square and text flip to ink.
 */
export function Eyebrow({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "on-accent";
}) {
  const onAccent = tone === "on-accent";
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] ${
        onAccent ? "text-accent-ink/70" : "text-muted"
      }`}
    >
      <span
        aria-hidden
        className={`h-[7px] w-[7px] ${onAccent ? "bg-accent-ink" : "bg-accent"}`}
      />
      {label}
    </p>
  );
}
