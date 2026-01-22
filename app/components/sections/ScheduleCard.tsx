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
    formattedTime === "0:00" || formattedTime === null
      ? ""
      : `${formattedTime}時`;

  const formattedTime2 = schedule.time2
    ? format(parseISO(schedule.time2), "H:mm")
    : null;
  const timeOnly2 =
    formattedTime2 === "0:00" || formattedTime2 === null
      ? null
      : `${formattedTime2}時`;

  const fade = useFadeInOnView();
  return (
    <div
      ref={fade.ref}
      className={`flex flex-col gap-2 sm:gap-0 sm:flex-row space-x-6  p-4 border-b border-gray-200 transition-opacity duration-500 ${
        fade.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full sm:w-auto flex items-center gap-4">
        <div className="w-32 text-orange-500 font-bold">{dateOnly}</div>
        <div className={timeOnly2 ? `flex flex-row sm:flex-col` : ""}>
          <div className="w-[68px] text-orange-500 font-bold">{timeOnly}</div>
          {!formattedTime && !formattedTime2 ? (
            <div className="w-[68px] text-orange-500 font-bold">時間未定</div>
          ) : (
            <div
              className={timeOnly2 ? "w-[68px] text-orange-500 font-bold" : ""}
            >
              {timeOnly2}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1">
        <div className="font-bold whitespace-pre-wrap break-words">{schedule.title.replaceAll("/", "\n")}</div>
        <div>{schedule.place}</div>
      </div>
    </div>
  );
};

export default ScheduleCard;
