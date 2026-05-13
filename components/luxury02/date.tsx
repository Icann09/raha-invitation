"use client"

import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Calendar1 } from "lucide-react";
import { useEffect, useState } from "react";
import ImagesDisplayY from "../ui/imagesDisplayY";
import { useRef } from "react";
import { containerVariants, fadeVariants } from "@/lib/motion";
import { motion } from "framer-motion";


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


export default function Page({ date, images }: { date: Date, images: string[] }) {
  
  const ref = useRef(null);
  const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const diff = date.getTime() - now.getTime();
    
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
    <section ref={ref} className="relative h-[400px] w-full flex items-center justify-center flex-col text-white">
      <ImagesDisplayY images={images}/>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70 pointer-events-none"></div>
      
      {/* Content */}
      <div className="z-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className={quicksand.className}
      >
        <div className="absolute inset-0 z-20 flex items-center justify-center flex-col gap-6">
          <motion.p variants={fadeVariants.up} className={playfair.className + " text-3xl font-bold tracking-widest font-bold"}>
            SAVE THE DATE
          </motion.p>
          <motion.div variants={fadeVariants.rotate} className="grid grid-cols-2 gap-2">
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
          </motion.div>
          <motion.p variants={fadeVariants.down} className="border-2 border-white py-1 px-2 flex items-center gap-2">
            <Calendar1 size={16}/>
            Simpan Tanggal
          </motion.p>
        </div>
      </motion.div>
      </div>

    </section>
  )
}