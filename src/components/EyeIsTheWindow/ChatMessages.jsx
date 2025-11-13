"use client";

import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export default function ChatMessages({ visibleMessages }) {
  const botBubbleColor = "bg-[#003f6e]";

  return (
    <>
      {/* USER MESSAGE 1 */}
      {visibleMessages >= 1 && (
        <div className="relative flex items-start gap-4 animate-slideInLeft max-w-[70%] ">
          <div className="absolute top-0 left-6 w-[50px] h-[40px]">
            <Image
              src="/assets/nav/Vector 175.png"
              alt="User Curve"
              fill
              className="object-contain "
            />
          </div>

          <div className="w-8 h-8 rounded-full flex-shrink-0 relative">
            <FaUserCircle className="text-white text-3xl opacity-80" />
          </div>

          <div className="bg-white text-[#0C2039] px-5 py-3 rounded-xl rounded-tl-none shadow-md w-full text-sm leading-5 font-normal relative">
            Does Sage Research exclusively focus on ophthalmology within its
            CRO Services?
          </div>
        </div>
      )}

      {/* BOT MESSAGE 2 */}
      {visibleMessages >= 2 && (
        <div className="relative flex items-start gap-4 animate-slideInRight ml-[100px] max-w-[100%]">
          <div className="absolute -top-0 right-6 w-[50px] h-[40px]">
            <Image
              src="/assets/nav/Vector 175 (1).png"
              alt="Bot Curve"
              fill
              className="object-contain mix-blend-screen"
            />
          </div>

          <div
            className={`${botBubbleColor} text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-md max-w-md w-full text-left text-sm leading-5 font-normal relative`}
          >
            In addition to our recognized expertise in ophthalmology, Sage
            Research offers comprehensive CRO services across a{" "}
            <span className="font-bold">
              broad range of therapeutic areas.
            </span>
          </div>

          <div className="w-8 h-8 rounded-full flex-shrink-0 relative">
            <Image
              src="/assets/nav/Ellipse 153.png"
              alt="Bot Icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* BOT MESSAGE 3 */}
      {visibleMessages >= 3 && (
        <div className="relative flex items-start gap-4 animate-slideInRight ml-[100px] max-w-[100%]">
          <div className="absolute -top-0 right-6 w-[50px] h-[40px]">
            <Image
              src="/assets/nav/Vector 175 (1).png"
              alt="Bot Curve"
              fill
              className="object-contain mix-blend-screen"
            />
          </div>

          <div
            className={`${botBubbleColor} text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-md max-w-md w-full text-left text-sm leading-5 font-normal relative`}
          >
            The eyes are a unique, non-invasive window into systemic health,
            capable of revealing early signs of{" "}
            <span className="font-bold">
              numerous diseases and disorders.
            </span>
          </div>

          <div className="w-8 h-8 rounded-full flex-shrink-0 relative">
            <Image
              src="/assets/nav/Ellipse 153.png"
              alt="Bot Icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* EXPLORE BUTTON */}
      {visibleMessages >= 3 && (
        <div className="flex mt-4 animate-slideInRight ml-auto mr-0 md:mr-11">
          <button className="flex items-center gap-2 bg-[#0C2039] text-sky-400 px-6 py-3 rounded-full hover:bg-sky-900 transition">
            Explore <span className="text-xl">→</span>
          </button>
        </div>
      )}
    </>
  );
}
