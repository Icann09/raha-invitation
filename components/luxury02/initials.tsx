"use client"

import { Quicksand } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRef } from "react";
import { itemVariants, containerVariants, fadeVariants, containerVariantsNoDelay } from "@/lib/motion";
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
        variants={containerVariantsNoDelay}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        <div className="text-7xl flex gap-5 justify-center items-center">
          <motion.p variants={fadeVariants.left}>
            P
          </motion.p>
          <motion.div 
            variants={fadeVariants.fadeDelayed(3)}
            className="bg-black w-[1px] h-[80px]"
          >
          </motion.div>
          <motion.p variants={fadeVariants.right}>
            A
          </motion.p>
        </div>
        <motion.p variants={fadeVariants.up} className={quicksand.className + " text-center px-6 my-6 text-xs leading-relaxed italic"}>
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </motion.p>
        <motion.p variants={fadeVariants.down} className="text-xl italic">
          Q.S Ar-Rum : 21
        </motion.p>
      </motion.div>
    </section>  
  )
}