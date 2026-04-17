"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";




const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });


export default function Woman() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/backgrounds/bg-1.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-screen bg-gradient-to-t from-white to-white/90 bottom-0 z-10 pointer-events-none" />

        {/* Trees */}
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-270px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45"
        />
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-0 right-[-20px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-40deg]"
        />
          <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={250}
          height={250}
          className="absolute bottom-14 right-[10px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-90deg]"
        />

        {/* Castle */}
        <div className="w-[500px] h-[40vh] absolute bottom-[-80px] left-20  z-20 pointer-events-none">
          <Image
            src="/ornaments/castle.png"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>
        <div className="w-[500px] h-[40vh] absolute bottom-[-140px] left-[-220px]  z-20 pointer-events-none">
          <Image
            src="/ornaments/castle.png"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>

        
        

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center mt-14 z-30">
          <div>
            <motion.div
              variants={fadeVariants.up}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <div className="w-60 h-72 relative mt-20">
              <Image
                src="/photos/gallery1.png"
                alt="Gallery Top Ornament"
                fill
                className="object-cover shadow-md rounded-t-full "
              />

              {/* ornaments */}
              {/* flowers */}
              <Image
                src="/ornaments/flowers.png"
                alt="Flowers Ornament"
                width={240}
                height={50}
                className="absolute bottom-[-55px] left-0 z-10 pointer-events-none"
              />
              {/* flower */}
              <Image
                src="/ornaments/flower.png"
                alt="Flower Ornament"
                width={60}
                height={60}
                className="absolute right-[-30px] bottom-[-30px] z-20 rotate-90"
              />
              <Image
                src="/ornaments/flower.png"
                alt="Flower Ornament"
                width={60}
                height={60}
                className="absolute left-[-30px] bottom-[-30px] z-20 rotate-[-45deg]"
              />
            </div> 
            </motion.div>
          </div>

          <motion.div
            variants={fadeVariants.in}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-5xl text-colorName font-[Breathing2] leading-tight mt-20">
            Dillo
          </h1>
          <div className="py-4">
            <p className="text-colorName  leading-tight font-semibold">
              Raydillo Mahendra
            </p>
            <p className="text-colorName leading-tight text-xs">
              Putra Pertama dari Bapak Hendra dan Ibu Nila
            </p>
          </div>
          <p className={plusJakartaSans.className + " font-bold text-xs bg-invitation text-white py-1 px-4 rounded-full"}  >
            @dillo_mahendra
          </p>
          </motion.div>
          
          
        </div>
    
      </div>
    </section>
  );
}  
