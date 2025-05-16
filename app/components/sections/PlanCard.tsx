"use client";

import { useFadeInOnView } from "@/hooks/useFadeInOnView";

interface PlanCardProps {
  name: string;
  duration: string;
  description: string;
  price: string;
}

const PlanCard = ({ plan }: { plan: PlanCardProps }) => {
  const fade = useFadeInOnView();
  return (
    <div
      ref={fade.ref}
      className={`bg-white p-8 rounded-lg shadow-lg text-center transition-opacity duration-500 ${
        fade.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
      <p className="text-gray-600 mb-2">{plan.duration}</p>
      <p className="text-gray-600 mb-6">{plan.description}</p>
      <p className="text-3xl font-bold text-orange-500">{plan.price}</p>
    </div>
  );
};

export default PlanCard;
