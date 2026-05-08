"use client"


import { Plus_Jakarta_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
import { ChevronsDown } from "lucide-react";
import { useRef } from "react";
import { itemVariants, containerVariants, fadeVariants } from "@/lib/motion";
import { motion, useInView } from "framer-motion";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const groom = "Dillo";
const bride = "Alisyah";
const date = "18 . 05 . 2026";

const weddingDate = new Date('2026-05-18T10:00:00+08:00');

export default function Opening() {
  
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
    <section ref={ref} className="min-h-[100dvh] flex items-center justify-center">


      {/* Content */}
      <div className="relative w-full max-w-md h-[100dvh] overflow-hidden shadow-2xl ">
        <div className="w-full flex flex-col items-center justify-center text-center text-white absolute bottom-0 left-1/2 mb-8 transform -translate-x-1/2  z-20 pointer-events-none animate-fade-in">
          <p className={plusJakartaSans.className + " font-bold text-sm tracking-[0.20em]"}  >
            THE WEDDING OF
          </p>
          <motion.h1
            variants={fadeVariants.fadeDelayed(2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              delay: 0.5,
            }}
            className={playfair.className + " text-[40px] leading-tight py-3"}
          >
            {groom} & {bride}
          </motion.h1>
          <p className={plusJakartaSans.className + " font-bold text-xs mb-4"}  >
            {date}
          </p>

          <motion.div
            variants={fadeVariants.down}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-4 gap-2"
          >
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

          <div className="mt-2">
            <ChevronsDown className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>
      </div>


    </section>
  );
}

