import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import Image from "next/image";

export interface CustomerCardProps {
  src: string | null;
  name: string;
  role: string;
  comment: string;
  sex: "male" | "female";
}

const defaultSrc = (sex: "male" | "female") => {
  return sex === "male"
    ? "/avatars/sauna-avatar-male.png"
    : "/avatars/sauna-avatar-female.png";
};

const CustomerCard = ({ testimonial }: { testimonial: CustomerCardProps }) => {
  const fade = useFadeInOnView();
  const displaySrc = testimonial.src ?? defaultSrc(testimonial.sex);
  return (
    <div
      ref={fade.ref}
      className={`bg-white p-8 shadow-lg rounded-lg transition-opacity duration-500 ${
        fade.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-20 h-20 mr-4">
          <Image
            src={displaySrc}
            alt={`${testimonial.name}様のプロフィール画像`}
            fill
            className="object-cover rounded-full"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, #000 49%, transparent 50%)",
              maskImage: "radial-gradient(circle, #000 49%, transparent 50%)",
            }}
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
