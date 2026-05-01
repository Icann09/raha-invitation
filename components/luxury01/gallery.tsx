"use client";

import { Playfair_Display, Ballet, Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";



const ballet = Ballet({subsets: ["latin"], weight: ["400"]});
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});

const images = [
  "/images/luxury01/foto1.webp",
  "/images/luxury01/foto2.webp",
  "/images/luxury01/foto4.webp",
  "/images/luxury01/foto5.webp",
  "/images/luxury01/foto6.webp",
  "/images/luxury01/foto4.webp",
  "/images/luxury01/foto1.webp",
  "/images/luxury01/foto6.webp",
  "/images/luxury01/foto5.webp",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  // AUTO SLIDE
  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ⬅️ slow & elegant

    return () => clearInterval(interval);
  }, [isAuto]);

  const next = () => {
    setIsAuto(false);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIsAuto(false);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="h-auto flex flex-col items-center justify-center bg-white/80 text-gray-700 py-16">

      {/* TITLE  */}
      <div className="flex items-end w-full max-w-full mr-12">
        <div className="w-[55%] h-[2px] bg-gray-700 mb-1"></div>
        <div className="w-[45%] flex text-4xl leading-none flex-col text-right ">
          <h1 className={playfair.className + " italic"}>Gallery</h1>
          <h1 className={ballet.className + " ml-2 text-3xl"}>Our Moment</h1>
        </div>
      </div>

        {/* MAIN IMAGE */}
      <div className="px-5 relative w-full mt-7">
        <div className="relative w-full h-[420px] overflow-hidden bg-gray-100">
          {/* LAYERED IMAGES (for smooth fade) */}
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            >
              <Image
                src={img}
                alt="preview"
                fill
                className="object-cover"
              />
            </div>
          ))}
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl z-20 hover:scale-110 transition"
          >
            ‹
          </button>
          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl z-20 hover:scale-110 transition"
          >
            ›
          </button>
          {/* OVERLAY (biar lebih elegan) */}
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-2 mt-4 overflow-x-auto max-w-full px-2">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setIsAuto(false);
                setIndex(i);
              }}
              className={`relative w-16 h-16 flex-shrink-0 cursor-pointer overflow-hidden transition-all
                ${i === index ? "ring-2 ring-gray-800 scale-105" : "opacity-60"}
              `}
            >
              <Image
                src={img}
                alt={`thumb-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      


      

    </section>
  );
}