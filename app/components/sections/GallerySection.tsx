"use client";

import { galleries } from "@/app/lib/galleryList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import GalleryMarquee from "./fadeIn/GalleryMarquee";

export default function GallerySection() {
  const title = useFadeInOnView();
  const galleryImage = useFadeInOnView();

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

  // return (
  //   <section className="py-20 bg-gray-50">
  //     <div className={`w-full max-w-[100vw] overflow-x-hidden px-4`}>
  //       <div className="max-w-8xl mx-auto">
  //         <h2
  //           ref={title.ref}
  //           className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
  //             title.isVisible ? "revealed" : ""
  //           }`}
  //         >
  //           ギャラリー
  //           <div className="mt-1 w-36 sm:w-44 h-1 bg-gradient-to-r from-orange-300 to-red-600 mx-auto rounded-full "></div>
  //         </h2>
  //         <div
  //           ref={galleryImage.ref}
  //           className={`overflow-x-auto transition-opacity duration-500 ${
  //             galleryImage.isVisible ? "opacity-100" : "opacity-0"
  //           }`}
  //         >
  //           <div className="flex gap-4 w-max pb-4">
  //             {galleries.map((src, index) => (
  //               <div
  //                 key={index}
  //                 className="relative flex-shrink-0 w-80 h-64 lg:w-100 lg:h-80 xl:w-120 xl:h-96 rounded-lg"
  //               >
  //                 <Image
  //                   src={src}
  //                   fill
  //                   className="object-cover"
  //                   alt="栃木のサウナで熱波師がタオルを振る様子"
  //                   loading="eager"
  //                   priority={index < 4}
  //                 />
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
