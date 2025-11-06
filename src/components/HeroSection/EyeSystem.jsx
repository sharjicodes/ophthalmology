// components/HeroSection/EyeSystem.jsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function EyeSystem({
  rotation,
  activeTab,
  handleTabClick,
  getLabelDisplayRotation,
}) {
  const labels = ["MARKET", "CONCEPT", "DESIGN", "TRIAL"];

  return (
    <motion.div
      className="relative flex justify-center items-center w-[55vw] sm:w-[250px] md:w-[350px] lg:w-[500px] aspect-square max-w-[370px]"
      animate={{ rotate: rotation }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* 🔄 Nerves Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/assets/nav/Nurves.png"
          alt="Nerves"
          fill
          className="object-contain "
          unoptimized={true}
        />
      </div>

      {/* 👁 Eye Image */}
      <Image
        src="/assets/nav/eye image 1.png"
        alt="Eye"
        fill
        className="object-contain relative z-10 scale-80 -translate-x-2"
      />

      {/* 🌐 Labels */}
      {labels.map((label) => {
        const positions = {
          MARKET: "absolute top-[-25px] left-1/2 -translate-x-1/2",
          CONCEPT:
            "absolute right-[-50px] top-1/2 -translate-y-1/2 -translate-x-1",
          DESIGN: "absolute bottom-[-25px] left-1/2 -translate-x-1/2",
          TRIAL: "absolute left-[-50px] top-1/2 -translate-y-1/2",
        };
        return (
          <motion.div
            key={label}
            onClick={() => handleTabClick(label.toLowerCase())}
            animate={{ rotate: getLabelDisplayRotation(label) }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`${
              positions[label]
            } group cursor-pointer transform-origin: center center
            w-[110px] h-[40px] flex items-center justify-center
            rounded-md text-xs sm:text-sm font-semibold
            ${
              activeTab.toUpperCase() === label
                ? "bg-white text-black scale-110 shadow-md"
                : "bg-[#153a5b] text-white "
            }`}
          >
            {label}
            {/* 🔹 Hover/Active indicator */}
            <span
              className={`
                absolute bottom-[-6px] h-[3px] w-[30px] bg-white 
                transition-all duration-500 ease-out
                ${
                  activeTab.toUpperCase() === label
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