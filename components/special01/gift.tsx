"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useState } from "react";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });

const gift = {
  rekening : [
      {
        nama_bank:"bni",
        nama_penerima: "aslan", 
        no_rek: 897892789298, 
      },
      {
        nama_bank:"mandiri",
        nama_penerima: "aslan", 
        no_rek: 897892789298, 
      },
      {
        nama_bank:"bri",
        nama_penerima: "aslan", 
        no_rek: 897892789298, 
      },
    ],
  alamat: "1001 Coffee Shop, Samping POLRES",
  map: "https://maps.app.goo.gl/N3QAhkDJrD4gGGVLA?g_st=iw"
}


// alamat rumah pria dan wanita
// no. rek pria dan wanita (beserta nama bank)

export default function Gift() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section  className="min-h-[800px] bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[800px] overflow-hidden shadow-2xl bg-white flex justify-center items-center">
      
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
        <div className="absolute w-full h-[800px] bg-[#bccdd2]/80 transparent bottom-0 z-10 pointer-events-none" />


        {/* Trees */}
        <div className="absolute top-1/2 left-[-260px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45 animate-[swingingtree2_20s_ease-in-out_infinite_5s]">
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
          className="absolute top-4 right-[-10px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-45deg] animate-[swingingtree2_20s_ease-in-out_infinite_8s]"
        />
        <div className="absolute bottom-[95px] right-[0px] transform translate-x-1/2 z-30  rotate-[-90deg] animate-[swingingtree2_20s_ease-in-out_infinite_8s]">
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
        <div className="relative h-screen flex flex-col items-center justify-center text-center z-40 ">
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-[45px] text-special01E font-[Breathing2] leading-tight">
            Wedding Gift
          </h1>
          </motion.div>
          
          <p className={plusJakartaSans.className + " text-xs text-special01E max-w-[290px] font-normal my-5"}  >
            Merupakan suatu kebahagiaan dan
            kehormatan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk
            memberikan doa restu kepada kedua mempelai.
          </p>

          <motion.div
            variants={fadeVariants.down}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <p 
            className={`${plusJakartaSans.className} ${
              isOpen ? "hidden" : "block"
            } text-sm text-white w-36 my-4 py-2 font-bold bg-special01E rounded-full cursor-pointer`}
            onClick={() => setIsOpen(true)}
          >
            Klik Di Sini
          </p>
          <div className={`${isOpen ? "flex" : "hidden"} w-80 max-w-sm mx-auto bg-special01E/50 rounded-xl p-6 mt-8 text-white text-xs flex-col overflow-y-auto text-center gap-3 animate-fade-down`}>
            <div className="flex flex-col gap-2">
              {gift.rekening.map((rek, index) => (
                <div 
                  key={index}
                  className="bg-white h-20 text-special01E flex flex-col rounded-md py-2 items-center justify-center">
                <Image 
                  src={`/icons/${rek.nama_bank}.webp`}
                  width={40}
                  height={15}
                  alt="Logo Bank"
                />
                <p>{rek.nama_penerima}</p>
                <p
                  className="font-bold cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(rek.no_rek.toString());
                    setCopiedIndex(index);

                    setTimeout(() => setCopiedIndex(null), 1500);
                  }}
                >
                  {copiedIndex === index ? "Copied!" : rek.no_rek}
                </p>
              </div>
              ))}
            </div>
            <div>
              <p className="text-sm">Kirim Kado Ke Alamat</p>
              <p className="mb-4">Anda Juga Dapat Mengirimkan Kado Melalui Alamat Berikut</p>
              <a 
                href={gift.map}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-special01E text-sm rounded-md"              
              >
                {gift.alamat}
              </a>
            </div>
          </div>
          </motion.div>
          
        </div>
    
      </div>
    </section>
  );
}  
