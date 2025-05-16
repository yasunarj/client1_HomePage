"use client";

import Image from "next/image";
import Container from "../layout/Container";
import { galleries } from "@/app/lib/galleryList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function GallerySection() {
  const title = useFadeInOnView();
  const galleryImage  = useFadeInOnView();
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 ref={title.ref} className={`text-4xl font-bold text-center mb-16 reveal-text ${title.isVisible ? "revealed" : ""}`}>ギャラリー</h2>
        <div ref={galleryImage.ref} className={`overflow-x-auto transition-opacity duration-500 ${galleryImage.isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex gap-4 w-max pb-4">
            {galleries.map((src, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-64 rounded-lg"
              >
                <Image
                  src={src}
                  fill
                  className="object-cover"
                  alt="ギャラリー画像"
                  loading="eager"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
