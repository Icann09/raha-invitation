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
        src="/images/special02/foto/foto4.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay  */}
      <div className="absolute w-full h-full bg-special02A/80 transparent bottom-0 z-10 pointer-events-none" />


      {/* Side Flowers */}
      <Image
        src="/images/special02/assets/flower-left.webp"
        alt="Tree 1"
        width={370}
        height={370}
        className="absolute bottom-[80px] left-[-250px] transform z-50 pointer-events-none rotate-90 -scale-x-100"
      />
      <div className="absolute top-[80px] right-[-200px] z-50 pointer-events-none rotate-[-90deg] animate-[swingingtree2_10s_ease-in-out_infinite_8s]">
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree 2"
          width={320}
          height={320}
        />
        <Image
          src="/images/special02/assets/flower-yellow.webp"
          alt="Flower"
          width={80}
          height={80}
          className="absolute top-0 right-0 rotate-[60deg]"
        />
      </div>
      

      {/* Bottom Flowers */}
      <div className="absolute bottom-[-50px] right-[-110px]  z-50 pointer-events-none animate-fade-up">
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Flower"
          width={280}
          height={280}
        />
      </div>
      <div className="absolute bottom-[-50px] left-[-110px]  z-50 pointer-events-none animate-fade-up">
        <Image
          src="/images/special02/assets/flower-left.webp"
          alt="Flower"
          width={280}
          height={280}
        />
        <Image
          src="/images/special02/assets/flower-yellow.webp"
          alt="Flower"
          width={80}
          height={80}
          className="absolute top-[50px] right-[50px] rotate-[60deg]"
        />
      </div>

      {/* House */}
      <Image
        src="/images/special02/assets/house2.webp"
        alt="House"
        width={300}
        height={100}
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2  z-20 pointer-events-none animate-fade-up"
      />

        {/* Content */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center text-special02C mb-30 z-40 ">
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-[25px] sm:text-[30px] font-[Breathing2] leading-tight pb-2">
            Turut Mengundang
          </h1>
          </motion.div>
          
          <p className={plusJakartaSans.className + " text-xs max-w-[300] font-normal pt-4"}  >
            Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami yang turut mengundang mengucapkan terimakasih yang setulus-tulusnya. 
          </p>

          <motion.div
            variants={fadeVariants.down}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          
          <div className="flex w-80 mx-auto bg-special02B/50 rounded-xl p-6 mt-8 text-special02C text-xs flex-col overflow-y-auto text-center gap-3 animate-fade-down">
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
