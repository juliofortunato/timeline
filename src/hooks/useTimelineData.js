import {
  addDays,
  addMonths,
  differenceInDays,
  format,
  max,
  min,
  parseISO,
  startOfMonth,
} from "date-fns";
import { useMemo } from "react";
import { assignLanes } from "../utils/assignLanes";

export const useTimelineData = (items = []) => {
  return useMemo(() => {
    const lanes = assignLanes(items);

    const allDates = items.flatMap((item) => [
      parseISO(item.start),
      parseISO(item.end),
    ]);
    const minDate = min(allDates);
    const maxDate = max(allDates);

    const paddedMinDate = addDays(minDate, -7);
    const paddedMaxDate = addDays(maxDate, 7);

    const markers = [];
    let current = startOfMonth(paddedMinDate);

    const allMarkers = [];
    while (current <= paddedMaxDate) {
      allMarkers.push({
        date: current,
        label: format(current, "MMM yyyy"),
      });
      current = addMonths(current, 1);
    }

    allMarkers.forEach((marker, index) => {
      const position =
        allMarkers.length === 1 ? 50 : (index / (allMarkers.length - 1)) * 100;

      markers.push({
        ...marker,
        position,
      });
    });

    const totalDays = differenceInDays(paddedMaxDate, paddedMinDate);

    const dateRange = { min: paddedMinDate, max: paddedMaxDate, totalDays };

    const getItemPosition = (item) => {
      const itemStart = parseISO(item.start);
      const itemEnd = parseISO(item.end);

      const startDays = differenceInDays(itemStart, dateRange.min);
      const duration = differenceInDays(itemEnd, itemStart) + 1;

      const left = (startDays / dateRange.totalDays) * 100;
      const width = Math.max((duration / dateRange.totalDays) * 100, 0.5);

      return { left: `${left}%`, width: `${width}%` };
    };

    return {
      lanes,
      dateRange,
      dateMarkers: markers,
      getItemPosition,
    };
  }, [items]);
};
