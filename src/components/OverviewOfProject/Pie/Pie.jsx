"use client";

import AnteriorPie from "./AnteriorPie";
import PosteriorPie from "./PosteriorPie";

/**
 * Pie wrapper - chooses which pie to render based on `variant`.
 * Pass variant="anterior" or "posterior".
 */
export default function Pie({ variant = "anterior" }) {
  return variant === "anterior" ? <AnteriorPie /> : <PosteriorPie />;
}
