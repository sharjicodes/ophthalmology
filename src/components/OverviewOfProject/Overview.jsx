"use client";

import { useState } from "react";
import Anterior from "./Anterior";
import Posterior from "./Posterior";
import Pie from "./Pie/Pie";


export default function Overview() {
  const [activeTab, setActiveTab] = useState("anterior");

  return (
    <section
      id="overview-section"
      className="relative w-full bg-[#00152A] bg-contain text-white overflow-hidden  flex flex-col items-center justify-center "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center "
        style={{ backgroundImage: "url('/assets/nav/Frame 12676.png')" }}
      ></div>

      {/* Title */}
      <div className="relative z-10 text-center mb-5 mt-30">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          <span className="text-sky-400">OVERVIEW OF</span> PROJECTS
        </h2>
      </div>

      {/* TOGGLE BAR */}
      <div className="relative z-10 mb-0">
        <div
          className="
            relative 
            w-[392px] 
            h-[49px] 
            bg-[#1B2B47] 
            rounded-md 
            flex 
            overflow-hidden
          "
        >
          {/* Active background fill */}
          <div
            className={`
              absolute top-0 h-full w-1/2 bg-sky-400 rounded-md 
              transition-all duration-300 ease-in-out
              ${activeTab === "anterior" ? "left-0" : "left-1/2"}
            `}
          ></div>

          {/* ANTERIOR BUTTON */}
          <button
            onClick={() => setActiveTab("anterior")}
            className={`
              relative z-10 w-1/2 h-full 
              font-semibold text-base 
              transition-all duration-300
              ${activeTab === "anterior" ? "text-white" : "text-gray-300"}
            `}
          >
            ANTERIOR
          </button>

          {/* POSTERIOR BUTTON */}
          <button
            onClick={() => setActiveTab("posterior")}
            className={`
              relative z-10 w-1/2 h-full 
              font-semibold text-base 
              transition-all duration-300
              ${activeTab === "posterior" ? "text-white" : "text-gray-300"}
            `}
          >
            POSTERIOR
          </button>
        </div>

        {/* Underline indicator */}
        <div
          className={`
            mx-auto mt-0.5 h-[4px] w-[28px] bg-sky-400 
            transition-all duration-300
            ${activeTab === "anterior" ? "translate-x-[-98px]" : "translate-x-[98px]"}
          `}
        ></div>
      </div>

      {/* Dynamic Content */}
      <div className="relative z-10 w-full mt-0">
        {activeTab === "anterior" ? <Anterior /> : <Posterior />}
      </div>

      <div className="relative z-10 w-full">
        <Pie variant={activeTab} />

      </div>
    </section>
  );
}
