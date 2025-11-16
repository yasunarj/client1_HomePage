"use client";

import Container from "../layout/Container";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function WhatIsNeppashiSection() {
  const title = useFadeInOnView();
  const text = useFadeInOnView();
  const image = useFadeInOnView();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-200 to-orange-300">
      <Container>
        <div className="max-w-5xl mx-auto overflow-hidden p-2">
          <div className="text-center mb-16">
            <h2
              ref={title.ref}
              className={`text-3xl sm:text-4xl font-bold mb-1 reveal-text ${
                title.isVisible ? "revealed" : ""
              }`}
            >
              熱波師とは？
            </h2>
            <div className="w-44 sm:w-52 h-1 bg-gradient-to-r from-orange-300 to-red-600 mx-auto rounded-full translate-x-[-4px]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 左側：説明文 */}
            <div
              ref={text.ref}
              className={`space-y-6 transition-opacity duration-500 ${
                text.isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="font-bold text-black">熱波師</span>
                とはサウナ室で熱波を送るプロフェッショナルです。
                サウナストーンに水をかけ蒸気（ロウリュ）を発生させタオルで扇ぎ熱波を送り、体感温度を急激に上げ発汗を促します。
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="font-bold text-black">
                  栃木サウナ熱波協会の熱波師は
                </span>
                アロマを使用し香りや、音楽に乗せたアウフグース、五感に訴えるパフォーマンスで「心」と「身体」を整える体験をお届けします。
                サウナで「整う」をより深く安全に楽しんでいただく事が、私たちの使命です
                。
              </p>
            </div>

            {/* 右側：ビジュアル要素 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl transform rotate-2"></div>
              <div
                ref={image.ref}
                className={`relative bg-white p-8 rounded-2xl shadow-xl transition-opacity duration-500 ${
                  image.isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* アイコン1 */}
                  <div className="bg-orange-50 py-6 px-3 rounded-xl">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-center">熱波</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      最適な高温度と湿度で熱波をお届けします
                    </p>
                  </div>

                  {/* アイコン2 */}
                  <div className="bg-red-50 py-6 px-3 rounded-xl">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-center">
                      五感へのアプローチ
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      視覚・聴覚・嗅覚・触覚・温覚
                    </p>
                  </div>

                  {/* アイコン3 */}
                  <div className="bg-orange-50 py-6 px-3 rounded-xl">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-center">安全への配慮</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      安全に熱波を楽しんでいただく為の知識
                    </p>
                  </div>

                  {/* アイコン4 */}
                  <div className="bg-red-50 py-6 px-3 rounded-xl">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-center">演出</h3>
                    <p className="text-sm text-gray-600 mt-2">
                    各熱波師の個性を発揮します
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
