"use client";

import Image from "next/image";

export default function AnteriorPie() {
  return (
    <div className="relative w-full flex items-center justify-center mt-16 px-6 md:px-12">
      {/* PIE + BACKGROUND EYE WRAPPER */}
      <div className="relative w-[520px] h-[520px] flex-shrink-0">

        {/* BACK-MOST BACKGROUND EYE */}
        <Image
          src="/assets/nav/BG Eye image.png"
          alt="BG Eye Layer"
          fill
          className="object-contain opacity-70 z-0"
        />

        {/* EXISTING BACKGROUND EYE */}
        <Image
          src="/assets/nav/eye image 1 (1).png"
          alt="Anterior Pie Background Eye"
          fill
          className="object-contain opacity-90 z-10"
        />

        {/* ANTERIOR PIE CHART */}
        <Image
          src="/assets/nav/Pie Chart.png"
          alt="Anterior Pie Chart"
          fill
          className="object-contain z-20"
        />
      </div>

      {/* RIGHT TEXT SECTION */}
      <div className="relative max-w-lg ml-10">
        <div className="border-l-4 border-sky-500 pl-5 mb-8">
          <p className="text-base leading-relaxed">
            Our study trials have been in both adult and pediatric population,
            addressing a variety of health conditions and diseases.
          </p>
        </div>

        <div className="border-l-4 border-sky-500 pl-5">
          <p className="text-base leading-relaxed text-gray-300">
            We offer a comprehensive portfolio of clinical research in CNS system
            disorders, including migraines and conditions that mimic or contribute
            to migraine symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}
