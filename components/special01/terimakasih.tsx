"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";



const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });
const plusJakartaSans1 = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });


export default function Woman() {
  return (
    <section  className="min-h-[800px] bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[800px] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/images/special01/cover.webp"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-[50vh] bg-gradient-to-t from-white via-white to-transparent bottom-0 z-10 pointer-events-none" />

        
        {/* Trees */}
        <div className="absolute top-1/2 left-[-260px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45 animate-[swingingtree2_20s_ease-in-out_infinite_5s]">
          <Image
            src="/images/special01/assets/tree2.webp"
            alt="Tree 1"
            width={400}
            height={400}
          />
          <Image
            src="/images/special01/assets/flower.webp"
            alt="flower"
            width={60}
            height={60}
            className="absolute top-[30px] right-[60px]"
          />
        </div>
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-1 right-[-10px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-45deg] animate-[swingingtree2_20s_ease-in-out_infinite_8s]"
        />
        <div className="absolute bottom-[95px] right-[0px] transform translate-x-1/2 z-30  rotate-[-90deg] animate-[swingingtree2_20s_ease-in-out_infinite_8s]">
          <Image
            src="/images/special01/assets/tree2.webp"
            alt="Tree 1"
            width={250}
            height={250}
          />
          <Image
            src="/images/special01/assets/flower.webp"
            alt="flower"
            width={80}
            height={80}
            className="absolute top-0 right-0 rotate-90"
          />
        </div>
      

        

        {/* Content */}
      
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center z-40 mb-18">
        <motion.div
          variants={fadeVariants.down}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-[40px] text-special01E font-[Breathing2] leading-tight pb-2">
            Terima Kasih
          </h1>
          <p className={plusJakartaSans.className + " text-xs text-special01E max-w-[300] font-normal"}  >
            Merupakan suatu kebahagiaan dan
            kehormatan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk
            memberikan doa restu kepada kedua mempelai.
          </p>
          <p className={plusJakartaSans1.className + " text-xs text-special01E max-w-[300] my-4 font-bold"}  >
            Wassalamu’alaikum warahmatullahi wabarakatuh
          </p>
          <p className={plusJakartaSans1.className + " text-sm text-special01E max-w-[320] pt-3"}  >
            Kami yang berbahagia,
          </p>
        </motion.div>
        </div>
    
      </div>
      
    </section>
  );
}  
