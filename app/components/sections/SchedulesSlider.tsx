"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import ScheduleCard from "./ScheduleCard";
import type { ScheduleItem } from "./ScheduleSection";

type ScheduleSliderProps = {
  scheduleList: ScheduleItem[];
};

const ITEMS_PER_PAGE = 4;

const ScheduleSlider = ({ scheduleList }: ScheduleSliderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const pages = useMemo(() => {
    const result: ScheduleItem[][] = [];

    for (let i = 0; i < scheduleList.length; i += ITEMS_PER_PAGE) {
      result.push(scheduleList.slice(i, i + ITEMS_PER_PAGE));
    }

    return result;
  }, [scheduleList]);

  const totalPages = pages.length;
  const currentSchedules = pages[currentPage] ?? [];

  useEffect(() => {
    if (!scrollAreaRef.current) return;

    scrollAreaRef.current.scrollTop = 0;
  }, [currentPage]);

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  if (scheduleList.length === 0) {
    return (
      <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/15 bg-black/35 p-6 text-center text-white shadow-2xl shadow-black/40 backdrop-blur-sm">
        現在、公開中のスケジュールはありません。
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-4xl border border-white/15 bg-black/35 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
      {/* スマホ用：ページ切り替え */}
      <div className="md:hidden">
        <div ref={scrollAreaRef} className="h-[420px] overflow-y-auto pr-1">
          <div className="space-y-4">
            {currentSchedules.map((schedule, index) => (
              <ScheduleCard
                key={`${schedule.title}-${schedule.date}-${index}`}
                schedule={schedule}
              />
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4 px-8">
            <button
              type="button"
              onClick={goToPrevPage}
              className="border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              戻
            </button>

            <div className="flex items-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentPage(index)}
                  aria-label={`${index + 1}ページ目へ移動`}
                  className={`h-3 w-3 rounded-full transition ${currentPage === index ? "bg-orange-400 scale-125" : "bg-white/35"}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNextPage}
              className="border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              次
            </button>
          </div>
        )}
        <p className="text-center text-xs text-orange-50/70">
          {currentPage + 1} / {totalPages} ページ
        </p>
      </div>

      {/* PC用：従来通りスクロールあり */}
      <div className="hidden h-[640px] overflow-y-auto pr-2 md:block">
        <div className="space-y-4">
          {scheduleList.map((schedule, index) => (
            <ScheduleCard
              key={`{${schedule.title}-${schedule.date}-${index}`}
              schedule={schedule}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleSlider;
