// components/Header.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Eye is the Window",
    "For Sites",
    "Company",
  ];

  return (
    // 🌐 Navbar
    <nav className="relative z-20 w-full py-4">
      <div className="flex items-center justify-between px-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/nav/Ellipse 153.png"
            alt="SAGE Logo"
            className="w-15 h-15 rounded-full object-cover"
          />
          <div className="flex flex-col leading-none">
            <h1 className="text-[28px] md:text-[34px] font-black leading-none">
              SAGE
            </h1>
            <span className="text-[10px] md:text-[12px] uppercase text-white/70">
              RESEARCH CONSULTING
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-5">
          <div className="flex  items-center space-x-2 bg-gradient-to-r from-[#1A2A3A] to-[#0C1A2E] rounded-xl px-6 py-1 shadow-lg shadow-black/20">
            {navItems.map((item) => (
              <div key={item} className="relative group px-3 py-2">
                <a
                  href="#"
                  className={`text-sm font-medium transition-colors ${
                    item === "Home"
                      ? "text-sky-400 font-semibold"
                      : "text-white/80 hover:text-sky-400"
                  }`}
                >
                  {item}
                </a>

                {/* ✨ White underline indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 h-[3px] w-[28px]  transition-all duration-300
        ${
          item === "Home"
            ? "bg-sky-400 opacity-100"
            : "bg-sky-400 opacity-0 group-hover:opacity-100"
        }`}
                ></span>
              </div>
            ))}
          </div>

          <button className="bg-[#2FA8F9] px-5 py-2 rounded-md font-semibold hover:bg-[#1992e6] transition">
            Become an Investigator
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition">
            Become Study Participant
          </button>
          <button className="bg-[#0B2C4A] p-2 rounded-full hover:bg-[#153a5b] transition">
            <FaSearch className="text-sky-400 text-xl" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-4">
          {/* 🔍 Search icon on left */}
          <button className="bg-[#0B2C4A] p-2 rounded-full hover:bg-[#153a5b] transition">
            <FaSearch className="text-white text-sm" />
          </button>

          {/* Hamburger menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? (
              <FaTimes className="text-white text-xl" />
            ) : (
              <FaBars className="text-white text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0E2038]/95 flex flex-col space-y-4 p-6 text-center z-30">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="text-white/90 text-lg hover:text-sky-400 transition"
            >
              {item}
            </a>
          ))}

          {/* Buttons inside mobile menu */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <button className="w-[85%] bg-[#2FA8F9] px-5 py-2 rounded-md font-semibold hover:bg-[#1992e6] transition">
              Become an Investigator
            </button>
            <button className="w-[85%] bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Become Study Participant
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
