"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function MobileAnteriorPie({ variant }) {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setRotate(variant === "anterior"); // rotate when switching TO posterior
  }, [variant]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-0 px-4">
          
          {/* PIE + EYE + LABELS  */}
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
                src="/assets/nav/Pie Chart (2).png"
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
                          alt="Anterior Pie Background Eye"
                          fill
                         className={`object-contain z-10 ${rotate ? "spin-once-anterior" : ""}`}
              
              
                        />
            </div>

                  
        <div className="absolute inset-0 z-40 scale-[0.70] origin-center">
            <div className="absolute left-[-165px] top-[150px] text-white text-sm">
                        <div className="flex  gap-0 ">
                          <span className=" relative top-[5px] right-[-64px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                            Cornea 
                          </span>
                          <span className=" relative top-[25px] right-[-10px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">Stem Cells</span>
                          <Image
                            src="/assets/nav/Vector 81.png"
                            width={50}
                            height={10}
                            alt=""
                          />
                        </div>
                      </div>
            <div className="absolute left-[-160px] top-[127px] text-white ">

                   <div className="flex ">
                     <span className="relative -top-[30px] right-[-60px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                       Corneal
                     </span><span className="relative -top-[10px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">Transplant</span>
                     <Image
                       src="/assets/nav/Vector 80.png"
                       width={50}
                       height={10}
                       alt=""
                     />
                   </div>
                 </div>
       
                 {/* Cornea */}
                 <div className="absolute left-[-60px] top-[80px] text-white text-sm">
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
                 <div className="absolute left-[-70px] top-[40px] text-white text-sm">
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
                 <div className="absolute left-[60px] top-[0px] text-white text-sm">
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
                 <div className="absolute right-[-7px] top-[25px] text-white text-sm">
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
                 <div className="absolute  right-[0px] top-[190px] text-white ">
                   <span className="font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                     Contact
                   </span>
                   <span className="relative  top-[20px] right-[57px] font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                     Lens
                   </span>
                 </div>
       
                 {/* Contact Lens Solutions*/}
                 <div className="absolute right-[30px] top-[270px] text-white ">
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
                 <div className="absolute right-[220px] top-[220px] text-white ">
                   <span className="relative  font-gotham font-medium text-[15px] leading-[20px] tracking-normal align-middle text-white">
                     Dry Eye
                   </span>
                 </div>
               </div>
            </div>
       

       {/* RIGHT TEXT SECTION */}
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
            We offer a comprehensive portfolio of clinical research in CNS system
            disorders, including migraines and conditions that mimic or contribute
            to migraine symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}
