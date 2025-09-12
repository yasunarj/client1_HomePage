"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

const ScheduleTitle = () => {
  const title = useFadeInOnView();
  return (
    <h2
      ref={title.ref}
      className={`text-3xl sm:text-4xl font-bold text-center mb-16
      }`}
    >
      <span
        className={`transition-color duration-[2s] ${
          title.isVisible ? "text-white" : "text-orange-600"
        }`}
      >
        イベントスケジュール
      </span>
    </h2>
  );
};

export default ScheduleTitle;
