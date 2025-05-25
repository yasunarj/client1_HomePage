import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import Image from "next/image";

interface StaffCardProps {
  src: string;
  name: string;
  role: string;
  description: string;
}

const StaffCard = ({ staff }: { staff: StaffCardProps }) => {
  const fade = useFadeInOnView();
  return (
    <div
      ref={fade.ref}
      className={`bg-white p-6 rounded-lg shadow-lg text-center transition-opacity duration-500 ${
          fade.isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className="w-48 h-48 mx-auto mb-4 relative rounded-full overflow-hidden  
        "
      >
        <Image
          src={staff.src}
          fill
          alt={`栃木サウナ熱波協会 所属熱波師 ${staff.name} (${staff.role})`}
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{staff.name}</h3>
      <p className="text-orange-500 mb-4">{staff.role}</p>
      <p className="text-gray-600">{staff.description}</p>
    </div>
  );
};

export default StaffCard;
