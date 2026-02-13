import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface StaffCardProps {
  src: string;
  name: string;
  role: string;
  description: string;
  handle?: string;
  xHandle?: string;
}

const StaffCard = ({ staff }: { staff: StaffCardProps }) => {
  const fade = useFadeInOnView();
  return (
    <div
      ref={fade.ref}
      className={`bg-white p-6 rounded-lg shadow-lg text-center transition-opacity duration-500 ${
        fade.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="w-48 h-52 mx-auto mb-4 relative rounded-2xl overflow-hidden  
        "
      >
        <Image
          src={staff.src}
          fill
          alt={`栃木サウナ熱波協会 所属熱波師 ${staff.name} (${staff.role})`}
          className="object-cover"
          sizes="192px"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{staff.name}</h3>
      <p className="mb-1">{staff.role}</p>
      {/* SNSリンクを条件付きで表示する */}
      <div className="flex flex-col items-center gap-1 mb-4 w-full">
        {staff.handle && (
          <a
            href={`https://www.instagram.com/${staff.handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-orange-500 hover:text-orange-800 font-bold w-full overflow-hidden "
            aria-label={`Instagram ${staff.name}`}
          >
            <FaInstagram />
            <div className="flex items-center gap-2 ">
              Instagram <p className="2xl:hidden">@{staff.handle}</p>
            </div>
          </a>
        )}
        {staff.xHandle && (
          <a
            href={`https://x.com/${staff.xHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-blue-500 hover:text-blue-700 font-bold w-full overflow-hidden"
            aria-label={`X ${staff.name}`}
          >
            <FaXTwitter />
            <div className="flex items-center gap-2">
              <p>@{staff.xHandle}</p>
            </div>
          </a>
        )}
      </div>
      <p className="text-gray-600 whitespace-pre-line text-left">
        {staff.description}
      </p>
    </div>
  );
};

export default StaffCard;
