"use client"

import AkadNikah from "@/components/special01/akadNikah";
import Cover from "@/components/special01/cover";
import Date from "@/components/special01/date";
import Gallery from "@/components/special01/gallery";
import Gift from "@/components/special01/gift";
import Man from "@/components/special01/man";
import Opening from "@/components/special01/opening";
import Resepsi from "@/components/special01/resepsi";
import Terimakasih from "@/components/special01/terimakasih";
import Wishes from "@/components/special01/wishes";
import Woman from "@/components/special01/woman";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Disc3 } from "lucide-react";




const bride = {
  name: "Putri Alisyah Cahya Ayu",
  nameShort: "Alisyah",
  mother: "Cahyani",
  father: "Ali",
  ig: "@alishyah_cahya12",
  photo: "foto bride",
  bank_account: "nomor rekening",
}

const groom = {
  name: "Raydillo Mahendra",
  nameShort: "Dillo",
  mother: "Nila",
  father: "Hendra",
  ig: "@mahendra12",
  photo: "foto groom",
  bank_account: "nomor rekening",
}

const wedding = {
  date: "tanggal pernikahan",
  gallery: "foto pernikahan",

  akad_date: "tanggal akad",
  akad_waktu: "waktu akad",
  akad_place: "tempat akad",
  akad_addres: "alamat akad",
  akad_map: "lokasi map akad",

  resepsi_date: "tanggal resepsi",
  resepsi_waktu: "waktu resepsi",
  resepsi_place: "tempat resepsi",
  resepsi_addres: "alamat resepsi",
  resepsi_map: "lokasi map resepsi",
}


export default function Page() {
  const [open, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isSpining, setIsSpinning] = useState(false);
  
    // Auto play music when invitation is opened
    useEffect(() => {
  if (open && audioRef.current) {
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsSpinning(true);
      })
      .catch(() => {
        // autoplay blocked → user must click
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
    <div className="w-full flex flex-col h-[100dvh] overflow-y-hidden">
      {/* Music */}
        <div 
          className={`absolute bottom-3 right-3 z-50 animate-fade-right rounded-full bg-white/50 ${
  open ? "block" : "hidden"
}`}
        >
          <Disc3 
            size={50}
            className={`text-invitation ${
              isSpining ? "animate-spin" : ""
            }`}

            onClick={toggleMusic}
          />
        </div>
      
        {/* Hidden audio element */}
        <audio ref={audioRef} loop src="/music/music.mp3" />

      {/* Backgrounds */}
      <Image
        src="/images/special01/background.webp"
        alt="Background"
        fill
        className="object-cover fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
        priority
      />

      <div className="fixed inset-0 pointer-events-none z-10 hidden md:block overflow-hidden">
        {/* Ornaments */}
        <div className="hidden md:block">
          <Image
            src="/images/special01/assets/tree1.webp"
            alt="Tree"
            width={400}
            height={400}
            className="absolute top-[-200px] left-0 -translate-x-1/2 z-10"
          />
          <Image
            src="/images/special01/assets/tree1.webp"
            alt="Tree Top"
            width={400}
            height={400}
            className="absolute top-[-200px] right-[-380px] -translate-x-1/2 z-10"
          />
          <Image
            src="/images/special01/assets/tree1.webp"
            alt="Tree Bottom"
            width={400}
            height={400}
            className="absolute bottom-[-220px] left-0 -translate-x-1/2 z-20 rotate-180"
          />
          <Image
            src="/images/special01/assets/tree1.webp"
            alt="Tree Bottom"
            width={400}
            height={400}
            className="absolute bottom-[-220px] right-[-380px] -translate-x-1/2 z-20 rotate-180"
          />
        </div>
      </div>

    

      <AnimatePresence mode="wait">
      {!open && (
        <Suspense fallback={<div>Loading...</div>}>
          <Cover key="cover" onClick={handleClick} />
        </Suspense>
      )}
    </AnimatePresence>

    {open && (
      <div className="overflow-y-auto">
        <Opening />
        <Gallery />
        <Woman />
        <Man />
        <Date />
        <AkadNikah />
        <Resepsi />
        <Terimakasih />
        <Gift />
        <Wishes />
      </div>
    )}
    </div>
  );
}