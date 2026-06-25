import Image from "next/image";

type GalleryMarqueeProps = {
  images: string[];
  direction: "left" | "right";
};

const GalleryMarquee = ({ images, direction }: GalleryMarqueeProps) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent" />

      <div
        className={`flex w-max gap-5 ${direction === "left" ? "animate-galleryMarqueeLeft" : "animate-galleryMarqueeRight"}`}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-52 w-72 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl shadow-black/40 sm:h-60 sm:w-80 lg:h-72 lg:w-96"
          >
            <Image
              src={src}
              fill
              // fillは親要素いっぱいに画像を広げる
              className="object-cover"
              alt="栃木のサウナで熱波師がタオルを降る様子"
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              // sizesは画面幅がどれくらいになるのかをブラウザ・Next.jsに教える指定　画面幅が640px以下なら288px,1024px以下なら320px,それ以上であれば384pxと指定している
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryMarquee;
