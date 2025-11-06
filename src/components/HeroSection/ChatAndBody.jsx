// components/HeroSection/ChatAndBody.jsx
import Image from "next/image";
import { FaUserCircle, FaChevronRight } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function ChatAndBody({
  visibleMessages,
  activeBody,
  setActiveBody,
  setIsManual,
}) {
  const systemButtons = [
  { id: "endo", label: "Endocrinology", position: "-left-[5%] top-[25%]", img: "/assets/nav/Frame 13059.png" },
  { id: "gastro", label: "Gastroenterology", position: "-left-[13%] top-[34%]", img: "/assets/nav/Frame 13059 (1).png" },
  { id: "geria", label: "Geriatrics", position: "-left-[5%] top-[42%]", img: "/assets/nav/geriatrics.png" },
  { id: "Hepa", label: "Hepatology", position: "-left-[15%] top-[49%]", img: "/assets/nav/Frame 13059 (2).png" },
  { id: "infla", label: "Inflammation", position: "-left-[13%] top-[57%]", img: "/assets/nav/Frame 13059 (3).png" },
  { id: "uro", label: "Urology", position: "-left-[6%] top-[66%]", img: "/assets/nav/Frame 13059 (11).png" },
  { id: "viru", label: "Virology", position: "left-[2%] top-[76%]", img: "/assets/nav/Viruses.png" },
  { id: "neuro", label: "Neurology", position: "right-[4%] top-[18%]", img: "/assets/nav/Frame 13059 (5).png" },
  { id: "cardio", label: "Cardiovascular", position: "-right-[4%] top-[29%]", img: "/assets/nav/Frame 13059 (6).png" },
  { id: "derma", label: "Dermatology", position: "-right-[5%] top-[38%]", img: "/assets/nav/Frame 13059 (7).png" },
  { id: "rad", label: "Radiation Oncology", position: "-right-[19%] top-[48%]", img: "/assets/nav/Frame 13059 (8).png" },
  { id: "skel", label: "Skeletal System", position: "-right-[9%] top-[58%]", img: "/assets/nav/Frame 13059 (9).png" },
  { id: "woman", label: "Women's Health", position: "-right-[4%] top-[66%]", img: "/assets/nav/Frame 13059 (10).png" },
  { id: "emer", label: "Emerging Viruses", position: "-right-[3%] top-[74%]", img: "/assets/nav/Rareviruses.png" },
  { id: "gen", label: "Genetics", position: "right-[13%] top-[82%]", img: "/assets/nav/DNA.png" },
];


  const bodyImageMap = {
    // ... (Body Image Map remains UNCHANGED) ...
    endo: "/assets/nav/Endocrine.png",
    gastro: "/assets/nav/Full-Body 1 (1).png",
    geria: "/assets/nav/Full-Body 1 (2).png",
    Hepa: "/assets/nav/Full-Body 1 (3).png",
    infla: "/assets/nav/Full-Body 1 (4).png",
    viru: "/assets/nav/Full-Body 1 (14).png",
    neuro: "/assets/nav/Full-Body 1 (6).png",
    cardio: "/assets/nav/Full-Body 1 (7).png",
    derma: "/assets/nav/Full-Body 1 (8).png",
    rad: "/assets/nav/Full-Body 1 (9).png",
    skel: "/assets/nav/Full-Body 1 (10).png",
    woman: "/assets/nav/Full-Body 1 (11).png",
    emer: "/assets/nav/Full-Body 1 (12).png",
    gen: "/assets/nav/Full-Body 1 (13).png",
    uro: "/assets/nav/Full-Body 1 (5).png",
    default: "/assets/nav/Full-Body 1.png",
  };

  const bodySystemsIds = [
    // ... (Body Systems IDs remains UNCHANGED) ...
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
    "uro",
    "default",
  ];

  const systemDetails = {
    woman: {
      title: "Women's Health",
      description:
        "Female-specific health conditions, including reproductive health, and various female-specific treatments and therapies.",
      icon: "/assets/nav/womans.png",
    },
    neuro: {
      title: "Neurology",
      description:
        "The brain and nervous system focused on neurologic disorders, treatments, and outcomes.",
      icon: "/assets/nav/neurology.png",
    },
    cardio: {
      title: "Cardiovascular",
      description:
        "The cardiovascular system to analyze and measure various treatments and conditions of the heart and vasculature.",
      icon: "/assets/nav/heart.png",
    },
    derma: {
      title: "Dermatology",
      description:
        "Evaluation of the safety and effectiveness of medical interventions and therapeutics of the skin.",
      icon: "/assets/nav/skin.png",
    },
    rad: {
      title: "Radiation Oncology",
      description:
        "The precise delivery techniques, tumor response, encompassing various techniques and treatments to treat cancer.",
      icon: "/assets/nav/radiation.png",
    },
    skel: {
      title: "Skeletal System",
      description:
        "The skeletal system, osteology, bones and bone health or conditions.",
      icon: "/assets/nav/skeleton.png",
    },

    emer: {
      title: "Emerging Viruses",
      description:
        "Novel or newly recognized viral infections in humans.",
      icon: "/assets/nav/virus.png",
    },
    gen: {
      title: "Genetics",
      description:
        "Research involving DNA analysis to investigate the effectiveness and safety of new treatments or interventions.",
      icon: "/assets/nav/genetics.png",
    },
    uro: {
      title: "Urology",
      description:
        "The urologic system consisting of kidneys, ureters, bladder and urethra.",
      icon: "/assets/nav/urology.png",
    },
    viru: {
      title: "Virology",
      description:
        "The effectiveness of a vaccine or medical intervention in humans to treat viral infections.",
      icon: "/assets/nav/virology.png",
    },
    infla: {
      title: "Inflammation",
      description:
        "Inflammation of the human body caused by chronic illness and diseases.",
      icon: "/assets/nav/inflammation.png",
    },
    Hepa: {
      title: "Hepatology",
      description:
        "Liver, gallbladder, biliary tree, and pancreas aiming to evaluate medical, surgical, or behavioral interventions.",
      icon: "/assets/nav/hepatology.png",
    },
    geria: {
      title: "Geriatrics",
      description:
        "A focus on older adults and changes that are related to the aging process.",
      icon: "/assets/nav/geriatrics1.png",
    },
    gastro: {
      title: "Gastreoenterogy",
      description:
        "The gastrointestinal tract (GI tract) diseases, procedures or treatment outcomes.",
      icon: "/assets/nav/gastroenterology.png",
    },
    endo: {
      title: "Endocrinology",
      description:
        "Hormones, endocrine glands, and specific endocrine disorders like diabetes, Graves’ disease, and other autoimmune disorders.",
      icon: "/assets/nav/endocrinolgy.png",
    },
  };

  // The hex color for rgba(0, 63, 110, 1) is #003f6e
  const botBubbleColor = "bg-[#003f6e]";

  return (
    <div
      id="chat-section"
      className="relative mt-16 w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start px-4 sm:px-8 md:px-16 gap-8 lg:gap-32"
    >
      {/* 💬 Left Chat & Women's Health Detail Box Container */}
      <div className="flex flex-col gap-5 max-w-lg w-full md:translate-y-[-40px]">
        {/* 🧍‍♂️ Message 1 (User) */}
        {visibleMessages >= 1 && (
   <div className="relative flex items-start gap-4 animate-slideInLeft max-w-[70%]">
    {/* Left curve for user bubble */}
    <div className="absolute top-0 left-6 w-[50px] h-[40px]">
      <Image
        src="/assets/nav/Vector 175.png"
        alt="User Curve"
        fill
        className="object-contain "
      />
    </div>

    <div className="w-8 h-8 rounded-full flex-shrink-0 relative">
      <FaUserCircle className="text-white text-3xl opacity-80" />
    </div>

    {/* Chat bubble: User (remains white) */}
    <div className="bg-white text-[#0C2039] px-5 py-3 rounded-xl rounded-tl-none shadow-md w-full text-sm leading-5 font-normal relative">
      Does Sage Research exclusively focus on ophthalmology within its CRO Services?
    </div>
  </div>
)}


        {visibleMessages >= 2 && (
  <div className="relative flex items-start gap-4 animate-slideInRight ml-[100px] max-w-[100%]">
    {/* Right curve for bot bubble */}
    <div className="absolute -top-0 right-6 w-[50px] h-[40px]">
      <Image
        src="/assets/nav/Vector 175 (1).png"
        alt="Bot Curve"
        fill
        className="object-contain mix-blend-screen"
      />
    </div>

    {/* Chat bubble: Bot */}
    <div
      className={`${botBubbleColor} text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-md max-w-md w-full text-left text-sm leading-5 font-normal relative`}
    >
      In addition to our recognized expertise in ophthalmology, Sage Research offers comprehensive CRO services across a{" "}
      <span className="font-bold">broad range of therapeutic areas.</span>
    </div>

    {/* Bot Icon */}
    <div className="w-8 h-8 rounded-full flex-shrink-0 relative">
      <Image
        src="/assets/nav/Ellipse 153.png"
        alt="Bot Icon"
        width={32}
        height={32}
        className="object-contain"
      />
    </div>
  </div>
)}


        {/* 🤖 Message 3 (Bot) - COLOR APPLIED HERE */}
        {visibleMessages >= 3 && (
          <div className="relative flex items-start gap-4 animate-slideInRight ml-[100px] max-w-[100%]">
    {/* Right curve for bot bubble */}
    <div className="absolute -top-0 right-6 w-[50px] h-[40px]">
      <Image
        src="/assets/nav/Vector 175 (1).png"
        alt="Bot Curve"
        fill
        className="object-contain mix-blend-screen"
      />
    </div>
            <div
              className={`${botBubbleColor} text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-md max-w-md w-full text-left text-sm leading-5 font-normal relative`}
            >
              The eyes are a unique, non-invasive window into systemic health,
              capable of revealing early signs of{" "}
              <span className="font-bold">
                numerous diseases and disorders.
              </span>
            </div>
            {/* Bot Icon */}
            <div className="w-8 h-8 rounded-full flex-shrink-0 relative">
              <Image
                src="/assets/nav/Ellipse 153.png"
                alt="Bot Icon"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* 🚀 Explore Button */}
        {visibleMessages >= 3 && (
          // Adjusted right margin to align with the message bubbles
          <div className="flex mt-4 animate-slideInRight ml-auto">
            {/* Button background: Dark Blue, Rounded Full, Arrow icon is '→' character */}
            <button className="flex items-center gap-2 bg-[#0C2039] text-sky-400 px-6 py-3 rounded-full hover:bg-sky-900 transition mr-11">
              Explore <span className="text-xl">→</span>
            </button>
          </div>
        )}

        {/* 🧠 System Info Box (Dynamic for Each Active Body System) */}
        {activeBody && systemDetails[activeBody] && (
          <div className="relative mt-40 animate-fadeSlideIn">
            {/* 🟦 Top-Left Line Frame */}
            <div className="absolute -top-10 -left-7 w-[40px] h-[140px] border-t-1 border-l-1 border-sky-400 rounded-tl-none animate-drawLine">
              <div className="absolute top-[-2px] left-[36px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
              <div className="absolute top-[136px] left-[-2px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
            </div>

            <div className="absolute -top-12 -left-9 w-[190px] h-[120px] border-t-1 border-l-1 border-orange-400 rounded-tl-none animate-drawLine">
              <div className="absolute top-[-2px] left-[185px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
              <div className="absolute top-[116px] left-[-2px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
            </div>

            {/* 🟧 Bottom-Right Line Frame */}
            <div className="absolute -bottom-11 -right-4 w-[340px] h-[140px] border-b-1 border-r-1 border-orange-400 rounded-br-none animate-drawLine">
              <div className="absolute bottom-[-2px] right-[336px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
              <div className="absolute bottom-[136px] right-[-2px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
            </div>

            <div className="absolute -bottom-13 -right-6 w-[420px] h-[120px] border-b-1 border-r-1 border-sky-400 rounded-br-none animate-drawLine">
              <div className="absolute bottom-[-2px] right-[416px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
              <div className="absolute bottom-[116px] right-[-2px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-left pr-28">
              <h2 className="text-2xl font-bold text-white mb-3">
                {systemDetails[activeBody].title}
              </h2>
              <p className="text-white/90 leading-relaxed text-base">
                {systemDetails[activeBody].description}
              </p>
            </div>

            {/* Icon Image */}
            <div className="absolute right-6 -top-10 -translate-y-1/2 w-[110px] h-[110px]">
              <Image
                src={systemDetails[activeBody].icon}
                alt={systemDetails[activeBody].title}
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        )}
      </div>

      {/* 🧍‍♂️ Right Body Section with Multi-System Buttons */}
<div className="relative flex justify-center items-center px-6 md:px-10 lg:ml-8 md:-mt-24 lg:-mt-32">
  {/* 💫 Glow behind body */}
  <div className="absolute inset-0 flex justify-center items-center z-0">
    <div className="w-[340px] md:w-[500px] h-[600px] md:h-[720px] rounded-full bg-sky-500/10 blur-3xl"></div>
  </div>

  {/* 🌟 Central Body Container */}
  <div className="relative w-[280px] md:w-[480px] lg:w-[480px] aspect-[295/659] max-w-[520px] ">
    {bodySystemsIds.map((id) => (
      <Image
        key={id}
        src={bodyImageMap[id]}
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
      width={560}
      height={480}
      className="object-contain opacity-90 animate-pulse"
    />
  </div>

  {/* 🔘 Clickable System Buttons (with gradient background) */}
{systemButtons.map((sys) => {
  const isActive = activeBody === sys.id;

  return (
    <div
      key={sys.id}
      className={`absolute ${sys.position} transition-all duration-300 ${
        isActive
          ? "scale-110 drop-shadow-[0_0_18px_rgba(56,189,248,0.9)]"
          : "hover:scale-105"
      }`}
    >
      <button
        onClick={() => {
          setActiveBody(sys.id);
          setIsManual(true);
        }}
        className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base
          border border-white/30 transition-all duration-300 overflow-hidden scale-70
          ${
            isActive
              ? "text-sky-400 border-sky-400 "
              : "text-white hover:text-sky-400 hover:border-sky-400"
          }`}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)",
          backdropFilter: "blur(6px)",
        }}
      >
       
        
        <span className="relative z-10 ">{sys.label}</span>
      </button>
    </div>
  );
})}


</div>

    </div>
  );
}
