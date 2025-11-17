"use client";

import Image from "next/image";

export default function AnteriorPie({rotate}) {
  return (
    <div className="relative w-full flex items-center justify-center mt-0 px-6 md:px-12">
      
      <div className="relative w-[372px] h-[530px] flex-shrink-0 left-9">
        
        <Image
          src="/assets/nav/BG Eye image.png"
          alt="BG Eye Layer"
          fill
          className="object-contain  z-0"
        />
        <div className="absolute inset-0 z-20 scale-87">
          <Image
            src="/assets/nav/Pie Chart (2).png"
            alt="Anterior Pie Chart"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 z-20 scale-84">
          <Image
            src="/assets/nav/eye image 1 (1).png"
            alt="Anterior Pie Background Eye"
            fill
            className={`object-contain z-10 transition-transform duration-700 ${
    rotate ? "rotate-[25deg]" : "rotate-0"
  }`}
          />
        </div>
        <div className="absolute inset-0 z-40">
          {/* Cornea Stem Cells */}
          <div className="absolute left-[-120px] top-[205px] text-white text-sm">
            <div className="flex  gap-2 ">
              <span className=" relative top-[5px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Cornea Stem Cells
              </span>
              <Image
                src="/assets/nav/Vector 81.png"
                width={50}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* Corneal Transplant */}
          <div className="absolute left-[-119px] top-[183px] text-white text-sm">
            <div className="flex  gap-2">
              <span className="relative -top-[8px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Corneal Transplant
              </span>
              <Image
                src="/assets/nav/Vector 80.png"
                width={50}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* Cornea */}
          <div className="absolute left-[-11px] top-[139px] text-white text-sm">
            <div className="flex gap-2">
              <span className="relative -top-[11px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Cornea
              </span>
              <Image
                src="/assets/nav/Vector 79.png"
                width={50}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* Meibomian Gland Dysfunction */}
          <div className="absolute left-[-25px] top-[105px] text-white text-sm">
            <div className="flex  gap-2">
              <span className="relative -top-[30px] right-[-20px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Meibomian Gland <br></br>Dysfunction
              </span>
              <Image
                src="/assets/nav/Vector 78.png"
                width={25}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* LASIK */}
          <div className="absolute left-[100px] top-[69px] text-white text-sm">
            <div className="flex  gap-2">
              <span className="relative -top-[19px] right-[-25px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                LASIK
              </span>
              <Image
                src="/assets/nav/Vector 77.png"
                width={20}
                height={10}
                alt=""
              />
            </div>
          </div>

          {/* Blepharitis */}
          <div className="absolute right-[30px] top-[99px] text-white text-sm">
            <div className="flex gap-2 ">
              <Image
                src="/assets/nav/Vector 76.png"
                width={35}
                height={10}
                alt=""
              />
              <span className="relative -top-[5px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                Blepharitis
              </span>
            </div>
          </div>

          {/* Contact Lens */}
          <div className="absolute  right-[40px] top-[249px] text-white text-sm">
            <span className="font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
              Contact
            </span>
            <span className="relative  top-[20px] right-[57px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
              Lens
            </span>
          </div>

          {/* Contact Lens Solutions*/}
          <div className="absolute right-[64px] top-[320px] text-white text-sm">
            <span className="relative  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
              Contact{" "}
            </span>
            <span className="relative  top-[20px] right-[63px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
              Lens
            </span>
            <span className="relative  top-[40px] right-[99px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
              Solutions
            </span>
          </div>

          {/* Dry Eye*/}
          <div className="absolute right-[239px] top-[270px] text-white text-sm">
            <span className="relative  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
              Dry Eye
            </span>
          </div>
        </div>
      </div>

     {/* RIGHT TEXT SECTION */}
<div className="relative  ml-20">

  {/* Paragraph 1 */}
  <div className="border-l-4 border-sky-500 pl-5 mb-8 w-[439px]">
    <p className="font-gotham font-medium text-[16px] leading-[25px] tracking-[0] text-white">
      Our study trials have been in both adult and pediatric population,
      addressing a variety of health conditions and diseases.
    </p>
  </div>

  {/* Paragraph 2 */}
  <div className="border-l-4 border-sky-500 pl-5 w-[439px]">
    <p className="font-gotham font-medium text-[16px] leading-[25px] tracking-[0] text-gray-300">
      We offer a comprehensive portfolio of clinical research in CNS
      system disorders, including migraines and conditions that mimic or
      contribute to migraine symptoms.
    </p>
  </div>

</div>

    </div>
  );
}
