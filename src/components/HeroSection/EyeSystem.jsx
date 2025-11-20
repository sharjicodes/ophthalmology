import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EyeSystem({
  rotation,
  activeTab,
  handleTabClick,
  getLabelDisplayRotation,
  isCompactLayout,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const labels = ["MARKET", "CONCEPT", "DESIGN", "TRIAL"];

  return (
    <motion.div
      className="
        relative flex justify-center items-center
        w-[70vw] md:w-[350px] lg:w-[500px]
        aspect-square max-w-[400px]
        mt-6 md:mt-0
      "
      animate={{ rotate: rotation + (isMobile || isCompactLayout ? 90 : 0) }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* 🧠 Eye & Nerves */}
      <div className="absolute inset-0">
        <Image
          src="/assets/nav/Nurves.png"
          alt="Nerves"
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      <Image
        src="/assets/nav/eye image 1.png"
        alt="Eye"
        fill
        className="
          object-contain relative z-10
          scale-[0.8] md:scale-[0.8]
        "
      />

      {labels.map((label) => {
        const positions = {
          MARKET: "absolute top-[-20px] left-1/2 -translate-x-1/2",
          CONCEPT: "absolute right-[-45px] top-1/2 -translate-y-1/2",
          DESIGN: "absolute bottom-[-20px] left-1/2 -translate-x-1/2",
          TRIAL: "absolute left-[-45px] top-1/2 -translate-y-1/2",
        };

        const isActive = activeTab.toUpperCase() === label;

        return (
          <motion.div
            key={label}
            onClick={() => 
              
              handleTabClick(label.toLowerCase())}
            animate={{
              rotate: getLabelDisplayRotation(label),
              ...(isActive &&
                (isMobile || isCompactLayout) && { rotateZ: 180 }),
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`
              ${positions[label]} group cursor-pointer
              w-[90px] h-[36px] md:w-[110px] md:h-[40px]
              flex items-center justify-center rounded-md
              text-[13px] md:text-sm font-semibold
              ${
                isActive
                  ? "bg-white text-black scale-110 shadow-md"
                  : "bg-[#153a5b] text-white"
              }
            `}
          >
            {label}
            <span
              className={`
                absolute bottom-[-6px] h-[3px] w-[30px] bg-white
                transition-all duration-500 ease-out
                ${
                  isActive
                    ? "left-1/2 -translate-x-1/2 opacity-100"
                    : "left-0 opacity-0 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100"
                }
              `}
            ></span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
