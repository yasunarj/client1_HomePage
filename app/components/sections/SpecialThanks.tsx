"use client";

import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import PartnerCard from "./PartnerCard";
import { partners } from "@/app/lib/partners";

const SpecialThanks = () => {
  const title = useFadeInOnView();

  return (
    <section className="py-20 bg-gray-50">
      <div className={`w-full max-w-[100vw] overflow-x-hidden px-4`}>
        <div className="max-w-8xl mx-auto">
          <h2
            ref={title.ref}
            className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
              title.isVisible ? "revealed" : ""
            }`}
          >
            <span>パートナー温泉施設</span>
          </h2>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1920px] mx-auto mb-4
        `}
          >
            {partners.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialThanks;
