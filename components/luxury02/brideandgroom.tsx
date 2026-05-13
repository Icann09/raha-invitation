"use client"

import { Quicksand } from "next/font/google";
import { Playfair_Display, Ballet } from "next/font/google";
import ImagesDisplayX from "../ui/imagesDisplayX";
import { useRef } from "react";
import { fadeVariants, containerVariants } from "@/lib/motion";
import { motion } from "framer-motion";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"]
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});
const ballet = Ballet({subsets: ["latin"], weight: ["400"]});


interface Groom {
  namaLengkap: string,
  nama: string,
  initial: string,
  ayah: string,
  ibu: string,
  anakKe: string,
  IG: {
    nama: string,
    link: string
  }
}

interface Bride {
  namaLengkap: string,
  nama: string,
  initial: string,
  ayah: string,
  ibu: string,
  anakKe: string,
  IG: {
    nama: string,
    link: string
  }
}



export default function BrideAndGroom ( {bride, groom, images }: { bride: Bride, groom: Groom, images: string[] } ) {
  const ref = useRef(null);

  return (
    <section ref={ref} className={quicksand.className + " w-full h-auto flex flex-col items-center justify-center bg-gray-100/95 text-center"}>
    
      {/* Title */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="px-6 py-16"
      >
        <div className="text-3xl">
            <motion.p variants={fadeVariants.left} className={playfair.className + " italic mr-16"}>Kedua</motion.p>
            <motion.p variants={fadeVariants.right} className={ballet.className + " ml-16"}>Mempelai</motion.p>
        </div>
        <motion.p variants={fadeVariants.down} className={quicksand.className + " font-bold text-sm py-5"}>Assalamu’alaikum Warahmatullahi Wabarakatuh</motion.p>
        <motion.p variants={fadeVariants.down} className="text-xs">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </motion.p>
      </motion.div>


      {/* Bride */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-auto flex flex-col items-center justify-center text-center"
      >
      <div className="relative w-full h-auto mb-12">
        <motion.div variants={fadeVariants.imageReveal} className="absolute top-4 left-4 w-[70%] h-[500px] bg-[#5e5e5e]/50 z-0">
        </motion.div>    
        {/* Image */}
        <motion.div variants={fadeVariants.imageReveal} className="relative w-[70%] h-[500px] overflow-hidden z-10">
          <ImagesDisplayX images={images.slice(5, 9)}/>
        </motion.div>
        <div className="text-left pl-4 my-12">
          <motion.p variants={fadeVariants.up} className="text-xl font-bold">{bride.namaLengkap}</motion.p>
          <motion.div variants={fadeVariants.down} className="my-3 text-xs">
            <p className="font-bold">Putri {bride.anakKe} dari</p>
            <p>Bapak {bride.ayah} dan Ibu {bride.ibu}</p>
          </motion.div>
          <motion.p variants={fadeVariants.down} className="w-[70%] text-white text-sm bg-[#5e5e5e] p-2 mt-4 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 640 640"
              className="w-4 h-4 text-white"
            >
              <path 
                fill="currentColor" 
                d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
              />
            </svg>
            {bride.IG.nama}
          </motion.p>
        </div>
      </div>
      </motion.div>

      {/* Groom */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full h-auto"
      >
        {/* BACK LAYER */}
        <motion.div variants={fadeVariants.imageReveal} className="absolute top-4 right-4 w-[70%] h-[500px] bg-[#5e5e5e]/50 z-0" />
        {/* IMAGE */}
        <motion.div variants={fadeVariants.imageReveal} className="relative ml-auto w-[70%] h-[500px] overflow-hidden z-10">
          <ImagesDisplayX images={images.slice(0, 4)}/>
        </motion.div>
        {/* TEXT */}
        <div className="text-right pr-4 my-12 flex flex-col items-end">
          <motion.p variants={fadeVariants.up} className="text-xl font-bold">{groom.namaLengkap}</motion.p>
          <motion.div variants={fadeVariants.down} className="my-3 text-xs">
            <p className="font-bold">Putra {groom.anakKe} dari</p>
            <p>Bapak {groom.ayah} dan Ibu {groom.ibu}</p>
          </motion.div>
          <motion.p variants={fadeVariants.down} className="text-white text-sm w-[70%] bg-[#5e5e5e] p-2 flex items-center justify-end gap-2 ">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 640 640"
              className="w-4 h-4 text-white"
            >
              <path 
                fill="currentColor" 
                d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
              />
            </svg>
            {groom.IG.nama}
          </motion.p>
        </div>
      </motion.div>
      
    </section>  
  )
}