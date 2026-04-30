"use client"

import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Files } from "lucide-react";
import { motion, number } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useState } from "react";
import Image from "next/image";



const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "800"], style: ["normal", "italic"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});

const gift = {
  rekening : [
      {
        nama_bank:"bni",
        nama_penerima: "Muhammad Aslan", 
        no_rek: 897892789298, 
      },
      {
        nama_bank:"mandiri",
        nama_penerima: "Muhammad Aslan", 
        no_rek: 897892789298, 
      },
      {
        nama_bank:"bri",
        nama_penerima: "Muhammad Aslan", 
        no_rek: 897892789298, 
      },
    ],
  alamat: "Jl. Raya Cilandak KKO No.27 Jakarta Selatan",
  map: "https://maps.app.goo.gl/N3QAhkDJrD4gGGVLA?g_st=iw"
}


export default function Gift() {

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-auto flex items-center justify-center bg-gray-700/50 text-white pb-20">
      {/* Content */}
        <div className={plusJakartaSans.className + " relative flex flex-col items-center justify-center text-center text-sm"}>
          {/* Image */}
          <div className="relative my-12 px-6 w-full h-[250px]">
            <div className="relative h-full">
              <Image 
                src="/images/luxury01/foto4.webp"
                fill
                alt="Logo Bank"
                className="object-cover"
              />
            </div>
          </div>
          <h1 className={playfair.className + " text-[35px] leading-tight pb-4 italic"}>
            Wedding Gift
          </h1>
          <p className="font-normal my-4 mx-6"  >
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
          </p>
          <p className="font-normal mx-6" >
            Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui dibawah ini.
          </p>

          <div className= "flex w-full px-6 mt-16 text-white flex-col overflow-y-auto text-center gap-3 animate-fade-down">
            <div className="flex flex-col gap-2 w-full">
              {/* Transfer  */}
              {gift.rekening.map((rek, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <div className="text-left">
                      <p className="font-bold italic">No Rekening</p>
                      <p>{rek.no_rek}</p>
                    </div>
                    <Image 
                      src={`/icons/${rek.nama_bank}.webp`}
                      width={60}
                      height={15}
                      alt="Logo Bank"
                    />
                  </div>  
                  <div className="text-left mt-2">
                    <p className="font-bold italic">Atas Nama</p>
                    <div className="flex justify-between items-center">
                      <p className="">{rek.nama_penerima}</p>
                      <p className="border-2 px-2 py-1 flex text-xs gap-1">
                        <Files size={12}/>
                        Salin
                      </p>
                    </div>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-white">
                  </div>  
                </div>
              ))}
              {/* Kado */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="text-left">
                    <p className="font-bold italic">Nama Penerima</p>
                    <p>Muhammad Aslan</p>
                    <p>082299862307</p>
                  </div>
                  <div className="text-xl font-bold">
                    <p>KADO</p>
                  </div>
                </div>
                <div className="text-left mt-2">
                  <p className="font-bold italic">Alamat Penerima</p>
                  <div className="flex justify-between items-center">
                    <p className="">Jl. Raya Cilandak KKO No.27 Jakarta Selatan</p>
                    <p className="border-2 px-2 py-1 flex text-xs gap-1">
                      <Files size={12}/>
                      Salin
                    </p>
                  </div>
                </div>
                <div className="w-full mt-2 h-[1px] bg-white"></div> 
              </div>

            </div>

            
            
          </div>
        </div>
    </section>
  )
}