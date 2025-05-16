import { useFadeInOnView } from "@/hooks/useFadeInOnView";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard = ({faq}: {faq: FAQCardProps}) => {
  const fade = useFadeInOnView();
  return (
    <div ref={fade.ref} className={`bg-white p-6 rounded-lg shadow-lg space-y-4 transition-opacity duration-500 ${fade.isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="flex">
        <span className="text-orange-500 font-bold text-xl mr-2">Q.</span>
        <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
      </div>
      <div className="flex">
        <span className="mr-7"></span>
        <p className="text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
