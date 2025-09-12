"use client";
import Link from "next/link";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

export type Partner = {
  id: string;
  href: string;
  bigLabel: string;            // 例: "太陽" / "佐野" / "小山"
  titleLines: [string, string]; // 例: ["大田原温泉", "太陽の湯"]
  description: string;
};

type Props = {
  partner: Partner;
  // ふわっと表示のディレイ（任意）
  delayMs?: number;
};

export default function PartnerCard({ partner, delayMs = 0 }: Props) {
  const fade = useFadeInOnView();

  return (
    <Link
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl"
      ref={fade.ref}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div
        className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col
          ${fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* 画像の代わりの色面（比率固定） */}
        <div className="aspect-video relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600
              opacity-90 group-hover:opacity-100 transition-opacity`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl text-white/95 font-bold tracking-widest">
              {partner.bigLabel}
            </span>
          </div>
        </div>

        {/* 本文 */}
        <div className="p-6 text-center flex flex-col gap-2 flex-1">
          <h3 className="text-xl md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors flex flex-col gap-1">
            <span>{partner.titleLines[0]}</span>
            <span>{partner.titleLines[1]}</span>
          </h3>
          <p className="text-gray-600">{partner.description}</p>
        </div>
      </div>
    </Link>
  );
}
