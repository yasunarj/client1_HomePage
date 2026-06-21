import { shippori } from "@/app/lib/fonts";
import Image from "next/image";

interface SplashScreenProps {
  isFading: boolean;
}

export default function SplashScreen({ isFading }: SplashScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      {/* ゆらめく背景 */}
      <div className="absolute inset-0 animate-flameGradient splash-main-gradient" />

      {/* 熱気のゆらぎレイヤー */}
      <div className="absolute inset-[-20%] animate-heatWave splash-heat-wave-bg blur-2xl" />

      {/* 炎の流れレイヤー */}
      <div className="absolute inset-[-15%] animate-flameFlow splash-flame-flow-bg blur-xl" />

      {/* 暗めのオーバーレイ */}
      <div className="absolute inset-0 bg-black/10" />

      {/* 光のにじみ */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-300/30 blur-3xl animate-pulseGlow" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl animate-pulseGlowSlow" />

      {/* ロゴ */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-logoReveal">
        <Image
          src={"/images/炎のロゴのグラデーションデザイン.png"}
          alt="栃木サウナ熱波協会のロゴ"
          width={1200}
          height={1200}
          className="w-[75vw] max-w-[900px] object-contain opacity-60"
          priority
        />
      </div>

      {/* テキスト */}
      <div
        className={`${shippori.className} relative z-10 px-4 text-center text-white`}
      >
        <h1 className="opacity-0 animate-titleReveal text-5xl font-bold tracking-[0.12em] drop-shadow-2xl md:text-7xl">
          極上の熱波体験
        </h1>

        <p className="mt-6 opacity-0 animate-subtitleReveal text-lg leading-relaxed tracking-wide text-orange-50 drop-shadow-xl md:text-2xl">
          栃木のproフェッショナルな熱波師が
          <br className="hidden md:block" />
          あなたのサウナ体験を演出します
        </p>
      </div>
    </div>
  );
}
