"use client";

import Image from "next/image";

export default function PosteriorPie({rotate}) {
  return (
    <div className="relative w-full flex items-center justify-center mt-0 px-6 md:px-12">
      {/* PIE + BACKGROUND EYE WRAPPER */}
      <div className="relative w-[372px] h-[530px] flex-shrink-0 left-9">

        
        {/* BACK-MOST BACKGROUND EYE */}
                <Image
                  src="/assets/nav/BG Eye image.png"
                  alt="BG Eye Layer"
                  fill
                  className="object-contain  z-0"
                />
         <div className="absolute inset-0 z-20 scale-87">   
          <Image
            src="/assets/nav/Pie Chart (1).png"
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
                {/* Intraocular Lens */}
                <div className="absolute left-[-80px] top-[165px] text-white text-sm">
                  <div className="flex  gap-2 ">
                    <span className=" relative -top-[10px]  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                      Intraocular Lens
                    </span>
                    <Image
                      src="/assets/nav/Vector 79 (1).png"
                      width={40}
                      height={10}
                      alt=""
                    />
                  </div>
                </div>
      
                {/* Migs */}
                <div className="absolute left-[80px] top-[110px] text-white text-sm">
                  <div className="flex  gap-2">
                    <span className="relative -top-[18px] -right-[20px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                      Migs
                    </span>
                    <Image
                      src="/assets/nav/Vector 78 (1).png"
                      width={20}
                      height={10}
                      alt=""
                    />
                  </div>
                </div>
      
                {/* Normal */}
                <div className="absolute left-[105px] top-[95px] text-white text-sm">
                  <div className="flex gap-2">
                    <span className="relative -top-[18px] -right-[32px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                      Normal
                    </span>
                    <Image
                      src="/assets/nav/Vector 77 (1).png"
                      width={10}
                      height={10}
                      alt=""
                    />
                  </div>
                </div>
      
                
                {/* Retinal */}
                <div className="absolute  right-[90px] top-[210px] text-white text-sm">
                  <span className="font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                    Retinal
                  </span>
                  
                </div>
      
                {/* Glaucoma*/}
                <div className="absolute right-[130px] top-[340px] text-white text-sm">
                  <span className="relative  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                    Glaucoma
                  </span>
                  
                </div>
      
                {/* Uveitis */}
                <div className="absolute right-[250px] top-[270px] text-white text-sm">
                  <span className="relative  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                    Uveitis
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
