"use client";

import Container from "../layout/Container";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import { performanceVideos } from "@/app/lib/performanceVideoList";

const NewPerformanceSection = () => {
  const title = useFadeInOnView();

  const mainVideo = performanceVideos[0];
  const subVideos = performanceVideos.slice(1);

  return (
    <section
      id="performance"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gray-950 py-20"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/30" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.35),transparent_35%)]" />

      <div className="relative z-10 w-full">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-orange-300">
              PERFORMANCE
            </p>

            <h2
              ref={title.ref}
              className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              <span
                className={`transition-colors duration-[2s] ${title.isVisible ? "text-white" : "text-orange-600"}`}
              >
                熱波パフォーマンス動画紹介
              </span>
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-sm leading-8 text-orange-50/90 sm:text-base">
              実際の熱波パフォーマンスの様子をご覧いただけます。
              タオルさばき、熱気、会場の一体感を動画で体験してください。
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${mainVideo.id}?rel=0`}
                  title={mainVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {subVideos.map((video) => (
                <div
                  key={video.id}
                  className="overflow-hidden rounded-xl border border-white/10 bg-black/35 shadow-lg shadow-black/30 backdrop-blur-sm"
                >
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default NewPerformanceSection;
