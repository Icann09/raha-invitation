

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Clock, MapPin } from "lucide-react";





const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });


export default function Woman() {
  return (
    <section  className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[100vh] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/backgrounds/bg-1.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-screen bg-gradient-to-t from-white to-white/90 bottom-0 z-10 pointer-events-none" />

        {/* Trees */}
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-270px] transform -translate-y-1/2 z-40 pointer-events-none rotate-45"
        />
        <Image
          src="/ornaments/tree2.png"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-0 right-[-20px] transform translate-x-1/2 z-40 pointer-events-none rotate-[-40deg]"
        />
          <Image
          src="/ornaments/tree2.png"
          alt="Tree 1"
          width={250}
          height={250}
          className="absolute bottom-14 right-[10px] transform translate-x-1/2 z-40 pointer-events-none rotate-[-90deg]"
        />

        {/* Castle */}
        <div className="w-[500px] h-[40vh] absolute bottom-[-60px] left-20  z-20 pointer-events-none">
          <Image
            src="/ornaments/castle.png"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>
        <div className="w-[500px] h-[40vh] absolute bottom-[-120px] left-[-220px]  z-20 pointer-events-none">
          <Image
            src="/ornaments/castle.png"
            alt="Castle Ornament"
            fill
            className="object-cover "
          />
        </div>
        

        {/* Content */}
        <div className="">
          <div className="w-72 h-[500px] mx-auto relative flex flex-col items-center justify-center text-center mt-20 z-30">
            <Image
              src="/photos/cover.png"
              alt="Gallery Top Ornament"
              fill
              className="object-cover rounded-tr-[60px] shadow-md"
            />
            <div className="absolute bottom-0 w-full h-[55%] bg-invitation text-white flex flex-col items-center justify-center pr-14">
              <h1 className="font-[Breathing2] text-5xl leading-tight ">
                Sabtu
              </h1>
              <div className={plusJakartaSans.className + " font-bold"}>
                <p className="text-sm mt-1">
                  23 Desember 2023
                </p>
                <p className="text-[10px]">
                  <Clock className="inline-block mr-1" size={20} />
                  09.00 WIB - Selesai
                </p>
              </div>
              <div className="my-4">
                <p className="text-sm font-bold">
                  Grand Ballroom Majesty
                </p>
                <p className="text-xs">
                  Jl. Gatot Subroto No. 25, Jakarta Selatan
                </p>
              </div>
              <p className="bg-white rounded-full mx-auto text-invitation text-xs font-bold w-max px-4">
                <MapPin className="inline-block mr-1" size={20}/>
                Google Maps
              </p>
            </div>
            <div className="absolute bottom-0 w-[55px] h-[55%] right-0 bg-colorName">
              <div className="text-white h-full text-3xl rotate-90 flex items-center justify-center ">
                <p className="mr-2">
                  Akad
                </p>
                <p>
                  Nikah
                </p>
              </div>
            </div>

            {/* Flower */}
            <Image
              src="/ornaments/flower.png"
              alt="Flower Ornament"
              width={90}
              height={90}
              className="absolute bottom-[-30px] right-[-30px] z-20 rotate-0"
            />

            {/* flowers */}
            <Image
              src="/ornaments/flowers.png"
              alt="Flowers Ornament"
              width={200}
              height={50}
              className="absolute top-[-40px] left-[45px] z-10 pointer-events-none"
            />
            <Image
              src="/ornaments/flower.png"
              alt="Flower Ornament"
              width={70}
              height={70}
              className="absolute right-[15px] top-[-30px] z-20 rotate-90"
            />
            <Image
              src="/ornaments/flower.png"
              alt="Flower Ornament"
              width={70}
              height={70}
              className="absolute left-[15px] top-[-30px] z-20 rotate-[-45deg]"
            />
            
          </div>
        </div>
        
      </div>
    </section>
  );
}  
