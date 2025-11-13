"use client";

import Image from "next/image";

export default function BodyMobile({
  isMobile,
  activeBody,
  setActiveBody,
  setIsManual,
  systemButtons,
  bodySystemsIds,
  bodyImageMap,
}) {
  if (!isMobile) return null;

  return (
    <div className="relative flex justify-between items-center mt-12 mb-16 w-full px-4">
      <div className="relative w-[48%] pl-4 pr-2">
        <div
          id="system-sidebar"
          className="flex flex-col justify-start items-end gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-500/40 scrollbar-track-transparent max-h-[380px] relative"
        >
          {systemButtons.map((sys) => {
            const isActive = activeBody === sys.id;

            return (
              <div
                key={sys.id}
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "scale-105 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                    : "hover:scale-105"
                }`}
              >
                <button
                  onClick={() => {
                    setActiveBody(sys.id);
                    setIsManual(true);
                    const el = document.getElementById("system-sidebar");
                    const btn = document.getElementById(`btn-${sys.id}`);
                    if (el && btn)
                      el.scrollTo({
                        top: btn.offsetTop - 120,
                        behavior: "smooth",
                      });
                  }}
                  id={`btn-${sys.id}`}
                  className={`relative w-[90%] px-5 py-2 rounded-full border border-white/30 font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden
                        ${
                          isActive
                            ? "text-sky-400 border-sky-400"
                            : "text-white hover:text-sky-400 hover:border-sky-400"
                        }`}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)",
                    backdropFilter: "blur(6px)",
                    width: "fit-content",
                    maxWidth: "100%",
                    whiteSpace: "nowrap",
                  }}
                >
                  {sys.label}
                </button>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#00152A] via-[#00152A]/80 to-transparent" />
      </div>

      <div className="relative flex justify-center items-center w-[50%] h-[500px] sm:w-[55%] sm:h-[540px] md:w-[60%] md:h-[580px]">
        <div className="relative w-[240px] h-[500px] sm:w-[280px] sm:h-[540px] md:w-[300px] md:h-[580px]">
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
      </div>
    </div>
  );
}
