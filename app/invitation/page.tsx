"use client";

import Image from "next/image";
import { Alice } from "next/font/google";
import { Belleza } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

const belleza = Belleza({ subsets: ["latin"], weight: "400" });
const alice = Alice({ subsets: ["latin"], weight: "400" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

export default function InvitationCover() {
  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center">
      
      {/* Mobile Frame */}
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
        
        {/* Background Image */}
        <Image
          src="/photos/cover.png"
          alt="Wedding Cover"
          fill
          className="object-cover"
          priority
        />

        {/* Bird Animation */}
        <Image
          src="/gifts/bird-no-bg.gif"
          alt="Ornament"
          width={60}
          height={60}
          className="absolute top-40 left-0 animate-fly-across mix-blend-multiply z-20 pointer-events-none"
        />

      

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" /> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full text-center">
          
          {/* Logo */}
          <div>
            <Image
              src="/photos/assets/logo.png"
              alt="Raha Invitation Logo"
              width={200}

              height={200}
              className="mx-auto mb-6"
            />
          </div>

          {/* Middle */}
          <div className="relative h-[60vh] flex flex-col justify-between">
            <div className=" h-[60%] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none pt-30">
              <p className={plusJakartaSans.className + " font-bold text-xs text-invitation"}  >
                THE WEDDING OF
              </p>
              
              <h1 className="text-4xl text-colorName font-[Breathing2] leading-tight py-3">
                Dillo & Alisyah
              </h1>

              <p className= {plusJakartaSans.className + " text-xs text-invitation font-bold"}>
                Kepada Yth. <br />
                Bapak/Ibu/Saudara/i
              </p>
            </div>
            <div className="flex flex-col bg-white h-[40%] justify-end items-center pb-16">
              <p className="text-[10px] text-invitation italic mb-4 font-semibold">
                *Mohon maaf jika ada kesalahan dalam penulisan nama dan gelar
              </p>

              <button className="px-6 py-2.5 bg-[#A67C63] text-white text-sm font-bold rounded-full shadow-md hover:scale-105 transition">
                BUKA UNDANGAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}