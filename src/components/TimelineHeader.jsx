import { CalendarIcon } from "lucide-react";

export function TimelineHeader({ totalItems, totalLanes }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
        <CalendarIcon className="w-8 h-8 text-blue-600" /> Project Timeline
      </h1>
      <p className="text-gray-600 ">
        Interactive timeline showing {totalItems} project tasks across{" "}
        {totalLanes} parallel tracks
      </p>
    </div>
  );
}
