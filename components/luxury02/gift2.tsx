"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Files, Check, CreditCard, Gift } from "lucide-react";
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

export default function Gift2({ rekening, kado, image }: {rekening: Rek[], kado: Kado, image: string}) {
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
          src={image}
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
          <div className="mt-18 space-y-5 text-sm">
            {rekening.map((rek, index) => (
              <motion.div
                key={index}
                variants={fadeVariants.up}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative w-full h-[240px] overflow-hidden rounded-2xl"
              >
                {/* CARD BACKGROUND */}
                <Image
                  src={
                    rek.nama_bank === "bri"
                      ? "/images/bri.png"
                      : rek.nama_bank === "bni"
                      ? "/images/bni.png"
                      : rek.nama_bank === "mandiri"
                      ? "/images/mandiri.png"
                      : "/images/card-default.png"
                  }
                  alt={rek.nama_bank}
                  fill
                  className="object-fit rounded-2xl"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0" />

                {/* CARD CONTENT */}
                <div className="relative z-20 flex h-full flex-col justify-end px-6 py-8 text-white">
                  {/* BOTTOM */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className=" text-sm font-semibold">
                        {rek.no_rek}
                      </p>

                      <p className="text-xs opacity-80">
                        {rek.nama_penerima}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(rek.no_rek)}
                      className="
                        flex items-center gap-2
                        rounded-full
                        border border-white/70
                        bg-white/10
                        px-3 py-2
                        text-xs
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      {copiedText === rek.no_rek ? (
                        <>
                          <Check size={14} />
                          Tersalin
                        </>
                      ) : (
                        <>
                          <Files size={14} />
                          Salin
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* KADO SECTION */}
          <motion.div
            variants={fadeVariants.up}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="
              mt-10
              rounded-2xl
              border
              border-white/20
              bg-white/10
              p-4
              backdrop-blur-md
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] text-white/70">
                  KADO
                </p>
              </div>

              <Gift size={30}/>
            </div>

            {/* PENERIMA */}
            <div className="mt-4">
              <p className="text-xs text-white/70">
                Nama Penerima
              </p>

              <p className="text-sm leading-relaxed">
                {kado.penerima}
              </p>
            </div>

            {/* ALAMAT */}
            <div className="mt-4">
              <p className="text-xs text-white/70">
                Alamat Pengiriman
              </p>

              <p className="text-sm leading-relaxed">
                {kado.alamat}
              </p>
            </div>

            {/* COPY BUTTON */}
            <button
              onClick={() => handleCopy(kado.alamat)}
              className="
                mt-6
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/70
                bg-white/10
                px-4
                py-2
                text-xs
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              {copiedText === kado.alamat ? (
                <>
                  <Check size={14} />
                  Alamat Tersalin
                </>
              ) : (
                <>
                  <Files size={14} />
                  Salin Alamat
                </>
              )}
            </button>
          </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}