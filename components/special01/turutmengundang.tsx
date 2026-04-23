"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, number } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useState } from "react";
import { li } from "framer-motion/client";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });

const keluargaPria = [
  "Arga Pratama",
  "Dimas Saputra",
  "Rizky Maulana",
  "Fajar Nugroho",
  "Andi Setiawan",
  "Bima Aditya",
  "Yoga Prasetyo",
  "Ilham Ramadhan",
  "Reza Pahlevi",
  "Wahyu Hidayat"
  ];

const keluargaWanita = [
  "Arga Pratama",
  "Dimas Saputra",
  "Rizky Maulana",
  "Fajar Nugroho",
  "Andi Setiawan",
  "Bima Aditya",
  "Yoga Prasetyo",
  "Ilham Ramadhan",
  "Reza Pahlevi",
  "Wahyu Hidayat"
  ];




export default function TurutMengundang() {

  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/images/special01/cover.webp"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-[50vh] bg-gradient-to-t from-white  to-transparent bottom-0 z-20 pointer-events-none" />
        <div className="absolute w-full h-screen bg-[#bccdd2]/80 transparent bottom-0 z-10 pointer-events-none" />


        {/* Trees */}
        <div className="absolute top-1/2 left-[-260px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45 animate-[swingingtree2_10s_ease-in-out_infinite_5s]">
          <Image
            src="/images/special01/assets/tree2.webp"
            alt="Tree 1"
            width={400}
            height={400}
          />
          <Image
            src="/images/special01/assets/flower.webp"
            alt="flower"
            width={60}
            height={60}
            className="absolute top-[30px] right-[60px]"
          />
        </div>
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-1 right-[-100px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-45deg] animate-swingingtree2"
        />
        <div className="absolute bottom-[135px] right-[0px] transform translate-x-1/2 z-30  rotate-[-90deg] animate-[swingingtree2_10s_ease-in-out_infinite_8s]">
          <Image
            src="/images/special01/assets/tree2.webp"
            alt="Tree 1"
            width={250}
            height={250}
          />
          <Image
            src="/images/special01/assets/flower.webp"
            alt="flower"
            width={80}
            height={80}
            className="absolute top-0 right-0 rotate-90"
          />
        </div>

        {/* Content */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center mb-30 z-40 ">
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-[25px] sm:text-[30px]  text-special01E font-[Breathing2] leading-tight pb-2">
            Turut Mengundang
          </h1>
          </motion.div>
          
          <p className={plusJakartaSans.className + " text-xs text-special01E max-w-[300] font-normal pt-4"}  >
            Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami yang turut mengundang mengucapkan terimakasih yang setulus-tulusnya. 
          </p>

          <motion.div
            variants={fadeVariants.down}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          
          <div className="flex w-80 mx-auto bg-special01E/50 rounded-xl p-6 mt-8 text-white text-xs flex-col overflow-y-auto text-center gap-3 animate-fade-down">
            <div>
              <p className="font-bold text-sm">Keluarga besar mempelai wanita</p>
              <div className="flex items-center justify-center flex-col">
                {keluargaPria.map((nama, index) => (
                  <li 
                    key={index}
                    className="text-left"
                  >
                    {nama}
                  </li>
                ))}
              </div>
              <p className="font-bold text-sm mt-2">Keluarga besar mempelai Pria</p>
              <div className="flex items-center justify-center flex-col">
                {keluargaWanita.map((nama, index) => (
                  <li 
                    key={index}
                    className="text-left"
                  >
                    {nama}
                  </li>
                ))}
              </div>

            </div>

          </div>
            

          </motion.div>
          
        </div>
    
      </div>
    </section>
  );
}  
