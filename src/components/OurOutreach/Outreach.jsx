// components/Outreach/Outreach.jsx
"use client";

import { useState } from "react";
import Maps from "./Maps";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "France",
  "Germany",
  "Armenia",
  "Philippines",
  "Australia",
];

export default function Outreach() {
  const [activeCountry, setActiveCountry] = useState("United States");

  return (
    <section
      className="relative w-full overflow-hidden text-white bg-[#00152A]"
      style={{ height: "785px" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <img
          src="/assets/nav/BG Curve.png"
          className="w-[1920px] max-w-none select-none"
          alt="bg-curve"
        />
      </div>

      {/*  COUNTRY BUTTONS */}
      <div className="absolute z-20 top-[75px] left-0 w-full pointer-events-auto">
        {/* UNITED STATES */}
        <button
          onClick={() => setActiveCountry("United States")}
          className={`${
            activeCountry === "United States" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "21%",
            transform: "translateX(-50%)  translatey(40%)  rotate(-16deg)",
          }}
        >
          United States
          {activeCountry === "United States" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* CANADA */}
        <button
          onClick={() => setActiveCountry("Canada")}
          className={`${
            activeCountry === "Canada" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "30%",
            transform: "translateX(-80%) translatey(-65%) rotate(-13deg)",
          }}
        >
          Canada
          {activeCountry === "Canada" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* MEXICO */}
        <button
          onClick={() => setActiveCountry("Mexico")}
          className={`${
            activeCountry === "Mexico" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "35%",
            transform: "translateX(-50%) translatey(-120%) rotate(-9deg)",
          }}
        >
          Mexico
          {activeCountry === "Mexico" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* BRAZIL */}
        <button
          onClick={() => setActiveCountry("Brazil")}
          className={`${
            activeCountry === "Brazil" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "40%",
            transform: "translateX(-50%) translatey(-150%) rotate(-6deg)",
          }}
        >
          Brazil
          {activeCountry === "Brazil" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* FRANCE */}
        <button
          onClick={() => setActiveCountry("France")}
          className={`${
            activeCountry === "France" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "45%",
            transform: "translateX(-40%) translatey(-165%) ",
          }}
        >
          France
          {activeCountry === "France" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* GERMANY */}
        <button
          onClick={() => setActiveCountry("Germany")}
          className={`${
            activeCountry === "Germany" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "52%",
            transform: "translateX(-60%) translatey(-160%) rotate(1deg)",
          }}
        >
          Germany
          {activeCountry === "Germany" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* ARMENIA */}
        <button
          onClick={() => setActiveCountry("Armenia")}
          className={`${
            activeCountry === "Armenia" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "58%",
            transform: "translateX(-50%) translatey(-140%) rotate(5deg)",
          }}
        >
          Armenia
          {activeCountry === "Armenia" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* PHILIPPINES */}
        <button
          onClick={() => setActiveCountry("Philippines")}
          className={`${
            activeCountry === "Philippines" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "65%",
            transform: "translateX(-50%) translatey(-100%) rotate(9deg)",
          }}
        >
          Philippines
          {activeCountry === "Philippines" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>

        {/* AUSTRALIA */}
        <button
          onClick={() => setActiveCountry("Australia")}
          className={`${
            activeCountry === "Australia" ? "text-white" : "text-sky-400"
          }
      absolute text-[18px] font-semibold pb-2`}
          style={{
            left: "73%",
            transform: "translateX(-60%) translatey(-30%) rotate(13deg)",
          }}
        >
          Australia
          {activeCountry === "Australia" && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[9px] h-[9px] bg-sky-400 rounded-full"></span>
          )}
        </button>
      </div>

      {/* 🌍 MAP + DATA */}
      <div className="relative w-full h-full flex">
        {/* LEFT TEXT */}
        <div
          className="flex flex-col justify-center pl-50 w-[35%] z-10 translate-y-50
"
        >
          <h2
            className="
    font-gotham 
    font-bold 
    text-[28px] 
    leading-[100%] 
    tracking-[0%] 
     
    uppercase
  "
          >
            <span className="text-sky-400">OUR</span> OUTREACH
          </h2>

          {/* Stats Card */}
          <div
            className="
    w-[315px] h-[88px]
    rounded-[8px]
    px-5 py-5
    mt-6
    flex flex-col justify-center
    
    bg-[linear-gradient(85.77deg,rgba(58,173,237,0.22)_4%,rgba(58,173,237,0.02)_96.06%)]
    border border-white/10
  "
          >
            <div className="flex justify-between items-center relative">
              {/* Left Number */}
              <div
                className="text-[30px] font-gotham 
    font-bold  text-sky-400"
              >
                500+
              </div>

              {/* Divider */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[8px] h-[52px] w-[1.5px] bg-white/25 rounded-full"></div>

              {/* Right Number */}
              <div
                className="text-[30px] font-gotham 
    font-bold  text-sky-400
    -translate-x-8"
              >
                09
              </div>
            </div>

            <div
              className="flex justify-between font-gotham 
    font-bold text-[16px] text-white/70"
            >
              <span>Total Sites</span>
              <span>Countries</span>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="w-[65%] relative">
          <Maps country={activeCountry} />
        </div>
      </div>
    </section>
  );
}
