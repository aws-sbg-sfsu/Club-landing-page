import { focusAreas } from "@/content/focus";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Index list: each focus area is a full-width row with the title at
 * display size. The hairlines here are functional (they separate list
 * entries), unlike decorative section borders.
 */
export function WhatWeDo() {
  return (
    <Section id="what-we-do" eyebrow="What we do">
      <ul>
        {focusAreas.map((area, i) => (
          <li key={area.title} className="border-t border-line last:border-b">
            <Reveal delay={i * 0.05}>
              <div className="group grid gap-3 py-8 md:grid-cols-[minmax(0,5fr)_7fr] md:items-baseline md:py-10">
                <h3 className="relative text-2xl font-semibold tracking-tight sm:text-[1.8rem]">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-1/2 h-2.5 w-2.5 -translate-y-1/2 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-2">
                    {area.title}
                  </span>
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-muted">
                  {area.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
