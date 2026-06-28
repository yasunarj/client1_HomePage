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
    <article
      ref={fade.ref}
      className={`group h-full overflow-hidden rounded-lg border border-white/10 bg-white/95 shadow-xl shadow-black/30 transition-all duration-500 hover:translate-y-2 hover:shadow-2xl hover:shadow-orange-950/40 ${fade.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      <div className="relative aspect-[11/12] overflow-hidden bg-stone-900">
        <Image
          src={staff.src}
          fill
          alt={`栃木サウナ熱波協会 所属熱波師 ${staff.name} (${staff.role})`}
          className="object-cover object- transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw (max-width: 1536px) 33vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 text-left">
          <p className="mb-2 inline-block border border-border-orange-300/40 bg-orange-500/20 px-3 py-1 text-xs font-bold tracking-[0.3em] text-orange-100 backdrop-blur-sm">
            熱波師
          </p>

          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {staff.name}
          </h3>

          <p className="mt-1 text-sm font-bold text-orange-200">{staff.role}</p>
        </div>
      </div>

      <div className="flex h-full flex-col p-6">
        {(staff.handle || staff.xHandle) && (
          <div className="mb-5 flex flex-wrap justify-center gap-3">
            {staff.handle && (
              <a
                href={`https://www.instagram.com/${staff.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 font-bold text-orange-600 transition hover:border-orange-300 hover:bg-orange-100 hover-text-orange-700"
                aria-label={`Instagram ${staff.name}`}
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            )}

            {staff.xHandle && (
              <a
                href={`https://x.com/${staff.xHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-600 transition hover:border-sky-300 hover:bg-sky-100 hover:text-sky700"
                aria-label={`X ${staff.name}`}
              >
                <FaXTwitter />
                <span>${staff.xHandle}
                </span>
              </a>
            )}
          </div>
        )}

        <p className="whitespace-pre-line text-left text-sm leading-7 text-gray-600">
          {staff.description}
        </p>
      </div>
    </article>
  );
};

export default StaffCard;