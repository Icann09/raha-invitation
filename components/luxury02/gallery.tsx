"use client";

import {
  Playfair_Display,
  Ballet,
} from "next/font/google";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { fadeVariants } from "@/lib/motion";

const ballet = Ballet({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});

const images = [
  "/images/luxury01/foto1.webp",
  "/images/luxury01/foto2.webp",
  "/images/luxury01/foto4.webp",
  "/images/luxury01/foto5.webp",
  "/images/luxury01/foto1.webp",
  "/images/luxury01/foto2.webp",
];

export default function Gallery() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px",
  });

  return (
    <section
      ref={ref}
      className="flex h-auto flex-col items-center justify-center bg-white/95 py-16 text-gray-700"
    >
      {/* TITLE */}
      <div className="mr-12 flex w-full max-w-full items-end">
        <div className="mb-1 h-[2px] w-[55%] bg-gray-700" />

        <div className="flex w-[45%] flex-col text-right leading-none">
          <h1 className={`${playfair.className} text-4xl italic`}>
            Gallery
          </h1>

          <h1 className={`${ballet.className} ml-2 text-3xl`}>
            Our Moment
          </h1>
        </div>
      </div>

      {/* IMAGE GRID */}
      <motion.div
        variants={fadeVariants.imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        className="mt-10 grid w-full grid-cols-2 gap-2 px-4"
      >
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className="relative h-[250px] overflow-hidden"
          >
            <Image
              src={image}
              fill
              alt={`Gallery image ${index + 1}`}
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
      <motion.div 
        variants={fadeVariants.up}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        className="relative w-full h-[270px]"
      >
        <Image
          src={images[1]}
          fill
          alt="Foto 1"
          className="object-cover transition duration-700 hover:scale-105 px-4 py-[10px]"
        />
      </motion.div>
      <motion.div 
        variants={fadeVariants.imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid w-full grid-cols-2 gap-2 px-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[250px] overflow-hidden"
          >
            <Image
              src={image}
              fill
              alt={`Gallery image ${index + 1}`}
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
      <motion.div 
        variants={fadeVariants.up}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full h-[270px]"
      >
        <Image
          src={images[2]}
          fill
          alt="Foto 1"
          className="object-cover transition duration-700 hover:scale-105 px-4 py-[10px]"
        />
      </motion.div>
      <motion.div 
        variants={fadeVariants.imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid w-full grid-cols-2 gap-2 px-4"
      >
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative h-[250px] overflow-hidden"
          >
            <Image
              src={image}
              fill
              alt={`Gallery image ${index + 1}`}
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}