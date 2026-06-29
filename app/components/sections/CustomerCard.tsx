"use client";

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
    <article
      ref={fade.ref}
      className={`relative h-full overflow-hidden rounded-lg border border-white/15 bg-white/95 p-6 shadow-2xl shadow-black/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-950/40 sm:p-8 ${
        fade.isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      <div className="absolute right-6 top-4 text-7xl font-bold leading-none text-orange-100">
        “
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-orange-100 bg-orange-50 shadow-lg">
            <Image
              src={displaySrc}
              alt={`${testimonial.name}様のプロフィール画像`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-bold text-gray-900">
              {testimonial.name}
            </h3>

            <p className="mt-1 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
              サウナイキタイ投稿
            </p>
          </div>
        </div>

        <p className="whitespace-pre-line text-left text-sm leading-8 text-gray-600 sm:text-base">
          {testimonial.comment}
        </p>
      </div>
    </article>
  );
};

export default CustomerCard;