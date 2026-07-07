import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section shell: an orange-square marker plus a letterspaced caps label,
 * then the content. No hairlines between sections — rhythm comes from
 * whitespace, and the marker is the recurring mark of the site.
 */
export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  /** Extra classes for the outer <section>, e.g. a full-bleed background. */
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <Container className="py-20 sm:py-28">
        <Reveal>
          <Eyebrow label={eyebrow} />
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  );
}
