"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

const akad = {
  hari: "Sabtu",
  tanggal: "23 Desember 2023",
  waktu: "09.00 WIB - Selesai",
  tempat: "Grand Ballroom Majesty",
  alamat: "Jl. Gatot Subroto No. 25, Jakarta Selatan",
  map: "https://maps.app.goo.gl/Li11FsmvkLJPg3EQ8?g_st=iw"
}

// hari, tanggal, waktu dan alamat dengan format berikut: 
// Sabtu
// 23 Desember 2023
// 09.00 WIB - Selesa
// Grand Ballroom Majesty
// Jl. Gatot Subroto No. 25, Jakarta Selatan
// link maps :  https://maps.app.goo.gl/Li11FsmvkLJPg3EQ8?g_st=iw"

export default function Woman() {
  return (
    <section  className="min-h-[700px] flex items-center justify-center bg-neutral-200">
      <div className="relative w-full max-w-md h-[700px] overflow-hidden shadow-2xl bg-white">
      
        {/* Trees */}
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-260px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45 animate-[swingingtree2_20s_ease-in-out_infinite_5s]"
        />
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-1 right-[-20px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-45deg] animate-[swingingtree2_20s_ease-in-out_infinite_8s]"
        />
          <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 1"
          width={350}
          height={350}
          className="absolute bottom-[35px] right-[-40px] transform translate-x-1/2 z-30  rotate-[-90deg] animate-[swingingtree2_20s_ease-in-out_infinite_8s]"
        />

        {/* Castle */}
        <div className="w-[500px] h-[50vh] absolute bottom-[-60px] left-20  z-10 pointer-events-none">
          <Image
            src="/images/special01/assets/castle.webp"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>
        <div className="w-[500px] h-[60vh] absolute bottom-[-120px] left-[-220px]  z-10 pointer-events-none">
          <Image
            src="/images/special01/assets/castle.webp"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>
        

        {/* Content */}
        <div className="z-20">
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <div className="w-72 h-[500px] mx-auto relative flex flex-col items-center justify-center text-center mt-20 z-10">
          
            <Image
              src="/images/special01/cover.webp"
              alt="Gallery Top Ornament"
              fill
              className="object-cover rounded-tr-[60px] shadow-md"
            />
            <div className="absolute bottom-0 w-full h-[55%] bg-special01E text-white flex flex-col items-center justify-center pr-14">
              <h1 className="font-[Breathing2] text-5xl leading-tight ">
                {akad.hari}
              </h1>
              <div className={plusJakartaSans.className + " font-bold"}>
                <p className="text-sm mt-1">
                  {akad.tanggal}
                </p>
                <p className="text-[10px]">
                  <Clock className="inline-block mr-1" size={20} />
                  {akad.waktu}
                </p>
              </div>
              <div className="my-4">
                <p className="text-sm font-bold">
                  {akad.tempat}
                </p>
                <p className="text-xs">
                  {akad.alamat}
                </p>
              </div>
              <p className="bg-white rounded-full mx-auto text-special01E text-xs font-bold w-max px-4 py-1">
                <a 
                  href={akad.map}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="inline-block mr-1" size={20}/>
                  Google Maps
                </a>
              </p>
            </div>
            <div className="absolute bottom-0 w-[55px] h-[55%] right-0 bg-special01B">
              <div className="text-white h-full text-3xl rotate-90 flex items-center justify-center ">
                <p className="mr-2">
                  Akad
                </p>
                <p>
                  Nikah
                </p>
              </div>
            </div>

            {/* Flower */}
            <Image
              src="/images/special01/assets/flower.webp"
              alt="Flower Ornament"
              width={90}
              height={90}
              className="absolute bottom-[-30px] right-[-30px] z-20 rotate-0"
            />

            {/* flowers */}
            <Image
              src="/images/special01/assets/flowers.webp"
              alt="Flowers Ornament"
              width={200}
              height={50}
              className="absolute top-[-40px] left-[45px] z-10 pointer-events-none"
            />
            <Image
              src="/images/special01/assets/flower.webp"
              alt="Flower Ornament"
              width={70}
              height={70}
              className="absolute right-[15px] top-[-30px] z-20 rotate-90"
            />
            <Image
              src="/images/special01/assets/flower.webp"
              alt="Flower Ornament"
              width={70}
              height={70}
              className="absolute left-[15px] top-[-30px] z-20 rotate-[-45deg]"
            />
            
          </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}  
