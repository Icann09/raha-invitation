"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";




const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

const womanIG =  "https://www.instagram.com/ika.smandaracup?igsh=MTNuN2oyYXM3NWQ4Nw==";

const bride = {
  foto: "/images/special01/gallery1.webp",
  nama: "Alisyah",
  nama_lengkap: "Putri Alisyah Cahya Ayu",
  ig: "@alisyah_cahya12",
  link_ig: "https://www.instagram.com/ika.smandaracup?igsh=MTNuN2oyYXM3NWQ4Nw==",
  ayah: "Ali",
  ibu: "Cahyani"
}




export default function Bride() {
  return (
    <section  className="min-h-[800px] bg-neutral-200 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[800px] overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/images/special01/background.webp"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-screen bg-gradient-to-t from-white to-white/50 bottom-0 z-10 pointer-events-none" />

          {/* Trees */}
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-1/2 left-[-260px] transform -translate-y-1/2 z-30 pointer-events-none rotate-45 animate-[swingingtree2_20s_ease-in-out_infinite_5s]"
        />
        <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-1 right-[-20px] transform translate-x-1/2 z-10 pointer-events-none rotate-[-45deg] animate-[swingingtree2_20s_ease-in-out_infinite_6s]"
        />
          <Image
          src="/images/special01/assets/tree2.webp"
          alt="Tree 1"
          width={350}
          height={350}
          className="absolute bottom-[95px] right-[-40px] transform translate-x-1/2 z-30  rotate-[-90deg] animate-[swingingtree2_20s_ease-in-out_infinite_8s]"
        />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center mt-14 z-20">

          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <p className={plusJakartaSans.className + " font-bold text-[10px] text-special01E pt-4 z-40"}  >
            Assalamu'alaikum warahmatullahi wabarakatuh
          </p>
          <p className={plusJakartaSans.className + " text-[10px] text-special01B pt-4 max-w-[320] z-40"}  >
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-
            pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang
            yang Kau ciptakan dalam ikatan pernikahan suci
          </p>
          </motion.div>

          
          <div>
            <motion.div
              variants={fadeVariants.in}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <div className="w-60 h-72 relative mt-10">
              <Image
                src={bride.foto}
                alt="Gallery Top Ornament"
                fill
                className="object-cover shadow-md rounded-t-full "
              />

              {/* ornaments */}
              {/* flowers */}
              <Image
                src="/images/special01/assets/flowers.webp"
                alt="Flowers Ornament"
                width={240}
                height={50}
                className="absolute bottom-[-55px] left-0 z-10 pointer-events-none"
              />
              {/* flower */}
              <Image
                src="/images/special01/assets/flower.webp"
                alt="Flower Ornament"
                width={60}
                height={60}
                className="absolute right-[-30px] bottom-[-30px] z-20 rotate-90"
              />
              <Image
                src="/images/special01/assets/flower.webp"
                alt="Flower Ornament"
                width={60}
                height={60}
                className="absolute left-[-30px] bottom-[-30px] z-20 rotate-[-45deg]"
              />
            </div> 
            </motion.div>         
          </div>

          <motion.div
            variants={fadeVariants.down}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-4xl text-special01B font-[Breathing2] leading-tight mt-20">
            {bride.nama}
          </h1>
          <div className="py-4">
            <p className="text-special01B  leading-tight font-semibold">
              {bride.nama_lengkap}
            </p>
            <p className="text-special01B leading-tight text-xs">
              Putri Pertama dari Bapak {bride.ayah} dan Ibu {bride.ibu}
            </p>
          </div>
          <a 
            href={bride.link_ig}
            target="_blank"
            rel="noopener noreferrer"
            className={plusJakartaSans.className + " font-bold text-xs bg-special01E text-white py-1 px-4 rounded-full"} 
          >
            {bride.ig}
          </a>
          </motion.div>
          
        </div>    
      </div>
    </section>
  );
}  
