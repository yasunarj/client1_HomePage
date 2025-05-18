"use client";

import Container from "../layout/Container";
import Image from "next/image";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function OwnerSection() {
  const title = useFadeInOnView();
  const content = useFadeInOnView(0);

  return (
    <section className="relative py-20 bg-gray-50">
      <Container>
        <h2
          ref={title.ref}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          <span
            className={`transition-all duration-1000 ${
              title.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            代表者メッセージ
          </span>
        </h2>
        <div
          ref={content.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            content.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* 代表者写真 */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <Image
              src="/images/IMG_2959.png"
              alt="代表取締役 山田太郎"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">熱波送郎</h3>
              <p className="text-sm opacity-90">栃木サウナ熱波協会代表</p>
            </div>
          </div>

          {/* メッセージ */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                熱波の芸術を通じて、心と体の調和を
              </h3>
              <p className="text-gray-700 leading-relaxed">
                私たち大田原熱波協会は、サウナの伝統的な文化と現代的な技術を融合させ、
                最高品質の熱波体験を提供することを使命としています。
                熱波の芸術を通じて、お客様の心と体に深い癒しと活力をお届けします。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                経営理念
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">
                    1
                  </span>
                  <p className="text-gray-700">
                    <span className="font-bold">安全と品質の追求</span>
                    <br />
                    最高の設備と技術で、安全で快適なサウナ体験を提供します。
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">
                    2
                  </span>
                  <p className="text-gray-700">
                    <span className="font-bold">お客様との信頼関係</span>
                    <br />
                    一人一人のお客様のニーズに寄り添い、心からのおもてなしを心がけます。
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">
                    3
                  </span>
                  <p className="text-gray-700">
                    <span className="font-bold">地域社会への貢献</span>
                    <br />
                    サウナ文化の普及を通じて、地域の健康と活力に貢献します。
                  </p>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-gray-700 italic">
                「熱波の芸術を通じて、皆様の心と体に癒しと活力をお届けします。
                私たちは、最高品質のサウナ体験を提供することをお約束します。」
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 