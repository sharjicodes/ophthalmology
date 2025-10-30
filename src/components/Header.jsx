"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("concept");
  const [rotation, setRotation] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [activeBody, setActiveBody] = useState("default");
  const [isManual, setIsManual] = useState(false); 
  const [fadeKey, setFadeKey] = useState(0);


  // List of system IDs (in same order as clickable buttons)
  const bodySystems = [
    "endo", "gastro", "geria", "Hepa", "infla",
    "viru", "neuro", "cardio", "derma", "rad",
    "skel", "woman", "emer", "gen",
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
  setActiveTab(tab);
  setRotation(rotations[tab]);
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

  const navItems = [
    "Home",
    "Services",
    "Eye is the Window",
    "For Sites",
    "Company",
  ];

  return (
    <section className="relative w-screen overflow-x-hidden text-white bg-[#00152A]">
      {/* 🖼 Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/nav/slider image 1 (1).png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 🌐 Navbar */}
      <nav className="relative z-20 w-full py-4">
        <div className="flex items-center justify-between px-4 md:px-12">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white" />
            <div className="flex flex-col leading-none">
              <h1 className="text-[28px] md:text-[34px] font-black leading-none">
                LOGO
              </h1>
              <span className="text-[10px] md:text-[12px] uppercase text-white/70">
                LOGO SUBTITLE
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-[#1A2A3A] to-[#0C1A2E] rounded-xl px-6 py-2 shadow-lg shadow-black/20">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`text-sm font-medium px-3 py-2 rounded-full transition-colors ${
                    item === "Home"
                      ? "text-[#2FA8F9] font-semibold"
                      : "text-white/80 hover:text-[#2FA8F9]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-[#2FA8F9] px-5 py-2 rounded-md font-semibold hover:bg-[#1992e6] transition">
              Become an Investigator
            </button>
            <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Become Study Participant
            </button>
            <button className="bg-[#0B2C4A] p-2 rounded-full hover:bg-[#153a5b] transition">
              <FaSearch className="text-white text-sm" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? (
                <FaTimes className="text-white text-xl" />
              ) : (
                <FaBars className="text-white text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[#0E2038]/95 flex flex-col space-y-4 p-6 text-center z-30">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="text-white/90 text-lg hover:text-sky-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* 🧿 HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-16 px-6 md:px-12 text-center">
        <h1 className="text-[32px] md:text-5xl font-bold leading-tight">
          OPHTHALMOLOGY FOCUSED CRO{" "}
          <span className="text-sky-400">SINCE 2006</span>
        </h1>
        <p className="text-white text-[16px] md:text-[18px] font-bold leading-6 mt-4 max-w-4xl">
          Since its establishment in 2006, our ophthalmology-focused Clinical
          Research Organization (CRO) has specialized in delivering exceptional
          research operations and administration.
        </p>
      </div>

 <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 mt-30">

  {/* 🌐 Eye and Circular Buttons */}
  <div className="relative flex justify-center items-center w-[340px] md:w-[420px] aspect-square">
    {/* 💫 Glow aura behind */}
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[380px] md:w-[490px] h-[380px] md:h-[480px] rounded-full bg-sky-500/10 blur-3xl"></div>
    </div>

    {/* 🔄 Nerves */}
   
{/* 🔄 Nerves + Circular Buttons Together */}
<div
  className="absolute inset-0 flex items-center justify-center transition-transform duration-[1200ms] ease-in-out"
  style={{ transform: `rotate(${rotation}deg)` }}
>
  {/* Nerves Image */}
  <div className="w-[110%] h-[110%] absolute **top-1/2 -left-4 -translate-y-1/2**">
    <Image
      src="/assets/nav/Nurves.png"
      alt="Nerves"
      fill
      className="object-contain opacity-90"
    />
  </div>

    {/* 👁 Eye image in center */}
    <Image
      src="/assets/nav/eye image 1.png"
      alt="Eye"
      fill
      className="object-contain relative z-10"
    />

    {/* 🔘 Circular buttons — placed between arcs like your screenshot */}
    {/* Concept (right side, rotated vertically) */}
<button
  onClick={() => handleTabClick("concept")}
  className={`absolute top-[50%] right-[-29%] -translate-y-1/2 rotate-90 origin-center text-xs md:text-sm font-semibold rounded-md px-5 py-2 transition- duration-300 
  ${activeTab === "concept"
    ? "bg-[#2FA8F9] text-white scale-110"
    : "bg-[#0E2A46] text-white/90 hover:bg-sky-700"
  }`}
>
  CONCEPT
</button>

{/* Market (top, horizontal) */}
<button
  onClick={() => handleTabClick("market")}
  className={`absolute top-[-16%] left-1/2 -translate-x-1/2 text-xs md:text-sm font-semibold rounded-md px-5 py-2 transition-all duration-300 
  ${activeTab === "market"
    ? "bg-[#2FA8F9] text-white scale-110"
    : "bg-[#0E2A46] text-white/90 hover:bg-sky-700"
  }`}
>
  MARKET
</button>

{/* Trial (left side, rotated vertically) */}
<button
  onClick={() => handleTabClick("trial")}
  className={`absolute top-[50%] left-[-23%] -translate-y-1/2 -rotate-90 origin-center text-xs md:text-sm font-semibold rounded-md px-5 py-2 transition-all duration-300 
  ${activeTab === "trial"
    ? "bg-[#2FA8F9] text-white scale-110"
    : "bg-[#0E2A46] text-white/90 hover:bg-sky-700"
  }`}
>
  TRIAL
</button>

{/* Design (bottom, horizontal) */}
<button
  onClick={() => handleTabClick("design")}
  className={`absolute bottom-[-17%] left-1/2 -translate-x-1/2 text-xs md:text-sm font-semibold rounded-md px-5 py-2 transition-all duration-300 
  ${activeTab === "design"
    ? "bg-[#2FA8F9] text-white scale-110"
    : "bg-[#0E2A46] text-white/90 hover:bg-sky-700"
  }`}
>
  DESIGN
</button>

</div>  

  

    {/* 👁 Eye Image (Center) */}
    <Image
      src="/assets/nav/eye image 1.png"
      alt="Eye"
      fill
      className="relative z-20 object-contain"
    />
  </div>



        {/* ➡️ Vector Arrow */}
        <div className="hidden md:flex items-center justify-center w-[200px] relative -translate-y-8 translate-x-1">
          <Image
            src="/assets/nav/vector 53.png"
            alt="Arrow Vector"
            width={120}
            height={100}
            className="object-contain"
          />
        </div>

       {/* 🧾 Info Box + Vision */}
<div className="flex flex-col items-center md:items-start text-center md:text-left">
  {/* Info Box with Slide + Fade Text */}
  <div
    key={activeTab}
    className="bg-[#0C2039]/90 rounded-2xl p-8 max-w-md relative overflow-hidden animate-boxSlide"
  >
    <div className="animate-textSlide">
      <p className="text-white/90 text-lg leading-relaxed">
        {infoText[activeTab]}
      </p>
    </div>

    {/* Progress Indicators (bottom-left, rectangular bars) */}
    <div className="absolute bottom-3 left-6 flex gap-1.5">
      {["concept", "market", "trial", "design"].map((tab) => (
        <div
          key={tab}
          className={`h-[8px]  transition-all duration-500 ease-in-out ${
            activeTab === tab
              ? "w-[24px] bg-sky-400"
              : "w-[10px] bg-gray-500/60"
          }`}
        ></div>
      ))}
    </div>
  </div>

  {/* Vision Section */}
  <div className="mt-6 w-full flex flex-col items-center md:items-start">
    <h3 className="font-bold text-3xl whitespace-nowrap">
      YOUR VISION IS OUR VISION
    </h3>
    <p className="text-sky-400 font-medium mt-2 flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-sky-300 transition-all duration-300">
      Let us guide you on your journey to FDA approval
      <BsArrowUpRightCircleFill className="text-sky-400 text-2xl hover:rotate-12 hover:scale-110 transition-transform duration-300" />
    </p>
  </div>
</div>

      </div>

      {/* 🌊 Curved Divider + Fade Transition */}
      <div className="relative w-full h-[180px] mt-20">
        <Image
          src="/assets/nav/Group 23.png"
          alt="Bottom Shape"
          fill
          className="object-contain object-bottom z-10"
        />
        <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-b from-transparent via-[#001B38]/80 to-[#00152A] z-0"></div>
      </div>

      {/* 👁 Second Section: Eye is the Window */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-16 pb-24 px-6 md:px-12 text-center bg-[#00152A]">
        <h1 className="text-[32px] md:text-5xl font-bold leading-tight">
          IT IS OFTEN SAID THAT THE <br />
          <span className="text-sky-400">EYE IS THE WINDOW </span>
          TO THE SOUL
        </h1>

        {/* 💬 Chat + Body */}
        <div
          id="chat-section"
          className="relative mt-16 w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 gap-10"
        >
          {/* 💬 Left Chat */}
          <div className="flex flex-col gap-5 max-w-md w-full md:translate-y-[-40px]">
            {/* 🧍‍♂️ Message 1 (User) */}
            {visibleMessages >= 1 && (
              <div className="flex items-start gap-3 animate-fadeIn">
                <FaUserCircle className="text-white text-3xl flex-shrink-0" />
                <div className="bg-white text-[#0C2039] px-5 py-3 rounded-2xl shadow-md max-w-[85%]">
                  Does Sage Research exclusively focus on ophthalmology within
                  its CRO Services?
                </div>
              </div>
            )}

            {/* 🤖 Message 2 (Bot) */}
            {visibleMessages >= 2 && (
              <div className="flex items-start gap-3 justify-end animate-fadeIn">
                <div className="bg-[#0C2039]/80 text-white px-5 py-3 rounded-2xl shadow-md max-w-[85%] text-left">
                  In addition to our recognized expertise in ophthalmology, Sage
                  Research offers comprehensive CRO services across a{" "}
                  <span className="font-bold">
                    broad range of therapeutic areas.
                  </span>
                </div>
                <FaRobot className="text-sky-400 text-3xl flex-shrink-0" />
              </div>
            )}

            {/* 🤖 Message 3 (Bot) */}
            {visibleMessages >= 3 && (
              <div className="flex items-start gap-3 justify-end animate-fadeIn">
                <div className="bg-[#0C2039]/80 text-white px-5 py-3 rounded-2xl shadow-md max-w-[85%] text-left">
                  The eyes are a unique, non-invasive window into systemic
                  health, capable of revealing early signs of{" "}
                  <span className="font-bold">
                    numerous diseases and disorders.
                  </span>
                </div>
                <FaRobot className="text-sky-400 text-3xl flex-shrink-0" />
              </div>
            )}

            {/* 🚀 Explore Button */}
            {visibleMessages >= 3 && (
              <div className="flex justify-end mt-3 animate-fadeIn">
                <button className="flex items-center gap-2 bg-[#0C2039] text-sky-400 px-6 py-3 rounded-full hover:bg-sky-900 transition">
                  Explore <BsArrowUpRightCircleFill size={20} />
                </button>
              </div>
            )}
          </div>

{/* 🧍‍♂️ Right Body Section with Multi-System Buttons */}
<div className="relative flex justify-center items-center px-6 md:px-10">
  {/* 💫 Glow behind body */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-sky-500/10 blur-3xl"></div>
  </div>

  {/* 🌟 Central Body Container */}
  <div className="relative w-[295px] md:w-[320px] lg:w-[380px] aspect-[295/659]">
    {/* Body images */}
    {[
      "endo", "gastro", "geria", "Hepa", "infla", "viru",
      "neuro", "cardio", "derma", "rad", "skel", "woman",
      "emer", "gen", "default",
    ].map((id) => (
      <Image
  key={id}
  src={
    id === "endo"
      ? "/assets/nav/Endocrine.png"
      : id === "gastro"
      ? "/assets/nav/Full-Body 1 (1).png"
      : id === "geria"
      ? "/assets/nav/Full-Body 1 (2).png"
      : id === "infla"
      ? "/assets/nav/Full-Body 1 (4).png"
      : id === "viru"
      ? "/assets/nav/Full-Body 1 (5).png"
      : id === "Hepa"
      ? "/assets/nav/Full-Body 1 (3).png"
      : id === "neuro"
      ? "/assets/nav/Full-Body 1 (6).png"
      : id === "cardio"
      ? "/assets/nav/Full-Body 1 (7).png"
      : id === "derma"
      ? "/assets/nav/Full-Body 1 (8).png"
      : id === "rad"
      ? "/assets/nav/Full-Body 1 (9).png"
      : id === "skel"
      ? "/assets/nav/Full-Body 1 (10).png"
      : id === "woman"
      ? "/assets/nav/Full-Body 1 (11).png"
      : id === "emer"
      ? "/assets/nav/Full-Body 1 (12).png"
      : id === "gen"
      ? "/assets/nav/Full-Body 1 (13).png"
      : "/assets/nav/Full-Body 1.png"
  }
   alt={id}
        fill
        className={`object-contain transition-opacity duration-700 ${
          activeBody === id ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

             
            </div>

  {/* 💡 Aura Lighting */}
  <div className="absolute z-0">
    <Image
      src="/assets/nav/body-lighting 1.png"
      alt="Aura Overlay"
      width={480}
      height={400}
      className="object-contain opacity-80 animate-pulse"
    />
  </div>

  {/* 🔘 Clickable System Buttons */}
  {[
    { id: "endo", label: "Endocrinology", position: "left-[3%] top-[16%]", img: "/assets/nav/Frame 13059.png" },
    { id: "gastro", label: "Gastroenterology", position: "left-[0%] top-[28%]", img: "/assets/nav/Frame 13059 (1).png" },
    { id: "geria", label: "Geriatrics", position: "left-[5%] top-[40%]", img: "/assets/nav/geriatrics.png" },
    { id: "Hepa", label: "Hepatology", position: "left-[0%] top-[50%]", img: "/assets/nav/Frame 13059 (2).png" },
    { id: "infla", label: "Inflammation", position: "left-[2%] top-[63%]", img: "/assets/nav/Frame 13059 (3).png" },
    { id: "viru", label: "Viruses", position: "left-[5%] top-[76%]", img: "/assets/nav/Viruses.png" },
    { id: "neuro", label: "Neurology", position: "right-[4%] top-[8%]", img: "/assets/nav/Frame 13059 (5).png" },
    { id: "cardio", label: "Cardiovascular", position: "right-[2%] top-[20%]", img: "/assets/nav/Frame 13059 (6).png" },
    { id: "derma", label: "Dermatology", position: "right-[1%] top-[33%]", img: "/assets/nav/Frame 13059 (7).png" },
    { id: "rad", label: "Radiation Oncology", position: "right-[1%] top-[48%]", img: "/assets/nav/Frame 13059 (8).png" },
    { id: "skel", label: "Skeletal System", position: "right-[2%] top-[59%]", img: "/assets/nav/Frame 13059 (9).png" },
    { id: "woman", label: "Women's Health", position: "right-[4%] top-[70%]", img: "/assets/nav/Frame 13059 (10).png" },
    { id: "emer", label: "Emerging Viruses", position: "right-[5%] top-[82%]", img: "/assets/nav/Rareviruses.png" },
    { id: "gen", label: "Genetics", position: "right-[7%] top-[92%]", img: "/assets/nav/DNA.png" },
  ].map((sys) => (
      <div
        key={sys.id}
        className={`absolute ${sys.position} cursor-pointer transition-transform duration-300 ${
          activeBody === sys.id
            ? "scale-110 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            : "hover:scale-105"
        }`}
        onClick={() => {
          setActiveBody(sys.id);
          setIsManual(true);
        }}
      >
        <Image
          src={sys.img}
          alt={sys.label}
          width={90}
          height={40}
          className="object-contain w-auto h-auto"
        />
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}


