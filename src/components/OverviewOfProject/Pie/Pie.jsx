"use client";

import { useMediaQuery } from "react-responsive";
import AnteriorPie from "./AnteriorPie";
import PosteriorPie from "./PosteriorPie";
import MobileAnteriorPie from "./MobileAnteriorPie";
import MobilePosteriorPie from "./MobilePosteriorPie";

export default function Pie({ variant }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    return variant === "anterior" ? (
      <MobileAnteriorPie variant={variant} />
    ) : (
      <MobilePosteriorPie variant={variant} />
    );
  }

  return variant === "anterior" ? (
    <AnteriorPie variant={variant} />
  ) : (
    <PosteriorPie variant={variant} />
  );
}
