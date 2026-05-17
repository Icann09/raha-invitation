"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Disc3 } from "lucide-react";
import Opening from "@/components/luxury02/opening";
import Initials from "@/components/luxury02/initials";
import BrideAndGroom from "@/components/luxury02/brideandgroom";
import Date from "@/components/luxury02/date";
import WeddingEvent from "@/components/luxury02/weddingEvent";
import LoveStory from "@/components/luxury02/loveStory";
import Gallery from "@/components/luxury02/gallery";
import Gift from "@/components/luxury02/gift";
import RSVP from "@/components/luxury02/rsvp";
import Terimakaish from "@/components/luxury02/terimakasih";
import Cover from "@/components/luxury02/cover";
import { gallery, bride, groom, date, akadNikah, resepsi, loveStory, gift } from "@/data/luxury02"



export default function Page() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // PRELOAD IMAGES + SLIDESHOW
  useEffect(() => {
    gallery.couples.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.couples.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  // PLAY MUSIC WHEN OPEN
  useEffect(() => {
    if (!open || !audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, [open]);

  // OPEN INVITATION
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  // TOGGLE MUSIC
  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <div className="flex justify-center overflow-hidden">

      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/music.mp3" type="audio/mpeg" />
      </audio>

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 flex justify-center">
        <div className="relative h-[100dvh] w-full max-w-md overflow-hidden">

          {gallery.couples.slice(1,6).map((img, i) => (
            <motion.div
              key={`${img}-${i}`}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
              animate={{
                opacity: i === index ? 1 : 0,
                scale: i === index ? 1.08 : 1.02,
              }}
              transition={{
                opacity: { duration: 2 },
                scale: { duration: 10 },
              }}
            />
          ))}

          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative h-[100dvh] w-full max-w-md overflow-x-hidden overflow-y-auto">

        {/* MUSIC BUTTON */}
        <AnimatePresence>
          {open && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
              onClick={toggleMusic}
              className="fixed bottom-4 right-4 z-50"
            >
              <Disc3
                size={40}
                className={`text-black drop-shadow-xl ${
                  isPlaying ? "animate-spin" : ""
                }`}
              />
            </motion.button>
          )}
        </AnimatePresence>

        {/* PAGE TRANSITION */}
        <AnimatePresence mode="wait">

          {/* COVER */}
          <Suspense fallback={null}>
            {!open && (
              <motion.div
                key="cover"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  scale: 1.1,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-50"
              >
                <Cover
                  onClick={handleOpen}
                  images={gallery.couples}
                  bride={bride.nama}
                  groom={groom.nama}
                />
              </motion.div>
            )}
          </Suspense>

          {/* CONTENT */}
          {open && (
            <motion.main
              key="content"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <Opening bride={bride.nama} groom={groom.nama} dateDate={date.number} dateString={date.string}/>
              <Initials brideInitial={bride.initial} groomInitial={groom.initial}/>
              {/* <BrideAndGroom bride={bride} groom={groom} images={gallery.couples}/> */}
              <Date date={date.number} images={gallery.couples.slice(8, 13)}/>
              {/* <WeddingEvent akad={akadNikah} resepsi={resepsi} images={gallery.couples}/> */}
              <LoveStory stories={loveStory}/>
              <Gallery images1={gallery.couples.slice(0, 4)} images2={gallery.couples.slice(4, 10)} images3={gallery.couples.slice(5, 9)} image1={gallery.couples[1]} image2={gallery.couples[2]}/>
              <Gift rekening={gift.rekening} kado={gift.kado} image={gallery.couples[3]}/>
              <RSVP id={1}/>
              <Terimakaish images={gallery.couples}/>
            </motion.main>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}