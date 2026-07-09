"use client";

import { staffList } from "@/app/lib/staffList";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import MobileStackCard from "./MobileStackCard";

// スクロール演出全体の親コンポーネント
const MobileStaffStack = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // useScrollは指定した要素のスクロール進行度を取得する ⇨ 今回で言うとMobileStaffStack全体((staffList.length * 80)vh)のスクロール進行度
  // scrollYProgressはframer-motionのMotionValueという値、進行度を0から１まで変化させる
  // ↑targetはcontainerRefのDOM要素の部分のスクロール量を測るということ
  // offsetはいつ scrollYProgress を 0 にするか、いつ scrollYProgress を 1にするか

  return (
    <div className="sm:hidden">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${staffList.length * 80}vh` }}
        // vh の単位は%と考えて良い
        // この要素のheightは stickの効果がある範囲となっている
      >
        <div className="sticky top-0 flex h-[100svh]  justify-center overflow-hidden pt-[clamp(56px,9svh,78px)]">

          {/* この要素のtop-0に到達した時点でstickyが動作する。その時の画面の範囲は100svhである */}
          <div className="relative z-10 h-[min(540px,74svh)] w-full max-w-sm">
            {/* この要素のheightはカードを重ねて置くための土台の高さ */}
            {staffList.map((staff, index) => (
              <MobileStackCard
                key={index}
                staff={staff}
                index={index}
                total={staffList.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStaffStack;
