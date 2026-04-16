

import Image from "next/image";
import { Alice } from "next/font/google";
import { Belleza } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { Check, X } from "lucide-react";


const belleza = Belleza({ subsets: ["latin"], weight: "400" });
const alice = Alice({ subsets: ["latin"], weight: "400" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });
const plusJakartaSans1 = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });


const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

export default function Gift() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/photos/cover.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-[50vh] bg-gradient-to-t from-white  to-transparent bottom-0 z-20 pointer-events-none" />
        <div className="absolute w-full h-screen bg-[#bccdd2]/80 transparent bottom-0 z-10 pointer-events-none" />

        {/* <div className="absolute w-full h-screen bg-white transparent bottom-0 z-10 pointer-events-none" /> */}





        {/* Trees */}
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-2/3 left-[-270px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45"
        />
        <Image
          src="/ornaments/flower.png"
          alt="flower"
          width={60}
          height={60}
          className="absolute top-2/3 left-0 transform translate-x-1/2 z-40 pointer-events-none rotate-[45deg]"
        />

        <Image
          src="/ornaments/tree2.png"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-0 right-[-20px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-40deg]"
        />

        <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={250}
          height={250}
          className="absolute bottom-14 right-[10px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-90deg]"
        />
        <Image
          src="/ornaments/flower.png"
          alt="flower"
          width={80}
          height={80}
          className="absolute bottom-44 right-[50px] transform translate-x-1/2 z-40 pointer-events-none rotate-[0deg]"
        />

        

        {/* Content */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center mb-30 z-30 ">
          <h1 className="text-[45px] text-invitation font-[Breathing2] leading-tight pb-2">
            Wishes
          </h1>
          <p className={plusJakartaSans.className + " text-xs text-invitation max-w-[300] font-normal"}  >
            Berikan doa dan ucapan terbaik untuk kami
          </p>
          <form action="" className={plusJakartaSans.className + " my-4 items-center justify-center flex flex-col"}  >
            <input 
              type="text" 
              name="nama"
              placeholder="Nama"
              required
              className="w-80 bg-invitation text-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-invitation focus:border-transparent"

            />
            <textarea
              className="w-80 h-24 mt-4 p-2 text-sm  bg-invitation text-white focus:outline-none focus:ring-2 focus:ring-invitation focus:border-transparent resize-none"
              placeholder="Tulis ucapanmu di sini..."
            />
            <p className="text-invitation text-sm mt-4 mb-2">Konfirmasi Kehadiran</p>
            <div className="w-80 flex justify-between">
              <p className="bg-invitation w-36 text-white p-1 text-sm">
                <Check className="inline-block mr-1" />
                Hadir
              </p>
              <p className="bg-invitation w-36 text-white p-1 text-sm">
                <X className="inline-block mr-1" />
                Tidak
              </p>
            </div>
            <p className={plusJakartaSans.className + " text-sm text-white w-36 mt-6 py-2 font-bold bg-invitation rounded-full"}  >
              Kirim
            </p>
          </form>
        
        </div>
    
      </div>
    </section>
  );
}  
