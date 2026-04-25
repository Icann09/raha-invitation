"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, number } from "framer-motion";
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
      <div className="absolute w-full h-screen bg-special02A/80 transparent bottom-0 z-10 pointer-events-none" />


      {/* Side Flowers */}
      <Image
        src="/images/special02/assets/flower-left.webp"
        alt="Tree 1"
        width={370}
        height={370}
        className="absolute bottom-[80px] left-[-250px] transform z-50 pointer-events-none rotate-90 -scale-x-100"
      />
      <div className="absolute top-[80px] right-[-200px] z-50 pointer-events-none rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_8s]">
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree 2"
          width={300}
          height={300}
        />
        <Image
          src="/images/special02/assets/flower-yellow.webp"
          alt="Flower"
          width={60}
          height={60}
          className="absolute top-0 right-[20px] rotate-[60deg]"
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
        <div className="relative h-screen flex flex-col items-center justify-center text-center text-special02C mb-30 z-50 ">
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-[40px] font-[Breathing2] leading-tight pb-2">
            Wedding Gift
          </h1>
          </motion.div>
          
          <p className={plusJakartaSans.className + " text-xs  max-w-[290] font-normal pt-4"}  >
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
            } text-sm text-special02B w-44 my-4 py-2 font-bold bg-special02C rounded-full cursor-pointer transform transition-all duration-300 ease-out hover:bg-special02C/80 hover:scale-105`}
            onClick={() => setIsOpen(true)}
          >
            Klik Di Sini
          </p>
          <div className={`${isOpen ? "flex" : "hidden"} w-80 max-w-[290px] mx-auto bg-special02C/50 rounded-xl p-6 mt-8 text-white text-xs flex-col overflow-y-auto text-center gap-3 animate-fade-down`}>
            <div className="flex flex-col gap-2">
              {gift.rekening.map((rek, index) => (
                <div 
                  key={index}
                  className="bg-white h-20 text-special02C flex flex-col rounded-md py-2 items-center justify-center">
                <Image 
                  src={`/icons/${rek.nama_bank}.webp`}
                  width={40}
                  height={15}
                  alt="Logo Bank"
                />
                <p className="text-special02B">{rek.nama_penerima}</p>
                <p
                  className="font-bold cursor-pointer text-special02B"
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
            <div className="text-special02B">
              <p className="text-sm">Kirim Kado Ke Alamat</p>
              <p className="mb-4">Anda Juga Dapat Mengirimkan Kado Melalui Alamat Berikut</p>
              <a 
                href={gift.map}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-special02B text-sm text-special02C rounded-md"              
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
