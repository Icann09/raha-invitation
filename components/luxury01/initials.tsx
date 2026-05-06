"use client"

import { Quicksand } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRef } from "react";
import { itemVariants, containerVariants, fadeVariants } from "@/lib/motion";
import { motion, useInView } from "framer-motion";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500"],
});



export default function Initials() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px",
  });

  return (
    <section ref={ref} className="h-auto flex flex-col items-center justify-center py-20 bg-gray-100">
      <motion.div
        variants={fadeVariants.zoom}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
      <div className="text-7xl flex gap-5 justify-center items-center">
        <p>D</p>
        <div className="bg-black w-[1px] h-[80px]"></div>
        <p>A</p>
      </div>
      <p className={quicksand.className + " text-center px-6 my-6 text-xs leading-relaxed italic"}>
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
      </p>
      <p className="text-xl italic">Q.S Ar-Rum : 21</p>
      </motion.div>
    </section>  
  )
}