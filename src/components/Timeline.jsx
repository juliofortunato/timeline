import { useState } from "react";
import { useTimelineData } from "../hooks/useTimelineData";
import { DateAxis } from "./DateAxis";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineItem } from "./TimelineItem";
import { TimelineLegend } from "./TimelineLegend";

const LANE_COLORS = [
  "bg-blue-500",
  "bg-teal-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-rose-500",
  "bg-indigo-500",
  "bg-emerald-500",
  "bg-amber-500",
];

export const Timeline = ({ items, onUpdateItemName }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { dateMarkers, lanes, getItemPosition } = useTimelineData(items);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white">
      <TimelineHeader totalItems={items.length} totalLanes={lanes.length} />

      <div className="relative">
        <DateAxis dateMarkers={dateMarkers} />

        <div className="space-y-4">
          {lanes.map((lane, laneIndex) => (
            <div
              key={laneIndex}
              className="relative h-16 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-50"></div>

              {lane.map((item) => {
                const position = getItemPosition(item);
                const isHovered = hoveredItem === item.id;
                const colorClass = LANE_COLORS[laneIndex % LANE_COLORS.length];

                return (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    position={position}
                    colorClass={colorClass}
                    isHovered={isHovered}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    laneIndex={laneIndex}
                    onUpdateName={onUpdateItemName}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <TimelineLegend lanes={lanes} laneColors={LANE_COLORS} />
      </div>
    </div>
  );
};
