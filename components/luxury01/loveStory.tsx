import { Playfair_Display, Ballet, Plus_Jakarta_Sans, Quicksand } from "next/font/google";



const ballet = Ballet({subsets: ["latin"], weight: ["400"]});
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"]
});

const stories = [
  {
    date: "25 AGUSTUS 2023",
    story: "Berawal dari tempat pekerjaan Cianjur-2023, kami mengenal satu sama lain dan belum ada benih cinta kala itu, hanya sebatas teman kerja."
  },
  {
    date: "03 JUNI 2024",
    story: "Setelah cukup mengenal satu sama lain, satu tahun kurang lebih nya kami menjalin hubungan. 03 Juni 2024 Akhirnya kita memutuskan untuk melanjutkan ke Hubungan yang lebih serius mempertemukan kedua keluarga."
  },
  {
    date: "29 DESEMBER 2025",
    story: "Sampai tanggal ini kami melaksanakan akad terlebih dahulu dan akhirnya kami mengubah status hingga menjadi pasangan suami istri. Semoga allah swt. Memberikan keberkahan pernikahan ini. AMIN"
  },
]


export default function LoveStory() {
  return (
    <section className="h-auto flex flex-col items-center justify-center text-gray-700 bg-white pb-10">

      {/* Title */}
      <div className="flex items-end w-full max-w-full ml-12 mt-12">
        <div className="w-[30%] flex text-4xl leading-none flex-col text-left ">
          <h1 className={playfair.className + " italic"}>Love</h1>
          <h1 className={ballet.className + " ml-2"}>Story</h1>
        </div>
        <div className="w-[70%] h-[2px] bg-gray-700 mb-1"></div>
      </div>

      {/* Stories  */}
      <div className={quicksand.className + " flex flex-col text-center my-16 px-8 gap-20"}>
        {stories.map((story, i) => (
          <div key={i}>
            <h3 className={plusJakartaSans.className + " font-bold mb-4"}>
              {story.date}
            </h3>
            <p className="text-sm">
              {story.story}
            </p>
          </div>
        ))}

      {/* Video  */}
      <div className="w-full flex justify-center mt-10">
        <div className="relative w-full max-w-md aspect-video overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/VZLeb_q1x2g"
            title="Love Story Video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      </div>
    </section>
  )
}