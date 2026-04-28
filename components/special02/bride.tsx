"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";




const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

const womanIG =  "https://www.instagram.com/ika.smandaracup?igsh=MTNuN2oyYXM3NWQ4Nw==";

const bride = {
  foto: "/images/special02/foto/foto1.webp",
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
      <div className="relative w-full max-w-md h-[800px] overflow-hidden shadow-2xl bg-special02B">
      
        {/* Backgrounds */}
        <Image
          src="/images/special02/assets/tribal-bg1.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Flowers */}
        <Image
          src="/images/special02/assets/flower-left.webp"
          alt="Flower"
          width={320}
          height={320}
          className="absolute top-1/2 left-[-220px] transform -translate-y-1/2 z-30 pointer-events-none rotate-90 animate-[swingingtree2_25s_ease-in-out_infinite_5s]"
        />
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Flower"
          width={320}
          height={320}
          className="absolute top-[80px] right-[-210px] z-20 pointer-events-none rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_8s]"
        />
    
        {/* Content */}
        <div className="relative flex flex-col justify-center items-center text-center mt-12 z-20 text-special02C">

          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

          <Image 
            src="/images/special02/assets/house4.webp"
            alt="House"
            width={140}
            height={40}
            className="absolute top-[-20px] left-1/2 -translate-x-1/2"
          />
          <p className={plusJakartaSans.className + " font-bold text-[10px] pt-4 z-40 mt-10"}  >
            Assalamu'alaikum warahmatullahi wabarakatuh
          </p>
          <p className={plusJakartaSans.className + " text-[10px] pt-4 max-w-[320] z-40"}  >
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
            <div className="w-[270px] h-[320px] relative mt-6 overflow-visible">
              <Image
                src={bride.foto}
                alt="Gallery Top Ornament"
                fill
                className="object-cover shadow-md rounded-t-full "
              />

              {/* ornaments */}
              {/* flowers */}
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[350px] max-w-none z-10 pointer-events-none flex justify-center">
                <Image
                  src="/images/special02/assets/flowers.webp"
                  alt="Flowers Ornament"
                  width={280}
                  height={20}
                />
              </div>
              {/* Loves */}
              <Image 
                src="/images/special02/assets/loves.webp"
                alt="Loves"
                width={60}
                height={60}
                className="absolute right-[-30px] bottom-[50px]"
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
          <h1 className="text-4xl font-[Breathing2] leading-tight mt-12">
            {bride.nama}
          </h1>
          <div className="py-4">
            <p className="leading-tight font-semibold text-sm">
              {bride.nama_lengkap}
            </p>
            <p className="leading-tight text-xs">
              Putri Pertama dari Bapak {bride.ayah} dan Ibu {bride.ibu}
            </p>
          </div>
          <a 
            href={bride.link_ig}
            target="_blank"
            rel="noopener noreferrer"
            className={plusJakartaSans.className + " font-bold text-[10px] bg-special02C text-special02A py-1 px-4 rounded-full"} 
          >
            {bride.ig}
          </a>
          </motion.div>
          
        </div>    
      </div>
    </section>
  );
}  
