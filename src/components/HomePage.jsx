// components/HeroSection/HomePage.jsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import EyeSystem from "./HeroSection/EyeSystem";
import InfoVision from "./HeroSection/InfoVision";
import ChatAndBody from "./EyeIsTheWindow/ChatAndBody";
import Header from "./Header"; // Import the separated Header
import Overview from "./OverviewOfProject/Overview";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("concept");
  const [rotation, setRotation] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [activeBody, setActiveBody] = useState("default");
  const [isManual, setIsManual] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  

  
useEffect(() => {
  if (isManual) return; 

  const cycle = ["concept", "market", "trial", "design"];

  const interval = setInterval(() => {
    setActiveTab((prev) => {
      const i = cycle.indexOf(prev);
      const next = (i + 1) % cycle.length;
      return cycle[next];
    });

    // rotate the eye
    setRotation((prevRotation) => {
      const i = cycle.indexOf(activeTab);
      const next = cycle[(i + 1) % cycle.length];
      const targetRotation = rotations[next];

      const rawDiff = targetRotation - prevRotation;
      const normalizedDiff = ((rawDiff + 540) % 360) - 180;

      return prevRotation + normalizedDiff;
    });

  }, 3000); 

  return () => clearInterval(interval);
}, [isManual, activeTab]);

useEffect(() => {
  if (!isManual) return;

  const timer = setTimeout(() => setIsManual(false), 5000);
  return () => clearTimeout(timer);
}, [isManual]);

  // List of system IDs
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

  // resume after 6s of inactivity
  useEffect(() => {
    if (!isManual) return;
    const timer = setTimeout(() => setIsManual(false), 6000);
    return () => clearTimeout(timer);
  }, [isManual]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsCompactLayout(width < 1282);
      setIsTablet(width >= 768 && width < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  //  Each active tab defines a different rotation offset for all labels
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
    <>
      {/* HERO SECTION */}
      <section className="relative w-screen max-w-[100vw] overflow-x-hidden text-white bg-[#00152A] font-gotham overflow-hidden pb-0">
        {/* 🌌 Desktop Background — dynamically adjusts between contain and cover */}
        <div
          className="
  
    absolute top-0 left-0 w-full  hidden md:block
    opacity-30 transition-all duration-700 ease-in-out
    bg-no-repeat bg-top
  "
          style={{
            height: "1600px",
            backgroundImage: "url('/assets/nav/slider image 1 (1).png')",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
          id="hero-bg"
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundColor: "rgba(0, 100, 255, 0.2)",
            }}
          ></div>

          <style jsx>{`
            #hero-bg {
              background-size: contain;
            }
            @media (max-width: 1600px) {
              #hero-bg {
                background-size: cover;
              }
            }
          `}</style>
        </div>

        {/* MOBILE BACKGROUND  */}
        <div className="absolute inset-0 top-18 block md:hidden overflow-hidden">
          {/* 🌌 Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-top"
            style={{
              backgroundImage: "url('/assets/nav/BG Image (1).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          ></div>

          {/* 🌊 Curved Divider at the bottom */}
          <div
            className="absolute bottom-[4px] left-0 w-full h-[120px] flex justify-center items-end "
            // style={{
            //     left: "0%",
            //   }}
          >
            <Image
              src="/assets/nav/vector 4.png"
              alt="Mobile Bottom Curve"
              fill
              className="object-contain object-bottom "
              priority
            />
          </div>
        </div>

        {/*  Navbar */}
        <Header />

        {/* 🧿 HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 mt-6 md:mt-10">
          <h1
            className="
            font-gotham font-bold uppercase text-center
            text-[30px] leading-[36px] 
            md:text-[40px] md:leading-[40px]
            tracking-[0%]
          "
          >
            OPHTHALMOLOGY FOCUSED CRO{" "}
            <span className="text-sky-400">SINCE 2006</span>
          </h1>

          <p
            className="
            font-gotham text-center 
            text-[16px] leading-[24px] font-[400]
            md:text-[18px] md:leading-[24px]
            mt-4 max-w-4xl
          "
          >
            Since its establishment in 2006, our ophthalmology-focused Clinical
            Research Organization (CRO) has specialized in delivering
            exceptional research operations and administration.
          </p>
        </div>

        {/*  Eye + Info Section */}
        <div className="relative flex flex-col xl:flex-row items-center justify-center gap-6 md:gap-4 px-4 sm:px-6 md:px-10 mt-55 md:mt-20 z-50 w-full max-w-[1300px] mx-auto">
          {/* Eye System */}
          <EyeSystem
            rotation={rotation}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            getLabelDisplayRotation={getLabelDisplayRotation}
            isCompactLayout={isCompactLayout} // 👈 pass the flag
          />

          {/* Arrow Change Based on Layout */}
          {isCompactLayout ? (
            <div className="relative w-full flex justify-center mt-5 mb-6">
              <Image
                src="/assets/nav/vector.png"
                alt="Vertical Arrow"
                width={30}
                height={60}
                className="object-contain "
                priority
              />
            </div>
          ) : (
            <div className="hidden md:flex items-center justify-center w-[200px] relative -translate-y-8 translate-x-4">
              <Image
                src="/assets/nav/vector 53.png"
                alt="Horizontal Arrow"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
          )}

          {/* Info Box */}
          <InfoVision activeTab={activeTab} infoText={infoText} />
        </div>

        {/*  Curved Divider */}
        <div className="relative w-full h-[180px] mt-20 hidden md:block">
          <Image
            src="/assets/nav/Group 23.png"
            alt="Bottom Shape"
            fill
            className="object-contain object-bottom z-10"
          />
          <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-[#001B38]/80 to-[#00152A] z-0"></div>
        </div>
      </section>

      {/*  SECOND SECTION - EYE IS THE WINDOW */}
      <section
        className="
    relative flex flex-col items-center justify-start
    pt-11 pb-25 px-6 md:px-12 text-center
    min-h-[100vh] mt-0
  "
      >
        
        <div className="absolute inset-0 bg-[#00112C]"></div>

        
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
          style={{
            backgroundImage: "url('/assets/nav/eyewindow.png')",
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-top bg-no-repeat opacity-65"
          style={{
            backgroundImage: "url('/assets/nav/Frame 13686.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            marginTop: "-2px",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-[28px] md:text-[36px] font-bold leading-tight">
            IT IS OFTEN SAID THAT THE <br />
            <span className="text-sky-400">EYE IS THE WINDOW </span>
            TO THE SOUL
          </h1>

          <ChatAndBody
            visibleMessages={visibleMessages}
            activeBody={activeBody}
            setActiveBody={setActiveBody}
            setIsManual={setIsManual}
            isMobile={isCompactLayout}
            isTablet={isTablet}
          />
        </div>
      </section>
      <Overview />
    </>
  );
}
