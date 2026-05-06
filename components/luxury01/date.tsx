"use client"

import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Calendar1 } from "lucide-react";
import { useEffect, useState } from "react";
import ImagesDisplayY from "./imagesDisplayY";
import { useRef } from "react";
import { itemVariants, containerVariants, fadeVariants } from "@/lib/motion";
import { motion, useInView } from "framer-motion";



const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"]
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "600"],
});

const weddingDate = new Date('2026-05-18T10:00:00+08:00');
const coupleImages = [
  "/images/luxury01/foto5.webp",
  "/images/luxury01/foto6.webp",
  "/images/luxury01/foto4.webp",
  "/images/luxury01/foto1.webp",
  "/images/luxury01/foto2.webp",
];


export default function Page() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px",
  });

  const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const diff = weddingDate.getTime() - now.getTime();
    
          if (diff <= 0) {
            clearInterval(interval);
            return;
          }
    
          setTime({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
          });
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <section ref={ref} className="h-[400px] w-full flex items-center justify-center flex-col text-white">
      
      <motion.div
        variants={fadeVariants.zoom}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
      <div className={quicksand.className + " relative w-full h-full overflow-hidden"}>
      

        {/* SLIDER */}
        <ImagesDisplayY images={coupleImages} />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center flex-col gap-6">
          <p className={playfair.className + " text-3xl font-bold tracking-widest font-bold"}>
            SAVE THE DATE
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className={plusJakartaSans.className + " w-16 h-16 text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.days}</p>
              <p className="font-bold text-xs">Hari</p>
            </div>
            <div className={plusJakartaSans.className + " w-16 h-16 text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.hours}</p>
              <p className="font-bold text-xs">Jam</p>
            </div>
            <div className={plusJakartaSans.className + " w-16 h-16 text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.minutes}</p>
              <p className="font-bold text-xs">Menit</p>
            </div>
            <div className={plusJakartaSans.className + " w-16 h-16 text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.seconds}</p>
              <p className="font-bold text-xs">Detik</p>
            </div>
          </div>
          <p className="border-2 border-white py-1 px-2 flex items-center gap-2">
            <Calendar1 size={16}/>
            Simpan Tanggal
          </p>
        </div>

      </div>
      </motion.div>

    </section>
  )
}