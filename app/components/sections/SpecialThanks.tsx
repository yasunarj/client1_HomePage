"use client";

import Container from "../layout/Container";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function SpecialThanks() {
  const title = useFadeInOnView();
  const content = useFadeInOnView();

  return (
    <section className="relative py-20 bg-gray-50">
      <Container>
        <h2
          ref={title.ref}
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
            title.isVisible ? "revealed" : ""
          }`}
        >
          <span>パートナー温泉施設</span>
        </h2>

        {/* items-stretch + 各カードに h-full を付けて高さを揃える */}
        <div
          ref={content.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch transition-all duration-1000 ${
            content.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* === カード共通：a を block + h-full、内側を flex-col で揃える === */}

          {/* 大田原温泉 太陽の湯 */}
          <a
            href="https://www.instagram.com/ohtawaraonsen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* 画像（比率固定） */}
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-white/95 font-bold tracking-widest">太陽</span>
                </div>
              </div>

              {/* 本文 */}
              <div className="p-6 text-center flex flex-col gap-2 flex-1">
                {/* 見出しは常に縦積みで段差が出ないように */}
                <h3 className="text-xl md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors flex flex-col gap-1">
                  <span>大田原温泉</span>
                  <span>太陽の湯</span>
                </h3>

                {/* 説明は自動高さ。行数制限したい場合は line-clamp を導入 */}
                <p className="text-gray-600">
                  大田原市の中心部に位置する、地域に愛される温泉施設です。
                </p>
              </div>
            </div>
          </a>

          {/* 佐野やすらぎの湯 */}
          <a
            href="https://www.instagram.com/sanoyasuraginoyu/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-white/95 font-bold tracking-widest">佐野</span>
                </div>
              </div>
              <div className="p-6 text-center flex flex-col gap-2 flex-1">
                <h3 className="text-xl md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors flex flex-col gap-1">
                  <span>スーパー銭湯</span>
                  <span>佐野やすらぎの湯</span>
                </h3>
                <p className="text-gray-600">
                  栃木県の佐野市にて人気のスーパー銭湯です。天然温泉やゆったり楽しめるサウナなど、今日も良いお湯ととのってます!!
                </p>
              </div>
            </div>
          </a>

          {/* 小山やすらぎの湯 */}
          <a
            href="https://www.instagram.com/oyamayasuragi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-white/95 font-bold tracking-widest">小山</span>
                </div>
              </div>
              <div className="p-6 text-center flex flex-col gap-2 flex-1">
                <h3 className="text-xl md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors flex flex-col gap-1">
                  <span>スーパー銭湯</span>
                  <span>小山やすらぎの湯</span>
                </h3>
                <p className="text-gray-600">
                  栃木県小山市のスーパー銭湯です。サウナや炭酸泉、美泡風呂等お楽しみいただけます。
                </p>
              </div>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}

