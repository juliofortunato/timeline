export const TimelineLegend = ({ lanes, laneColors }) => {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-300">
      <h3 className="font-semibold text-gray-900 mb-3">Timeline Legend</h3>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {lanes.map((lane, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-4 h-4 ${
                laneColors[index % laneColors.length]
              } rounded`}
            ></div>
            <span>
              Lane {index + 1} - {lane.length} tasks
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
