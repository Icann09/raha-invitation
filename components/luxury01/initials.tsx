import { Quicksand } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500"],
});



export default function Initials() {
  return (
    <section className="h-auto flex flex-col items-center justify-center py-20 bg-gray-100">
      <div className="text-7xl flex gap-5 justify-center items-center">
        <p>D</p>
        <div className="bg-black w-[1px] h-[80px]"></div>
        <p>A</p>
      </div>
      <p className={quicksand.className + " text-center px-6 my-6 text-xs leading-relaxed italic"}>
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
      </p>
      <p className="text-xl italic">Q.S Ar-Rum : 21</p>
    </section>  
  )
}