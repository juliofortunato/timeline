import { format, parseISO } from "date-fns";

export const formatDateRange = (start, end) => {
  const startDate = parseISO(start);
  const endDate = parseISO(end);

  if (start === end) {
    return format(startDate, "MMM d, yyyy");
  }

  return `${format(startDate, "MMM d")} - ${format(endDate, "MMM d, yyyy")}`;
};
