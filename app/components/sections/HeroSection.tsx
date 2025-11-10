"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  return (
    <motion.div
      className="relative mt-16 h-[54svh] sm:h-[76svh] md:h-[76svh] lg:h-[96svh] flex items-center justify-center bg-white"
      // className="relative h-[100dvh] flex items-center justify-center bg-white"
      initial={{ opacity: 0, filter: "brightness(0.5)" }}
      animate={{ opacity: isImageLoaded ? 1 : 0, filter: "brightness(1)" }}
      transition={{ duration: 2 }}
    >
      {/* <Image
        src="/images/heropictureMobile.png"
        alt="熱波師がサウナ室で風を送る様子（栃木サウナ熱波協会）"
        fill
        // className="object-cover object-[65%_20%] sm:object-center"
        className="object-cover sm:hidden"
        loading="eager"
        priority
        quality={80}
        onLoadingComplete={() => setIsImageLoaded(true)}
      />
      <Image
        src="/images/表紙用写真.jpg"
        alt="熱波師がサウナ室で風を送る様子（栃木サウナ熱波協会）"
        fill
        // className="object-cover object-[65%_20%] sm:object-center"
        className="object-cover hidden sm:block md:[object-position:50%_35%]"
        loading="eager"
        priority
        quality={80}
        onLoadingComplete={() => setIsImageLoaded(true)}
      /> */}
      <Image
        src="/images/heroPicture.jpg"
        alt="熱波師がサウナ室で風を送る様子（栃木サウナ熱波協会）"
        fill
        // className="object-cover object-[65%_20%] sm:object-center"
        className="object-cover [object-position:50%_35%]   
          sm:[object-position:55%_35%]
          md:[object-position:50%_35%]"
        loading="eager"
        priority
        quality={80}
        onLoadingComplete={() => setIsImageLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className={`relative z-10 text-center text-white px-4`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp ">
          熱波で整う
        </h1>
        <p className="text-xl md:text-2xl animate-fadeInUp delay-300">
          心と体を癒す、究極のサウナ体験
        </p>
      </div>
    </motion.div>
  );
}
