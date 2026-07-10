import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface StaffCardProps {
  src: string;
  name: string;
  role: string;
  description: string;
  handle?: string;
  xHandle?: string;
}

interface MobileStackCardProps {
  staff: StaffCardProps;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

export default function MobileStackCard({
  staff,
  index,
  total,
  scrollYProgress,
}: MobileStackCardProps) {
  const finalY = index * 16;

  const start = index === 1 ? 0.06 : index / total;
  const end = (index + 1) / total;

  const y = useTransform(
    scrollYProgress, 
    [start, end], 
    index === 0 ? [0, 0] : [620, finalY], 
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    index === 0 ? [1, 1] : [0, 1],
  );

  return (
    <motion.article
      className="absolute left-0 top-0 h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
      style={{
        zIndex: index + 1,
        y,
        opacity,
      }}
    >
      <div className="relative h-[72%] shrink-0 overflow-hidden bg-stone-900">
        <Image
          src={staff.src}
          fill 
          alt={`栃木サウナ熱波協会 所属熱波師 ${staff.name} (${staff.role})`}
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 text-left">
          <p className="mb-2 inline-block border border-orange-300/40 bg-orange-500/20 px-3 py-1 text-xs font-bold tracking-[0.3em] text-orange-100 backdrop-blur-sm">
            熱波師
          </p>

          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {staff.name}
          </h3>

          <p className="mt-1 text-sm font-bold text-orange-200">{staff.role}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-4 whitespace-pre-line text-left text-sm leading-7 text-gray-600">
          {staff.description}
        </p>
      </div>
    </motion.article>
  );
}
