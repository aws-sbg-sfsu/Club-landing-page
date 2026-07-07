import { copy } from "@/content/copy";
import { team } from "@/content/team";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const PLACEHOLDER = "To be announced";

function initials(name: string) {
  if (name === PLACEHOLDER) return "—";
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Team() {
  return (
    <Section id="team" eyebrow="Team">
      <Reveal>
        <h2 className="text-statement font-semibold">
          {copy.team.heading}
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          {copy.team.intro}
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
        {team.map((member, i) => {
          const card = (
            <div className="flex items-center gap-4">
              <span className="grid h-13 w-13 shrink-0 place-items-center bg-surface text-sm font-semibold text-muted">
                {initials(member.name)}
              </span>
              <div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="mt-0.5 text-sm text-muted">{member.role}</p>
              </div>
            </div>
          );
          return (
            <Reveal key={member.role} delay={i * 0.05}>
              {member.href ? (
                <a href={member.href} className="transition-opacity duration-200 hover:opacity-75">
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
