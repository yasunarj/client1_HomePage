import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import Image from "next/image";

interface CustomerCardProps {
  src: string;
  name: string;
  role: string;
  comment: string;
}

const CustomerCard = ({ testimonial }: { testimonial: CustomerCardProps }) => {
  const fade = useFadeInOnView();
  return (
    <div ref={fade.ref} className={`bg-white p-8 shadow-lg rounded-lg transition-opacity duration-500 ${fade.isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 mr-4">
          <Image
            src={testimonial.src}
            alt={`${testimonial.name}様のプロフィール写真(サウナ常連のお客様)`}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          {/* <p className="text-gray-600">{testimonial.role}</p> */}
        </div>
      </div>
      <p className="text-gray-600 whitespace-pre-line">{testimonial.comment}</p>
    </div>
  );
};

export default CustomerCard;
