"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImagesDisplayFade({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // lebih slow = lebih elegan

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">

      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${i === index ? "opacity-100 scale-[1.02] z-10" : "opacity-0 scale-100 z-0"}
          `}
        >
          <Image
            src={img}
            alt={`image-${i}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

    </div>
  );
}