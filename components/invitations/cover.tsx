

import Image from "next/image";
import { Alice } from "next/font/google";
import { Belleza } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";


const belleza = Belleza({ subsets: ["latin"], weight: "400" });
const alice = Alice({ subsets: ["latin"], weight: "400" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

export default function Cover() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      
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

        {/* Top Trees */}
        <Image
          src="/ornaments/tree1.png"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-100px] left-0 transform -translate-x-1/2 z-10 pointer-events-none"
        />
        <Image
          src="/ornaments/tree1.png"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-100px] right-[-200px] transform -translate-x-1/2 z-10 pointer-events-none"
        />

        {/* Top Center */}
        <Image
          src="/ornaments/cover-top-center.png"
          alt="Top Center Ornament"
          width={400}
          height={200}
          className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 opacity-80 mix-blend-multiply z-5 pointer-events-none"
        />

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
          <div className="relative h-[50vh]">
            <div className=" h-[60%] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none pt-32">
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
              <p className="relative text-[10px] text-invitation italic mb-4 font-semibold z-30">
                
                *Mohon maaf jika ada kesalahan dalam penulisan nama dan gelar
                {/* flower */}
                <Image
                  src="/ornaments/flower.png"
                  alt="Flower Ornament"
                  width={60}
                  height={60}
                  className="absolute right-0 bottom-0"
                />
              </p>
              <button className="px-6 py-2.5 bg-colorName text-white text-sm font-bold rounded-full z-30 hover:bg-colorName/80 transition">
                BUKA UNDANGAN
              </button>

            {/* Bottom Trees */}
              <Image
                src="/ornaments/jungle.png"
                alt="Tree Bottom"
                width={500}
                height={400}
                className="absolute bottom-0 left-1/2 -translate-x-1/2  z-20 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}