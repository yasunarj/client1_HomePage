"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

interface ScheduleCardProps {
  date: string;
  title: string;
  place: string;
}

const ScheduleCard = ({ schedule }: { schedule: ScheduleCardProps }) => {
  const fade = useFadeInOnView();
  return (
    <div
      ref={fade.ref}
      className={`flex space-x-6 items-center p-4 border-b border-gray-200 transition-opacity duration-500 ${
        fade.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-36 text-orange-500 font-bold">{schedule.date}</div>

      <div className="flex-1">
        <div className="font-bold">{schedule.title}</div>
        <div>{schedule.place}</div>
      </div>
    </div>
  );
};

export default ScheduleCard;
