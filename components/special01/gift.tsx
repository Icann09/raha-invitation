"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });

export default function Gift() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/images/special01/cover.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-[50vh] bg-gradient-to-t from-white  to-transparent bottom-0 z-20 pointer-events-none" />
        <div className="absolute w-full h-screen bg-[#bccdd2]/80 transparent bottom-0 z-10 pointer-events-none" />


        {/* Trees */}
        <Image
          src="/images/special01/assets/tree2.png"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-2/3 left-[-270px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45"
        />
        <Image
          src="/images/special01/assets/flower.png"
          alt="flower"
          width={60}
          height={60}
          className="absolute top-2/3 left-[-40px] transform translate-x-1/2 z-40 pointer-events-none rotate-[45deg]"
        />

        <Image
          src="/images/special01/assets/tree2.png"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-0 right-[-20px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-40deg]"
        />

        <Image
          src="/images/special01/assets/tree2.png"
          alt="Tree 1"
          width={250}
          height={250}
          className="absolute bottom-14 right-[10px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-90deg]"
        />
        <Image
          src="/images/special01/assets/flower.png"
          alt="flower"
          width={80}
          height={80}
          className="absolute bottom-44 right-[50px] transform translate-x-1/2 z-40 pointer-events-none rotate-[0deg]"
        />

        {/* Content */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center mb-30 z-40 ">
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-[45px] text-invitation font-[Breathing2] leading-tight pb-2">
            Wedding Gift
          </h1>
          </motion.div>
          
          <p className={plusJakartaSans.className + " text-xs text-invitation max-w-[300] font-normal pt-4"}  >
            Merupakan suatu kebahagiaan dan
            kehormatan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk
            memberikan doa restu kepada kedua mempelai.
          </p>

          <motion.div
            variants={fadeVariants.down}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <p className={plusJakartaSans.className + " text-sm text-white w-36 my-4 py-2 font-bold bg-invitation rounded-full"}  >
            Klik Di Sini
          </p>
          </motion.div>
          
        </div>
    
      </div>
    </section>
  );
}  
