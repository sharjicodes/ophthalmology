// components/HeroSection/HeroSection.jsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import EyeSystem from "./HeroSection/EyeSystem";
import InfoVision from "./HeroSection/InfoVision";
import ChatAndBody from "./HeroSection/ChatAndBody"
import Header from "./Header"; // Import the separated Header

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("concept");
  const [rotation, setRotation] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [activeBody, setActiveBody] = useState("default");
  const [isManual, setIsManual] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  // List of system IDs (in same order as clickable buttons)
  const bodySystems = [
    "endo",
    "gastro",
    "geria",
    "Hepa",
    "infla",
    "viru",
    "neuro",
    "cardio",
    "derma",
    "rad",
    "skel",
    "woman",
    "emer",
    "gen",
  ];

  // Auto cycle through systems
  useEffect(() => {
    if (isManual) return; // pause when user clicks

    const interval = setInterval(() => {
      setActiveBody((prev) => {
        const currentIndex = bodySystems.indexOf(prev);
        const nextIndex = (currentIndex + 1) % bodySystems.length;
        return bodySystems[nextIndex];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isManual]);

  // ⏸ resume after 6s of inactivity
  useEffect(() => {
    if (!isManual) return;
    const timer = setTimeout(() => setIsManual(false), 6000);
    return () => clearTimeout(timer);
  }, [isManual]);

  // Rotations for eye section
  const rotations = { concept: 0, market: 90, trial: 180, design: 270 };

  const infoText = {
    concept:
      "Our research is vital for tackling the increasing global burden of eye diseases, particularly as vision impairment and blindness become more prevalent in aging populations.",
    market:
      "We analyze ophthalmic market trends and work closely with industry partners to bring innovative eye care solutions to global markets efficiently.",
    trial:
      "Our trial management ensures precision, compliance, and speed — accelerating the development of next-generation ophthalmology therapeutics.",
    design:
      "We design clinical studies tailored for ophthalmology, combining scientific expertise with patient-centered methodologies.",
  };

  const handleTabClick = (tab) => {
    const newRotation = rotations[tab];

    setRotation((prevRotation) => {
      const rawDiff = newRotation - prevRotation;
      const normalizedDiff = ((rawDiff + 540) % 360) - 180; // shortest signed angle between -180° and 180°
      return prevRotation + normalizedDiff;
    });

    setActiveTab(tab);
    setFadeKey((prev) => prev + 1);
  };

  // Animate chat messages.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timers = [
            setTimeout(() => setVisibleMessages(1), 600),
            setTimeout(() => setVisibleMessages(2), 1500),
            setTimeout(() => setVisibleMessages(3), 2400),
          ];
          return () => timers.forEach((t) => clearTimeout(t));
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector("#chat-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // 🎯 Each active tab defines a different rotation offset for all labels
  const getLabelDisplayRotation = (label) => {
    const rotationMap = {
      concept: { MARKET: 360, CONCEPT: 90, DESIGN: 0, TRIAL: -90 },
      market: { MARKET: 0, CONCEPT: 270, DESIGN: 180, TRIAL: 270 },
      trial: { MARKET: 180, CONCEPT: 90, DESIGN: 180, TRIAL: 270 },
      design: { MARKET: 360, CONCEPT: 90, DESIGN: 180, TRIAL: 90 },
    };

    const active = activeTab.toLowerCase();
    return rotationMap[active]?.[label] || 0;
  };

  return (
    <section className="relative w-full overflow-x-hidden text-white bg-[#00152A] font-gotham">
      {/* Background Image and Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-[115vh] md:h-[125vh] overflow-hidden opacity-22 bg-cover md:bg-contain"
        style={{
          backgroundImage: "url('/assets/nav/slider image 1 (1).png')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor: "rgba(0, 100, 255, 0.2)",
          }}
        ></div>
      </div>

      {/* 🌐 Navbar (Separated Component) */}
      <Header />

      {/* 🧿 HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-8 md:mt-10 px-6 md:px-10 text-center">
        <h1 className="text-[32px] md:text-5xl font-bold leading-tight relative inline-block">
          O
          <span className="relative inline-block">
            P
            <Image
              src="/assets/nav/Group.png"
              alt="star"
              width={38}
              height={20}
              className="absolute top-7 -left-2 -translate-x-1/2"
            />
          </span>
          HTHALM
          <span className="relative inline-block">
            O
            <Image
              src="/assets/nav/Frame.png"
              alt="star"
              width={38}
              height={20}
              className="absolute -top-1 -left-23 -translate-x-1/2"
            />
            <Image
              src="/assets/nav/Frame (1).png"
              alt="star"
              width={38}
              height={20}
              className="absolute top-5 left-25 -translate-x-1/2"
            />
          </span>
          LOGY F
          <span className="relative inline-block">
            O
            <Image
              src="/assets/nav/Frame (2).png"
              alt="star"
              width={38}
              height={20}
              className="absolute top-4 left-8 -translate-x-1/2"
            />
          </span>
          CU
          <span className="relative inline-block">
            S
            <Image
              src="/assets/nav/Frame (3).png"
              alt="star"
              width={30}
              height={20}
              className="absolute -top-1 left-6 -translate-x-1/2"
            />
            <Image
              src="/assets/nav/Frame (4).png"
              alt="star"
              width={30}
              height={20}
              className="absolute -top-0 left-22 -translate-x-1/2"
            />
            <Image
              src="/assets/nav/Frame (5).png"
              alt="star"
              width={30}
              height={20}
              className="absolute -top-0 left-56 -translate-x-1/2"
            />
          </span>
          ED CRO <span className="text-sky-400">SINCE 2006</span>
        </h1>

        <p className="text-white text-[16px] md:text-[18px] font-bold leading-6 mt-4 max-w-4xl">
          Since its establishment in 2006, our ophthalmology-focused Clinical
          Research Organization (CRO) has specialized in delivering exceptional
          research operations and administration.
        </p>
      </div>

      <div className="relative flex flex-col xl:flex-row items-center justify-center gap-6 md:gap-4 px-4 sm:px-6 md:px-10 mt-10 md:mt-20 z-50 w-full max-w-[1300px] mx-auto">
        {/* 🌐 Eye and Circular Buttons (Separated Component) */}
        <EyeSystem
          rotation={rotation}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          getLabelDisplayRotation={getLabelDisplayRotation}
        />

        {/* ➡️ Vector Arrow */}
        <div className="hidden md:flex items-center justify-center w-[200px] relative -translate-y-8 translate-x-4">
          <Image
            src="/assets/nav/vector 53.png"
            alt="Arrow Vector"
            width={180}
            height={100}
            className="object-contain"
          />
        </div>

        {/* 🧾 Info Box + Vision (Separated Component) */}
        <InfoVision activeTab={activeTab} infoText={infoText} />
      </div>

      {/* 🌊 Curved Divider + Fade Transition */}
      <div className="relative w-full h-[180px] mt-20">
        <Image
          src="/assets/nav/Group 23.png"
          alt="Bottom Shape"
          fill
          className="object-contain object-bottom z-10"
        />
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-[#001B38]/80 to-[#00152A] z-0"></div>
      </div>

      {/* 👁 Second Section: Eye is the Window */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-16 pb-24 px-6 md:px-12 text-center bg-[#00152A]">
        <h1 className="text-[36px]  font-bold leading-tight">
          IT IS OFTEN SAID THAT THE <br />
          <span className="text-sky-400">EYE IS THE WINDOW </span>
          TO THE SOUL
        </h1>

        {/* 💬 Chat + Body (Separated Component) */}
        <ChatAndBody
          visibleMessages={visibleMessages}
          activeBody={activeBody}
          setActiveBody={setActiveBody}
          setIsManual={setIsManual}
        />
      </div>
    </section>
  );
}