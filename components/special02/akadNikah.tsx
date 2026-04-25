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


export default function Woman() {
  return (
    <section  className="min-h-screen flex items-center justify-center bg-neutral-200">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
      {/* Backgrounds */}
      <Image
        src="/images/special02/assets/tribal-bg2.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Side Flowers */}
      <Image
        src="/images/special02/assets/flower-left.webp"
        alt="Tree 1"
        width={370}
        height={370}
        className="absolute top-1/2 left-[-260px] transform -translate-y-1/2 z-50 pointer-events-none rotate-90 animate-[swingingtree2_25s_ease-in-out_infinite_5s]"
      />
      <Image
        src="/images/special02/assets/flower-right.webp"
        alt="Tree 2"
        width={320}
        height={320}
        className="absolute top-[80px] right-[-210px] z-50 pointer-events-none rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_8s]"
      />

      {/* Bottom Flowers */}
      <div className="absolute bottom-[-50px] right-[-110px]  z-50 pointer-events-none animate-fade-up">
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Flower"
          width={280}
          height={280}
        />
        <Image
          src="/images/special02/assets/flower-yellow.webp"
          alt="Flower"
          width={80}
          height={80}
          className="absolute top-[50px] left-[50px] rotate-[-60deg] -scale-x-100"
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
        src="/images/special02/assets/house1.webp"
        alt="House"
        width={300}
        height={100}
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2  z-0 pointer-events-none animate-fade-up"
      />
        

        {/* Content */}
        <div className="z-20 text-special02C animate-fade-down-slow">
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <div className="w-[300px] h-[500px] mx-auto relative flex flex-col items-center justify-center text-center mt-24 z-10">
          
            <Image
              src="/images/special02/foto/foto4.webp"
              alt="Gallery Top Ornament"
              fill
              className="object-cover rounded-tr-[60px] shadow-md"
            />
            <div className="absolute bottom-0 w-full h-[55%] bg-special02G flex flex-col items-center justify-center pr-14">
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
              <p className="bg-special02A rounded-full mx-auto text-special02C text-xs font-bold w-max px-4 py-1">
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
            <div className="absolute bottom-0 w-[55px] h-[55%] right-0 bg-special02A">
              <div className="h-full text-3xl rotate-90 flex items-center justify-center ">
                <p className="mr-2">
                  Akad
                </p>
                <p>
                  Nikah
                </p>
              </div>
            </div>
            {/* flowers */}
            <Image
              src="/images/special02/assets/tribal-2.webp"
              alt="Flowers Ornament"
              width={150}
              height={50}
              className="absolute top-[-66px] left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            />         
          </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}  
