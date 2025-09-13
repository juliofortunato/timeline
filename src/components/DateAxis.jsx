export const DateAxis = ({ dateMarkers }) => {
  return (
    <div className="relative h-12 mb-6 border-b border-gray-200">
      {dateMarkers.map((marker, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center transform -translate-x-1/2"
          style={{ left: `${marker.position}%` }}
        >
          <div className="w-px h-3 bg-gray-400 mb-2"></div>
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            {marker.label}
          </span>
        </div>
      ))}
    </div>
  );
};
