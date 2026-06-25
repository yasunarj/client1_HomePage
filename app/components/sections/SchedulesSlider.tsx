"use client";

import { useState, useMemo } from "react";
import ScheduleCard from "./ScheduleCard";
import type { ScheduleItem } from "./ScheduleSection";

type ScheduleSliderProps = {
  scheduleList: ScheduleItem[];
}

const ITEMS_PER_PAGE = 4;

const ScheduleSlider = ({ scheduleList }: ScheduleSliderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <>
    </>
  );
};

export default ScheduleSlider;