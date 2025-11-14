"use client";
import AnteriorPie from "./AnteriorPie";
import PosteriorPie from "./PosteriorPie";

export default function Pie({ variant }) {
  const rotate = variant === "posterior"; 

  return variant === "anterior" ? (
    <AnteriorPie rotate={rotate} />
  ) : (
    <PosteriorPie rotate={rotate} />
  );
}
