

import Image from "next/image";
import { Alice } from "next/font/google";
import { Belleza } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";


const belleza = Belleza({ subsets: ["latin"], weight: "400" });
const alice = Alice({ subsets: ["latin"], weight: "400" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

export default function Gallery() {
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

        {/* Trees */}
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-280px] transform -translate-y-1/2 z-10 pointer-events-none rotate-45"
        />
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-8 right-[20px] transform translate-x-1/2 z-10 pointer-events-none rotate-[-45deg]"
        />
          <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={250}
          height={250}
          className="absolute bottom-24 right-[20px] transform translate-x-1/2 z-10 pointer-events-none rotate-[-90deg]"
        />

        {/* Content */}
        <div className="relative pt-14 text-center flex flex-col items-center justify-center">
          <div className="relative w-[340px] h-96">
            <Image
              src="/photos/cover.png"
              alt="Gallery Top Ornament"
              fill
              className="object-cover rounded-4xl shadow-md"
            />
          </div>
        
          {/* Placeholder for gallery images */}
          <div className="w-[340px] flex flex-wrap  justify-between mt-6">
            <div className="w-[80px] h-[80px] relative">
              <Image
                src="/photos/gallery1.png"
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
            <div className="w-[80px] h-[80px] relative">
              <Image
                src="/photos/gallery1.png"
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
            <div className="w-[80px] h-[80px] relative">
              <Image
                src="/photos/gallery1.png"
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
            <div className="w-[80px] h-[80px] relative">
              <Image
                src="/photos/gallery1.png"
                alt="Gallery Photo 1"
                fill
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
          <h1 className="text-6xl text-colorName font-[Breathing2] leading-tight py-9">
            D & A
          </h1>
          <p className={plusJakartaSans.className + " max-w-[310px] font-bold text-xs text-invitation"}  >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah”
            Dia menciptakan pasangan-pasangan untukmu dari
            jenismu sendiri, agar kamu cenderung dan merasa
            tenteram kepadanya, dan Dia menjadikan di
            antaramu rasa kasih dan sayang.
          </p>
          <p className={plusJakartaSans.className + " font-bold text-xs text-invitation pt-4"}  >
            QS. Ar-Rum: 21
          </p>
        </div>
      </div>
    </section>
  );
}
