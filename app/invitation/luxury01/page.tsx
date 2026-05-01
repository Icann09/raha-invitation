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
import Cover from "@/components/luxury01/cover";
import { useRef } from "react";
import { Disc3 } from "lucide-react";

const images = [
  "/images/luxury01/foto1.webp",
  "/images/luxury01/foto2.webp",
  "/images/luxury01/foto4.webp",
  "/images/luxury01/foto5.webp",
  "/images/luxury01/foto6.webp",
];

export default function Page() {

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
const [isPlaying, setIsPlaying] = useState(false);
const [isSpinning, setIsSpinning] = useState(false);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  if (open && audioRef.current) {
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsSpinning(true);
      })
      .catch(() => {
        // autoplay blocked by browser
        setIsPlaying(false);
        setIsSpinning(false);
      });
  }
}, [open]);

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (audioRef.current.paused) {
    audioRef.current.play();
    setIsPlaying(true);
    setIsSpinning(true);
  } else {
    audioRef.current.pause();
    setIsPlaying(false);
    setIsSpinning(false);
  }
};

  return (
    <div className="flex justify-center overflow-x-hidden">

      {/* AUDIO */}
      <audio ref={audioRef} loop src="/music/music.mp3" />

    

      {/* BACKGROUND */}
      <div className="fixed inset-0 flex justify-center -z-10">
        <div className="w-full max-w-md h-[100dvh] relative overflow-hidden">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[4000ms]
              ${i === index ? "opacity-100 scale-[1.02]" : "opacity-0"}
            `}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative w-full max-w-md h-[100dvh] overflow-y-auto overflow-x-hidden">

        {/* MUSIC BUTTON */}
        {open && (
          <div className="fixed bottom-4 right-4 z-50">
            <Disc3
              size={40}
              onClick={toggleMusic}
              className={`text-black ${isSpinning ? "animate-spin" : ""}`}
            />
          </div>
        )}

        {/* COVER */}
        {!open && <Cover onClick={handleOpen} />}

        {/* MAIN CONTENT */}
        {open && (
          <>
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
          </>
        )}

      </div>
    </div>
  );
}