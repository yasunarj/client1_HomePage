"use client";

import Container from "../layout/Container";
import Image from "next/image";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function OwnerSection() {
  const title = useFadeInOnView();
  const content = useFadeInOnView(0);

  return (
    // <section className="relative py-20 bg-gray-50 bg-gradient-to-r from-orange-800 to-yellow-200">
    <section className="relative py-20 bg-gray-50">
      <Container className="overflow-y-hidden">
        <h2
          ref={title.ref}
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
            title.isVisible ? "revealed" : ""
          }`}
        >
          <span>栃木サウナ熱波協会 代表</span>
        </h2>
        <div
          ref={content.ref}
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 transition-all duration-1000 ${
            content.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* 代表者写真 */}
          <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto">
            <Image
              src="/images/IMG_2959.png"
              alt="栃木サウナ熱波協会の代表熱波師・熱波送郎の写真"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>

          {/* メッセージ */}
          <div className={`text-center md:text-left flex flex-col`}>
            <div>
              <h3 className={`text-2xl md:text-4xl font-bold mb-4 md:mb-4`}>
                人を愛し、サウナを愛する漢
              </h3>
            </div>
            <div
              className={`flex items-end justify-center md:justify-start gap-6 md:gap-12`}
            >
              <p className="text-lg md:text-xl text-orange-600">代表熱波師</p>
              <h3 className="text-2xl md:text-3xl font-bold">熱波送郎</h3>
            </div>
            <div className="mt-16 flex flex-col gap-2">
              <div className="flex items-center gap-1 justify-center md:justify-start">
                <p className="text-2xl md:text-3xl font-bold inline-block">
                  3710
                </p>
                <p className="text-md md:text-2xl text-gray-900">
                  (サウナで創る１つの輪)
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-900 leading-relaxed w-[80%] mx-auto md:w-full">
                栃木県のサウナを熱くするために活動しております。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
