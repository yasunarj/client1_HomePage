"use client";

import Container from "../layout/Container";
import { customerList } from "@/app/lib/customerList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import CustomerCard from "./CustomerCard";

export default function TestimonialsSection() {
  const title = useFadeInOnView();

  return (
    <section
      id="testimonials"
      className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden bg-stone-950 py-24"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/55" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,0.30),transparent_38%)]" />
      <div className="relative z-10 w-full">
        <Container>
          <div ref={title.ref} className="mb-14 text-center">
            <p
              className={`mb-3 text-sm font-semibold tracking-[0.35em] transition-colors duration-[2s] ${
                title.isVisible ? "text-orange-300" : "text-orange-700"
              }`}
            >
              VOICE
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span
                className={`transition-colors duration-[2s] ${
                  title.isVisible ? "text-white" : "text-orange-600"
                }`}
              >
                お客様の声
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-orange-300 to-red-600 sm:w-56" />

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-8 transition-colors duration-[2s] sm:text-base ${
                title.isVisible ? "text-orange-50/85" : "text-gray-500"
              }`}
            >
              実際に熱波を体験されたお客様から寄せられた声をご紹介します。
              <br className="hidden sm:block" />
              サウナイキタイへの投稿をもとに掲載しています。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {customerList.map((testimonial, index) => (
              <CustomerCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}