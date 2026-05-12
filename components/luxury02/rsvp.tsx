"use client"

import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { useState } from "react";
import { useRef } from "react";
import { itemVariants, containerVariants, fadeVariants } from "@/lib/motion";
import { motion, useInView } from "framer-motion";





const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "800"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});


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


export default function RSVP() {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px",
  });
  const [attendance, setAttendance] = useState("");
  
  return (
    <section ref={ref} className="flex items-center justify-center bg-white text-[#5e5e5e] text-sm">
      <motion.div
        variants={fadeVariants.zoom}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className="relative w-full px-6 flex flex-col items-center justify-start text-center py-16 z-100"
      >
          <h1 className={playfair.className +  " italic text-[35px] pb-2"}>
            Ucapan & RSPV
          </h1>
          <p className={plusJakartaSans.className + " font-normal my-2"}  >
            Berikan doa dan ucapan terbaik untuk kami
          </p>          
          <form action="" className={plusJakartaSans.className + " w-full my-4 items-center justify-center flex flex-col"}  >
            <input 
              type="text" 
              name="nama"
              placeholder="Nama"
              required
              className="placeholder:text-[#5e5e5e]/50 w-full py-2 pl-2 border-2 border-[#5e5e5e]"
            />
            <textarea
              className="w-full h-18 my-2 p-2 border-2 border-[#5e5e5e]
              placeholder:text-[#5e5e5e]/50"
              placeholder="Tulis ucapanmu di sini..."
            />
            <select
              value={attendance ?? ""}
              onChange={(e) => setAttendance(e.target.value as "hadir" | "tidak")}
              className="w-full p-2 border-2 border-[#5e5e5e]"
            >
              <option value="">Pilih Kehadiran</option>
              <option value="hadir">Hadir</option>
              <option value="tidak">Tidak</option>
            </select>
            <p
              className={
                plusJakartaSans.className +
                " w-full mt-3 py-2 font-bold cursor-pointer bg-[#5e5e5e] text-white "
              }
            >
              Kirim
            </p>
            <motion.div
              variants={fadeVariants.up}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8 }}
              className="w-full h-[350px] mt-12 flex flex-col gap-4 overflow-y-auto text-left"
            >
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 border-b border-[#5e5e5e] pb-5"
                >
                  <p className={`${plusJakartaSans.className} font-bold pl-2`}>
                    {wish.name}
                  </p>
                  <p className="pl-2">
                    {wish.message}
                  </p>
                </div>
              ))}
            </motion.div>
          </form>
        </motion.div>
    </section>
  )
}