"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

const StepCard = ({ step }: { step: StepCardProps }) => {
  const fade = useFadeInOnView();
  return (
    <div
      ref={fade.ref}
      className={`bg-white p-6 rounded-lg shadow-lg text-center transform-opacity duration-500 ${
        fade.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-32 h-16 mx-auto mb-4 bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
        {step.step}
      </div>
      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
};

export default StepCard;
