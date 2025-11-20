"use client";

import { useState, useEffect } from "react";
import Anterior from "./Anterior";
import Posterior from "./Posterior";
import Pie from "./Pie/Pie";
import MobileAnterior from "./MobileAnterior";
import MobilePosterior from "./MobilePosterior";
import { motion, AnimatePresence } from "framer-motion";

export default function Overview() {
  const [activeTab, setActiveTab] = useState("anterior");
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // AUTO TOGGLE
  useEffect(() => {
    if (userInteracted) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "anterior" ? "posterior" : "anterior"));
    }, 4000);

    return () => clearInterval(interval);
  }, [userInteracted]);

  return (
    <section
      id="overview-section"
      className="
    relative w-full  text-white overflow-hidden  
    flex flex-col items-center justify-center 
    bg-[#00152A]
  "
    >
      {/* DESKTOP/TABLET BACKGROUND (unchanged) */}
      <div
        className="
      absolute inset-0 
      bg-cover bg-no-repeat bg-center
      hidden sm:block        
    "
        style={{ backgroundImage: "url('/assets/nav/Frame 12676.png')" }}
      ></div>

      {/* MOBILE BACKGROUND */}
      <div
        className="
      absolute inset-0 
      bg-cover bg-no-repeat bg-center
      block sm:hidden        
    "
        style={{ backgroundImage: "url('/assets/nav/overview_mobile.png')" }}
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
            w-[240px] h-[38px]          
            sm:w-[392px] sm:h-[49px]
           
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
            onClick={() => {
              setUserInteracted(true); // Stop auto switch
              setActiveTab("anterior");
            }}
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
            onClick={() => {
              setUserInteracted(true); // Stop auto switch
              setActiveTab("posterior");
            }}
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

        {/* Underline indicators */}
        <div className="relative h-[12px] mt-0.5 flex justify-center">
          {/* ANTERIOR underline */}
          <AnimatePresence mode="wait">
            {activeTab === "anterior" && (
              <motion.div
                key="underline-anterior"
                initial={{ x: -180, opacity: 0 }}
                animate={{
                  x: isMobile ? -55 : -100, // mobile / desktop
                  opacity: 1,
                }}
                exit={{ x: -180, opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="
          absolute 
          h-[3px] w-[20px] sm:h-[4px] sm:w-[28px]
          bg-sky-400 
        "
              />
            )}
          </AnimatePresence>

          {/* POSTERIOR underline */}
          <AnimatePresence mode="wait">
            {activeTab === "posterior" && (
              <motion.div
                key="underline-posterior"
                initial={{ x: -10, opacity: 0 }}
                animate={{
                  x: isMobile ? 55 : 100,
                  opacity: 1,
                }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="
          absolute 
          h-[3px] w-[20px] sm:h-[4px] sm:w-[28px]
          bg-sky-400 
        "
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="relative z-10 w-full mt-0 space-y-0 pb-0">
        {/* MOBILE VERSION */}
        <div className="sm:hidden">
          {activeTab === "anterior" ? <MobileAnterior /> : <MobilePosterior />}
        </div>

        {/* DESKTOP/TABLET VERSION */}
        <div className="hidden sm:block">
          {activeTab === "anterior" ? <Anterior /> : <Posterior />}
        </div>
      </div>

      <div className="relative z-10 w-full -mt-16 md:-mt-20 lg:-mt-24 lg:-ml-20 xl:-ml-32">
        <Pie variant={activeTab} />
      </div>
    </section>
  );
}
