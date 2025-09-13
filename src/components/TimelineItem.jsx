import { CalendarIcon, ClockIcon } from "lucide-react";
import { calculateDuration } from "../utils/calculateDuration";
import { formatDateRange } from "../utils/formatDateRange";

export const TimelineItem = ({
  item,
  position,
  colorClass,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  laneIndex,
}) => {
  return (
    <>
      <div
        className={`absolute top-2 bottom-2 ${colorClass} rounded-md shadow-sm cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 group`}
        style={position}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="h-full px-3 py-2 flex items-center justify-between text-white relative overflow-hidden">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate group-hover:text-white">
              {item.name}
            </h3>
            <p className="text-xs opacity-90 truncate">
              {formatDateRange(item.start, item.end)}
            </p>
          </div>
        </div>
      </div>

      {isHovered && (
        <div
          className="fixed bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-gray-900 min-w-72 pointer-events-none"
          style={{
            left: `${parseFloat(position.left)}%`,
            top: `${100 + laneIndex * 80}px`,
          }}
        >
          <h3 className="font-semibold text-lg mg-2 text-gray-900">
            {item.name}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarIcon className="w-4 h-4" />
              <span>{formatDateRange(item.start, item.end)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ClockIcon className="w-4 h-4" />
              <span>{calculateDuration(item.start, item.end)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
