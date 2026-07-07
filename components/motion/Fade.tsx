"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./ease";

const motionTags = {
  p: motion.p,
  div: motion.div,
  dl: motion.dl,
} as const;

/**
 * Fade + gentle rise on mount, for page-load entrances (scroll-triggered
 * reveals use Reveal instead). Renders the real element — pass `as` to
 * keep the HTML semantics of what it wraps. Under prefers-reduced-motion
 * it renders the same element with no animation.
 */
export function Fade({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: keyof typeof motionTags;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motionTags[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
