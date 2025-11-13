"use client";

import Image from "next/image";

export default function BodyDesktop({
  isMobile,
  activeBody,
  bodySystemsIds,
  bodyImageMap,
  systemButtons,
  setActiveBody,
  setIsManual,
}) {
  if (isMobile) return null;

  return (
    <div className="relative flex justify-center items-center px-6 md:px-10 lg:ml-8 md:-mt-24 lg:-mt-32">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[340px] md:w-[500px] h-[600px] md:h-[720px] rounded-full bg-sky-500/10 blur-3xl"></div>
      </div>

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

      <div className="absolute z-0">
        <Image
          src="/assets/nav/body-lighting 1.png"
          alt="Aura Overlay"
          width={560}
          height={480}
          className="object-contain opacity-90 animate-pulse"
        />
      </div>

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
  );
}
