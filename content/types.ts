/**
 * Content schemas. Every section renders from data shaped by these types —
 * to change what the site says, edit the files in this folder, not the
 * components.
 */

export type NavItem = {
  label: string;
  /** Anchor on the landing page, e.g. "#about". */
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

/** One key/value pair in the hero spec row, e.g. Region → us-west-1. */
export type Fact = {
  label: string;
  value: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type Perk = {
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  /** Optional link to LinkedIn or a personal site. */
  href?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Per-section prose that isn't list-shaped. Together with the sibling data
 * files this covers every user-facing sentence on the page — components
 * hold no copy of their own.
 */
export type Copy = {
  header: {
    /** Label on the header CTA (also closes the mobile menu). */
    cta: string;
  };
  hero: {
    eyebrow: string;
    subcopy: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    heading: string;
    body: string;
  };
  perks: {
    heading: string;
  };
  team: {
    heading: string;
    intro: string;
  };
  faq: {
    heading: string;
    /** Rendered before the mailto link, e.g. "Something else on your mind?" */
    asidePrefix: string;
    /** Text of the mailto link itself. */
    asideLinkLabel: string;
  };
  join: {
    eyebrow: string;
    heading: string;
    body: string;
    emailCta: string;
  };
  footer: {
    disclaimer: string;
  };
};
