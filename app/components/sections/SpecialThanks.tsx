"use client";

import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import PartnerCard from "./PartnerCard";
import { partners } from "@/app/lib/partners";

const SpecialThanks = () => {
  const title = useFadeInOnView();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-orange-50 via-white to-stone-100 py-24">
      <div className="absolute bg-[radial-gradient(circle_at_50%_15%,rgba(251,146,60,0,20),transparent_35%)]" />
      <div className="absolute -left-32 top-32 h-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-red-200/25 blur-3xl" />

      <div className="relative z-10 w-full px-4">
        <div className="mx-auto max-w-7xl">
          <div ref={title.ref} className="mb-14 text-center">
            <p
              className={`mb-3 text-sm font-semibold tracking-[0.35em] transition-colors duration-[2s] ${title.isVisible ? "text-orange-500" : "text-orange-700"}`}
            >
              PARTNER
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span
                className={`transition-colors duration-[2s] ${title.isVisible ? "text-gray-900" : "text-orange-600"}`}
              >
                パートナー温泉施設
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-56 rounded-full bg-gradient-to-r from-orange-300 to-red-sm:w-72" />

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-8 transition-colors duration-[2s] sm:text-base ${title.isVisible ? "text-gray-600" : "text-gray-500"}`}
            >
              栃木サウナ熱波協会の活動を支えてくださっている、
              <br className="hidden sm:block" />
              大切なパートナー温泉施設をご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
    // <section className="py-20 bg-gray-50">
    //   <div className={`w-full max-w-[100vw] overflow-x-hidden px-4`}>
    //     <div className="max-w-8xl mx-auto">
    //       <h2
    //         ref={title.ref}
    //         className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
    //           title.isVisible ? "revealed" : ""
    //         }`}
    //       >
    //         <span>パートナー温泉施設</span>
    //         <div className="mt-1 w-68 sm:w-84 h-1 bg-gradient-to-r from-orange-300 to-red-600 mx-auto rounded-full "></div>
    //       </h2>

    //       <div
    //         className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1920px] mx-auto mb-4
    //     `}
    //       >
    //         {partners.map((p) => (
    //           <PartnerCard key={p.id} partner={p} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default SpecialThanks;
