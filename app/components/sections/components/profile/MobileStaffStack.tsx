"use client";

import { staffList } from "@/app/lib/staffList";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import MobileStackCard from "./MobileStackCard";

const MobileStaffStack = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    // ↑targetはcontainerRefのDOM要素の部分のスクロール量を測るということ
    // ↑offsetがわからない
  })

  return (
    <div className="sm:hidden">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${staffList.length * 80}vh` }}
        // この要素のheightは stickの効果がある範囲となっている
      >
        <div className="sticky top-0 flex h-[100svh] justify-center overflow-hidden px-2 pt-18">
          {/* この要素のtop-0に到達した時点でstickyが動作する。その時の画面の範囲は100svhである */}
          <div className="relative h-[528px] w-full max-w-sm">
            {/* この要素のheightはカードを重ねて置くための土台の高さ */}
            {staffList.map((staff, index) => (
              <MobileStackCard
                key={index}
                staff={staff}
                index={index}
                total={staffList.length}
                scrollYProgress={scrollYProgress}
              />
              // <article
              //   key={index}
              //   className="absolute left-0 top-0 w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
              //   style={{
              //     zIndex: index + 1,

              //     // zIndexは重なり順を示している。大きい数字ほど手前に表示される
              //     transform: `translateY(${index * 16}px)`,
              //   }}
              // >
              //   <div className="relative aspect-[11/12] overflow-hidden bg-stone-900">
              //     <Image
              //       src={staff.src}
              //       fill
              //       alt={`栃木サウナ熱波協会 所属熱波師 ${staff.name} (${staff.role})`}
              //       className="object-cover"
              //       sizes="100vw"
              //     />

              //     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              //     <div className="absolute bottom-5 left-5 right-5 text-left">
              //       <p className="mb-2 inline-block border border-orange-300/40 bg-orange-500/20 px-3 py-1 text-xs font-bold tracking-[0.3em] text-orange-100 backdrop-blur-sm">
              //         熱波師
              //       </p>

              //       <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              //         {staff.name}
              //       </h3>

              //       <p className="mt-1 text-sm font-bold text-orange-200">
              //         {staff.role}
              //       </p>
              //     </div>
              //   </div>

              //   <div className="p-5">
              //     <p className="line-clamp-4 whitespace-pre-line text-left text-sm leading-7 text-gray-600">
              //       {/* line-clamp-4の意味は文章が４行以上になると...として表示される　カードの高さを揃えるために使用している。whitespace-pre-lineは文章の改行を反映させる */}
              //       {staff.description}
              //     </p>
              //   </div>
              // </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStaffStack;
