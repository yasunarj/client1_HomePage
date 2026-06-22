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
  // previousImageIndex の役割は画像が切り替わる時に切り替え前の画像の scale が 100 に戻らないように維持するため。nullになるまでの画像切り替え後の１秒間は scale-110 を維持するようにするために画像が縮まない

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

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import hero from "@/public/images/heroPicture.jpg";

// export default function HeroSection() {
//   const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
//   return (
//     <motion.div
//       className="relative mt-16 h-[54svh] sm:h-[76svh] md:h-[76svh] lg:h-[96svh] flex items-center justify-center bg-gray-800"
//       // className="relative h-[100dvh] flex items-center justify-center bg-white"
//       initial={{ opacity: 0, filter: "brightness(0.5)" }}
//       // animate={{ opacity: isImageLoaded ? 1 : 0, filter: "brightness(1)" }}
//       animate={{ opacity: 1, filter: "brightness(1)" }}
//       transition={{ duration: 0.8 }}
//     >
{
  /* <Image
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
      /> */
}
//       <Image
//         src={hero}
//         alt="熱波師がサウナ室で風を送る様子（栃木サウナ熱波協会）"
//         fill
//         // className="object-cover object-[65%_20%] sm:object-center"
//         className={`object-cover [object-position:50%_35%]
//           sm:[object-position:55%_35%]
//           md:[object-position:50%_35%] transition-opacity duration-700 ${ isImageLoaded ? "opacity-100" : "opacity-0" }`}
//         loading="eager"
//         priority
//         sizes="100vw"
//         placeholder="blur"
//         onLoadingComplete={() => setIsImageLoaded(true)}
//       />
//       <div className="absolute inset-0 bg-black/20"></div>
//       <div className={`relative z-10 text-center text-white px-4`}>
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp ">
//           熱波で整う
//         </h1>
//         <p className="text-xl md:text-2xl animate-fadeInUp delay-300">
//           心と体を癒す、究極のサウナ体験
//         </p>
//       </div>
//     </motion.div>
//   );
// }
