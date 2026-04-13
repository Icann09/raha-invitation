import Image from "next/image";
import { Play } from "lucide-react";

export default function Preview() {
  return (
    <section className="py-24 px-6 bg-white text-center flex flex-col items-center">
      {/* Heading */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-4xl font-serif">
          See It In Action
        </h2>
        <p className="text-gray-600 mt-4">
          تجربه undangan digital yang elegan, interaktif, dan mudah digunakan.
        </p>
      </div>

      {/* Preview Card */}
      <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl group">
        
        {/* Image */}
        <Image
          src="/images/MOCKUP-3.png"
          alt="Preview"
          width={500}
          height={800}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-primary ml-1" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="mt-8 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
        View Live Demo
      </button>
    </section>
  );
}