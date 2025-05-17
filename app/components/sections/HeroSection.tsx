import { shippori } from '@/app/lib/fonts';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center">
      <Image
        src="/images/gallery1.jpg"
        alt="サウナの熱波"
        fill
        className="object-cover object-[65%_20%] sm:object-center"
        loading="eager"
        priority
        quality={80}
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className={`${shippori.className} relative z-10 text-center text-white px-4`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp ">
          熱波の芸術
        </h1>
        <p className="text-xl md:text-2xl animate-fadeInUp delay-300">
          心と体を癒す、究極のサウナ体験
        </p>
      </div>
    </section>
  );
} 