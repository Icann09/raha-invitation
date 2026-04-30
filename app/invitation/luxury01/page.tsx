"use client";

import { useEffect, useState } from "react";
import Opening from "@/components/luxury01/opening";
import Initials from "@/components/luxury01/initials";
import BrideAndGroom from "@/components/luxury01/brideandgroom";
import Date from "@/components/luxury01/date";
import WeddingEvent from "@/components/luxury01/weddingEvent";
import LoveStory from "@/components/luxury01/loveStory";
import Gallery from "@/components/luxury01/gallery";
import Gift from "@/components/luxury01/gift";
import RSVP from "@/components/luxury01/rsvp";
import Terimakaish from "@/components/luxury01/terimakasih";

const images = [
  "/images/luxury01/foto1.webp",
  "/images/luxury01/foto2.webp",
  "/images/luxury01/foto4.webp",
  "/images/luxury01/foto5.webp",
  "/images/luxury01/foto6.webp",
];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // preload
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">

      {/* BACKGROUND (FIXED & CENTERED) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[100dvh] -z-10 overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transform-gpu will-change-[opacity,transform] transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === index
                ? "opacity-100 scale-[1.02]"
                : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="min-w-[320px] w-full max-w-md h-[100dvh] overflow-y-auto">
        <Opening />
        <Initials />
        <BrideAndGroom />
        <Date />
        <WeddingEvent />
        <LoveStory />
        <Gallery />
        <Gift />
        <RSVP />
        <Terimakaish />
      </div>

    </div>
  );
}