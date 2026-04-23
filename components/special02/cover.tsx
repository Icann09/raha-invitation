"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

const groom = "Dillo";
const bride = "Alisyah";


export default function Cover({onClick} : {onClick: () => void }) {
  const params = useSearchParams();
  const guest = params.get("to")?.replace(/\+/g, " ");
  return (
    <section  className="max-h-[100dvh] flex items-center justify-center z-20">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.24, 1], // more dramatic curve
        }}
        className="w-full flex items-center justify-center"
      >

      
      {/* Mobile Frame */}
      <div className="relative w-full max-w-md h-[100dvh] overflow-hidden shadow-2xl ">
        
        {/* Background */}
        <Image
          src="/images/special02/foto/foto4.webp"
          alt="Wedding Cover"
          fill
          className="object-cover z-0"
          priority
        />
            
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full text-center bottom-0">

          {/* Bird Animation */}
              <Image
                src="/images/special02/assets/bird.webp"
                alt="Ornament"
                width={60}
                height={60}
                className="absolute top-[60px] left-0 animate-fly-across z-50 pointer-events-none"
              />

          {/* Middle */}
          <div className="absolute w-full h-[65vh] z-20 flex flex-col justify-between bottom-0">
            <div className="h-[70%] bg-gradient-to-t from-white via-white/90 via-30% to-transparent pt-24">
              {/* cloud */}
              <Image
                src="/images/special02/assets/cloud.webp"
                alt="Left Tribal"
                width={300}
                height={300}
                className="absolute top-[-10px] left-[-70px] pointer-events-none animate-fade-right-slow"
              />
              {/* light */}
              <Image
                src="/images/special02/assets/light.webp"
                alt="Left Tribal"
                width={200}
                height={200}
                className="absolute top-[50px] right-[-87px] z-10 pointer-events-none rotate-[0deg]"
              />

              {/* tribals */}
              <Image
                src="/images/special02/assets/tribal-1.webp"
                alt="Left Tribal"
                width={200}
                height={200}
                className="absolute top-[110px] left-[-110px] z-10 pointer-events-none -scale-x-100 rotate-270 animate-fade-right"
              />
              <Image
                src="/images/special02/assets/tribal-1.webp"
                alt="Left Tribal"
                width={200}
                height={200}
                className="absolute top-[10px] right-[-107px] z-10 pointer-events-none rotate-[0deg] animate-fade-left"
              />
              
              <div className="flex flex-col text-special02B items-center z-30 pt-5">

                <Image 
                  src="/images/logoutama.webp"
                  alt="Logo"
                  width={130}
                  height={130}
                  className="z-20"
                />
                <p className={plusJakartaSans.className + " font-bold text-xs animate-fade-up"}  >
                  THE WEDDING OF
                </p>
                
                <h1 className="text-4xl font-[Breathing2] leading-tight py-3 animate-fade-up-delay-1">
                  {groom} & {bride}
                </h1>

                <p className= {plusJakartaSans.className + " text-xs font-bold animate-fade-up-delay-2 z-30"}>
                  Kepada Yth. <br />
                  {guest || "Tamu Undangan"}
                </p>
              </div>
              <div className="flex flex-col justify-end items-center pb-16 text-special02B mt-6">
                <p className="relative text-[10px] italic mb-2 font-semibold z-30">
                  *Mohon maaf jika ada kesalahan dalam penulisan nama dan gelar
                </p>
                <button onClick={onClick} className="px-6 py-2.5 bg-special02A  text-special02C text-sm font-bold rounded-full z-30 hover:bg-special02B/80 transition animate-fade-up-delay-3">
                  BUKA UNDANGAN
                </button>

              {/* House */}
                <Image
                  src="/images/special02/assets/house1.webp"
                  alt="House"
                  width={300}
                  height={100}
                  className="absolute bottom-[-10px] left-1/2 -translate-x-1/2  z-0 pointer-events-none animate-fade-up"
                />
              {/* flowers */}
                <div className="absolute bottom-[-50px] right-[-110px]  z-10 pointer-events-none animate-fade-up">
                  <Image
                    src="/images/special02/assets/flower-right.webp"
                    alt="Flower"
                    width={280}
                    height={280}
                  />
                  <Image
                    src="/images/special02/assets/flower-yellow.webp"
                    alt="Flower"
                    width={80}
                    height={80}
                    className="absolute top-[50px] left-[50px] rotate-[-60deg] -scale-x-100"
                  />
                </div>
                <div className="absolute bottom-[-50px] left-[-110px]  z-10 pointer-events-none animate-fade-up">
                  <Image
                    src="/images/special02/assets/flower-left.webp"
                    alt="Flower"
                    width={280}
                    height={280}
                  />
                  <Image
                    src="/images/special02/assets/flower-yellow.webp"
                    alt="Flower"
                    width={80}
                    height={80}
                    className="absolute top-[50px] right-[50px] rotate-[60deg]"
                  />
                  
                </div>
                
              </div>

              
            </div>
            <div className=" bg-white h-[40%]">
            
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}