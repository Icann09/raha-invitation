"use client"
import { Ballet, Playfair_Display, Quicksand, Plus_Jakarta_Sans } from "next/font/google"
import ImagesDisplayX from "../ui/imagesDisplayX";
import { Clock, MapPin, Video } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { fadeVariants } from "@/lib/motion";
import { motion } from "framer-motion";


const ballet = Ballet({subsets: ["latin"], weight: ["400"]});
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800", "400"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});


interface Props {
  alamat: {
    nama: string,
    lokasi: string,
    link: string
  },
  waktu: {
    hari: string,
    tanggal: string,
    bulan: string,
    tahun: string,
    jam: string
  }
}


export default function WeddingEvent({ akadImages, resepsiImages, image, akad, resepsi }: { akadImages: string[], resepsiImages: string[], image: string, akad: Props, resepsi: Props }) {
  
  const ref = useRef(null);

  return (
    <section ref={ref} className="h-auto flex flex-col items-center justify-center text-white pl-6 py-10">
      {/* Title */}
      <motion.div
        variants={fadeVariants.up}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-end w-full max-w-full"
      >
        <div className="w-[40%] flex text-4xl leading-none flex-col text-left ">
          <h1 className={playfair.className + " italic"}>Wedding</h1>
          <h1 className={ballet.className + " ml-2"}>Event</h1>
        </div>
        <div className="w-[60%] h-[2px] bg-white mb-1"></div>
      </motion.div>

      {/* Akad Nikah */}
      <motion.div
        variants={fadeVariants.left}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-[580px] pr-6 mt-16"
      >
        <div className="h-full w-full">
          <div className="relative overflow-hidden z-10 h-[40%] w-full bg-black rounded-tr-[150px]">
            <ImagesDisplayX images={akadImages}/>
          </div>
          <div className="h-[60%] bg-white flex">
            <div className="w-[25%] bg-[#5e5e5e] flex items-center justify-center">
              <div className={playfair.className + " rotate-[-90deg] text-3xl flex justify-center"}>
                <p className="mr-2">
                  Akad
                </p>
                <p>
                  Nikah
                </p>
              </div>
            </div>
            <div className={plusJakartaSans.className + " w-[75%] text-[#5e5e5e] flex flex-col justify-center"}>
              <div className="flex gap-4 items-center justify-center">
                <p className={ " text-[80px]"}>{akad.waktu.tanggal}</p>
                <div className="flex flex-col justify-center">
                  <p>{akad.waktu.hari}</p>
                  <p>{akad.waktu.bulan}</p>
                  <p>{akad.waktu.tahun}</p>
                </div>
              </div>
              <div className="h-[2px] w-[90%] bg-[#5e5e5e] mx-4"></div>
              <div className="flex flex-col text-xs pl-4 mt-2">
                <p className="flex items-center gap-2">
                  <Clock size={16}/>
                  {akad.waktu.jam}
                </p>
                <p className="font-bold tracking-[0.25em] my-6">LOKASI ACARA</p>
                <p className="font-bold">{akad.alamat.nama}</p>
                <p>{akad.alamat.lokasi}</p>
                <p className="w-[140px] py-1 px-2 mt-4 border-[#5e5e5e] border-2 text-[10px] hover:text-white hover:bg-[#5e5e5e] tracking-[0.20em]">
                  <a 
                  href={akad.alamat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <MapPin className="inline-block mr-1" size={20}/>
                    Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resepsi */}
      <motion.div
        variants={fadeVariants.right}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-[580px] pr-6 mt-20"
      >
        <div className="h-full w-full">
          <div className="relative overflow-hidden z-10 h-[40%] w-full bg-black rounded-tl-[150px]">
            <ImagesDisplayX images={resepsiImages}/>
          </div>
          <div className="h-[60%] bg-white flex">
            <div className={plusJakartaSans.className + " w-[75%] text-[#5e5e5e] flex flex-col justify-center"}>
              <div className="flex gap-4 items-center justify-center">
                <p className={ " text-[80px]"}>{resepsi.waktu.tanggal}</p>
                <div className="flex flex-col justify-center">
                  <p>{resepsi.waktu.hari}</p>
                  <p>{resepsi.waktu.bulan}</p>
                  <p>{resepsi.waktu.tahun}</p>
                </div>
              </div>
              <div className="h-[2px] w-[90%] bg-[#5e5e5e] mx-4"></div>
              <div className="flex flex-col text-xs pl-4 mt-2">
                <p className="flex items-center gap-2">
                  <Clock size={16}/>
                  {resepsi.waktu.jam}
                </p>
                <p className="font-bold tracking-[0.25em] my-6">LOKASI ACARA</p>
                <p className="font-bold">{resepsi.alamat.nama}</p>
                <p>{resepsi.alamat.lokasi}</p>
                <p className="w-[140px] py-1 px-2 mt-4 border-[#5e5e5e] border-2 text-[10px] hover:text-white hover:bg-[#5e5e5e] tracking-[0.20em]">
                  <a 
                  href={resepsi.alamat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <MapPin className="inline-block mr-1" size={20}/>
                    Google Maps
                  </a>
                </p>
              </div>
            </div>
            <div className="w-[25%] bg-[#5e5e5e] flex items-center justify-center">
              <div className={playfair.className + " rotate-[90deg] text-3xl flex justify-center"}>
                <p>
                  Resepsi 
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Foto */}
      <motion.div
        variants={fadeVariants.zoom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full h-[270px] pr-6 mt-20"
      >
        <div className="relative w-full h-full">
          <Image 
            src={image}
            alt="Foto Prewedding"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Live streaming and Dresscode  */}
      {/* <motion.div
        variants={fadeVariants.down}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className={plusJakartaSans.className + " flex flex-col justify-center items-center text-center my-12 pr-6"}
      >
        <p className={playfair.className + " text-3xl italic mb-8 tracking-[0.16em]"}>Live Streaming</p>
        <p className="text-sm">Temui kami secara virtual untuk menyaksikan acara pernikahan kami yang insyaaAllah akan disiarkan langsung melalui link dibawah ini.</p>
        <p className="py-1 px-2 border-2 border-white mx-auto my-4 flex items-center gap-2 bg-white/10 text-xs">
          <Video size={16}/>
          Lihat Live Streaming
        </p>
        <div className="w-[1px] h-[100px] bg-white my-3"></div>
        <p className={playfair.className + " text-3xl italic mb-8 tracking-[0.16em]"}>Dresscode</p>
        <p className="text-sm">Kami dengan hormat menganjurkan tamu kami untuk mengenakan warna-warna ini untuk hari istimewa kami.</p>
        <div className="flex gap-3 mt-4">
          <div className="w-14 h-14 bg-black"></div>
          <div className="w-14 h-14 bg-white"></div>

        </div>
      </motion.div> */}
      
    </section>
  )
}