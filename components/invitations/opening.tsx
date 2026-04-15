

import Image from "next/image";
import { Alice } from "next/font/google";
import { Belleza } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";


const belleza = Belleza({ subsets: ["latin"], weight: "400" });
const alice = Alice({ subsets: ["latin"], weight: "400" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

export default function Opening() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
        
        {/* Backgrounds */}
        <Image
          src="/backgrounds/bg-1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Top Tress */}
        <Image
          src="/ornaments/cover-tree-top.png"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-100px] left-0 transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none"
        />
        <Image
          src="/ornaments/cover-tree-top.png"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-100px] right-[-200px] transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none"
        />

        {/* Moon */}
        <Image
          src="/ornaments/moon.png"
          alt="Moon"
          width={200}
          height={200}
          className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
        />

        {/* Castle */}
        <Image
          src="/ornaments/castle-crop.png"
          alt="Castle"
          width={600}
          height={500}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2  z-10 pointer-events-none"
        />

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <p className={plusJakartaSans.className + " font-bold text-xs text-invitation"}  >
            THE WEDDING OF
          </p>
          
          <h1 className="text-4xl text-colorName font-[Breathing2] leading-tight py-3">
            Dillo & Alisyah
          </h1>
          <p className={plusJakartaSans.className + " font-bold text-xs text-invitation"}  >
            18 . 02 . 2024
          </p>
          <div className="">
            <Image
              src="/icons/arrow.png"
              alt="Arrow Down"
              width={30}
              height={30}
              className="pointer-events-none rounded-full mt-10 animate-bounce text-white mix-blend-multiply"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

