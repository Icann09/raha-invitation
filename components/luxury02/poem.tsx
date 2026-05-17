"use client";

import { Playfair_Display, Ballet, Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { containerVariants, fadeVariants } from "@/lib/motion";


const ballet = Ballet({ subsets: ["latin"], weight: ["400"] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"],
});


export default function Poem() {
  
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px",
  });

  return (
    <section
      ref={ref}
      className="h-auto flex flex-col items-center justify-center text-gray-700 bg-white"
    >
      {/* Title */}
      <motion.div
        variants={fadeVariants.left}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className="flex items-end w-full max-w-full ml-12 mt-12"
      >
        <div className="w-[30%] flex text-4xl leading-none flex-col text-left ">
          <h1 className={playfair.className + " italic"}>Love</h1>
          <h1 className={ballet.className + " ml-2"}>Story</h1>
        </div>
        <div className="w-[70%] h-[2px] bg-gray-700 mb-1"></div>
      </motion.div>

      {/* POEM */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${quicksand.className} px-8 py-16 text-center leading-loose`}
      >
        <motion.div
          variants={fadeVariants.down}
          className="space-y-6 text-[15px] text-gray-600"
        >
          <p>
            Di antara ramai yang datang dan pergi,
            <br />
            aku menemukan rumah pada matamu sendiri.
            <br />
            Bukan tentang sempurna atau indah semata,
            <br />
            tapi tentang siapa yang tetap tinggal saat dunia berubah arah.
          </p>

          <p>
            Kita mungkin bukan cerita paling mudah,
            <br />
            sering ada jarak, diam, dan salah.
            <br />
            Namun setiap langkah yang pernah terluka,
            <br />
            selalu kembali menuju nama yang sama.
          </p>

          <p>
            Cinta ini tumbuh pelan seperti senja,
            <br />
            tidak gaduh, tapi menenangkan jiwa.
            <br />
            Dan jika suatu hari waktu menua,
            <br />
            aku masih ingin menjadi alasan senyummu sederhana.
          </p>
        </motion.div>
      </motion.div>
      
      {/* Video */}
      <div className="mt-10 flex w-full justify-center">
        <div className="relative aspect-video w-full max-w-md overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/VZLeb_q1x2g?autoplay=1&mute=1&loop=1&playlist=VZLeb_q1x2g"
            title="Love Story Video"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}