import { copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <Reveal>
        <h2 className="text-statement max-w-[22ch] font-semibold">
          {copy.about.heading}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-9 max-w-xl leading-relaxed text-muted md:ml-[38%]">
          {copy.about.body}
        </p>
      </Reveal>
    </Section>
  );
}
