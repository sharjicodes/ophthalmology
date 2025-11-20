"use client";

import Image from "next/image";

export default function MobileAnterior() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-6 mb-4 px-4 sm:hidden">
      <div
        className="
          relative 
          w-[300px] 
          h-[260px]
          scale-[0.90]
          flex-shrink-0
        "
      >
        {/* MACHINE */}
        <Image
          src="/assets/nav/machine 1.png"
          alt="machine"
          width={100}
          height={200}
          className="absolute right-60 top-1/2 -translate-y-1/2 z-30 object-contain"
        />

        {/* RAYS */}
        <Image
          src="/assets/nav/Frame 13720.png"
          alt="rays"
          width={400}
          height={200}
          className="absolute left-0 top-16 object-contain z-20 opacity-90"
        />

        {/* EYE */}
        <Image
          src="/assets/nav/eye 1.png"
          alt="eye"
          width={140}
          height={180}
          className="absolute left-64 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 object-contain"
        />
      </div>
    </div>
  );
}
