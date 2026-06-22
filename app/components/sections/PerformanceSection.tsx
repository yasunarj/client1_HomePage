"use client";

// import { stepList } from "@/app/lib/stepList";
// import StepCard from "./StepCard";

import Container from "../layout/Container";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function PerformanceSection() {
  const title = useFadeInOnView();
  return (
    <section
      id="performance"
      className="relative py-20 bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="relative z-10">
        <Container>
          <h2 ref={title.ref} className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className={`transition-color duration-[2s] ${title.isVisible ? "text-white" : "text-orange-600"}`}>熱波パフォーマンス動画紹介</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stepList.map((step, index) => (
                <StepCard key={index} step={step} />
              ))}
            </div> */}
            <div className="aspect-video bg-gray-200 rounded-lg md:mb-12">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  // src="https://www.youtube.com/embed/OWou7t5NmDE?rel=0" 
                  src="https://www.youtube.com/embed/-M3AcJQhIcM?rel=0"
                  title="熱波パフォーマンス動画"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              {/* 動画プレイヤー */}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}