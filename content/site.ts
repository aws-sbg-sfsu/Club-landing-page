import type { Fact, NavItem, SocialLink } from "./types";

/**
 * Single source of truth for names, links, and page metadata.
 */
export const site = {
  shortName: "AWS SBG",
  campus: "SFSU",
  fullName: "AWS Student Builder Group at San Francisco State University",
  tagline: "Learn the cloud by building on it.",
  /**
   * The hero sets each entry on its own line with a masked reveal.
   * Joined with spaces it must read the same as `tagline`.
   */
  taglineLines: ["Learn the cloud", "by building on it."],
  description:
    "SFSU's official AWS Student Builder Group. Workshops, certification prep, and projects that ship. Open to all SFSU students, no experience needed.",

  /**
   * Hero spec row. Real facts, stated like a resource manifest.
   * SFSU sits in AWS's Northern California region, hence us-west-1.
   */
  facts: [
    { label: "Region", value: "us-west-1 · N. California" },
    { label: "Dues", value: "None. AWS sponsors us" },
    { label: "Experience", value: "None needed" },
    { label: "First events", value: "Fall 2026" },
  ] satisfies Fact[],

  /**
   * PLACEHOLDER — replace before launch (launch gate, see docs/DECISIONS.md).
   * Set the real club email and live invite links, then delete this comment.
   */
  email: "awssbg.sfsu@example.com",
  socials: [
    { label: "Discord", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Meetup", href: "#" },
  ] satisfies SocialLink[],

  /**
   * PLACEHOLDER — set the production domain once hosting is decided,
   * e.g. "https://awssbgsfsu.org". Used by sitemap and OpenGraph tags.
   */
  url: "https://awssbg-sfsu.example.com",

  nav: [
    { label: "About", href: "#about" },
    { label: "What we do", href: "#what-we-do" },
    { label: "Why join", href: "#why-join" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ] satisfies NavItem[],
};
