"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import { format, parseISO } from "date-fns";

interface ScheduleCardProps {
  date: string;
  title: string;
  place: string;
  time2: string | null;
}

const ScheduleCard = ({ schedule }: { schedule: ScheduleCardProps }) => {
  const dateOnly = schedule.date
    ? format(parseISO(schedule.date), "yyyy年M月d日")
    : "日付なし";
  const formattedTime = schedule.date
    ? format(parseISO(schedule.date), "H:mm")
    : "時間なし";
  const timeOnly = formattedTime === "0:00" ? "未定" : `${formattedTime}時`;

  const formattedTime2 = schedule.time2
    ? format(parseISO(schedule.time2), "H:mm")
    : null;
  const timeOnly2 =
    formattedTime2 === "0:00" || formattedTime2 === null
      ? null
      : `${formattedTime2}時`;
  console.log(timeOnly2);

  const fade = useFadeInOnView();
  return (
    <div
      ref={fade.ref}
      className={`flex flex-col gap-2 sm:gap-0 sm:flex-row space-x-6  p-4 border-b border-gray-200 transition-opacity duration-500 ${
        fade.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex">
        <div className="w-32 text-orange-500 font-bold">{dateOnly}</div>
        <div className={timeOnly2 ? `flex flex-row sm:flex-col` : ""}>
          <div className="w-20 text-orange-500 font-bold">{timeOnly}</div>
          <div className={timeOnly2 ? "w-20 text-orange-500 font-bold" : ""}>{timeOnly2}</div>
        </div>
      </div>

      <div className="flex-1">
        <div className="font-bold">{schedule.title}</div>
        <div>{schedule.place}</div>
      </div>
    </div>
  );
};

export default ScheduleCard;
