"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useEffect, useState } from "react";
import { createGoogleCalendarLink } from "@/lib/utils";


// Create date explicitly for Makassar timezone (UTC+8)
const weddingDate = new Date('2026-05-10T10:00:00+08:00');
// May 10, 2026, 10:00 AM (local time)


// tanggal pernikahan dengan format: const weddingDate = new Date('2026-05-10T10:00:00+08:00');


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

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
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
        
        {/* Backgrounds */}
        <Image
          src="/images/special01/background.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Top Tress */}
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-100px] left-0 transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none animate-swinging"
        />
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-100px] right-[-200px] transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none animate-swinging"
        />
        {/* Bottom Trees */}
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute bottom-[-100px] left-0 transform -translate-x-1/2 z-20 pointer-events-none rotate-180"
        />
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute bottom-[-100px] right-[-200px] transform -translate-x-1/2 z-20 pointer-events-none rotate-180"
        />

        {/* Tree 2 */}
        <Image
          src="/images/special01/assets/trees-left.webp"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 left-0 z-20 pointer-events-none"
        />
        <Image
          src="/images/special01/assets/trees-right.webp"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 right-0 z-20 pointer-events-none"
        />

        {/* Castle */}
        <Image
          src="/images/special01/assets/castle-crop.webp"
          alt="Castle"
          width={600}
          height={500}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2  z-10 pointer-events-none"
        />

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">  
        <motion.div
          variants={fadeVariants.up}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }
        }
        >
          <h1 className="text-4xl text-colorName font-[Breathing2] leading-tight py-3">
            Save the Date
          </h1>
          <div className="grid grid-cols-4 gap-2">
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">{time.days}</p>
              <p className="text-white font-bold text-xs">Hari</p>
            </div>
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">{time.hours}</p>
              <p className="text-white font-bold text-xs">Jam</p>
            </div>
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">{time.minutes}</p>
              <p className="text-white font-bold text-xs">Menit</p>
            </div>
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">{time.seconds}</p>
              <p className="text-white font-bold text-xs">Detik</p>
            </div>
          </div>
          <p className={sourceCodePro.className + " text-white text-xs mt-4 rounded-full bg-invitation py-2 px-2 font-bold pointer-events-auto"}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Google Calendar
            </a>
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

