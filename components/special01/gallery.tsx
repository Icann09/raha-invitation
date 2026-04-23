"use client"
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useState } from "react";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const images = ["gallery1", "gallery2", "gallery3", "gallery4"];
const initials = "D & A";

// foto/album galery


export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(images[0]);
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

        {/* Trees */}
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-280px] transform -translate-y-1/2 z-10 pointer-events-none rotate-45 animate-[swingingtree2_10s_ease-in-out_infinite_5s]"
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
          className="absolute bottom-[135px] right-[-50px] transform translate-x-1/2 z-10  rotate-[-90deg] animate-[swingingtree2_10s_ease-in-out_infinite_8s]"
        />
        

        {/* Content */}
        <div className="relative pt-14 text-center flex flex-col items-center justify-center animate-fade-up-slow">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage} // 👈 IMPORTANT (triggers re-animation)
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[300px] sm:w-[320px]  h-[360px] sm:h-96"
            >
              <Image
                src={`/images/special01/${selectedImage}.webp`}
                alt="Gallery"
                fill
                className="object-cover rounded-4xl shadow-md"
              />
            </motion.div>
          </AnimatePresence>
                    
        
          {/* Placeholder for gallery images */}
          <motion.div
            variants={fadeVariants.in}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <div className="w-[300px] sm:w-[320px] flex flex-wrap  justify-between mt-6">
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={`/images/special01/${images[0]}.webp`}
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
                onClick={() => setSelectedImage(images[0])}
              />
            </div>
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={`/images/special01/${images[1]}.webp`}

                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
                onClick={() => setSelectedImage(images[1])}
              />
            </div>
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={`/images/special01/${images[2]}.webp`}
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
                onClick={() => setSelectedImage(images[2])}
              />
            </div>
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={`/images/special01/${images[3]}.webp`}
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
                onClick={() => setSelectedImage(images[3])}

              />
            </div>
          </div>
          </motion.div>

          <motion.div
            variants={fadeVariants.down}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-5xl text-special01B font-[Breathing2] leading-tight py-6">
            {initials}
          </h1>
          <p className={plusJakartaSans.className + " max-w-[320px] font-bold text-[10px] text-special01E"}  >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah”
            Dia menciptakan pasangan-pasangan untukmu dari
            jenismu sendiri, agar kamu cenderung dan merasa
            tenteram kepadanya, dan Dia menjadikan di
            antaramu rasa kasih dan sayang.
          </p>
          <p className={plusJakartaSans.className + " font-bold text-xs text-special01E "}  >
            QS. Ar-Rum: 21
          </p>
          </motion.div>
          
        
        </div>
      </div>
    </section>
  );
}
