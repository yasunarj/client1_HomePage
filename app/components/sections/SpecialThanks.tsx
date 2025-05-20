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
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${title.isVisible ? "revealed" : ""}`}
        >
          <span>
            パートナー温泉施設
          </span>
        </h2>
        <div
          ref={content.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 pb-2 items-center transition-all duration-1000 ${
            content.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* 太陽の湯 */}
          <a
            href="https://www.instagram.com/ohtawaraonsen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-2xl  shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🌞</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                  大田原温泉 太陽の湯
                </h3>
                <p className="text-gray-600 h-[52px]">
                  大田原市の中心部に位置する、地域に愛される温泉施設です。
                </p>
              </div>
            </div>
          </a>

          {/* やすらぎの湯 */}
          <a
            href="https://www.instagram.com/oyamayasuragi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">♨️</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  スーパー銭湯 小山やすらぎの湯
                </h3>
                <p className="text-gray-600 h-[52px]">
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