"use client";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

const ScheduleTitle = () => {
  const title = useFadeInOnView();
  return (
    <h2
      ref={title.ref}
      className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
        title.isVisible ? "revealed" : ""
      }`}
    >
      <span>イベントスケジュール</span>
    </h2>
  );
};

export default ScheduleTitle;
