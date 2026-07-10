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

  return (
    <div className="sm:hidden">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${staffList.length * 80}vh` }}
      >
        <div className="sticky top-0 flex h-[100svh]  justify-center overflow-hidden pt-[clamp(56px,9svh,78px)]">

          <div className="relative z-10 h-[min(540px,74svh)] w-full max-w-sm">
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
