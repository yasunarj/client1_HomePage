"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

const ScheduleTitle = () => {
  const title = useFadeInOnView();
  return (
    <div ref={title.ref} className="text-center mb-16">
      <h2
        className={`text-3xl sm:text-4xl font-bold
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

      <p
        className={`mt-2 text-sm sm:text-base transition-colors duration-[2s] ${title.isVisible ? "text-white/90" : "text-gray-600"}`}
      >
        ※ 急遽予定が変わる場合もございます
      </p>
    </div>
  );
};

export default ScheduleTitle;
