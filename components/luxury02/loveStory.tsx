"use client";

import { Playfair_Display, Ballet, Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { itemVariants, containerVariants, fadeVariants } from "@/lib/motion";

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

const stories = [
  {
    date: "25 AGUSTUS 2023",
    story: "Berawal dari tempat pekerjaan Cianjur-2023, kami mengenal satu sama lain dan belum ada benih cinta kala itu, hanya sebatas teman kerja.",
  },
  {
    date: "03 JUNI 2024",
    story: "Setelah cukup mengenal satu sama lain, satu tahun kurang lebih nya kami menjalin hubungan. 03 Juni 2024 Akhirnya kita memutuskan untuk melanjutkan ke Hubungan yang lebih serius mempertemukan kedua keluarga.",
  },
  {
    date: "29 DESEMBER 2025",
    story: "Sampai tanggal ini kami melaksanakan akad terlebih dahulu dan akhirnya kami mengubah status hingga menjadi pasangan suami istri. Semoga allah swt. Memberikan keberkahan pernikahan ini.",
  },
];

export default function LoveStory() {
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

      {/* Stories */}
      <motion.div
        className={quicksand.className + " flex flex-col text-center my-16 gap-20 px-6"}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stories.map((story, i) => (
          <motion.div key={i} variants={fadeVariants.down}>
            <h3 className={plusJakartaSans.className + " font-bold mb-4"}>
              {story.date}
            </h3>
            <p className="text-sm">{story.story}</p>
          </motion.div>
        ))}

        
      </motion.div>
      {/* Video */}
        <div className="w-full flex justify-center mt-10">
          <div className="relative w-full max-w-md aspect-video overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/VZLeb_q1x2g"
              title="Love Story Video"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
    </section>
  );
}