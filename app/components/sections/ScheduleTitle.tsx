"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

const ScheduleTitle = () => {
  const title = useFadeInOnView();
  return (
    <div ref={title.ref} className="mb-12 text-center sm:mb-14">
      <p
        className={`mb-3 text-sm font-semibold tracking-[0.35em] transition-colors duration-[2s] ${title.isVisible ? "text-orange-300" : "text-orange-700"}`}
      >
        SCHEDULE
      </p>

      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        <span
          className={`transition-colors duration-[2s] ${title.isVisible ? "text-white" : "text-orange-600"}`}
        >
          イベントスケジュール
        </span>
      </h2>

      <div className="mx-auto mt-4 h-1 w-36 rounded-full bg-gradient-to-r from-orange-300 to-red-600 sm:w-44" />

      <p
        className={`mx-auto mt-6 max-w-2xl text-sm leading-7 transition-colors duration-[2s] sm:text-base ${title.isVisible ? "text-orange-50/85" : "text-gray-600"}`}
      >
        最新の熱波イベント情報を随時更新しています。
        <br/>
        ※ 急遽予定が変更となる場合がございます。
      </p>
    </div>
  );
};

export default ScheduleTitle;
