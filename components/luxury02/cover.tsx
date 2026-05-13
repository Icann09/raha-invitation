"use client"

import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";



const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"]
});


export default function Cover({onClick, groom, bride, images}  : {onClick: () => void, groom: string, bride: string, images: string[] }) {

  const params = useSearchParams();
  const guest = params.get("to")?.replace(/\+/g, " ");

  return (
    <section className="min-h-[100dvh] flex items-center justify-center">

      <div className={quicksand.className + " relative w-full max-w-md h-[100dvh] overflow-hidden shadow-2xl "}>

        {/* Background Image  */}
        <div className="relative w-full h-full">
          <Image 
            src={images[0]}
            alt="Foto Prewedding"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/70  pointer-events-none"></div>

        
        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center px-6 text-center text-white absolute bottom-0 left-1/2 mb-8 transform -translate-x-1/2  z-20 animate-fade-in">
          <p className={plusJakartaSans.className + " font-bold text-sm tracking-[0.20em] animate-fade-down"}  >
            THE WEDDING OF
          </p>
          
          <h1 className={playfair.className + " text-[40px] leading-tight py-3 mb-2 animate-fade-down"}>
            {groom} & {bride}
          </h1>
          <div className="tracking-[0.15em] py-3 text-sm animate-fade-in">
            <p>Kepada Yth.</p>
            <p>{guest || "Tamu Undangan"}</p>
          </div>
          <div className="animate-fade-up items-center flex flex-col">
            <p className="text-xs">*Mohon maaf jika ada kesalahan dalam penulisan nama / gelar.</p>
            <button
              onClick={onClick}
              className="flex gap-2 items-center border-2 px-3 py-2 mt-8 mb-3 text-xs hover:bg-white hover:text-black transition animate-infinite-scale animate-fade-up"
            >
              <Mail size={16} />
              Buka Undangan
            </button>
          </div>
          
        </div>
      </div>

    </section>
  );
}

