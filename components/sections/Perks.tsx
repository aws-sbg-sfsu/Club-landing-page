import { copy } from "@/content/copy";
import { perks } from "@/content/perks";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The one surface-colored band on the page — it breaks the rhythm right
 * where the pitch gets concrete.
 */
export function Perks() {
  return (
    <Section id="why-join" eyebrow="Why join" className="bg-surface">
      <Reveal>
        <h2 className="text-statement max-w-[24ch] font-semibold">
          {copy.perks.heading}
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-2">
        {perks.map((perk, i) => (
          <Reveal key={perk.title} delay={i * 0.06}>
            <div>
              <h3 className="flex items-baseline gap-3 text-lg font-semibold tracking-tight">
                <span aria-hidden className="h-2 w-2 shrink-0 bg-accent" />
                {perk.title}
              </h3>
              <p className="ml-5 mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
                {perk.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
