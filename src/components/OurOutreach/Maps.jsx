// components/Outreach/Maps.jsx
"use client";

const mapImages = {
  "United States": "/assets/nav/united.png",
  Canada: "/assets/nav/canada.png",
  Mexico: "/assets/nav/mexico.png",
  Brazil: "/assets/nav/brazil.png",
  France: "/assets/nav/france.png",
  Germany: "/assets/nav/germany.png",
  Armenia: "/assets/nav/armenia.png",
  Philippines: "/assets/nav/philippines.png",
  Australia: "/assets/nav/australia.png",
};

export default function Maps({ country }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center -translate-x-60 translate-y-15">
      <img
        key={country}
        src={mapImages[country]}
        alt={country + " map"}
        className="w-[100%] h-auto object-contain absolute"
        style={{
          transition: "none",
        }}
      />
    </div>
  );
}
