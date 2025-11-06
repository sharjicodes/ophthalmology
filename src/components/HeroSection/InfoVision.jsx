// components/HeroSection/InfoVision.jsx
import { FaArrowCircleRight } from "react-icons/fa";
import { TbCircleArrowUpRight } from "react-icons/tb";

export default function InfoVision({ activeTab, infoText }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left -translate-y-10">
      {/* 🧾 Info Box */}
      <div
        key={activeTab}
        className="rounded-[32px] p-5 sm:p-10 w-[431px] max-w-none relative animate-boxSlide"
        style={{
          height: "221px",
          // Custom Gradient Background
          background:
            "linear-gradient(90deg, rgba(58, 173, 237, 0.1) 0%, rgba(58, 173, 237, 0.01) 100%)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="relative overflow-visible w-full h-full animate-textSlide">
          <p
            className="text-white/90 text-m font-bold whitespace-pre-wrap"
            style={{
              lineHeight: "25px",
            }}
          >
            {infoText[activeTab]}
          </p>
        </div>
        {/* Progress Indicators (bottom-left, rectangular bars) */}
        <div className="absolute bottom-3 left-10 flex gap-1.5">
          {["concept", "market", "trial", "design"].map((tab) => (
            <div
              key={tab}
              className={`h-[8px] transition-all duration-500 ease-in-out ${
                activeTab === tab
                  ? "w-[24px] bg-sky-400"
                  : "w-[10px] bg-gray-500/60"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* 🎯 Vision Section */}
      <div className="mt-20 w-full flex flex-col items-center md:items-start">
        <h3
          className="font-bold text-[24px] uppercase whitespace-nowrap"
          style={{
            lineHeight: "100%",
            letterSpacing: "0.04em",
          }}
        >
          YOUR VISION IS OUR VISION
        </h3>

        <div className="relative group mt-5 flex items-center gap-2 justify-center md:justify-start cursor-pointer w-auto">
          {/* Text */}
          <p
            className="text-sky-400 font-bold text-base transition-colors"
            style={{
              lineHeight: "100%",
            }}
          >
            Let us guide you on your journey to FDA approval
          </p>

          {/* ICON CHANGE LOGIC: Animation only */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Default Icon: TbCircleArrowUpRight (Fades out) */}
            <TbCircleArrowUpRight
              className="absolute text-sky-400 text-4xl transition-opacity duration-300 group-hover:opacity-0"
              style={{ transition: "opacity 0.3s" }}
            />

            {/* Hover Icon: FaArrowCircleRight (Fades in + Rotate/Scale animation) */}
            <FaArrowCircleRight
              className="absolute text-sky-400 text-3xl transition-all duration-300 opacity-0 group-hover:opacity-100  group-hover:scale-110"
              style={{ transition: "all 0.3s" }}
            />
          </div>

          {/* ✨ Hover/Active Indicator */}
          <span
            className={`
                absolute bottom-[-6px] h-[3px] w-[30px] bg-white 
                transition-all duration-500 ease-out
                left-0 opacity-0 
                group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100
              `}
          ></span>
        </div>
      </div>
    </div>
  );
}