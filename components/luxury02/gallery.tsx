"use client";

import { Playfair_Display, Ballet } from "next/font/google";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

export default function Gallery({
  images1,
  images2,
  images3,
  image1,
  image2,
}: {
  images1: string[];
  images2: string[];
  images3: string[];
  image1: string;
  image2: string;
}) {
  const ref = useRef(null);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <>
      <section
        ref={ref}
        className="flex h-auto flex-col items-center justify-center bg-white/95 py-16 text-gray-700"
      >
        {/* TITLE */}
        <div className="mr-12 flex w-full max-w-full items-end">
          <div className="mb-1 h-[2px] w-[55%] bg-gray-700" />

          <div className="flex w-[45%] flex-col text-right leading-none">
            <h1
              className={`${playfair.className} text-4xl italic`}
            >
              Gallery
            </h1>

            <h1
              className={`${ballet.className} ml-2 text-3xl`}
            >
              Our Moment
            </h1>
          </div>
        </div>

        {/* IMAGE GRID 1 */}
        <motion.div
          variants={fadeVariants.imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="mt-10 grid w-full grid-cols-2 gap-2 px-4"
        >
          {images1.map((image, index) => (
            <div
              key={`${image}-${index}`}
              onClick={() =>
                setSelectedImage(image)
              }
              className="relative h-[250px] cursor-pointer overflow-hidden"
            >
              <Image
                src={image}
                fill
                alt={`Gallery image ${
                  index + 1
                }`}
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>

        {/* IMAGE 1 */}
        <motion.div
          variants={fadeVariants.up}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="relative h-[270px] w-full cursor-pointer"
          onClick={() =>
            setSelectedImage(image1)
          }
        >
          <Image
            src={image1}
            fill
            alt="Foto 1"
            className="object-cover px-4 py-[10px] transition duration-700 hover:scale-105"
          />
        </motion.div>

        {/* IMAGE GRID 2 */}
        <motion.div
          variants={fadeVariants.imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="grid w-full grid-cols-2 gap-2 px-4"
        >
          {images2.map((image, index) => (
            <div
              key={`${image}-${index}`}
              onClick={() =>
                setSelectedImage(image)
              }
              className="relative h-[250px] cursor-pointer overflow-hidden"
            >
              <Image
                src={image}
                fill
                alt={`Gallery image ${
                  index + 1
                }`}
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>

        {/* IMAGE 2 */}
        <motion.div
          variants={fadeVariants.up}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="relative h-[270px] w-full cursor-pointer"
          onClick={() =>
            setSelectedImage(image2)
          }
        >
          <Image
            src={image2}
            fill
            alt="Foto 2"
            className="object-cover px-4 py-[10px] transition duration-700 hover:scale-105"
          />
        </motion.div>

        {/* IMAGE GRID 3 */}
        <motion.div
          variants={fadeVariants.imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="grid w-full grid-cols-2 gap-2 px-4"
        >
          {images3.map((image, index) => (
            <div
              key={`${image}-${index}`}
              onClick={() =>
                setSelectedImage(image)
              }
              className="relative h-[250px] cursor-pointer overflow-hidden"
            >
              <Image
                src={image}
                fill
                alt={`Gallery image ${
                  index + 1
                }`}
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ========================= */}
      {/* IMAGE PREVIEW MODAL */}
      {/* ========================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedImage(null)
            }
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() =>
                setSelectedImage(null)
              }
              className="absolute right-4 top-4 z-50 text-white"
            >
              <X size={32} />
            </button>

            {/* IMAGE */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative h-[85vh] w-full max-w-4xl"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <Image
                src={selectedImage}
                fill
                alt="Preview Image"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}