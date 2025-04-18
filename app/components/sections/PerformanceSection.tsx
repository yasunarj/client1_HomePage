import { stepList } from "@/app/lib/stepList";
import Container from "../layout/Container";

export default function PerformanceSection() {
  return (
    <section
      className="relative py-20 bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="relative z-10">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-white">熱波パフォーマンス紹介</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stepList.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="w-32 h-16 mx-auto mb-4 bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg md:mb-12">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/I97LDZ97h0s" // ←ここに実際のYouTube動画IDを入れてください
                  title="熱波パフォーマンス動画"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <span className="text-2xl">ここは自分たちの実際の動画を挿入してください</span>
              {/* 動画プレイヤー */}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
