"use client";

import { Playfair_Display, Quicksand } from "next/font/google";
import {useActionState, useEffect, useRef, useState, useTransition } from "react";
import { motion, useInView } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { submitWish, getWishes } from "@/lib/action";

const playfair =
  Playfair_Display({
    subsets: ["latin"],
    style: ["italic", "normal"],
    weight: ["400", "600"],
  });

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"],
});

interface Wish {
  id: string;
  name: string;
  message: string;
  attendance: string;
}

const initialState = {
  success: false,
  message: "",
};

export default function RSVP({id}: {id: number}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px",
  });

  const [state, formAction] =
  useActionState(
    submitWish,
    initialState
  );

  const [wishData, setWishData] =
    useState<Wish[]>([]);

  const [isPending, startTransition] =
    useTransition();

  const [submitted, setSubmitted] =
    useState(false);

  // =========================
  // FETCH WISHES
  // =========================

  async function fetchWishes() {
    const data = await getWishes(id);

    setWishData(data as Wish[]);
  }

  useEffect(() => {
    fetchWishes();
  }, []);

  // =========================
  // AFTER SUBMIT
  // =========================

  useEffect(() => {
    if (state.success) {
      setSubmitted(true);

      fetchWishes();
    }
  }, [state]);

  return (
    <section
      ref={ref}
      className={`${quicksand.className} flex items-center justify-center bg-white px-4 py-16 text-sm text-[#5e5e5e]`}
    >
      <motion.div
        variants={fadeVariants.zoom}
        initial="hidden"
        animate={
          isInView
            ? "visible"
            : "hidden"
        }
        transition={{ duration: 0.8 }}
        className="relative z-10 flex w-full max-w-xl flex-col items-center text-center"
      >
        {/* TITLE */}
        <h1
          className={`${playfair.className} pb-2 text-[35px] italic`}
        >
          Ucapan & RSVP
        </h1>

        {!submitted && (
          <p className="my-2">
            Berikan doa dan ucapan terbaik
            untuk kami
          </p>
        )}

        {/* ========================= */}
        {/* FORM / THANK YOU */}
        {/* ========================= */}

        {!submitted ? (
          <form
            action={(formData) =>
              startTransition(() => {
                formAction(formData);
              })
            }
            className={` mt-6 flex w-full flex-col gap-3`}
          >
            <input
              type="hidden"
              name="invitationId"
              value={id}
            />
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Nama"
              required
              className="w-full border-2 border-[#5e5e5e] p-3 outline-none placeholder:text-[#5e5e5e]/50"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Tulis ucapanmu di sini..."
              required
              className="h-28 w-full resize-none border-2 border-[#5e5e5e] p-3 outline-none placeholder:text-[#5e5e5e]/50"
            />

            {/* ATTENDANCE */}
            <select
              name="attendance"
              required
              className="w-full border-2 border-[#5e5e5e] p-3 outline-none"
            >
              <option value="">
                Pilih Kehadiran
              </option>

              <option value="HADIR">
                Hadir
              </option>

              <option value="TIDAK_HADIR">
                Tidak Hadir
              </option>
            </select>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isPending}
              className="mt-2 bg-[#5e5e5e] py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {isPending
                ? "Mengirim..."
                : "Kirim"}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className={` mt-3 flex flex-col items-center`}
          >
            

            <p className="mt-6 max-w-md text-[#5e5e5e]/80 font-bold">
              Terima kasih atas doa dan
              ucapan yang telah diberikan
              untuk kami.
            </p>
            <div className="mt-2 text-2xl">
              🤍
            </div>
          </motion.div>
        )}

        {/* ========================= */}
        {/* WISHES */}
        {/* ========================= */}

        <motion.div
          variants={fadeVariants.up}
          initial="hidden"
          animate={
            isInView
              ? "visible"
              : "hidden"
          }
          transition={{ duration: 0.8 }}
          className="mt-8 mb-4 flex h-[400px] w-full flex-col gap-5 overflow-y-auto text-left"
        >
          {wishData.map((wish) => (
            <div
              key={wish.id}
              className={` border-b-2  border-[#5e5e5e]/20 pb-5`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={` font-bold`}
                >
                  {wish.name}
                </p>

                <span className="text-xs opacity-70">
                  {wish.attendance ===
                  "HADIR"
                    ? "Hadir"
                    : "Tidak Hadir"}
                </span>
              </div>

              <p className="leading-relaxed">
                {wish.message}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}