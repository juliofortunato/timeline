export function Header({ totalItems, totalLanes }) {
  return (
    <header>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        🗓️ Project Timeline
      </h1>
      <p className="text-gray-600 ">
        Interactive timeline showing {totalItems} project tasks across{" "}
        {totalLanes} parallel tracks
      </p>
    </header>
  );
}
