import React from "react";
import ReactDOM from "react-dom/client";
import { Timeline } from "./components/Timeline.jsx";
import timelineItems from "./timelineItems.js";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Timeline items={timelineItems} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
