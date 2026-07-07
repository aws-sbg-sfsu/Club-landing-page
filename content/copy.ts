import type { Copy } from "./types";

/**
 * Section prose. Every sentence a visitor reads lives here or in one of
 * the sibling data files (focus, perks, faq, team, site) — never in a
 * component. Keep the voice humanized; see docs/DECISIONS.md.
 */
export const copy: Copy = {
  header: {
    cta: "Join us",
  },
  hero: {
    eyebrow: "AWS Student Builder Group · San Francisco State",
    subcopy:
      "We're SFSU's new AWS club. Workshops, cert study groups, and one real build a semester, with AWS credits picking up the bill. You don't need experience. You need a laptop and a free evening.",
    primaryCta: "Join the club",
    secondaryCta: "See what we do",
  },
  about: {
    heading: "A club for people who'd rather build than watch.",
    body: "We're the SFSU chapter of AWS's official campus program, the one they used to call Cloud Clubs. AWS puts up credits, exam vouchers, and time with their engineers. Our job is turning that into things you can point to in an interview.",
  },
  perks: {
    heading: "AWS puts real resources behind this. We pass them on.",
  },
  team: {
    heading: "Officers for 2026–27.",
    intro:
      "The founding team gets locked in this fall, and names land here as they're confirmed. If you want one of these seats, come say so early.",
  },
  faq: {
    heading: "Before you ask.",
    asidePrefix: "Something else on your mind?",
    asideLinkLabel: "Email us",
  },
  join: {
    eyebrow: "Join",
    heading: "Come build with us.",
    body: "There's no application and no dues. Say hi on Discord or send an email; we'll point you at the next event.",
    emailCta: "Email the club",
  },
  footer: {
    disclaimer:
      "An official AWS Student Builder Group, run by SFSU students. Not operated by Amazon Web Services or San Francisco State University.",
  },
};
