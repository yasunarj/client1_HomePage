"use client";

import Container from '../layout/Container';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

export default function TrainingSection() {
  const title = useFadeInOnView();
  const fade = useFadeInOnView();
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 ref={title.ref} className={`text-4xl font-bold text-center mb-16 reveal-text ${title.isVisible ? "revealed" : ""}`}>
          熱波師になるには
        </h2>
        <div className="max-w-3xl mx-auto mb-4">
          <div ref={fade.ref} className={`bg-white p-8 rounded-lg shadow-lg transition-opacity duration-500 ${fade.isVisible ? "opacity-100" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold mb-6">育成プログラム</h3>
            <p className="text-gray-600 mb-6">
              当協会では、熱波文化を広げるために熱波師の育成プログラムを実施しています。
              基礎から応用まで、実践的な技術を学ぶことができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">基礎コース</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>熱波の基本技術</li>
                  <li>安全対策</li>
                  <li>コミュニケーションスキル</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">応用コース</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>高度な熱波技術</li>
                  <li>イベント演出</li>
                  <li>インストラクター養成</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 