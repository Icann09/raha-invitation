"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useEffect, useState } from "react";
import { createGoogleCalendarLink } from "@/lib/utils";


// Create date explicitly for Makassar timezone (UTC+8)
// May 10, 2026, 10:00 AM (local time)


// tanggal pernikahan dengan format: const weddingDate = new Date('2026-05-10T10:00:00+08:00');


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

const weddingDate = new Date('2026-05-10T10:00:00+08:00');
const link = createGoogleCalendarLink({
  title: "Wedding of Alisyah & Dillo",
  description: "We would love to see you at our wedding!",
  location: "SOR Laode Pandu, Raha",
  startDate: weddingDate,
});


export default function WeddingDate() {
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
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-special02B">
        
        {/* Backgrounds */}
        <Image
          src="/images/special02/assets/tribal-bg1.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Top Tribal */}
        <Image 
          src="/images/special02/assets/tribal-4.webp"
          alt="Loves"
          width={500}
          height={500}
          className="absolute top-0"
        />  

        {/* Center Tribal */}
        <Image
          src="/images/special02/assets/tribal-3.webp"
          alt="Tribal"
          width={180}
          height={180}
className="absolute bottom-[120px] left-1/2 -translate-x-1/2 z-10 pointer-events-none animate-fade-down-slow-delay-2"
        />

        {/* Side Flowers */}
        <Image
          src="/images/special02/assets/flower-left.webp"
          alt="Tree 1"
          width={370}
          height={370}
          className="absolute top-1/2 left-[-250px] transform -translate-y-1/2 z-10 pointer-events-none rotate-90 animate-[swingingtree2_25s_ease-in-out_infinite_5s]"
        />
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree 2"
          width={320}
          height={320}
          className="absolute top-[80px] right-[-220px] z-10 pointer-events-none rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_8s]"
        />

        {/* Bottom Flowers */}
        <div className="absolute bottom-[-50px] right-[-110px]  z-10 pointer-events-none animate-fade-up">
          <Image
            src="/images/special02/assets/flower-right.webp"
            alt="Flower"
            width={280}
            height={280}
          />
          <Image
            src="/images/special02/assets/flower-yellow.webp"
            alt="Flower"
            width={80}
            height={80}
            className="absolute top-[50px] left-[50px] rotate-[-60deg] -scale-x-100"
          />
        </div>
        <div className="absolute bottom-[-50px] left-[-110px]  z-10 pointer-events-none animate-fade-up">
          <Image
            src="/images/special02/assets/flower-left.webp"
            alt="Flower"
            width={280}
            height={280}
          />
          <Image
            src="/images/special02/assets/flower-yellow.webp"
            alt="Flower"
            width={80}
            height={80}
            className="absolute top-[50px] right-[50px] rotate-[60deg]"
          />
        </div>

        {/* House */}
        <Image
          src="/images/special02/assets/house3.webp"
          alt="House"
          width={300}
          height={100}
          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2  z-0 pointer-events-none animate-fade-up"
        />

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center text-center text-special02C absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 pointer-events-none">  
        <motion.div
          variants={fadeVariants.up}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }
        }
        >
          <h1 className="text-4xl font-[Breathing2] leading-tight py-3">
            Save the Date
          </h1>
          <div className="grid grid-cols-4 gap-2 text-special02B">
            <div className={plusJakartaSans.className + " w-16 h-16 bg-special02C rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.days}</p>
              <p className="font-bold text-xs">Hari</p>
            </div>
            <div className={plusJakartaSans.className + " w-16 h-16 bg-special02C rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.hours}</p>
              <p className="font-bold text-xs">Jam</p>
            </div>
            <div className={plusJakartaSans.className + " w-16 h-16 bg-special02C rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.minutes}</p>
              <p className="font-bold text-xs">Menit</p>
            </div>
            <div className={plusJakartaSans.className + " w-16 h-16 bg-special02C rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="font-bold text-2xl">{time.seconds}</p>
              <p className="font-bold text-xs">Detik</p>
            </div>
          </div>
          <p className={sourceCodePro.className + " text-special02B text-sm mt-4 rounded-md bg-special02C py-1 px-2 font-bold pointer-events-auto"}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              SIMPAN TANGGAL
            </a>
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

