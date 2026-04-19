"use client"

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { useState } from "react";



const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "500" });
const plusJakartaSans1 = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

<a href="https://api.whatsapp.com/send/?phone=6285150000715&amp;text=Halo,+saya+ingin+tanya+mengenai+Undangan+Website,+saya+mendapatkan+WA+dari+undangan+yang+telah+disebar." target="_blank" rel="nofollow">		
</a>


// nama/kode undangan pengantin 
// nama tamu 
// pesan 
// konfirmasi kehadiran 


interface Wish {
  name: string;
  message: string;
}

const wishes: Wish[] = [
  {
    name: "Kaisan",
    message: "Selamat menempuh hidup baru! Semoga bahagia selalu.",
  },
  {
    name: "Andi",
    message: "Semoga menjadi keluarga sakinah, mawaddah, warahmah.",
  },
  {
    name: "Kaisan",
    message: "Selamat menempuh hidup baru! Semoga bahagia selalu.",
  },
  {
    name: "Andi",
    message: "Semoga menjadi keluarga sakinah, mawaddah, warahmah.",
  },
  {
    name: "Kaisan",
    message: "Selamat menempuh hidup baru! Semoga bahagia selalu.",
  },
  {
    name: "Andi",
    message: "Semoga menjadi keluarga sakinah, mawaddah, warahmah.",
  },
];

export default function Gift() {
  
  const [attendance, setAttendance] = useState("");

  return (
    <section  className=" bg-neutral-200 flex items-center justify-center h-auto">
      <div className="relative w-full max-w-md h-auto overflow-hidden shadow-2xl bg-white">
      
        {/* Backgrounds */}
        <Image
          src="/images/special01/cover.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute w-full h-[50vh] bg-gradient-to-t from-white  to-transparent bottom-0 z-20 pointer-events-none" />
        <div className="absolute w-full h-full bg-[#bccdd2]/80 transparent bottom-0 z-10 pointer-events-none" />

        {/* Trees */}
        <Image
          src="/images/special01/assets/tree2.png"
          alt="Tree 1"
          width={400}
          height={400}
          className="absolute top-2/3 left-[-270px] transform -translate-y-1/2 z-40 pointer-events-none rotate-45"
        />
        <Image
          src="/images/special01/assets/flower.png"
          alt="flower"
          width={60}
          height={60}
          className="absolute top-2/3 left-0 transform translate-x-1/2 z-40 pointer-events-none rotate-[45deg]"
        />

        <Image
          src="/images/special01/assets/tree2.png"
          alt="Tree 2"
          width={350}
          height={350}
          className="absolute top-0 right-[-20px] transform translate-x-1/2 z-30 pointer-events-none rotate-[-40deg]"
        />

        <Image
          src="/images/special01/assets/tree2.png"
          alt="Tree 1"
          width={250}
          height={250}
          className="absolute bottom-14 right-[10px] transform translate-x-1/2 z-40 pointer-events-none rotate-[-90deg]"
        />
        <Image
          src="/images/special01/assets/flower.png"
          alt="flower"
          width={80}
          height={80}
          className="absolute bottom-44 right-[50px] transform translate-x-1/2 z-40 pointer-events-none rotate-[0deg]"
        />

        {/* Content */}
<div className="relative min-h-screen flex flex-col items-center justify-start text-center py-20 z-40">
          
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-[45px] text-invitation font-[Breathing2] leading-tight pb-2">
            Wishes
          </h1>
          <p className={plusJakartaSans.className + " text-xs text-invitation max-w-[300] font-normal"}  >
            Berikan doa dan ucapan terbaik untuk kami
          </p>
          </motion.div>
          
          <form action="" className={plusJakartaSans.className + " my-4 items-center justify-center flex flex-col"}  >
            <motion.div
              variants={fadeVariants.left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <input 
              type="text" 
              name="nama"
              placeholder="Nama"
              required
              className="w-80 bg-invitation text-white py-2 pl-2 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-invitation focus:border-transparent"

            />
            </motion.div>
          
            <motion.div
              variants={fadeVariants.right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <textarea
              className="w-80 h-18 mt-4 p-2 text-xs rounded-md bg-invitation text-white focus:outline-none focus:ring-2 focus:ring-invitation focus:border-transparent resize-none"
              placeholder="Tulis ucapanmu di sini..."
            />
            </motion.div>

            <motion.div
              variants={fadeVariants.left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <p className="text-invitation text-xs mb-2">Konfirmasi Kehadiran</p>
            <select
              value={attendance ?? ""}
              onChange={(e) => setAttendance(e.target.value as "hadir" | "tidak")}
              className="w-80 p-2 rounded-md bg-invitation text-white text-xs focus:outline-none focus:ring-2 focus:ring-invitation focus:border-transparent resize-none"
            >
              <option value="">Pilih Kehadiran</option>
              <option value="hadir">Hadir</option>
              <option value="tidak">Tidak</option>
            </select>
            </motion.div>

            <motion.div
              variants={fadeVariants.right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <p className={plusJakartaSans.className + " text-xs text-white w-80 mt-3 py-2 font-bold bg-invitation rounded-md"}  >
              Kirim
            </p>
            </motion.div>

            <motion.div
              variants={fadeVariants.down}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <div className="w-80 h-80 max-w-sm mx-auto bg-invitation/50 rounded-xl p-4 mt-8 text-white text-xs flex flex-col gap-4 overflow-y-auto text-left">
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 border-b border-white/30 pb-3"
                >
                  <p className={`${plusJakartaSans1.className} text-xs`}>
                    {wish.name}
                  </p>
                  <p className="text-white/80 text-xs">
                    {wish.message}
                  </p>
                </div>
              ))}
            </div>
            </motion.div>

          </form>

          {/* contact */}
          <div className="">
            <p className={plusJakartaSans.className + "text-invitation flex items-center gap-1"}>
              <Image 
               src="/images/logo.png"
               alt="Logo"
               width={150}
               height={150}
               className=""
              />
            </p>
            <div className="flex gap-3 justify-center bg-invitation/50 p-2 rounded-md mb-3">
              <a href="https://api.whatsapp.com/send/?phone=6285150000715&amp;text=Halo,+saya+ingin+tanya+mengenai+Undangan+Website,+saya+mendapatkan+WA+dari+undangan+yang+telah+disebar." target="_blank" rel="nofollow">		
                <Image 
                src="/icons/whatsapp2.svg"
                alt="WhatsApp"
                width={30}
                height={30}
                className="text-invitation"
                />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=6285150000715&amp;text=Halo,+saya+ingin+tanya+mengenai+Undangan+Website,+saya+mendapatkan+WA+dari+undangan+yang+telah+disebar." target="_blank" rel="nofollow">		
                <Image 
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="text-invitation"
                  />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=6285150000715&amp;text=Halo,+saya+ingin+tanya+mengenai+Undangan+Website,+saya+mendapatkan+WA+dari+undangan+yang+telah+disebar." target="_blank" rel="nofollow">		
                <Image 
                src="/icons/tik-tok.svg"
                alt="Tik Tok"
                width={30}
                height={30}
                className="text-invitation"
                />
              </a>
            </div>
            <a 
              href="https://api.whatsapp.com/send/?phone=6285150000715&amp;text=Halo,+saya+ingin+tanya+mengenai+Undangan+Website,+saya+mendapatkan+WA+dari+undangan+yang+telah+disebar." 
              target="_blank" 
              rel="nofollow"
              className={plusJakartaSans.className + "text-invitation mt-4"}
            >		
              CONTACT US
            </a>
          </div>
        </div>
    
      </div>
    </section>
  );
}  
