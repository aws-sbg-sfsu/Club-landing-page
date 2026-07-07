import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Fade } from "@/components/motion/Fade";
import { MaskedLine } from "@/components/motion/MaskedLine";

/**
 * Poster hero: each tagline line rises out of an overflow mask, then the
 * supporting copy and CTAs settle in offset to the right. The spec row
 * at the bottom states the club's facts like a resource manifest —
 * region included, because SFSU really does sit in us-west-1.
 *
 * One markup tree; the motion primitives handle prefers-reduced-motion.
 */
export function Hero() {
  return (
    <section>
      <Container>
        <div className="flex min-h-[calc(100svh-12rem)] flex-col justify-center pb-14 pt-10">
          <Fade delay={0.05}>
            <Eyebrow label={copy.hero.eyebrow} />
          </Fade>

          <h1 className="text-poster mt-7 font-extrabold">
            {site.taglineLines.map((line, i) => (
              <MaskedLine key={line} delay={0.15 + i * 0.12}>
                {line}
              </MaskedLine>
            ))}
          </h1>

          <div className="md:ml-[38%]">
            <Fade
              as="p"
              delay={0.55}
              className="mt-9 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {copy.hero.subcopy}
            </Fade>

            <Fade delay={0.68} className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#join"
                className="group rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition-opacity duration-200 hover:opacity-85"
              >
                {copy.hero.primaryCta}
                <span
                  aria-hidden
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#what-we-do"
                className="text-sm font-medium underline decoration-line-strong underline-offset-[6px] transition-colors duration-200 hover:decoration-accent"
              >
                {copy.hero.secondaryCta}
              </a>
            </Fade>
          </div>
        </div>

        <Fade
          as="dl"
          delay={0.85}
          className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line py-9 md:grid-cols-4"
        >
          {site.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </Fade>
      </Container>
    </section>
  );
}
