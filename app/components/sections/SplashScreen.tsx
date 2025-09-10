import { shippori } from "@/app/lib/fonts";
import Image from "next/image";

interface SplashScreenProps {
  isFading: boolean;
}

export default function SplashScreen({ isFading }: SplashScreenProps) {
  return (
    <div
      className={`splash-root fixed inset-0 flex items-center justify-center
    bg-splash-initial overflow-hidden transition-opacity duration-1000
    ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      <div className="absolute inset-0 opacity-50 flex items-center animate-fadeIn">
        <Image
          src={"/images/炎のロゴのグラデーションデザイン.png"}
          alt="栃木サウナ熱波協会の会社のロゴ"
          width={1200}
          height={1200}
          className="mx-auto object-contain"
          priority
        />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/steam.png')] bg-repeat-x animate-float"></div>
      </div>
      <div
        className={`${shippori.className} relative z-10 text-center text-white px-4`}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          極上の熱波体験
        </h1>
        <p className="text-xl md:text-2xl animate-fadeIn delay-500">
          プロフェッショナルな熱波師があなたのサウナ体験を演出します
        </p>
      </div>
    </div>
  );
}
