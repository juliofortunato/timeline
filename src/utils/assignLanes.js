import { isAfter, parseISO } from "date-fns";

export const assignLanes = (items) => {
  const sortedItems = items.sort(
    (a, b) => parseISO(a.start).getTime() - parseISO(b.start).getTime()
  );
  const lanes = [];

  const assignItemToLane = (item) => {
    for (const lane of lanes) {
      const lastItemEnd = parseISO(lane[lane.length - 1].end);
      const currentItemStart = parseISO(item.start);

      if (isAfter(currentItemStart, lastItemEnd)) {
        lane.push(item);
        return;
      }
    }
    lanes.push([item]);
  };

  for (const item of sortedItems) {
    assignItemToLane(item);
  }

  return lanes;
};
