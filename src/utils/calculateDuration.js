import { differenceInDays, parseISO } from "date-fns";

export const calculateDuration = (start, end) => {
  const startDate = parseISO(start);
  const endDate = parseISO(end);
  const days = differenceInDays(endDate, startDate) + 1;

  return days === 1 ? "1 day" : `${days} days`;
};
