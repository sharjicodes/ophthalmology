"use client";

import Image from "next/image";

export default function SystemDetailBox({ activeBody, systemDetails }) {
  return (
    activeBody &&
    systemDetails[activeBody] && (
      <div className="relative left-15 mt-40 animate-fadeSlideIn">
        {/* FRAMES EXACT SAME */}
        <div className="absolute -top-10 -left-7 w-[40px] h-[140px] border-t-1 border-l-1 border-sky-400 rounded-tl-none animate-drawLine">
          <div className="absolute top-[-2px] left-[36px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
          <div className="absolute top-[136px] left-[-2px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
        </div>

        <div className="absolute -top-12 -left-9 w-[190px] h-[120px] border-t-1 border-l-1 border-orange-400 rounded-tl-none animate-drawLine">
          <div className="absolute top-[-2px] left-[185px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
          <div className="absolute top-[116px] left-[-2px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
        </div>

        <div className="absolute -bottom-11 -right-4 w-[340px] h-[140px] border-b-1 border-r-1 border-orange-400 rounded-br-none animate-drawLine">
          <div className="absolute bottom-[-2px] right-[336px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
          <div className="absolute bottom-[136px] right-[-2px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
        </div>

        <div className="absolute -bottom-13 -right-6 w-[420px] h-[120px] border-b-1 border-r-1 border-sky-400 rounded-br-none animate-drawLine">
          <div className="absolute bottom-[-2px] right-[416px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
          <div className="absolute bottom-[116px] right-[-2px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
        </div>

        {/* TEXT */}
        <div className="relative z-10 text-left pr-28">
          <h2 className="text-2xl font-bold text-white mb-3">
            {systemDetails[activeBody].title}
          </h2>
          <p className="text-white/90 leading-relaxed text-base">
            {systemDetails[activeBody].description}
          </p>
        </div>

        {/* ICON */}
        <div className="absolute right-6 -top-10 -translate-y-1/2 w-[110px] h-[110px]">
          <Image
            src={systemDetails[activeBody].icon}
            alt={systemDetails[activeBody].title}
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>
    )
  );
}
