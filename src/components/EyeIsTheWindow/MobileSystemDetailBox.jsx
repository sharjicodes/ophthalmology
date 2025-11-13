"use client";

import Image from "next/image";

export default function MobileSystemDetailBox({
  isMobile,
  activeBody,
  systemDetails,
}) {
  if (!isMobile || !activeBody || !systemDetails[activeBody]) return null;

  return (
    <div className="relative mt-10 animate-fadeSlideIn w-full flex justify-center">
      <div className="relative w-[90%] sm:w-[85%] md:w-[60%]">
       
        <div className="absolute -top-10 -left-3 w-[60px] h-[100px] border-t-1 border-l-1 border-sky-400 animate-drawLine">
          <div className="absolute top-[-2px] left-[56px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
          <div className="absolute top-[96px] left-[-2px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
        </div>

        <div className="absolute -top-12 -left-5 w-[120px] h-[80px] border-t-1 border-l-1 border-orange-400 animate-drawLine">
          <div className="absolute top-[-2px] left-[116px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
          <div className="absolute top-[76px] left-[-2px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
        </div>

        <div className="absolute -bottom-11 -right-4 w-[240px] h-[140px] border-b-1 border-r-1 border-orange-400 animate-drawLine">
          <div className="absolute bottom-[-2px] right-[236px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
          <div className="absolute bottom-[136px] right-[-2px] w-1 h-1 bg-orange-400 rounded-full animate-growDot"></div>
        </div>

        <div className="absolute -bottom-13 -right-6 w-[280px] h-[120px] border-b-1 border-r-1 border-sky-400 animate-drawLine">
          <div className="absolute bottom-[-2px] right-[276px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
          <div className="absolute bottom-[116px] right-[-2px] w-1 h-1 bg-sky-400 rounded-full animate-growDot"></div>
        </div>

        <div className="relative z-10 text-left px-4 mt-6">
          <h2 className="text-xl font-bold text-white mb-3">
            {systemDetails[activeBody].title}
          </h2>
          <p className="text-white/90 leading-relaxed text-sm">
            {systemDetails[activeBody].description}
          </p>
        </div>

        <div className="absolute right-3 -top-12 w-[90px] h-[90px] mx-auto">
          <Image
            src={systemDetails[activeBody].icon}
            alt={systemDetails[activeBody].title}
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
