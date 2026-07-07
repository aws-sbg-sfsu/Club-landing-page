import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The finale, and the one loud moment on the page: a full-bleed block of
 * AWS orange. Everything before this stays quiet so it lands.
 */
export function Join() {
  return (
    <section id="join" className="on-accent bg-accent text-accent-ink">
      <Container className="py-24 sm:py-32">
        <Reveal>
          <Eyebrow label={copy.join.eyebrow} tone="on-accent" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-poster-sm mt-8 font-extrabold">
            {copy.join.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-accent-ink/80 sm:text-lg">
            {copy.join.body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-11 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-md bg-accent-ink px-6 py-3.5 text-sm font-semibold text-accent transition-opacity duration-200 hover:opacity-90"
            >
              {copy.join.emailCta}
            </a>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-md border border-accent-ink/35 px-5 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-accent-ink/10"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
