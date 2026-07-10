"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/testImage/test-image.png",
  "/images/testImage/test-image2.png",
  "/images/testImage/test-image3.png",
  "/images/testImage/test-image4.png",
];

const SLIDE_DURATION = 6000;
const FADE_DURATION = 1000;

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentIndex) => {
        setPreviousImageIndex(currentIndex);

        return currentIndex === heroImages.length - 1 ? 0 : currentIndex + 1;
      });
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (previousImageIndex === null) return;

    const timer = setTimeout(() => {
      setPreviousImageIndex(null);
    }, FADE_DURATION);

    return () => clearTimeout(timer);
  }, [previousImageIndex]);

  return (
    <motion.section
      className="relative h-[100svh] w-full overflow-hidden bg-black"
      initial={{ opacity: 0, filter: "brightness(0.8)" }}
      animate={{ opacity: 1, filter: "brightness(1)" }}
      transition={{ duration: 0.8 }}
    >
      {heroImages.map((image, index) => {
        const isActive = index === currentImageIndex;
        const isPrevious = index === previousImageIndex;

        return (
          <div
            key={image}
            className={`absolute inset-0 ${
              isActive ? "z-10 animate-heroZoom" : ""
            } ${isPrevious ? "z-20 scale-110" : ""} ${
              !isActive && !isPrevious ? "z-0 scale-100" : ""
            }`}
          >
            <Image
              src={image}
              alt="熱波師がサウナ室で熱波を送る様子"
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-opacity duration-[1500ms] ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 z-20 bg-black/25" />

      <div className="relative z-30 flex h-full items-center justify-center px-4 text-center text-white">
        <div>
          <h1 className="mb-6 text-5xl font-bold tracking-[0.12em] drop-shadow-2xl md:text-7xl">
            熱波で整う
          </h1>
          <p className="text-xl tracking-wide drop-shadow-xl md:text-2xl">
            心と体を癒す、究極のサウナ体験
          </p>
        </div>
      </div>
    </motion.section>
  );
}
