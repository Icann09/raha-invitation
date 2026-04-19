"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";




const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

const manIG = "https://www.instagram.com/ika.smandaracup?igsh=MTNuN2oyYXM3NWQ4Nw==";


// pria
// foto
// nama
// nama lengkap 
// nama ayah dan ibu 
// nama IG 


export default function Woman() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/images/special01/background.webp"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-screen bg-gradient-to-t from-white to-white/50 bottom-0 z-10 pointer-events-none" />

            {/* Trees */}
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-260px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45 animate-[swingingtree2_10s_ease-in-out_infinite_5s]"
        />
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-1 right-[-100px] transform translate-x-1/2 z-10 pointer-events-none rotate-[-45deg] animate-swingingtree2"
        />
          <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 1"
          width={350}
          height={350}
          className="absolute bottom-[135px] right-[-50px] transform translate-x-1/2 z-30  rotate-[-90deg] animate-[swingingtree2_10s_ease-in-out_infinite_8s]"
        />

        {/* Castle */}
        <div className="w-[500px] h-[40vh] absolute bottom-[-80px] left-20  z-20 pointer-events-none">
          <Image
            src="/images/special01/assets/castle.webp"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>
        <div className="w-[500px] h-[40vh] absolute bottom-[-140px] left-[-220px]  z-20 pointer-events-none">
          <Image
            src="/images/special01/assets/castle.webp"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>

        
        

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center mt-14 z-40">
          <div>
            <motion.div
              variants={fadeVariants.up}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <div className="w-60 h-72 relative mt-20">
              <Image
                src="/images/special01/gallery1.webp"
                alt="Gallery Top Ornament"
                fill
                className="object-cover shadow-md rounded-t-full "
              />

              {/* ornaments */}
              {/* flowers */}
              <Image
                src="/images/special01/assets/flowers.webp"
                alt="Flowers Ornament"
                width={240}
                height={50}
                className="absolute bottom-[-55px] left-0 z-10 pointer-events-none"
              />
              {/* flower */}
              <Image
                src="/images/special01/assets/flower.webp"
                alt="Flower Ornament"
                width={60}
                height={60}
                className="absolute right-[-30px] bottom-[-30px] z-20 rotate-90"
              />
              <Image
                src="/images/special01/assets/flower.webp"
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
          <h1 className="text-4xl text-colorName font-[Breathing2] leading-tight mt-20">
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
          <a 
            href={manIG}
            target="_blank"
            rel="noopener noreferrer"
            className={plusJakartaSans.className + " font-bold text-xs bg-invitation text-white py-1 px-4 rounded-full"} 
          >
            @dillo_mahendra
          </a>
          </motion.div>
          
          
        </div>
    
      </div>
    </section>
  );
}  
