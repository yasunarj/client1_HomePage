"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import Image from "next/image";

export type Partner = {
  id: string;
  href: string;
  bigLabel: string; // 例: "太陽" / "佐野" / "小山"
  image: string;
  titleLines: [string, string]; // 例: ["大田原温泉", "太陽の湯"]
  description: string;
};

type Props = {
  partner: Partner;
  // ふわっと表示のディレイ（任意）
};

export default function PartnerCard({ partner }: Props) {
  const fade = useFadeInOnView();

  return (
    <article
      ref={fade.ref}
      className={`group h-full overflow-hidden rounded-lg border border-orange-100 bg-white shadow-xl shadow-orange-950/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-950/20 ${fade.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {/* groupはこのプロパティにつけられた要素に何かしらのアクションが発生した時に小要素に指定したtransitionが動作するように設定している */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={partner.image}
          fill
          alt={`栃木サウナ熱波協会 パートナー温泉施設 ${partner.titleLines[1]}`}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

        <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-black/20 px-4 py-1 text-sm font-bold tracking-[0.2em] text-white shadow-lg backdrop-blur-sm">
        {/* white/30 の30とはopacityで良いのか？ */}
          {partner.bigLabel}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 text-center">
        <h3 className="flex flex-col gap-1 text-xl font-bold leading-8 text-gray-900 md:text-2xl">
          <span>{partner.titleLines[0]}</span>
          <span>{partner.titleLines[1]}</span>
        </h3>

        <a
          href={`https://www.instagram.com/${partner.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-4 inline-flex w-fit items-center justify-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600 transition hover:border-orange-300 hover:bg-orange-100 hover:text-orange-700"
        >
          {/* inline-flexとw-fitの役割がわからない */}
          Instagram @{partner.href}
        </a>

        <p className="mt-5 text-sm leading-7 text-gray-600">
          {partner.description}
        </p>
      </div>
    </article>
  );
}
