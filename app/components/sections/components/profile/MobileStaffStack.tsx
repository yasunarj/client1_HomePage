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
        <div className="sticky top-0 flex h-[100svh] justify-center overflow-hidden px-2 pt-[clamp(56px,8svh,72px)]">
          {/* この要素のtop-0に到達した時点でstickyが動作する。その時の画面の範囲は100svhである */}
          <div className="relative h-[min(540px,74svh)] w-full max-w-sm">
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
