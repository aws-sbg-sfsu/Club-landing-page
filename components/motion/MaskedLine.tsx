"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./ease";

/**
 * One display line rising out of an overflow mask on mount. The padding /
 * negative-margin pair keeps descenders from clipping against the mask.
 * Under prefers-reduced-motion it renders a plain block span.
 */
export function MaskedLine({
  delay = 0,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className="block">{children}</span>;
  }

  return (
    <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}
