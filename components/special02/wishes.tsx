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
        src="/images/special02/foto/foto4.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay  */}
      <div className="absolute w-full h-full bg-special02A/80 transparent bottom-0 z-10 pointer-events-none" />


      {/* Side Flowers */}
      <Image
        src="/images/special02/assets/flower-left.webp"
        alt="Tree 1"
        width={370}
        height={370}
        className="absolute bottom-[80px] left-[-250px] transform z-50 pointer-events-none rotate-90 -scale-x-100"
      />
      <div className="absolute top-[80px] right-[-200px] z-30 pointer-events-none rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_8s]">
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree 2"
          width={300}
          height={300}
        />
        <Image
          src="/images/special02/assets/flower-yellow.webp"
          alt="Flower"
          width={60}
          height={60}
          className="absolute top-0 right-[20px] rotate-[60deg]"
        />
      </div>
      

      {/* Bottom Flowers */}
      <div className="absolute bottom-[-50px] right-[-110px]  z-50 pointer-events-none animate-fade-up">
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Flower"
          width={280}
          height={280}
        />
      </div>
      <div className="absolute bottom-[-50px] left-[-110px]  z-50 pointer-events-none animate-fade-up">
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

      {/* House */}
      <Image
        src="/images/special02/assets/house2.webp"
        alt="House"
        width={300}
        height={100}
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2  z-20 pointer-events-none animate-fade-up"
      />

        {/* Content */}
        <div className="relative min-h-screen flex flex-col items-center justify-start text-center text-special02B py-20 z-100">
          
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <h1 className="text-[45px] text-special02C font-[Breathing2] leading-tight pb-2">
            Wishes
          </h1>
          <p className={plusJakartaSans.className + " text-xs text-special02C max-w-[290] font-normal"}  >
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
              className="placeholder:text-special02B/70 w-[290px] bg-special02C py-2 pl-2 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-special02C focus:border-transparent"

            />
            </motion.div>
          
            <motion.div
              variants={fadeVariants.right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <textarea
              className="w-[290px] h-18 my-2 p-2 text-xs rounded-md bg-special02C 
              placeholder:text-special02B/70 
              focus:outline-none focus:ring-2 focus:ring-special02C 
              resize-none"
              placeholder="Tulis ucapanmu di sini..."
            />
            </motion.div>

            <motion.div
              variants={fadeVariants.left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <select
              value={attendance ?? ""}
              onChange={(e) => setAttendance(e.target.value as "hadir" | "tidak")}
              className="w-[290px] p-2 rounded-md bg-special02C text-xs focus:outline-none focus:ring-2 focus:ring-invitation focus:border-transparent resize-none"
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
            <p
              className={
                plusJakartaSans.className +
                " text-xs w-[290px] mt-3 py-2 font-bold bg-special02C rounded-md cursor-pointer transform transition-all duration-300 ease-out hover:bg-special02C/80 hover:scale-105"
              }
            >
              Kirim
            </p>
            </motion.div>

            <motion.div
              variants={fadeVariants.down}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <div className="w-80 h-96 max-w-[290px] mx-auto bg-special02C/50 rounded-xl p-4 mt-8 text-xs text-white flex flex-col gap-4 overflow-y-auto text-left">
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 border-b border-white/30 pb-3"
                >
                  <p className={`${plusJakartaSans1.className} text-xs`}>
                    {wish.name}
                  </p>
                  <p className="text-xs">
                    {wish.message}
                  </p>
                </div>
              ))}
            </div>
            </motion.div>

          </form>

          
        </div>
    
      </div>
    </section>
  );
}  
