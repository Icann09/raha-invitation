"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImagesDisplayX({
  images,
}: {
  images: string[];
}) {

  // filter gambar kosong
  const validImages = images.filter(
    (img) => img && img.trim() !== ""
  );

  // kalau tidak ada gambar
  if (validImages.length === 0) {
    return null;
  }

  const extendedImages = [
    ...validImages,
    validImages[0],
  ];

  const [index, setIndex] = useState(0);

  const [isTransitioning, setIsTransitioning] =
    useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === validImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1000);
    } else {
      setIsTransitioning(true);
    }
  }, [index, validImages.length]);

  return (
    <div
      className={`flex h-full ${
        isTransitioning
          ? "transition-transform duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          : ""
      }`}
      style={{
        transform: `translateX(-${index * 100}%)`,
      }}
    >
      {extendedImages.map((img, i) => (
        <div
          key={i}
          className="w-full flex-shrink-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={img}
              alt={`image-${i}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}