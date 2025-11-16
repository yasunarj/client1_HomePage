"use client";

import Image from "next/image";
import { galleries } from "@/app/lib/galleryList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function GallerySection() {
  const title = useFadeInOnView();
  const galleryImage = useFadeInOnView();
  return (
    <section className="py-20 bg-gray-50">
      <div className={`w-full max-w-[100vw] overflow-x-hidden px-4`}>
        <div className="max-w-8xl mx-auto">
          <h2
            ref={title.ref}
            className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
              title.isVisible ? "revealed" : ""
            }`}
          >
            ギャラリー
            <div className="mt-1 w-36 sm:w-44 h-1 bg-gradient-to-r from-orange-300 to-red-600 mx-auto rounded-full "></div>
          </h2>
          <div
            ref={galleryImage.ref}
            className={`overflow-x-auto transition-opacity duration-500 ${
              galleryImage.isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex gap-4 w-max pb-4">
              {galleries.map((src, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-80 h-64 lg:w-100 lg:h-80 xl:w-120 xl:h-96 rounded-lg"
                >
                  <Image
                    src={src}
                    fill
                    className="object-cover"
                    alt="栃木のサウナで熱波師がタオルを振る様子"
                    loading="eager"
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
