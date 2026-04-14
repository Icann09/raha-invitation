"use client";

import Image from "next/image";

export default function InvitationCover() {
  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center">
      
      {/* Mobile Frame */}
      <div className="relative w-full max-w-md h-[100vh] rounded-3xl overflow-hidden shadow-2xl bg-white">
        
        {/* Background Image */}
        <Image
          src="/photos/cover.png"
          alt="Wedding Cover"
          fill
          className="object-cover"
          priority
        />
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
        <div className="relative z-10 flex flex-col justify-between h-full text-center px-6 pb-8">
          
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
          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-gray-600 mb-2">
              THE WEDDING OF
            </p>
            
            <h1 className="text-3xl font-serif text-[#8B6B5C] leading-tight mt-10">
              Dillo & Alisyah
            </h1>

            <p className="mt-4 text-sm text-gray-700">
              Kepada Yth. <br />
              Bapak/Ibu/Saudara/i
            </p>
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center gap-3">
            
            <p className="text-[10px] text-gray-500 italic">
              *Mohon maaf jika ada kesalahan dalam penulisan nama dan gelar
            </p>

            <button className="px-6 py-2.5 bg-[#A67C63] text-white text-sm rounded-full shadow-md hover:scale-105 transition">
              BUKA UNDANGAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}