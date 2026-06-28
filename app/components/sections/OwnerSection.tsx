"use client";

import Container from "../layout/Container";
import Image from "next/image";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import { FaInstagram } from "react-icons/fa";

export default function OwnerSection() {
  const title = useFadeInOnView();
  const content = useFadeInOnView(0);

  return (
    <section
      id="owner"
      className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden bg-gradient-to-br from-stone-950 via-neutral-950 to-red-950 py-24"
    >
      {/* 背景の熱量 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_35%,rgba(249,115,22,0.32),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.20),transparent_32%)]" />
      <div className="absolute inset-0 bg-black/30" />

      <Container className="relative z-10 overflow-hidden">
        <div ref={title.ref} className="mb-14 text-center">
          <p
            className={`mb-3 text-sm font-semibold tracking-[0.35em] transition-colors duration-[2s] ${title.isVisible ? "text-orange-300" : "text-orange-700"}`}
          >
            OWNER
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            <span
              className={`transition-colors duration-[2s] ${title.isVisible ? "text-white" : "text-orange-600"}`}
            >
              栃木サウナ熱波協会 代表
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-64 rounded-full bg-gradient-to-r from-orange-300 to-red-600 sm:w-96" />
        </div>

        <div
          ref={content.ref}
          className={`grid grid-cols-1 items-center gap-10 transition-all duration-1000 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 ${
            content.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {/* grid-cols-[0.9fr_1.1fr]の意味は  写真側(左)を少し狭く 文章側(右)を少し広くという意味*/}

          {/* 代表者写真 */}
          <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[430px]">
            <div className="absolute -inset-4 rounded-[2em] bg-gradient-to-br from-orange-400/40 to-red-700/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-black shadow-2xl shadow-black/50">
              {/* remはHTML要素の基準フォントサイズを元にしている、emはその親要素を基準にしたサイズ */}
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/atunamiokurou.JPG"
                  alt="栃木サウナ熱波協会の代表熱波師・熱波送郎の写真"
                  fill
                  className="object-cover object-[70%_center]"
                  // 70%_center は画像を横にずらして調整をしている
                  priority
                  sizes="(max-width: 1024px) 380px, 430px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-2 inline-block border border-orange-300/40 bg-orange-500/20 px-4 py-1 text-sm font-bold tracking-[0.22em] text-orange-100 backdrop-blur-sm">
                    代表熱波師
                  </p>

                  <h3 className="text-4xl font-bold text-white drop-shadow-xl md:text-5xl">
                    熱波送郎
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* メッセージ */}

          <div className="text-center text-white lg:text-left">
            <p className="mb-4 text-sm font-bold tracking-[0.28em] text-orange-300">
              MESSAGE
            </p>

            <h3 className="text-3xl font-bold leading-tight tracking-wide md:text-5xl">
              人を愛し、
              <br />
              サウナを愛する漢
            </h3>

            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <a
                href="https://www.instagram.com/atunami_okuro37/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/15 px-5 py-3 text-sm font-bold text-orange-100 backdrop-blur-sm transition hover:border-orange-300/60 hover:bg-orange-500/25"
                aria-label="Instagram Owner"
              >
                <FaInstagram />
                <span>Instagram @atunami_okuro37</span>
              </a>
            </div>

            <div className="mt-10 rounded-lg border border-white/10 bg-white/10 p-6 text-left shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex items-end gap-3">
                <p className="text-4xl font-bold text-orange-300 md:text-5xl">
                  3710
                </p>
                <p className="pb-1 text-sm font-bold text-orange-50/85 md:text-base">
                  サウナで作る１つの輪
                </p>
              </div>
              <p className="text-base leading-9 text-orange-50/90 md:text-lg">
                栃木県のサウナを熱くするため、盛り上げるために活動しております。
                <br />
                お客様の心を掴むトークと、究極の「整う」を追求した熱波をお届けします。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
