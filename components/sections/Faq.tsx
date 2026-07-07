import { copy } from "@/content/copy";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Native <details>/<summary>: accessible, keyboard-friendly, zero JS.
 * The open/close height animation lives in globals.css via
 * ::details-content, as a progressive enhancement.
 */
export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ">
      <div className="grid gap-10 md:grid-cols-[minmax(0,4fr)_7fr] md:gap-16">
        <Reveal>
          <div>
            <h2 className="text-[1.7rem] font-semibold leading-[1.15] tracking-tight sm:text-[2rem]">
              {copy.faq.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {copy.faq.asidePrefix}{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:decoration-accent"
              >
                {copy.faq.asideLinkLabel}
              </a>
              .
            </p>
          </div>
        </Reveal>
        <div>
          {faq.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.04}>
              <details className="group border-b border-line first:border-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-medium sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="text-xl font-light text-muted transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-prose pb-6 text-[15px] leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
