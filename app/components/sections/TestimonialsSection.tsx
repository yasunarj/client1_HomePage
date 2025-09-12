"use client";

import Container from "../layout/Container";
import { customerList } from "@/app/lib/customerList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import CustomerCard from "./CustomerCard";

export default function TestimonialsSection() {
  const title = useFadeInOnView();

  return (
    <section
      className="relative py-20 bg-gray-50"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="relative z-10">
        <Container>
          <h2
            ref={title.ref}
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            <div
              className={`flex flex-col sm:flex-row sm:justify-center transition-color duration-[2s] ${
                title.isVisible ? "text-white" : "text-orange-600"
              }`}
            >
              <span>お客様の声</span>
              <span className="text-xl sm:text-4xl">(サウナイキタイ投稿)</span>
            </div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-4">
            {customerList.map((testimonial, index) => (
              <CustomerCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
