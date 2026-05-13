"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";
import {
  Files,
  Check,
  CreditCard,
} from "lucide-react";
import { fadeVariants } from "@/lib/motion";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "800"],
  style: ["normal", "italic"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});

interface Rek {
  nama_bank: string,
  nama_penerima: string,
  no_rek: string,
}

interface Kado {
  alamat: string,
  penerima: string,
}

export default function Gift({ rekening, kado }: {rekening: Rek[], kado: Kado}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px",
  });

  const [copiedText, setCopiedText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedText(text);

      setTimeout(() => {
        setCopiedText("");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/luxury01/foto4.webp"
          fill
          alt="Background"
          className="object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div
        className={`
          ${plusJakartaSans.className}
          relative
          z-20
          max-w-md
          mx-auto
          px-6
        `}
      >
        {/* TITLE */}
        <motion.div
          variants={fadeVariants.up}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h1
            className={`
              ${playfair.className}
              text-4xl
              italic
              leading-none
            `}
          >
            Wedding Gift
          </h1>

          <p className="mt-12 text-sm text-white/90">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
          </p>

          <p className="mt-4 text-sm text-white/90">
            Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui dibawah ini.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              mt-14
              inline-flex
              items-center
              gap-3
              bg-white
              px-4
              py-1
              text-sm
              tracking-[0.2em]
              text-black
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            <CreditCard size={18} />
            Klik di Sini
          </button>
        </motion.div>

        {/* REVEAL SECTION */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: 20,
              }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              {/* BANK LIST */}
              <div className="mt-18 space-y-8 text-sm">
                {rekening.map((rek, index) => (
                  <div key={index}>
                    {/* TOP */}
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="italic text-white/90">
                          No Rekening
                        </p>

                        <p className="mt-1 tracking-wide">
                          {rek.no_rek}
                        </p>
                      </div>

                      <Image
                        src={`/icons/${rek.nama_bank}.webp`}
                        width={70}
                        height={28}
                        alt={rek.nama_bank}
                        className="object-contain"
                      />
                    </div>

                    {/* BOTTOM */}
                    <div className="flex justify-between items-end mt-2">
                      <div>
                        <p className="italic text-white/90">
                          Atas Nama
                        </p>

                        <p className="mt-1">
                          {rek.nama_penerima}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopy(rek.no_rek)}
                        className="
                          text-xs
                          border
                          border-white/70
                          px-2
                          py-1
                          flex
                          items-center
                          gap-2
                          transition-all
                          duration-300
                          hover:bg-white
                          hover:text-black
                        "
                      >
                        {copiedText === rek.no_rek ? (
                          <>
                            <Check size={16} />
                            Tersalin
                          </>
                        ) : (
                          <>
                            <Files size={16} />
                            Salin
                          </>
                        )}
                      </button>
                    </div>

                    <div className="w-full h-[1px] bg-white/80 mt-5" />
                  </div>
                ))}

                {/* ADDRESS */}
                <div className="text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="italic text-white/90">
                        Nama Penerima
                      </p>

                      <p className="mt-1">
                        {kado.penerima}
                      </p>
                    </div>

                    <p className="tracking-wide text-xl">
                      KADO
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="italic text-white/90">
                      Alamat Penerima
                    </p>

                    <p className="mt-1">
                      {kado.alamat}
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleCopy(kado.alamat)}
                      className="
                        border
                        border-white/70
                        px-2
                        py-1
                        flex
                        text-xs
                        items-center
                        gap-2
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      <Files size={16} />
                      {copiedText === kado.alamat
                        ? "Tersalin"
                        : "Salin"}
                    </button>
                  </div>

                  <div className="w-full h-[1px] bg-white/80 mt-5" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}