"use client";

import { galleries } from "@/app/lib/galleryList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import GalleryMarquee from "./fadeIn/GalleryMarquee";

export default function GallerySection() {
  const title = useFadeInOnView();
  const galleryImage = useFadeInOnView(0.2);

  const upperGalleries = galleries.filter((_, index) => index % 2 === 0);
  const lowerGalleries = galleries.filter((_, index) => index % 2 !== 0);

  return (
    <section id="gallery" className="relative flex min-h-[100svh] items-center overflow-hidden bg-neutral-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,022),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.88),rgba(24,10,5,0,92),rgba(0,0,0,0.9))]" />

      <div className="relative z-10 w-full">
        <div className="mx-auto mb-14 max-w-4xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-orange-300">
            GALLERY
          </p>
          <h2
            ref={title.ref}
            className={`reveal-text-white text-3xl font-bold text-white sm:text-4xl md:text-5xl ${title.isVisible ? "revealed" : ""}`}
          >
            ギャラリー
          </h2>
          <div className="mx-auto mt-4 h-1 w-36 rounded-full bg-gradient-to-r from-orange-300 to-red-600 sm:w-44" />
          Ï
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-orange-50/80 sm:text-base">
            熱波パフォーマンスの臨場感、会場の熱気、参加者の表情を写真でご覧ください
          </p>
        </div>

        <div
          ref={galleryImage.ref}
          className={`space-y-6 transition-opacity duration-700 ${galleryImage.isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <GalleryMarquee images={upperGalleries} direction="left" />
          <GalleryMarquee images={lowerGalleries} direction="right" />
        </div>
      </div>
    </section>
  );
}
