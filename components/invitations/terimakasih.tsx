

import Image from "next/image";
import { Alice } from "next/font/google";
import { Belleza } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";


const belleza = Belleza({ subsets: ["latin"], weight: "400" });
const alice = Alice({ subsets: ["latin"], weight: "400" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });
const plusJakartaSans1 = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });


const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

export default function Woman() {
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
        <div className="absolute w-full h-[50vh] bg-gradient-to-t from-white via-white to-transparent bottom-0 z-10 pointer-events-none" />
        {/* <div className="absolute w-full h-[50vh] bg-gradient-to-t from-white to-white/45 bottom-0 z-10 pointer-events-none" /> */}



        {/* Trees */}
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-270px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45"
        />
        <Image
          src="/ornaments/flower.png"
          alt="flower"
          width={60}
          height={60}
          className="absolute top-1/2 left-0 transform translate-x-1/2 z-40 pointer-events-none rotate-[45deg]"
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
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center z-10 mb-30">
          <h1 className="text-[45px] text-invitation font-[Breathing2] leading-tight pb-2">
            Terima Kasih
          </h1>
          <p className={plusJakartaSans.className + " text-xs text-invitation max-w-[300] font-normal"}  >
            Merupakan suatu kebahagiaan dan
kehormatan bagi kami apabila
Bapak/Ibu/Saudara/i berkenan hadir untuk
memberikan doa restu kepada kedua mempelai.
          </p>
          <p className={plusJakartaSans1.className + " text-xs text-invitation max-w-[300] my-4 font-bold"}  >
            Wassalamu’alaikum warahmatullahi wabarakatuh
          </p>
          <p className={plusJakartaSans1.className + " text-sm text-invitation max-w-[320] pt-3"}  >
            Kami yang berbahagia,
          </p>
        </div>
    
      </div>
    </section>
  );
}  
