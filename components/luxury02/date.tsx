"use client";

import { Plus_Jakarta_Sans, Playfair_Display, Quicksand } from "next/font/google";
import { Calendar1 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import ImagesDisplayY from "../ui/imagesDisplayY";
import { containerVariants, fadeVariants } from "@/lib/motion";
import { motion } from "framer-motion";


const plusJakartaSans =
  Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: "800",
  });

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const playfair =
  Playfair_Display({
    subsets: ["latin"],
    style: ["italic"],
    weight: ["400", "600"],
  });

interface DateSectionProps {
  date: Date;
  images: string[];

  title?: string;
  description?: string;
  location?: string;
}

export default function Page({
  date,
  images,
  title = "Wedding Invitation",
  description = "Kami mengundang Anda untuk hadir di acara pernikahan kami.",
  location = "Indonesia",
}: DateSectionProps) {
  const ref = useRef(null);

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // =========================
  // COUNTDOWN
  // =========================

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const diff =
        date.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);

        return;
      }

      setTime({
        days: Math.floor(
          diff / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (diff / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (diff / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
          (diff / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  // =========================
  // GOOGLE CALENDAR
  // =========================

  const handleSaveDate = () => {
    const startDate =
      date
        .toISOString()
        .replace(/-|:|\.\d+/g, "");

    // default 2 jam acara
    const end = new Date(
      date.getTime() + 2 * 60 * 60 * 1000
    );

    const endDate =
      end
        .toISOString()
        .replace(/-|:|\.\d+/g, "");

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(
        title
      )}` +
      `&dates=${startDate}/${endDate}` +
      `&details=${encodeURIComponent(
        description
      )}` +
      `&location=${encodeURIComponent(
        location
      )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      ref={ref}
      className="relative flex h-[400px] w-full flex-col items-center justify-center text-white"
    >
      <ImagesDisplayY images={images} />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/70" />

      {/* Content */}
      <div className="z-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className={quicksand.className}
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6">
            {/* TITLE */}
            <motion.p
              variants={fadeVariants.up}
              className={`${playfair.className} text-3xl font-bold tracking-widest`}
            >
              SAVE THE DATE
            </motion.p>

            {/* COUNTDOWN */}
            <motion.div
              variants={fadeVariants.rotate}
              className="grid grid-cols-2 gap-2"
            >
              {[
                {
                  label: "Hari",
                  value: time.days,
                },

                {
                  label: "Jam",
                  value: time.hours,
                },

                {
                  label: "Menit",
                  value: time.minutes,
                },

                {
                  label: "Detik",
                  value: time.seconds,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${plusJakartaSans.className} flex h-16 w-16 flex-col items-center justify-center text-center`}
                >
                  <p className="text-2xl font-bold">
                    {item.value}
                  </p>

                  <p className="text-xs font-bold">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={fadeVariants.down}
              onClick={handleSaveDate}
              className="flex items-center gap-2 border-2 border-white px-2 py-1 transition hover:bg-white hover:text-black"
            >
              <Calendar1 size={16} />
              Simpan Tanggal
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}