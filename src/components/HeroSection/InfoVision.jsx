import Image from "next/image";

export default function InfoVision({ activeTab, infoText }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left -translate-y-10">
      {/* 🧾 Info Box */}
      <div
        key={activeTab}
        className="rounded-[32px] p-5 sm:p-10 w-full max-w-[431px] relative animate-boxSlide mx-4 sm:mx-6 md:mx-0"
        style={{
          minHeight: "221px",
          background:
            "linear-gradient(90deg, rgba(58, 173, 237, 0.1) 0%, rgba(58, 173, 237, 0.01) 100%)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          className="
            relative w-full h-full animate-textSlide
            flex md:block items-center justify-center
          "
        >
          <p
            className="
              text-white/90 whitespace-pre-wrap 
              font-gotham font-bold 
              text-[16px] leading-[25px] 
              md:text-[18px] md:leading-[28px]
              text-left md:text-left
            "
          >
            {infoText[activeTab]}
          </p>
        </div>

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
          className="
            font-gotham font-bold uppercase
            text-[20px] leading-[28px] tracking-[0.04em]
            text-center
            md:text-[24px] md:leading-[32px] md:tracking-[0.04em] md:text-left
          "
        >
          YOUR VISION IS OUR VISION
        </h3>

        <div className="relative group mt-5 flex items-center gap-2 justify-center md:justify-start cursor-pointer w-auto">
          {/* ✅ Text (updated mobile font style) */}
          <p
            className="
              text-sky-400 font-gotham font-bold
              text-[16px] leading-[22px] tracking-[0%]
              md:text-[18px] md:leading-[26px]
              transition-colors
              text-center md:text-left
            "
          >
            Let us guide you on your journey to FDA approval
          </p>

          <div className="relative w-6 h-6 flex items-center justify-center">
            <Image
              src="/assets/nav/Arrow button.png"
              alt="Arrow Default"
              fill
              className="absolute transition-opacity duration-300 group-hover:opacity-0"
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/assets/nav/Arrow button 1.png"
              alt="Arrow Hover"
              fill
              className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              style={{ objectFit: "contain" }}
            />
          </div>

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
