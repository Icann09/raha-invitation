

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
        {/* Bottom Trees */}
        <Image
          src="/ornaments/cover-tree-top.png"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute bottom-[-100px] left-0 transform -translate-x-1/2 z-20 pointer-events-none rotate-180"
        />
        <Image
          src="/ornaments/cover-tree-top.png"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute bottom-[-100px] right-[-200px] transform -translate-x-1/2 z-20 pointer-events-none rotate-180"
        />

        {/* Tree 2 */}
        <Image
          src="/ornaments/trees-left.png"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 left-0 z-20 pointer-events-none"
        />
        <Image
          src="/ornaments/trees-right.png"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 right-0 z-20 pointer-events-none"
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
          <h1 className="text-4xl text-colorName font-[Breathing2] leading-tight py-3">
            Save the Date
          </h1>
          <div className="grid grid-cols-4 gap-2">
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">18</p>
              <p className="text-white font-bold text-xs">Hari</p>
            </div>
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">18</p>
              <p className="text-white font-bold text-xs">Jam</p>
            </div>
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">18</p>
              <p className="text-white font-bold text-xs">Menit</p>
            </div>
            <div className={plusJakartaSans.className + " w-20 h-20 bg-invitation rounded-md text-center flex flex-col items-center justify-center"}>
              <p className="text-white font-bold text-2xl">18</p>
              <p className="text-white font-bold text-xs">Detik</p>
            </div>
          </div>
          <p className={sourceCodePro.className + " text-white text-xs mt-4 rounded-full bg-colorName py-1 px-2 font-bold"}>
            SIMPAN TANGGAL
          </p>
        </div>
      </div>
    </section>
  );
}

