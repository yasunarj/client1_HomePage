"use client";

import { planList } from "@/app/lib/planList";
import Container from "../layout/Container";
import PlanCard from "./PlanCard";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export default function PricingSection() {
  const title = useFadeInOnView();
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
          <h2 ref={title.ref} className="text-4xl font-bold text-center mb-16">
            <span className={`transition-color duration-[2s] ${title.isVisible ? "text-white" : "text-orange-600"}`}>料金プラン</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {planList.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
