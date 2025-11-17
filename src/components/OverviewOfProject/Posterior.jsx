"use client";

import Image from "next/image";

export default function Posterior() {
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-12 max-w-[1500px] mx-auto px-6 md:px-12 mt-10">

      
      <div
        className="
          relative 
          w-[900px] h-[350px] min-w-[900px] min-h-[350px]
         -translate-x-74 sm:-translate-x-50 md:-translate-x-10 lg:-translate-x-24

          
          scale-[0.35]        
          sm:scale-[0.45]
          md:scale-[0.50]
          lg:scale-[0.75]
          xl:scale-80
          
          origin-center  
          
          flex-shrink-0 mx-auto
        "
      >

        {/* MACHINE */}
        <Image
          src="/assets/nav/machine 1.png"
          alt="machine"
          width={200}
          height={200}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 object-contain"
        />

        {/* RAYS */}
        <Image
          src="/assets/nav/Group 108 (1).png"
          alt="rays"
          width={900}
          height={400}
          className="absolute left-[120px] top-1/2 -translate-y-1/2 z-30 object-contain"
        />

        {/* EYE */}
        <Image
          src="/assets/nav/eye 1.png"
          alt="eye"
          width={300}
          height={300}
          className="absolute right-[-17%] top-1/2 -translate-y-1/2 z-20 object-contain"
        />

      </div>

    </div>
  );
}
