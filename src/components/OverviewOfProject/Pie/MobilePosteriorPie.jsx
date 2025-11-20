"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function MobilePosteriorPie({ variant }) {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setRotate(variant === "posterior");
  }, [variant]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-0 px-4">
      <div className="relative w-[290px] h-[430px] flex-shrink-0">
        {/* Background Eye */}
        <Image
          src="/assets/nav/BG Eye image.png"
          alt="BG Eye Layer"
          fill
          className="object-contain z-0"
        />

        {/* Pie Chart */}
        <div className="absolute inset-0 z-20 scale-[0.85]">
          <Image
            src="/assets/nav/Pie Chart (1).png"
            alt="Posterior Pie Chart"
            fill
            className="object-contain"
          />
        </div>

        {/* Eye Image with animation */}
        <div className="absolute inset-0 z-20 scale-[0.82]">
          <Image
            key={rotate}
            src="/assets/nav/eye image 1 (1).png"
            alt="Background Eye"
            fill
            className={`object-contain z-10 ${rotate ? "spin-once" : ""}`}
          />
        </div>

        <div className="absolute inset-0 z-40 scale-[0.70] origin-center">
          {/* Intraocular Lens */}
          <div className="absolute left-[-100px] top-[100px] text-white ">
            <div className="flex gap-2">
              <span className="relative -top-[13px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Intraocular <br></br>Lens
              </span>
              <Image
                src="/assets/nav/Vector 79 (1).png"
                width={50}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* Migs */}
          <div className="absolute left-[30px] top-[30px] text-white ">
            <div className="flex gap-2">
              <span className="relative -top-[18px] -right-[20px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Migs
              </span>
              <Image
                src="/assets/nav/Vector 78 (1).png"
                width={30}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* Normal */}
          <div className="absolute left-[65px] top-[20px] text-white ">
            <div className="flex gap-2">
              <span className="relative -top-[18px] -right-[32px]  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Normal
              </span>
              <Image
                src="/assets/nav/Vector 77 (1).png"
                width={14}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* Retinal */}
          <div className="absolute right-[50px] top-[160px] text-white  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
            <span>Retinal</span>
          </div>

          {/* Glaucoma */}
          <div className="absolute right-[110px] top-[290px] text-white  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
            <span>Glaucoma</span>
          </div>

          {/* Uveitis */}
          <div className="absolute right-[220px] top-[220px] text-white font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
            <span>Uveitis</span>
          </div>
        </div>
      </div>

      {/* RIGHT TEXT SECTION  */}
      <div className="w-full max-w-[380px] mt-1 mb-10">
        {/* Paragraph 1 */}
        <div className="border-l-4 border-sky-500 pl-4 mb-6">
          <p className="text-white text-[16px] leading-[22px] font-gotham font-medium">
            Our study trials have been in both adult and pediatric population,
            addressing a variety of health conditions and diseases.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="border-l-4 border-sky-500 pl-4">
          <p className="text-gray-300 text-[16px] leading-[22px] font-gotham font-medium">
            We offer a comprehensive portfolio of clinical research in CNS
            system disorders, including migraines and conditions that mimic or
            contribute to migraine symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}
