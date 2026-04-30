"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ImagesDisplayY({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  const extendedImages = [...images, images[0]];

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // infinite reset
  useEffect(() => {
    if (index === images.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 2000); // ⬅️ match duration
    } else {
      setIsTransitioning(true);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`flex flex-col h-full ${
          isTransitioning
            ? "transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            : ""
        }`}
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {extendedImages.map((img, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
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
    </div>
  );
}