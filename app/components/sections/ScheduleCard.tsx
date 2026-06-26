"use client";

import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import { format, parseISO } from "date-fns";

interface ScheduleCardProps {
  date: string | null;
  title: string;
  place: string;
  time2: string | null;
}

const ScheduleCard = ({ schedule }: { schedule: ScheduleCardProps }) => {
  const dateOnly = schedule.date
    ? format(parseISO(schedule.date), "yyyy年M月d日")
    : "日付未定";

  const formattedTime = schedule.date
    ? format(parseISO(schedule.date), "H:mm")
    : null;

  const timeOnly =
    formattedTime === "0:00" || formattedTime === null ? "" : formattedTime;

  const formattedTime2 = schedule.time2
    ? format(parseISO(schedule.time2), "H:mm")
    : null;

  const timeOnly2 =
    formattedTime2 === "0:00" || formattedTime2 === null
      ? null
      : formattedTime2;

  const fade = useFadeInOnView(0.2);

  return (
    <div
      ref={fade.ref}
      className={`rounded-2xl border border-white/10 bg-white/95 p-4 shadow-lg shadow-black/20 transition-all duration-500 sm:p-5 ${
        fade.isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex shrink-0 items-center gap-4 sm:block sm:w-36">
          <div className="font-bold text-orange-600">{dateOnly}</div>

          <div className="mt-1 flex items-center gap-2 text-sm font-bold text-orange-500 sm:flex-col sm:items-start sm:gap-0 sm:space-y-1">
            {timeOnly || timeOnly2 ? (
              <>
                {timeOnly && <span>{timeOnly}時</span>}
                {timeOnly2 && <span>{timeOnly2}時</span>}
              </>
            ) : (
              <span>時間未定</span>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 whitespace-pre-wrap break-words text-base font-bold leading-7 text-gray-900">
            <span className="mr-2 text-orange-600">[熱波師]</span>
            {schedule.title.replaceAll("/", "\n")}
          </div>

          <div className="break-words text-sm font-bold leading-6 text-gray-700 sm:text-base">
            <span className="mr-3 text-orange-600">[場所]</span>
            {schedule.place}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
