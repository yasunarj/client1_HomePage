"use client";

import Container from "../layout/Container";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function CollaborationSection() {
  const title = useFadeInOnView();
  const collaboration = useFadeInOnView();
  const media = useFadeInOnView();
  return (
    <section className="py-20">
      <div>
        <Container>
          <h2
            ref={title.ref}
            className={`text-4xl font-bold text-center mb-16 reveal-text ${
              title.isVisible ? "revealed" : ""
            }`}
          >
            コラボ実績・メディア掲載
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-4">
            <div
              ref={collaboration.ref}
              className={`bg-white p-6 rounded-lg shadow-lg transition-opacity duration-500 ${
                collaboration.isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">コラボ実績</h3>
              <ul className="space-y-2 text-gray-600">
                <li>・大田原サウナセンター</li>
                <li>・栃木サウナフェスティバル</li>
                <li>・企業研修プログラム</li>
              </ul>
            </div>
            <div
              ref={media.ref}
              className={`bg-white p-6 rounded-lg shadow-lg transition-opacity duration-500 ${
                media.isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">メディア掲載</h3>
              <ul className="space-y-2 text-gray-600">
                <li>・栃木テレビ「サウナ特集」</li>
                <li>・地元新聞「熱波文化の広がり」</li>
                <li>・サウナ専門誌「熱波師インタビュー」</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
