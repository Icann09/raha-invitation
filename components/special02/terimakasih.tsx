"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";



const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });
const plusJakartaSans1 = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });


export default function Woman() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/images/special02/foto/foto4.webp"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-[60vh] bg-gradient-to-t from-white via-white to-transparent bottom-0 z-10 pointer-events-none" />

        
        {/* Tribals */}
        <div className="absolute top-1/2 left-[-125px] transform -translate-y-1/2 z-30 pointer-events-none -scale-x-100 rotate-270 animate-[swingingtree2_25s_ease-in-out_infinite_2s]">
          <Image
            src="/images/special02/assets/tribal-1.webp"
            alt="Tree 1"
            width={260}
            height={260}
          />
        </div>
        <div className="absolute bottom-[50px] right-2 transform translate-x-1/2 z-30  rotate-[10deg] animate-[swingingtree2_25s_ease-in-out_infinite_3s]">
          <Image
            src="/images/special02/assets/tribal-1.webp"
            alt="Tree 1"
            width={230}
            height={230}
          />
        </div>
      

        

        {/* Content */}
      
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center z-40 mb-30 text-special02B">
        <motion.div
          variants={fadeVariants.down}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-[40px] font-[Breathing2] leading-tight pb-2">
            Terima Kasih
          </h1>
          <p className={plusJakartaSans.className + " text-xs max-w-[290] font-normal"}  >
            Merupakan suatu kebahagiaan dan
            kehormatan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk
            memberikan doa restu kepada kedua mempelai.
          </p>
          <p className={plusJakartaSans1.className + " text-xs max-w-[300] my-4 font-bold"}  >
            Wassalamu’alaikum warahmatullahi wabarakatuh
          </p>
          <p className={plusJakartaSans1.className + " text-xs max-w-[320] pt-3"}  >
            Kami yang berbahagia,
          </p>
        </motion.div>
        </div>
    
      </div>
      
    </section>
  );
}  
