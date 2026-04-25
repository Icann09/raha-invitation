"use client"
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useState } from "react";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const images = ["foto1", "foto2", "foto3", "foto4"];
const initials = "D & A";

// foto/album galery


export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(images[0]);
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

        {/* Flowers */}
        <Image
          src="/images/special02/assets/flower-left.webp"
          alt="Tree 1"
          width={370}
          height={370}
          className="absolute top-1/2 left-[-250px] transform -translate-y-1/2 z-20 pointer-events-none rotate-90 animate-[swingingtree2_25s_ease-in-out_infinite_5s]"
        />
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree 2"
          width={320}
          height={320}
          className="absolute top-[80px] right-[-200px] z-20 pointer-events-none rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_6s]"
        />
          <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree 1"
          width={320}
          height={320}
          className="absolute bottom-[90px] right-[-60px] transform translate-x-1/2 z-10  rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_8s]"
        />
        

        {/* Content */}
        <div className="relative pt-14 text-center flex flex-col items-center justify-center animate-fade-up-slow z-10 text-special02C">
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
                src={`/images/special02/foto/${selectedImage}.webp`}
                alt="Gallery"
                fill
                className="object-cover rounded-4xl shadow-md"
              />
              <Image
                src="/images/special02/assets/flower-yellow.webp"
                alt="Flower"
                width={100}
                height={100}
                className="absolute top-[-50px] left-[-25px]"
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
                src={`/images/special02/foto/${images[0]}.webp`}
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
                onClick={() => setSelectedImage(images[0])}
              />
              
            </div>
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={`/images/special02/foto/${images[1]}.webp`}

                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
                onClick={() => setSelectedImage(images[1])}
              />
            </div>
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={`/images/special02/foto/${images[2]}.webp`}
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
                onClick={() => setSelectedImage(images[2])}
              />
            </div>
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={`/images/special02/foto/${images[3]}.webp`}
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
          <h1 className="text-5xl font-[Breathing2] leading-tight py-6">
            {initials}
          </h1>
          <p className={plusJakartaSans.className + " max-w-[320px] font-bold text-[10px]"}  >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah”
            Dia menciptakan pasangan-pasangan untukmu dari
            jenismu sendiri, agar kamu cenderung dan merasa
            tenteram kepadanya, dan Dia menjadikan di
            antaramu rasa kasih dan sayang.
          </p>
          <p className={plusJakartaSans.className + " font-bold text-xs "}  >
            QS. Ar-Rum: 21
          </p>
          </motion.div>
          
        
        </div>
      </div>
    </section>
  );
}
